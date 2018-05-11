require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// Vue.component('example-component', require('./components/ExampleComponent.vue'));


let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/MyFooter.vue');
let MyHome = require('./components/Home.vue');
let MyAbout = require('./components/About.vue');



const routes = [
  {path : '/home' ,component: MyHome },
  {path : '/about' ,component: MyAbout },
];
const router = new VueRouter({
  mode:'history',
  routes
})





const app = new Vue({
    el: '#app',
    router,
    components: {Myheader,Myfooter}


});
