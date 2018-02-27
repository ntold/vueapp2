// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import Test from './components/Test'
import Plantes from './components/Plantes'


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path:'/', component: Users},
        {path: '/test', component: Test},
        {path: '/plantes', component: Plantes}
    ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
     el:"#app",
     router,
     template:"<app />",
     components: {
         App
    }
})
