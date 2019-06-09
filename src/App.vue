<template>
  <div id="app">
    <h1>
      SMTC
    </h1>
    <NavBar :contents="nav"/>
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
          text: "SMTC"
        },
        {
          text: "대회 소개"
        },
        {
          text: "투표 참여"
        }
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
  color: white;
  padding: 5px;
  background-image: url("./assets/bg_waltz.png");
  background-size: 100%;
  display: flex;
  flex-direction: column;
}
</style>
