<template>
  <div class="ani-area">
    <!-- <template v-for="(item, index) of urls">
      <img :src="item" :style="index === indedx || 'display: none'" :key="`img-${index}`" />
    </template> -->
    <!-- <img src="../assets/imgs/skiing/skiing_01.png" alt="" srcset="" /> -->
  </div>
</template>

<script>
import { PrefixZero } from "../util"
export default {
  name: "animation",
  data() {
    return {
      urls: [],
      indedx: 15,
    }
  },
  created() {
    new Array(30).fill(0).forEach((item, index) => {
      this.urls.push(`../assets/imgs/skiing/skiing_${PrefixZero(index)}.png`)
    })
  },
}
</script>

<style lang="scss" scoped>
.ani-area {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 250px;
  height: 250px;
  //   height: 100px;
  img {
    width: 100%;
  }
}
</style>
