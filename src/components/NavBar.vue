<template>
  <ul>
    <li v-for="(content, index) in contents" @click="movePage(index)">
      {{ content.text }}
      <hr v-if="nowPage == index" />
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'NavBar',
    data () {
      return {
        nowPage: 0
      }
    },
    methods: {
      movePage: function (page) {
        this.nowPage = page;
      }
    },
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
    margin: 0;
    float: right;
  }
  li {
    display: inline-block;
    margin: 0.8em 1em;
    float: left;

    height: 1em;
  }
  hr {
    height: 0.15em;
    width: 100%;
    margin: 0;
    background: darkviolet;
    border: none;
    top: 0.2em;
    position: relative;
  }
  li:enabled {
    color: red;
  }
</style>