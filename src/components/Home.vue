<template>
  <div class="home-page">
    <button @click="startSkiing">继续游戏</button>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {
    console.log("home created")
  },
  methods: {
    startSkiing() {
      this.$emit("setStep", 2)
    },
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
