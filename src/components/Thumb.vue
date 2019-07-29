<template>
  <div class="thumb">
    <div class="thumbnail" :style="{backgroundImage: `url('${thumbnail}')`}"></div>
    <div class="info" :style="{backgroundColor: teamColor, color: Number(team)?'white':'black'}">
      {{workData.name}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Thumb',
    data () {
      return {
        thumbnail: `https://playentry.org/uploads/thumb/${this.worksId.substring(0, 4)}/${this.worksId}.png`,
          workData: {name: " "},
          teamColor: [
            "silver",
            "#F70D1A",
            "#FF5F00",
            "#FFE302",
            "#A6D608",
            "#00AAEE",
            "#9F00FF"
          ][this.team]
      }
    },
    methods: {
      getData(){
        this.$http({
          url: `https://playentry.org/api/project/${this.worksId}`,
          adapter: this.$jsonpAdapter
        }).then(res => {
          this.workData = res.data
        })
      }
    },
    props: {
      worksId: String,
      team: String
    },
    mounted() {
      this.getData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .thumb {
    width: 10em;
    box-shadow: 0 0 1em rgba(0, 0, 0, .2);
    border-radius: 1em;
    overflow: hidden;
  }
  .thumbnail {
    width: 10em;
    height: 6em;
    background-size: cover;
    background-position: center;
  }
  .info {
    background-color: silver;
    width: 100%;
    padding: 0.5em 1em 0.5em 1em;
    box-sizing: border-box;
    color: black;
  }
</style>