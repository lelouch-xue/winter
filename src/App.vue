<template>
  <div id="app">
    <c-loading />
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
export default {
  name: "App",
  components: {
    "c-loading": Loading,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
