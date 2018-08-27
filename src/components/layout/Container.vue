<template>
  <div class="container">
    <slot/>
  </div>
</template>

<style lang="scss">
$container-max-width: 1520px;
$container-small-max-width: 1200px;
$container-large-max-width: 1720px;
$container-padding: 0 20px;

.container {
  width: 100%;
  max-width: $container-max-width;
  padding: $container-padding;
  margin: 0 auto;

  &.large {
    max-width: $container-large-max-width;
  }

  &.small {
    max-width: $container-small-max-width;
  }
}
</style>
