<template>
  <div class="thumb" :style="{backgroundColor: teamColor}">
    <div class="thumbnail" :style="{backgroundImage: `url('${thumbnail}')`}"></div>
    <div :class="{info: true, overflow: this.width > 160}" :style="{color: Number(team)?'white':'black'}" ref="info">
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
          ][this.team],
          width: 0
      }
    },
    methods: {
      getData(){
        this.$http({
          url: `https://playentry.org/api/project/${this.worksId}`,
          adapter: this.$jsonpAdapter
        }).then(res => {
          this.workData = res.data
          this.$nextTick(this.getWidth)
        })
      },
      getWidth(){
        this.width = this.$refs.info.clientWidth
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
    background-color: silver;
    width: 10rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
    border-radius: 1rem;
    overflow: hidden;
    display: inline-block;
    margin: 1rem 0.5rem 1rem 0.5rem;
  }
  .thumbnail {
    width: 10rem;
    height: 6rem;
    background-size: cover;
    background-position: center;
  }
  .info {
    min-width: 100%;
    display: inline-block;
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-size: 0.8em;
    box-sizing: border-box;
    color: black;
  }
  .info.overflow {
    animation: marquee 5s linear infinite;
  }

  @keyframes marquee {
    0% {
        transform: translate(0%, 0);
    }    
    50% {
        transform: translate(-100%, 0);
    }
    50.001% {
        transform: translate(100%, 0);
    }
    100% {
        transform: translate(0%, 0);
    }
}
</style>