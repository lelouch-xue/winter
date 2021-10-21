<template>
  <div class="audio-item">
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="28px"
      height="28px"
      viewBox="0 0 46 46"
      enable-background="new 0 0 46 46"
      xml:space="preserve"
      :class="isMute || 'audio-ani'"
      @click="toggle"
    >
      <g>
        <circle opacity="0.6" cx="23" cy="23" r="23"></circle>
        <g>
          <path
            fill="#ECECEC"
            d="M23,2c11.6,0,21,9.4,21,21s-9.4,21-21,21S2,34.6,2,23S11.4,2,23,2 M23,0C10.3,0,0,10.3,0,23s10.3,23,23,23 s23-10.3,23-23S35.7,0,23,0L23,0z"
          ></path>
        </g>
        <path
          fill="#ECECEC"
          d="M27.5,7.3c0.6,1.1,0.8,2.4,1.6,3.4c0.9,1.5,2.1,2.8,3,4.3c0.6,1.1,1.3,2.2,1.4,3.4c0.4,1.6-0.1,3.4-0.9,4.8 c-0.8,0.7-1.1-0.4-0.9-1c0.1-0.9,0.2-1.8,0-2.7c-0.2-1.3-0.6-2.6-1.4-3.7c-0.7-0.8-1.5-2.5-2.8-2.1c-0.9,0.4-0.7,1.5-0.8,2.3 c-0.6,5-1.2,10.1-1.9,15.1c-0.3,2.1-2.3,3.3-4.1,4c-1.6,0.7-3.5,1-5.2,0.4c-1.6-0.4-3.2-1.8-3-3.5c0.1-2.1,1.8-3.8,3.8-4.4 c1.9-0.8,4.2-0.8,6.1,0.2c0.9,0.4,1.3-0.4,1.5-1.3c0.9-6.4,1.7-12.8,2.5-19.2C26.3,6.8,27.4,6.7,27.5,7.3L27.5,7.3z"
        ></path>
      </g>
      <polygon
        :class="isMute ? 'audio_on' : 'audio_off'"
        fill="#ECECEC"
        points="14,11.2 13.2,12.9 33.3,34.2 34.2,32.5 "
        style=""
      ></polygon>
    </svg>
    <audio ref="audio">
      <source src="../assets/music.mp3" />
      <source src="../assets/music.wav" />
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sound: null,
      isMute: true,
    }
  },
  mounted() {
    console.log("audio created")
    this.sound = this.$refs.audio
  },
  methods: {
    setPlay() {
      this.sound = this.$refs.audio
      this.sound.volume = 0.65
      if (this.sound) {
        this.sound.play()
        this.sound.muted = false
      }
    },

    setMute() {
      this.sound = this.$refs.audio
      this.sound && (this.sound.muted = true)
    },

    toggle() {
      const fn = this.isMute ? this.setPlay : this.setMute
      this.isMute = !this.isMute
      fn()
    },
  },
}
</script>

<style lang="scss" scoped>
.audio-item {
  position: absolute;
  right: 20px;
  top: 20px;

  .audio-ani {
    animation: identifier 2s linear infinite;
  }

  .audio_on {
    display: block;
  }
  .audio_off {
    display: none;
  }
}

@keyframes identifier {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
