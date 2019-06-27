<template>
  <div id="app">
    <nav>
      <div id="smtc">
        SMTC
      </div>
      <NavBar :contents="nav"/>
    </nav>
    <div id="main">
      <Main 
      title='"너의 코딩을 보여줘"' 
      subtitle="쇼미더코딩 SMTC는 여러분만을 위한 대회입니다."
      content="꾸꾸꾺꾸꾸꾸꾸꾸꾸꾸꾸"/>
    </div>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Main from './components/Main.vue'

  export default {
    name: 'app',
    components: {
      NavBar,
      Main
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
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,900&display=swap');
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;

  background-image: url("./assets/bg_coding.png");
  background-size: 100%;

  height: 100%;
}
#smtc {
  display: inline-block;
  margin: 0.5em 0.8em;
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
#main {
  margin-top: 4em;
  //padding: 1em;
}
</style>
