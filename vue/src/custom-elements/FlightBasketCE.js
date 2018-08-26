import Vue from 'vue'
import Basket from '../components/Basket.vue'

export default class FlightBasket extends HTMLElement {

    get flights() {
        return this._flights;
    }

    set flights(value) {
        this._flights = value;
        this.vue.$data.products = this.flights;
    }

    static get observedAttributes() {
        return ['flights'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.flights = JSON.parse(newValue);
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

        const comp = this.shadowRoot.getElementById('component');
        
        this.vue = new Vue({
            data: {
                products: []
            },
            render(r) {
                return r(Basket, { props: { products: this.products } });
            }
        })

        this.vue.$mount(comp);

    }
}
