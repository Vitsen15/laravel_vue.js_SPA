// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './bootstrap'
import Vue from 'vue'
import App from './App'
import router from './routes'
import store from './store/storage'
import Loading from './components/lib/loading'
import CenterContainer from './components/lib/center-container'

Vue.config.productionTip = false;

Vue.component('loading', Loading);
Vue.component('center-container', CenterContainer);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
