import Vue from 'vue'
import FlightBookingCE from './custom-elements/FlightBookingCE.js'
import FlightBasketCE from './custom-elements/FlightBasketCE.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

customElements.define('flight-booking', FlightBookingCE);
customElements.define('flight-basket', FlightBasketCE);



