<template>
  <div>
    <hr>
    <p>Countr is {{ counter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter',
                'counter',
                'clicks'
            ])
        }
    }
</script>

