import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from 'src/app/interfaces/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  events: Event[] = [];

  constructor(private eventsService: EventsService, private router: Router) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  onClick(eventId: string) {
    this.router.navigate(['/event-details', eventId]); 
  }

  stripHtmlTags(text: string): string {
    return text.replace(/<[^>]*>/g, '');
  }
}