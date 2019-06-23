<template>
  <ul>
    <li v-for="content in contents">
        {{ content.text }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      contents: Array
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  ul {
    list-style-type: none;
    padding: 0;
    float: right;
  }
  li {
    display: inline-block;
    margin: 0 30px;
    float: left;
  }
</style>