import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './components/events-list/events-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/events-list', pathMatch: 'full' },
  { path: 'events-list', component: EventsListComponent },
  { path: 'event-details/:id', loadChildren: () => import('./components/session-list/session-list.module').then(m => m.SessionListModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}