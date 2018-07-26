<template>
 <div>
    <router-view></router-view>
  </div>
</template>

<script>

import messageBus from '../MessageBus.js';

export default {
  name: "flight-booking",
  props: {
    appState: Object
  },
  watch: {
    appState: function(val) {
      this.$root.$data.store.appState = val;      
    }
  },
  created() {
    messageBus.register((msg) => {
        this.$emit('message', msg);
    });
  },
  methods: {
      debug() {
          // eslint-disable-next-line
          console.debug('Hallo Welt!');
      }
  }
};
</script>

<style>
</style>
