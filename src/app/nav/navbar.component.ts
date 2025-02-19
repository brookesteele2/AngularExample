import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector:'nav-bar',
    template: `
    <div class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" >ngEvents</a>
      </div>
  
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <a >All Events</a>
          </li>
          <li><a href="">Create Event</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
              Events
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li >
                <a href="">Angular Connect</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="navbar-header navbar-right">
          <ul class="nav navbar-nav">
            <li>
              <a>Welcome John</a>
            </li>
          </ul>
        </div>
        <form id="searchForm"  class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search Sessions">
          </div>
         <button class="btn btn-default">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
  `,
    styles: [`
        .nav .navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        `]
})

export class NavBarComponent {
  constructor(private router: Router) {
    
  }

}