import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';


import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { CommonModule } from '@angular/common';
import { SessionListModule } from './session-list/session-list.module';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    HeaderComponent,
    CustomDatePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule, 
    SessionListModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
