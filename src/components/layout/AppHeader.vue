<template>
  <header class="header">
    <container class="large">
      <div class="header-layout">
        <logo/>
        <app-menu/>
      </div>
    </container>
  </header>
</template>

<script>
import Logo from '@/components/elements/Logo.vue'
import AppMenu from '@/components/layout/AppMenu.vue'
export default {
  components: {
    Logo,
    AppMenu
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
  z-index: 2;
}
.header-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
