<template>
    <div>
        <loading v-if="loading"/>
        <div v-if="isAuthenticated">
            <p>Authenticated!</p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Login from './auth/LoginComponent'

    export default {
        components: {
            Login
        },
        name: 'home',
        computed: {
            ...mapGetters(['isAuthenticated', 'authStatus']),
            loading: function () {
                return this.authStatus === 'loading' && !this.isAuthenticated
            }
        }
    }
</script>
