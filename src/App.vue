<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700,900&display=swap');
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;

  background-image: url("./assets/bg_coding.png");
  background-size: 200%;
  background-attachment: fixed;
  background-position: center;
}
#smtc {
  display: inline-block;
  margin: 0.5em 0.8em;
  float: left;
}
img {
  height: 1.5rem;
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
.navbar {
  float: right;
}
#main {
  margin-top: 4em;
}

@media all and (max-width:563px) {
  .navbar, #smtc {
    float: none;
  }
}
@media all and (max-width:455px) {
  .navbar {
    font-size: 0.8em;
  }
}
@media all and (max-width:373px) {
  .navbar {
    display: none;
  }
  .content {
    padding: 1rem !important;
  }
}
</style>
