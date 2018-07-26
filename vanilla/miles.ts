class MilesCard extends HTMLElement {

    get miles() {
        return parseInt(this.getAttribute('miles'));
    }

    set miles(value) {
        this.setAttribute('miles', '' + value);
    }

    static get observedAttributes() {
        return ['miles'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.render();
    }
    
    render() {
      this.shadowRoot.innerHTML = `
        <div style="border: darkkhaki 2px dashed; padding: 20px">
            <p>
                <img src="assets/js.png" height="50">
            </p>
            <b>Miles: ${this.miles}</b>
        </div>
      `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
  
  }
  
  customElements.define('miles-card', MilesCard);