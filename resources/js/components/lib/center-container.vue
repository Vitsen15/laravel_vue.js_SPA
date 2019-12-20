<template>
    <div :class="isAuthenticated ? 'col-10' : 'col-12'">
        <slot/>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'center-container',
        computed: {
            ...mapGetters(['isAuthenticated', 'authStatus']),
        }
    }
</script>
