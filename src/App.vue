<template>
  <div id="app">
    <app-header/>

    <main class="main">
      <transition
        name="page"
        mode="out-in">
        <router-view/>
      </transition>
    </main>

    <waves/>
    <next-page/>
    <app-progress/>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import Waves from '@/components/elements/Waves.vue'
import NextPage from '@/components/elements/NextPage.vue'
import AppProgress from '@/components/layout/AppProgress.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Waves,
    NextPage,
    AppProgress
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  position: relative;
  z-index: 1;
}
</style>
