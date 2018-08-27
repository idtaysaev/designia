<template>
  <router-link
    v-show="isShown"
    :to="to"
    class="next-page">Next page</router-link>
</template>

<script>
export default {
  computed: {
    to () {
      // console.log(this.$route)
      if (this.routeIndex >= this.$router.options.routes.length - 1) return this.$router.options.routes[0]
      return this.$router.options.routes[this.routeIndex + 1]
    },
    routeIndex () {
      return this.$router.options.routes.findIndex(el => el.name === this.$route.name)
    },
    isShown () {
      return this.routeIndex < this.$router.options.routes.length - 1
    }
  }
}
</script>

<style lang="scss">
.next-page {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
  font-size: $font-size-regular;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &::after {
    content: "\2192";
    margin-left: 1rem;
    font-size: $font-size-x-large;
    margin-top: -0.1em;
  }

  @include respond-to(small) {
    font-size: $font-size-x-large;

    &::after {
      font-size: $font-size-xxx-large;
    }
  }

  @include respond-to(large) {
    right: 4em;
  }
}
</style>
