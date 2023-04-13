import { EventsListComponent } from './events-list.component';
import { of } from 'rxjs';
import { Event } from 'src/interfaces/event';
import { Router } from '@angular/router';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let eventsService: any;
  let router: any;

  beforeEach(() => {
    eventsService = {
      getEvents: () => of([
        { id: '1', title: 'Event 1', subtitle: 'Subtitle 1', description: 'Description 1', image: 'Image 1' },
        { id: '2', title: 'Event 2', subtitle: 'Subtitle 2', description: 'Description 2', image: 'Image 2' },
        { id: '3', title: 'Event 3', subtitle: 'Subtitle 3', description: 'Description 3', image: 'Image 3' }
      ])
    };
    router = { navigate: jest.fn() };
    component = new EventsListComponent(eventsService, router);
  });

  describe('ngOnInit', () => {
    it('should set the events property with the result of the getEvents method of the eventsService', () => {
      component.ngOnInit();
      expect(component.events).toEqual([
        { id: '1', title: 'Event 1', subtitle: 'Subtitle 1', description: 'Description 1', image: 'Image 1' },
        { id: '2', title: 'Event 2', subtitle: 'Subtitle 2', description: 'Description 2', image: 'Image 2' },
        { id: '3', title: 'Event 3', subtitle: 'Subtitle 3', description: 'Description 3', image: 'Image 3' }
      ]);
    });
  });

  describe('onClick', () => {
    it('should navigate to the event-details route with the given event id', () => {
      component.onClick('1');
      expect(router.navigate).toHaveBeenCalledWith(['/event-details', '1']);
    });
  });

  describe('stripHtmlTags', () => {
    it('should remove HTML tags from the given text', () => {
      expect(component.stripHtmlTags('<p>Hello, world!</p>')).toEqual('Hello, world!');
      expect(component.stripHtmlTags('<h1>Title</h1><p>Content</p>')).toEqual('TitleContent');
    });
  });
});
