<template>
  <app-page
    :progress="25"
    :waves="waves"
    class="about">
    <div class="about-layout">
      <div class="about-info">
        <h1 class="about-title animate">We make thing done!</h1>
        <p class="about-description animate">
          Get your thing done by us at a very affordable cost. We make sure the quality content. We care about client satisfaction.
        </p>
        <p class="about-action animate">
          <router-link
            to="/contact"
            class="btn">Hire us!</router-link>
        </p>
      </div>
      <div class="about-images">
        <div class="img-container animate">
          <img
            src="@/assets/img/clock.jpg"
            alt="Clock">
        </div>
        <div class="img-container animate">
          <img
            src="@/assets/img/model.jpg"
            alt="Model">
        </div>
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/layout/AppPage'

export default {
  components: {
    AppPage
  },
  data () {
    return {
      waves: {
        waveFirst: 'm0 0c14.469 15.71 86.588 143.68 238.92 43.818 152.33-99.867 188.41 44.84 268.6-8.1516v126.36h-507.51z',
        waveSecond: 'm0 73.033s69.597-75.362 198.39 0c128.79 75.365 169.59-149.12 308.78-44.899 0.79722 2.4077 0 133.89 0 133.89h-507.16z'
      }
    }
  }
}
</script>

<style lang="scss">
.about-layout {
  @include respond-to(medium) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.about-info {
  text-align: center;
  padding: 0 1em;
  @include respond-to(medium) {
    text-align: left;
    width: 700px;
    font-size: $font-size-regular;
  }
  @include respond-to(large) {
    width: 1000px;
    font-size: $font-size-xx-large;
  }
  @include respond-to(x-large) {
    padding: 0 4em;
  }
}
.about-description {
  color: rgba($color-text, 0.5);
  animation-delay: 0.4s;
}
.about-action {
  animation-delay: 0.8s;
}
.about-images {
  padding: 0 2em;
  margin-top: 2em;
  @include respond-to(x-small) {
    display: flex;
    justify-content: space-between;
  }
  @include respond-to(medium) {
    padding: 0;
    margin: 0;
  }

  .img-container {
    animation-delay: 1.2s;

    &:last-child {
      animation-delay: 1.6s;
    }

    &:not(:last-child) {
      margin-bottom: 2em;
      @include respond-to(x-small) {
        margin-right: 1.4em;
        margin-bottom: 0;
      }
    }
  }

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
