<template>
  <div class="skiing-page">
    <div class="skiing-bg"></div>
    <div ref="cloud" class="bg-item cloud-item slide-ani-item"></div>
    <div ref="element" class="bg-item element-item slide-ani-item"></div>
    <button @click="next">下一个</button>
  </div>
</template>

<script>
export default {
  name: "skiing",
  data() {
    return {
      curstep: 0,
      isPlaying: false,
      loopnum: -1,
      eleSpeed: 5,
      cloudSpeed: 1.5,
      steps: [200, 500, 800, 1100, 1400],
    }
  },
  mounted() {
    this.isPlaying = true

    this.startRender()
  },
  methods: {
    render() {
      const _ele = this.$refs.element
      const _cloud = this.$refs.cloud
      if (!this.isPlaying || !_ele) return
      const _elebpx = getComputedStyle(_ele).backgroundPositionX
      const _cloudbpx = getComputedStyle(_cloud).backgroundPositionX
      const _len = this.steps.length
      if (this.curstep >= _len) {
        return
      }
      let _elebpxn = +_elebpx.match(/[0-9-]+/i)
      let _cloudbpxn = +_cloudbpx.match(/[0-9-]+/i)

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
      _ele.style.backgroundPositionX = `${_elebpxn}px`
      _cloud.style.backgroundPositionX = `${_cloudbpxn}px`
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
      console.log(this.loopnum)
    },

    next() {
      console.log("12313")
      if (this.isPlaying) return
      this.isPlaying = true
      if (this.curstep > this.steps.length - 1) return
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
    background-image: url("../assets/imgs/abc_3.png");
    width: 100vw;
    height: 100vh;
    background-size: contain;
  }

  .cloud-item {
    bottom: 20vh;
    position: absolute;
    background-image: url("../assets/imgs/cloud.png");
    background-size: 200vh 50vh;
    width: 100vw;
    height: 50vh;
  }

  .element-item {
    bottom: 0;
    background-image: url("../assets/imgs/element.png");
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
