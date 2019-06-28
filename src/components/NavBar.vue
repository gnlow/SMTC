<template>
  <ul class="navbar">
    <li v-for="(content, index) in contents" @click="movePage(index)">
      <router-link :to="content.link" active-class="active">
        {{ content.text }}
        <hr/>
      </router-link>
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
  }
  li {
    display: inline-block;
    margin: 0.5em 0.8em;
    float: left;

    height: 1.5em;
  }
  hr {
    display: none;
    height: 0.15em;
    width: 100%;
    margin: 0;
    background: darkviolet;
    border: none;
    top: 0.03em;
    position: relative;
  }
  .active hr {
    display: block;
  }
  li:enabled {
    color: red;
  }
  a{
    &:link {text-decoration: none; color: black;};
    &.anchor {
      display: block;
      position: relative;
      top: -250px;
      visibility: hidden;
    }
  }
</style>