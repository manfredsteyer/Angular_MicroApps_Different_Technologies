import Vue from 'vue'
import Booking from '../components/Booking.vue'
import initRouter from '../initRouter.js';
import store from '../SimpleStore.js';

export default class FlightBooking extends HTMLElement {

    get appState() {
        return this._appState;
    }

    set appState(value) {
        this._appState = value;
        this.vue.$data.appState = value;
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
        this.render();
    }

    render() {

        const cssBase = require('!to-string-loader!css-loader!../assets/css/bootstrap.min.css');
        const cssTheme = require('!to-string-loader!css-loader!../assets/css/paper-dashboard.css')

        this.shadowRoot.innerHTML = `
            <style>${cssBase}</style>
            <style>${cssTheme}</style>
            
            <div id="component"></div>
        `;

        const router = initRouter();

        const handleMessageEvent = (msg) => {
            this.dispatchEvent(new CustomEvent('message', { detail: msg }));
        }

        this.vue = new Vue({
            router, 
            data: { 
                store,
                appState: this.appState
            },
            render(r) {
                return r(Booking, {
                    props: {
                        appState: this.appState
                    },
                    on: {
                        message: handleMessageEvent
                    }
                });
            } 
        });

        const comp = this.shadowRoot.getElementById('component');
        this.vue.$mount(comp);
    }

}
