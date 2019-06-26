<template>
  <div>
    <div id="title">
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    data () {
      return {

      }
    },
    methods: {

    },
    props: {
      title: String,
      subtitle: String,
      content: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #title {
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 900;
    font-size: 3.5em;
    margin: 5rem 0;
  }
</style>