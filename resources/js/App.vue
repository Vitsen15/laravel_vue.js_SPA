<template>
    <div class="container-fluid" id="app">
        <div class="row">
            <navigation v-if="isAuthenticated"/>
            <center-container>
                <router-view/>
            </center-container>
        </div>
    </div>
</template>

<script>
    import Navigation from './components/NavigationComponent'
    import {USER_REQUEST} from './store/actions/user'
    import {mapGetters} from "vuex";

    export default {
        components: {
            Navigation
        },
        name: 'app',
        computed: {
            ...mapGetters(['isAuthenticated', 'authStatus'])
        },
        created: function () {
            if (this.$store.getters.isAuthenticated) {
                this.$store.dispatch(USER_REQUEST)
            }
        }
    }
</script>

<style scoped>
    body {
        overflow-x: hidden;
    }
</style>
