<template>
    <div style="border: 2px green dashed; padding: 20px">
        <p>
            <img src="../assets/logo.png" height="50">
        </p>
        <div class="card">
            <div class="header"><h2 class="title">Basket</h2></div>
            <div class="content">
                <ul class="list-group">
                    <li class="list-group-item" v-bind:key="p.id" v-for="p in products">{{p.from}} - {{p.to}}</li>
                </ul>
            </div>
        </div>
    
    </div>
</template>

<script>
    export default {
      name: 'flight-basket',
      props: {
          products: {
              type: Array,
              default: () => []
          },
      }, 
    }
</script>

<style>
    @import url('~bootstrap/dist/css/bootstrap.css');
</style>