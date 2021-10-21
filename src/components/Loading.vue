<template>
  <div class="loading-page">
    <div>加载中...</div>
  </div>
</template>
<script>
import createjs from "preload-js"
export default {
  name: "loading",
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
    ]
    queue.loadManifest(manifest)
    // queue.loadFile("../assets/imgs/abc_01.png")
    // queue.loadFile("../assets/imgs/abc_02.png")
    // queue.loadFile("../assets/imgs/abc_03.png")
    queue.on("progress", this.handleFileProgress)
    queue.on("complete", this.loadComplete)
  },
  methods: {
    handleFileProgress(evt) {
      console.log(evt)
    },
    loadComplete() {
      this.$emit("start")
    },
  },
}
</script>

<style lang="scss" scoped>
.loading-page {
  div {
    color: red;
  }
}
</style>
