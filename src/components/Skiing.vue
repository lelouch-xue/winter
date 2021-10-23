<template>
  <div class="skiing-page">
    <div class="skiing-bg"></div>
    <div ref="cloud" class="bg-item cloud-item slide-ani-item" :style="`background-image: url(${cloud});`"></div>
    <div ref="element" class="bg-item element-item slide-ani-item" :style="`background-image: url(${element});`"></div>
    <button @click="next">下一个</button>
    <c-animation></c-animation>
  </div>
</template>

<script>
import Animation from "./Animation.vue"
export default {
  name: "skiing",
  components: {
    "c-animation": Animation,
  },
  data() {
    return {
      curstep: 0,
      isPlaying: false,
      loopnum: -1,
      eleSpeed: 0.08,
      cloudSpeed: 0.04,
      steps: [8, 14, 20, 26, 32],
      size: 1,
      cloud: "",
      element: "",
      fps: 0,
    }
  },
  created() {
    this.cloud = window.queue.getResult("cloud").src
    this.element = window.queue.getResult("element").src
    // this.cloud = window.queue.getItem("cloud").src
    // this.element = window.queue.getItem("element").src
  },
  mounted() {
    this.isPlaying = true
    const head = document.head || document.getElementsByTagName("head")[0]
    this.size = +(document.documentElement.style.fontSize || getComputedStyle(head).fontSize).match(/[0-9-.]+/i)
    console.log(this.size)
    this.startRender()

    this.cloud = window.queue.getResult("cloud").src
    this.element = window.queue.getResult("element").src

    console.log(window.queue.getResult("cloud").src)
  },
  methods: {
    render() {
      const _ele = this.$refs.element
      const _cloud = this.$refs.cloud
      if (!this.isPlaying || !_ele) return

      this.fps++
      if (this.fps % 2 === 0) return

      const _elebpx = getComputedStyle(_ele).backgroundPositionX
      const _cloudbpx = getComputedStyle(_cloud).backgroundPositionX
      const _len = this.steps.length
      if (this.curstep >= _len) {
        return
      }
      let _elebpxn = +_elebpx.match(/[0-9-.]+/i) / this.size
      let _cloudbpxn = +_cloudbpx.match(/[0-9-.]+/i) / this.size

      if (Math.abs(_elebpxn) >= this.steps[this.curstep]) {
        this.$nextTick(() => {
          this.stopRender()
        })

        this.$emit("grade", this.curstep)
        this.curstep++
        this.isPlaying = false
        return
      }

      _elebpxn -= this.eleSpeed
      _cloudbpxn -= this.cloudSpeed
      _ele.style.backgroundPositionX = `${_elebpxn}rem`
      _cloud.style.backgroundPositionX = `${_cloudbpxn}rem`
    },
    startRender() {
      const _this = this
      ;(function _loop() {
        _this.render()
        _this.loopnum = requestAnimationFrame(() => {
          _loop()
        })
      })()
      this.$emit("next", this.curstep)
    },
    stopRender() {
      cancelAnimationFrame(this.loopnum)
    },

    next() {
      if (this.isPlaying) return
      if (this.curstep > this.steps.length - 1) return
      this.isPlaying = true
      this.startRender()
    },
  },
  destroyed() {
    this.stopRender()
  },
}
</script>

<style lang="scss" scoped>
.skiing-page {
  position: relative;

  button {
    position: absolute;
    left: 20px;
    top: 20px;
  }

  .skiing-bg {
    width: 100vw;
    height: 100vh;
    background-size: contain;
  }

  .cloud-item {
    bottom: 20vh;
    position: absolute;
    background-size: 200vh 50vh;
    width: 100vw;
    height: 50vh;
  }

  .element-item {
    bottom: 0;
    background-size: 1600px 400px;
    background-repeat: no-repeat;
    width: 100vw;
    height: 400px;
  }

  .bg-item {
    position: absolute;
    left: 0;
  }

  .slide-ani-item {
    transition: background-position-x 50ms;
    background-position-x: 0px;
    background-position-y: 0;
    background-repeat: no-repeat;
  }
}
</style>
