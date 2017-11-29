<template>
    <p>Counter is doubled: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.counter * 2;
            }
        }
        // props: ['counter']
    }
</script>