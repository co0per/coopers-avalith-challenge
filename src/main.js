import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import VuePaginate from 'vue-paginate'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VuePaginate);

new Vue({
    el: '#app',
    render: h => h(App)
})