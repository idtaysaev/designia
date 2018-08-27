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
        waveFirst: 'm0 0c54.686 36.646 327.26 335.16 903 102.21 575.74-232.96 712.1 104.6 1015.2-19.015v294.76h-1918.1z',
        waveSecond: 'm0 170.36s263.04-175.8 749.81 0c486.76 175.8 640.96-347.85 1167-104.74 3.013 5.6165 0 312.33 0 312.33h-1916.8z'
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
