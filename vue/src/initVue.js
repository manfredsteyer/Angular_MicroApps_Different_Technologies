import Vue from 'vue'
import Booking from './components/Booking.vue'
import messageBus from './MessageBus';
import VueRouter from 'vue-router'
import initRouter from './initRouter.js';
//import store from './SimpleStore.js';

Vue.use(VueRouter);

const router = initRouter();

const vue = new Vue({
  router,
  render: f => f(Booking)
});

messageBus.register((msg) => {
  // eslint-disable-next-line
  console.debug('message:main', msg);
})

vue.$mount('#app');