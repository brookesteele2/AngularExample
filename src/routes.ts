import { Routes } from "@angular/router";
import { EventsListComponent } from "./app/events/events-list.component";
import { CreateEventComponent } from "./app/events/shared/create-event.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { Error404Component } from "./app/errors/404.component";
import { EventRouteActivator } from "./app/events/event-details/event-route-activator.service";


export const appRoutes:Routes = [
    { path: 'events', component: EventsListComponent},
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactiveCreateEvent']},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},

]