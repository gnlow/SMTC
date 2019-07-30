<template>
  <div class="thumbrail">
    <Thumb v-for="work in works" :works-id="work" team="2"/>
  </div>
</template>

<script>
  import Thumb from '../components/Thumb.vue'
  export default {
    name: 'ThumbRail',
    components: {
      Thumb
    },
    data () {
      return {
        
      }
    },
    methods: {
      
    },
    props: {
      works: Array
    },
    mounted() {
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .thumbrail {
    height: 12rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
</style>