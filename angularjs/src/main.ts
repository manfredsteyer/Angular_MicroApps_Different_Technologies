import { ServiceBus } from './service-bus';
import * as angular from 'angular';
import appModule from './app';

class BookingList extends HTMLElement {

    private _appState;
    
    private serviceBus = new ServiceBus();

    get appState() {
        return this._appState;
    }

    set appState(value) {
        this._appState = value;
        this.serviceBus.send({ type: 'appState', data: value });
    }

    static get observedAttributes() {
        return ['app-state'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.appState = JSON.parse(newValue);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.initServices();
        this.render();
    }

    initServices() {
        this.serviceBus.registerFor('message', msg => {
            this.dispatchEvent(new CustomEvent('message', { detail: msg }));
        });
        angular.module(appModule).constant('serviceBus', this.serviceBus);
    }

    render() {

        const cssBase = require('!to-string-loader!css-loader!../assets/css/bootstrap.min.css');
        const cssTheme = require('!to-string-loader!css-loader!../assets/css/paper-dashboard.css')

        this.shadowRoot.innerHTML = `
            <style>${cssBase}</style>
            <style>${cssTheme}</style>
            
            <div id="component">
                <bookings></bookings>
            </div>
        `;

        const comp = this.shadowRoot.getElementById('component');
        angular.bootstrap(comp, [appModule]);
    }
}

customElements.define('booking-list', BookingList);
