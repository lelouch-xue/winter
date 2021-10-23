<template>
  <div class="home-page">
    <img class="home-bg" src="/assets/imgs/index-bg.png" alt="" />
    <img class="home-index-people" src="/assets/imgs/index-people.png" alt="" />
    <div class="home-title">
      <img class="home-index-title" src="/assets/imgs/index-title.png" alt="" />
      <img class="home-index-start-btn" src="/assets/imgs/index-btn.png" @click="startTips" alt="" />
    </div>

    <div class="home-tips" v-show="isTips">
      <img class="home-index-tips" src="/assets/imgs/index-tips.png" alt="" />
      <img class="home-index-btn" @click="startSkiing" src="/assets/imgs/index-btn.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      isTips: false,
    }
  },
  created() {
    console.log("home created")
  },
  methods: {
    startTips() {
      this.isTips = true
      console.log(111)
    },
    startSkiing() {
      this.$emit("setStep", 2)
    },
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;

  .home-bg {
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .home-index-people {
    width: 35vw;
    position: absolute;
    bottom: 5%;
    right: 15%;
  }

  .home-title {
    position: absolute;
    width: 90vw;
    left: 5%;
    top: 8%;

    .home-index-title {
      width: 100%;
    }

    .home-index-start-btn {
      width: 36vw;
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .home-tips {
    width: 70vw;
    position: absolute;
    top: 30%;
    left: 15%;

    .home-index-tips {
      width: 100%;
    }

    .home-index-btn {
      width: 25vw;
      position: absolute;
      bottom: 16%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  // .home-index-tips {
  //   width: 50vw;
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  // }
}
</style>
