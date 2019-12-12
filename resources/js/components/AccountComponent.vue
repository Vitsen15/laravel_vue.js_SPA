<template>
    <div>
        <div class="headline">
            <h1>Profile</h1>
        </div>
        <p v-if="profile.name">
            <strong>Name:</strong> {{profile.name}}
            <strong>Email:</strong> {{profile.email}}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .headline {
        margin-top: 1em;
        display: flex;
    }
</style>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'account',
        computed: mapState({profile: state => state.user.profile})
    }
</script>
