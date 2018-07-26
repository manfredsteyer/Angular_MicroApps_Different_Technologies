import VueRouter from 'vue-router'
import Payment from './components/Payment.vue'
import Ok from './components/Ok.vue'
import Core from './components/Core.vue';
import Empty from './components/Empty.vue';

let router = null;

export default function() {

    if (router) return router;

    const routes = [
        { path: '/booking', component: Core , children: [
            { path: 'payment', component: Payment },
            { path: 'ok', component: Ok },
        ]},
        { path: '**', component: Empty }
    ];
    
    router = new VueRouter({ routes });
    // router.replace('/booking/payment');
    
    return router;
}