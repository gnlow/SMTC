<template>
  <div>
    <div class="titlebox">
      <div class="title">
        {{ title }}
      </div>
      <div class="subtitle">
        {{ subtitle }}
      </div>
    </div>
    <div class="content">
      <slot/>
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
      anchor: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.titlebox {
  color: white;
  width: 100%;
  text-align: center;
  padding: 8rem 0;
  margin: -3rem 0;
}

.title {
  font-weight: 900;
  font-size: 3.5em;
  padding: 0 1rem;
}
.subtitle {
  font-weight: 300;
  font-size: 2em;
  padding: 0 1rem;
}
.content {
  color: black;
  background-color: gainsboro;

  font-weight: 400;
  font-size: 1.5rem;
  padding: 3rem;
  text-align: left;
}

//For slot content
h1 {
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
}
</style>