import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="client-a">
      <p>
        <img src="/assets/img/angular2-logo.png" height="50">
      </p>    
      <div class="card">
        <div class="content">
          <a routerLink="page1">Flight Search</a> | <a routerLink="page2">Advanced</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    #client-a { border: navy dashed 5px; padding: 10px }
  `],
})
export class CoreComponent {
}
