import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HomeComponent'
import Account from './components/AccountComponent'
import Login from './components/auth/LoginComponent'
import Logout from './components/auth/LogoutComponent';
import store from './store/storage'

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();

        return
    }

    next('/')
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();

        return
    }

    next('/login')
};

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/account',
            name: 'Account',
            component: Account,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/logout',
            name: 'Logout',
            component: Logout,
            beforeEnter: ifAuthenticated,
        }
    ]
})
