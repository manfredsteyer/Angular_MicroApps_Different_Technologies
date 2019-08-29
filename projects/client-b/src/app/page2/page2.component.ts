import { Component, OnInit } from '@angular/core';

@Component({
  template: `

  <div class="row">
  <div [ngClass]="{ 'col-lg-9': more, 'col-lg-12': !more } ">
  <div class="card">

  <div class="header">
      <h2 class="title">Details</h2>
  </div>
  <div class="content">
  
    

  <div class="form-group">
    <label>Id:</label>
    <input name="from" value="0001" class="form-control">
  </div>

      <div class="form-group">
         <label>Title:</label>
         <input name="to" value="Mag." class="form-control">
      </div>

      <div class="form-group">
          <label>First Name:</label>
          <input name="from" value="Manu" class="form-control">
      </div>
      <div class="form-group">
          <label>Last Name:</label>
          <input name="to" value="" class="form-control">
      </div>
  
      <div class="form-group">
            <button class="btn btn-default">
                Search
            </button>

            &nbsp;

            <button class="btn btn-default" (click)="toggleMore()">
                More ...
            </button>

            &nbsp;

            <button class="btn btn-default" (click)="toggleYourFlights()">
                Your Flights ...
            </button>
            

          </div>
  
  </div>
    
  </div>
  </div>
  <div class="col-lg-3" *ngIf="more">
    <flight-basket [flights]="[{id:1, from:'Paris', to: 'Vienna'}, {id:2, from:'Vienna', to: 'Paris'}]"></flight-basket>
    <p>&nbsp;</p>
    <miles-card [miles]="35700"></miles-card>
  </div>
    
  <p>&nbsp;</p>

  <div class="col-lg-12" *ngIf="yourFlights">
    <client-a-widget></client-a-widget>
  </div>

  </div>
    `
})
export class Page2Component {

    more: boolean = false;
    yourFlights: boolean = false;

    toggleMore(): void {
        this.more = !this.more;
    }

    toggleYourFlights(): void {
        this.yourFlights = !this.yourFlights;
    }
}
