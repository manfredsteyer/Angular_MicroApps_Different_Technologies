<template>

    <div class="card">
        <div class="header"><h2 class="title">Book Flight</h2></div>
        <div class="content">

            <div class="form-group">
                <label>Flight</label>
                <div>#{{ store.appState.flight.id }}: {{ store.appState.flight.from }} - {{ store.appState.flight.to }}, {{ store.appState.flight.date }}</div>
            </div>

            <div class="form-group">
                <label>Passenger</label>
                <div>#{{ store.appState.passenger.id }}: {{ store.appState.passenger.firstName }} {{ store.appState.passenger.name }} </div>
            </div>

            <div class="form-group">
                <label>Credit Card Owner</label>
                <input class="form-control" v-model="cardOwner">
            </div>

            <div class="form-group">
                <label>Credit Card Number</label>
                <input class="form-control" v-model="cardNumber">
            </div>

            <div class="form-group">
                <button @click="buy()" class="btn btn-primary">Book</button>
            </div>

        </div>

    </div>
</template>

<script>
//import store from "../SimpleStore.js"
import messageBus from "../MessageBus.js"

export default {
  computed: {
      store: function() {
        return this.$root.$data.store;
      }
  },
  data() {
    
    return {
      cardOwner: "",
      cardNumber: ""
    };
  },
  created() {
  },
  methods: {

    buy() {

      const store = this.$root.$data.store;

      const booking = {
        paymet: {
          cardOwner: this.cardOwner,
          cardNumber: this.cardNumber
        },
        flight: store.appState.flight.id,
        passenger: store.appState.passenger.id
      };

      // eslint-disable-next-line
      console.debug("buying", booking);

      messageBus.sendMessage({
        type: 'flight-booked',
        payload: booking
      });

      this.$router.push('ok');

    }
  }
};
</script>

<style>
</style>