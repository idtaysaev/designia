<template>
  <svg
    class="waves"
    width="100%"
    viewBox="0 0 507.52 162.03"
    xmlns="http://www.w3.org/2000/svg">
    <g fill="#fff">
      <path
        :d="waves.waveFirst"
        opacity=".1">
        <animate
          id="anim1"
          :values="prevWaves.waveFirst+'; '+waves.waveFirst"
          attributeName="d"
          dur="2s"/>
      </path>
      <path
        :d="waves.waveSecond"
        opacity=".1">
        <animate
          id="anim2"
          :values="prevWaves.waveSecond+'; '+waves.waveSecond"
          attributeName="d"
          dur="2s"/>
      </path>
    </g>
  </svg>
</template>

<script>
export default {
  data () {
    return {
      animFirst: undefined,
      animSecond: undefined
    }
  },
  computed: {
    waves () {
      return this.$store.state.currentWaves
    },
    prevWaves () {
      return this.$store.state.prevWaves
    }
  },
  watch: {
    waves () {
      this.changeWaves()
    }
  },
  mounted () {
    this.animFirst = this.$el.getElementById('anim1')
    this.animSecond = this.$el.getElementById('anim2')
  },
  methods: {
    changeWaves () {
      this.animFirst.beginElement()
      this.animSecond.beginElement()
    }
  }
}
</script>

<style lang="scss">
.waves {
  display: none;
  @include respond-to(medium) {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
