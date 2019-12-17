<template>
    <div class="border-right" id="sidebar-wrapper">
        <div class="sidebar-heading"><img
            src="https://www.smallbizgenius.net/wp-content/uploads/2019/11/smallbizgenius_favicon.png" alt="logo"></div>
        <div class="list-group list-group-flush">
            <ul class="navbar-nav">
                <li class="list-group-item list-group-item-action bg-light" v-if="isProfileLoaded">
                    <router-link :to="{name: 'Account'}">{{name}}</router-link>
                </li>
                <li class="list-group-item list-group-item-action bg-light" v-if="isAuthenticated">
                    <router-link :to="{name: 'Home'}">Home</router-link>
                </li>
                <li class="list-group-item list-group-item-action bg-light" v-if="!isAuthenticated && !authLoading">
                    <router-link :to="{name: 'Login'}">Login</router-link>
                </li>
                <li class="list-group-item list-group-item-action bg-light" v-if="isAuthenticated">
                    <router-link :to="{name: 'Logout'}">Logout</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'

    export default {
        name: 'navigation',
        computed: {
            ...mapGetters(['getProfile', 'isAuthenticated', 'isProfileLoaded']),
            ...mapState({
                authLoading: state => state.auth.status === 'loading',
                name: state => `${state.user.profile.name}`,
            })
        }
    }
</script>

<style lang="scss" scoped>
    #sidebar-wrapper {
        min-height: 100vh;
        margin-left: -15rem;
        -webkit-transition: margin .25s ease-out;
        -moz-transition: margin .25s ease-out;
        -o-transition: margin .25s ease-out;
        transition: margin .25s ease-out;
    }

    #sidebar-wrapper .sidebar-heading {
        padding: 0.875rem 1.25rem;
        font-size: 1.2rem;
    }

    #sidebar-wrapper .list-group {
        width: 15rem;
    }

    #page-content-wrapper {
        min-width: 100vw;
    }

    #wrapper.toggled #sidebar-wrapper {
        margin-left: 0;
    }

    @media (min-width: 768px) {
        #sidebar-wrapper {
            margin-left: 0;
        }

        #page-content-wrapper {
            min-width: 0;
            width: 100%;
        }

        #wrapper.toggled #sidebar-wrapper {
            margin-left: -15rem;
        }
    }
</style>
