<template>
    <div>
        <button class="btn btn-primary" @click="increment(3)">AnotherIncrement</button>
        <button class="btn btn-primary" @click="decrement(3)">AnotherDecrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>