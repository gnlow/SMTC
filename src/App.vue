<template>
  <div id="app">
    <nav>
      <div id="title">
        SMTC
      </div>
      <NavBar :contents="nav"/>
    </nav>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'

  export default {
    name: 'app',
    components: {
      NavBar
    },
    data(){
      return {
        nav: [
        {
          text: "개요"
        },
        {
          text: "참가"
        },
        {
          text: "작품"
        },
        {
          text: "영상 및 웹툰"
        },
        ]
      };
    }
  }
</script>

<style lang="scss">
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    flex-direction: column;

    background-image: url("./assets/bg_waltz.png");
    background-size: 100%;

    height: 100%;


  }
  #title {
    display: inline-block;
    margin: 0.8em 0.8em;
    float: left;
  }
  nav {
    font-size: 1.5em;
    padding: 0 1em;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
  }
  nav NavBar {
    float: right;
  }
</style>
