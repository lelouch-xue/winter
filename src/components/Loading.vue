<template>
  <div class="loading-page">
    <div class="progressBar">
      <div class="barContent" :style="`width: ${progress}%`"></div>
    </div>
    <div class="content">
      <div>{{ label }}&nbsp;&nbsp;&nbsp;</div>
      <div>{{ progress }}&nbsp;/&nbsp;100</div>
    </div>
  </div>
</template>
<script>
// import "preload"
import { PrefixZero } from "../util"
import assets from "../assets.json"
export default {
  name: "loading",
  data() {
    return {
      label: "",
      progress: 0,
      queue: null,
    }
  },
  created() {
    window.queue = new window.createjs.LoadQueue(false)
    const manifest = [...assets]

    for (let i = 0; i < 30; i++) {
      const _index = PrefixZero(i)
      const _obj = {
        id: `skiing_${_index}`,
        src: `./assets/imgs/skiing/skiing_${_index}.png`,
      }
      manifest.push(_obj)
    }

    window.queue.loadManifest(manifest)

    window.queue.on("progress", this.handleFileProgress)
    window.queue.on("complete", this.handleLoadComplete)
  },
  methods: {
    handleFileProgress(evt) {
      console.log(evt)
      this.progress = parseInt((evt.loaded || 0) * 100)
      this.label = "加载中..."
    },
    handleLoadComplete(evt) {
      console.log("加载完成")
      console.log(evt)
      this.label = "加载完成"
      this.$emit("setStep", 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.loading-page {
  width: 100vw;
  height: 100vh;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #7ec699;
    font-size: 20px;
  }

  .progressBar {
    margin-top: 160px;
    width: 60vw;
    height: 8px;
    background: #ffffff;
    border-radius: 5px;
  }
  .barContent {
    height: 8px;
    background: #00ff21;
    border-radius: 5px;
  }
}
</style>
