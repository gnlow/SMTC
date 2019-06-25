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
  }
  hr {
    height: .25rem;
    width: 100%;
    margin: 0;
    background: tomato;
    border: none;
    top: 0.5rem;
    position: relative;
  }
  li:enabled {
    color: red;
  }
</style>