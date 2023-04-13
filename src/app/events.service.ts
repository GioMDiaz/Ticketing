import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Event, EventInfo, Session } from 'src/interfaces/event';
import { formatDate } from './utils/utils';

import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events = '/assets/events.json';
  availability$ = new BehaviorSubject<number[]>([]);
  ticketsPurchased$ = new Subject<{ title: string; date: string; quantity: number }>();
  private counters$ = new BehaviorSubject<number[]>([]);
  


  constructor(private http: HttpClient) { }

  public getCounters$() {
    return this.counters$.asObservable();
  }

  public setCounters(counters: number[]) {
    this.counters$.next(counters);
  }

  getEvents() {
    return this.http.get<Event[]>(this.events).pipe(
      map((events) => {
        events = events.map(event => {
          if (event.startDate !== undefined) {
            event.startDate = formatDate(event.startDate);
          }
          if (event.endDate !== undefined) {
            event.endDate = formatDate(event.endDate);
          }
          return event;
        });
        return this.sortEventsByEndDate(events);
      })
    );
  }

  getEventInfoByEventId(id: string): Observable<EventInfo> {
    const eventInfoUrl = `assets/event-info-${id}.json`;
    return this.http.get<EventInfo>(eventInfoUrl);
  }

  sortSessionsByDate(sessions: Session[]): Session[] {
    return sessions.sort((a, b) => {
      const aDate = a.date !== undefined ? new Date(a.date.split('/').reverse().join('-')).getTime() : 0;
      const bDate = b.date !== undefined ? new Date(b.date.split('/').reverse().join('-')).getTime() : 0;
      return aDate - bDate;
    });
  }

  
  
  sortEventsByEndDate(events: Event[]): Event[] {
    return events.sort((a, b) => {
      const aEndDate = a.endDate !== undefined ? new Date(a.endDate.split('/').reverse().join('-')).getTime() : 0;
      const bEndDate = b.endDate !== undefined ? new Date(b.endDate.split('/').reverse().join('-')).getTime() : 0;
      return aEndDate - bEndDate;
    });
  }
}


