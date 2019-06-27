<template>
  <div id="app">
    <nav>
      <div id="smtc">
        SMTC
      </div>
      <NavBar :contents="nav"/>
    </nav>
    <div id="main">
      <Main title='"너의 코딩을 보여줘"' subtitle="쇼미더코딩 SMTC는 여러분만을 위한 대회입니다." id="area1">
        <h1>
          꾸꾸꾺꾸꾸꾸꾸꾸꾸꾸꾸
        </h1>

      </Main>
      <Main title='대회 참가하기' subtitle="쇼미더코딩에 참가하시려면 아래를 참고해 주세요." id="area2">
        <h1>예선전 작품 주제</h1>
        귀여운 고양이
        <h1>예선전 참여 기간</h1>
        2019년 01월 01일 ~ 2019년 01월 02일
        <h1>신청 양식</h1>
        엔트리 아이디, (한국) 나이, 이메일 주소, 예선 작품 링크, 설명
        <h1>신청하기</h1>
        안받습니당ㅋ
      </Main>
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
          text: "개요",
          href: "#area1"
        },
        {
          text: "참가",
          href: "#area2"
        },
        {
          text: "작품",
          href: "#area3"
        },
        {
          text: "영상 및 웹툰",
          href: "#area4"
        },
        ]
      };
    }
  }
</script>

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

@media all and (max-width:556px) {
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
