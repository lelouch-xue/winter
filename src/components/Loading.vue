<template>
  <div class="loading-page">
    <div>加载中...</div>
    <div>{{ parseInt(progress * 100) }} / 100</div>
    <div class="content"></div>
  </div>
</template>
<script>
import createjs from "preload-js"
export default {
  name: "loading",
  data() {
    return {
      progress: 0,
    }
  },
  created() {
    const queue = new createjs.LoadQueue(false)
    const manifest = [
      {
        src: "../assets/imgs/abc_01.png",
        id: "abc_01",
      },
      {
        src: "../assets/imgs/abc_02.png",
        id: "abc_02",
      },
      {
        src: "../assets/imgs/abc_03.png",
        id: "abc_03",
      },
      {
        src: "../assets/imgs/cloud.png",
        id: "cloud",
      },
      {
        src: "../assets/imgs/element.png",
        id: "element",
      },
      {
        id: "music",
        src: "../assets/music.mp3",
      },
    ]
    queue.loadManifest(manifest)
    queue.installPlugin(createjs.Sound)

    queue.on("progress", this.handleFileProgress)
    queue.on("complete", this.loadComplete)
  },
  methods: {
    handleFileProgress(evt) {
      console.log(evt)
    },
    loadComplete() {
      this.$emit("setStep", 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.loading-page {
  background-image: url("../assets/imgs/abc_3.png");
  width: 100vw;
  height: 100vh;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    color: red;
  }

  .content {
    
  }
}
</style>
