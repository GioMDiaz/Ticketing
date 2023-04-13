import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {

  @Output() ticketsPurchased = new EventEmitter<{ title: string; date: string; quantity: number }[]>();
  purchasedTicketsList: { title: string; date: string; quantity: number }[] = [];

  constructor() {}

  ngOnInit(): void {
    const storedData = localStorage.getItem('purchasedTicketsList');
    if (storedData) {
      this.purchasedTicketsList = JSON.parse(storedData);
      this.ticketsPurchased.emit(this.purchasedTicketsList);
    }
  }

  handleTicketsPurchased(event: { title: string; date: string; quantity: number }): void {
    const existingEventIndex = this.purchasedTicketsList.findIndex(
      (item) => item.title === event.title && item.date === event.date
    );

    if (existingEventIndex > -1) {
      this.purchasedTicketsList[existingEventIndex].quantity = event.quantity;

      if (this.purchasedTicketsList[existingEventIndex].quantity === 0) {
        this.purchasedTicketsList.splice(existingEventIndex, 1);
      }
    } else {
      this.purchasedTicketsList.push(event);
    }

    this.ticketsPurchased.emit(this.purchasedTicketsList);
    localStorage.setItem('purchasedTicketsList', JSON.stringify(this.purchasedTicketsList));
  }
}
