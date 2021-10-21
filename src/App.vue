<template>
  <div id="app">
    <c-loading @setStep="handleStartScense" v-if="index === 0" />
    <c-home v-if="index === 1" @setStep="handleStartScense"></c-home>
    <c-skiing v-if="index === 2"></c-skiing>
    <c-audio v-if="index != 0"></c-audio>
  </div>
</template>

<script>
import Loading from "./components/Loading.vue"
import Home from "./components/Home.vue"
import Skiing from "./components/Skiing.vue"
import Audio from "./components/Audio.vue"

export default {
  name: "App",
  data() {
    return {
      index: 0,
    }
  },
  components: {
    "c-loading": Loading,
    "c-home": Home,
    "c-skiing": Skiing,
    "c-audio": Audio,
  },
  methods: {
    handleStartScense(step) {
      setTimeout(() => {
        this.index = step
      }, 200)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
