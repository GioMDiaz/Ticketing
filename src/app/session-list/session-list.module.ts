import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SessionListComponent } from './session-list.component';


@NgModule({
  declarations: [
    EventDetailsComponent,
    SessionListComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EventDetailsComponent }
    ])
  ]
})
export class SessionListModule {

}