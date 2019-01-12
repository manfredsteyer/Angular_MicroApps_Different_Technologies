import { element } from 'protractor';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private stateService: StateService) {
  }

  config = {
    "client-a": {
      loaded: false,
      path: 'client-a/main.bundle.js',
      element: 'client-a' //<client-a></client-a>
    },
    "client-b": {
      loaded: false,
      path: 'client-b/main.bundle.js',
      element: 'client-b'
    },
    "client-c": {
      loaded: false,
      path: 'client-c/main.bundle.js',
      element: 'flight-booking'
    },
    "client-d": {
      loaded: false,
      path: 'client-d/main.bundle.js',
      element: ''
    },
    "client-e": {
      loaded: false,
      path: 'client-e/main.js',
      element: 'booking-list'
    }    

  };

  ngOnInit() {
    this.load('client-a');
    this.load('client-b');
    this.load('client-c');
    this.load('client-d');
    this.load('client-e');
  }

  load(name: string): void {

    const configItem = this.config[name];
    if (configItem.loaded) return;

    const content = document.getElementById('content');

    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);
    
    if (configItem.element) {
      const element: HTMLElement = document.createElement(configItem.element);
      content.appendChild(element);

      element.addEventListener('message', msg => this.handleMessage(msg));
      element.setAttribute('state', 'init');

      script.onerror = () => console.error(`error loading ${configItem.path}`);

      this.stateService.registerClient(element);
    }
  }

  handleMessage(msg): void {
    console.debug('shell received message: ', msg.detail);
  }

}




