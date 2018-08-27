<template>
  <div class="progress">
    <div
      :style="{width: $store.state.progress + '%'}"
      class="progress-value"/>
  </div>
</template>

<style lang="scss">
.progress {
  width: 100%;
  height: 10px;
  background-color: rgba(white, 0.3);
}
.progress-value {
  width: 0;
  height: 100%;
  background-color: white;
  transition: width 1s ease-in-out;
}
</style>
