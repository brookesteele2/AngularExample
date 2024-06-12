import { Component } from '@angular/core'
@Component ({
    selector: 'events-list',
    template: `<div>
    <h1> Upcoming Angular Events </h1>
    <event-thumbnail [event]="event1"></event-thumbnail>
    <hr>
    `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '6/11/2024',
        time: '10:00am',
        price: 599.99,
        imageUrl:'/assests/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }   
    }

}