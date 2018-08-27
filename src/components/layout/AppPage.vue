<template>
  <section class="page">
    <slot/>
  </section>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    },
    waves: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.$store.commit('setProgress', this.progress)
    this.$store.commit('setWaves', this.waves)
  }
}
</script>

<style lang="scss">
.page {
  position: relative;
  padding: 1em 0 3em;
  @include respond-to(medium) {
    padding-bottom: 1em;
  }
  background-repeat: no-repeat;
  background-position: center 140%, center;
}
</style>
