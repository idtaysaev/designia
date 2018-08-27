<template>
  <router-link
    to="/"
    class="logo">
    designia.
  </router-link>
</template>

<style lang="scss">
.logo {
  display: block;
  position: relative;
  font-size: $font-size-xx-large;

  &::before {
    content: '';
    position: absolute;
    left: -0.4em;
    top: 0.2em;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: rgba(white, 0.08);
  }
}
</style>
