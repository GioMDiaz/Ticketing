import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Session, EventInfo } from 'src/interfaces/event';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnInit {
  dataEventInfo: EventInfo | null = null;
  dataSessions: Session[] = [];
  eventId!: string;
  @Output() ticketsPurchased = new EventEmitter<{ title: string; date: string; quantity: number }>();
  counters: number[] = [];
  modalMessage: string = '';
  showModal: boolean = false;

  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeData();
    this.eventService.availability$.subscribe((availability: number[]) => {
      this.dataSessions = this.dataSessions.map((session, i) => {
        return {
          ...session,
          availability: availability[i]
        };
      });
    });
  }

  private initializeData(): void {
    this.route.paramMap.subscribe((params) => {
      const eventId = params.get('id');

      if (eventId) {
        this.eventService
          .getEventInfoByEventId(eventId)
          .subscribe(
            (eventInfo: EventInfo) => {
              this.dataEventInfo = eventInfo;
              this.dataSessions = eventInfo.sessions.map(session => {
                return {
                  ...session,
                  date: formatDate(session.date, 'dd/MM/yy', 'en-US')
                };
              });
              this.dataSessions = this.eventService.sortSessionsByDate(this.dataSessions);
              const initialAvailability = this.dataSessions.map(session => session.availability);
              this.eventService.availability$.next(initialAvailability);
              this.counters = Array(this.dataSessions.length).fill(0);
            },
            (error) => {
              if (error.status === 404) {
                this.showModal = true;
                this.modalMessage = 'No tenemos disponibilidad para este evento';
              }
            }
          );
      }
    });
  }


  incrementCount(index: number): void {

    if (this.dataSessions[index].availability > 0) {
      this.counters[index]++;
      const newAvailability = [...this.eventService.availability$.value];
      newAvailability[index] = this.dataSessions[index].availability - 1;
      this.eventService.availability$.next(newAvailability);

      if (this.dataEventInfo) {
        this.ticketsPurchased.emit({
          title: this.dataEventInfo.event.title,
          date: this.dataSessions[index].date,
          quantity: this.counters[index]
        });
      }
    }
  }

  decrementCount(index: number): void {
    const totalTickets = this.dataEventInfo?.sessions[index].availability;
    const currentAvailability = this.dataSessions[index].availability;
    const maxCapacity = totalTickets ? totalTickets - currentAvailability : 0;
    if (maxCapacity > 0) {
      this.counters[index]--;
      const newAvailability = [...this.eventService.availability$.value];
      newAvailability[index] = this.dataSessions[index].availability + 1;
      this.eventService.availability$.next(newAvailability);

      if (this.dataEventInfo) {
        this.ticketsPurchased.emit({
          title: this.dataEventInfo.event.title,
          date: this.dataSessions[index].date,
          quantity: this.counters[index]
        });
      }
    }
  }

  clickToBack() {
    this.router.navigate(['/events-list']);
  }


}   