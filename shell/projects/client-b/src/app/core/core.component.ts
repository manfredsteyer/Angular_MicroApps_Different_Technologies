import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="client-b">
      <p>
        <img src="/assets/img/angular2-logo.png" height="50">
      </p>
      <div class="card">
        <div class="content">
          <a routerLink="page1">Passenger Search</a> | <a routerLink="page2">Details</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    #client-b { border: darkred dashed 5px; padding: 10px }
  `],
})
export class CoreComponent {
}
