<template>
  <app-page
    :progress="75"
    :waves="waves"
    class="portfolio">
    <container>
      <div class="portfolio-list">
        <div
          v-for="image in images"
          :key="image.title"
          class="img-container animate">
          <img
            :src="image.path"
            :alt="image.title">
        </div>
      </div>
      <p class="portfolio-links animate">
        For more check out:
        <br>
        <a
          target="_blank"
          href="https://dribbble.com"
          class="more-link">Dribbble</a>
        <a
          target="_blank"
          href="https://www.behance.net/"
          class="more-link">Behance</a>
      </p>
    </container>
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
      images: [
        {
          title: 'Eyeglass',
          path: require('../assets/img/portfolio/eyeglass.jpg')
        },
        {
          title: 'Watch',
          path: require('../assets/img/portfolio/watch.jpg')
        },
        {
          title: 'Big Clock',
          path: require('../assets/img/portfolio/clock-big.jpg')
        },
        {
          title: 'Clock',
          path: require('../assets/img/portfolio/clock.jpg')
        },
        {
          title: 'Stool',
          path: require('../assets/img/portfolio/stool.jpg')
        },
        {
          title: 'Paper',
          path: require('../assets/img/portfolio/paper.jpg')
        }
      ],
      waves: {
        waveFirst: 'm0 0c14.469 15.71 86.588 143.68 238.92 43.818 152.33-99.867 188.41 44.84 268.6-8.1516v126.36h-507.51z',
        waveSecond: 'm0 73.033s69.597-75.362 198.39 0c128.79 75.365 169.59-149.12 308.78-44.899 0.79722 2.4077 0 133.89 0 133.89h-507.16z'
      }
    }
  }
}
</script>

<style lang="scss">
.portfolio {
  .container {
    @include respond-to(medium) {
      padding: 0 4em;
    }
  }
}
.portfolio-list {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  @include respond-to(x-small) {
    grid-template-columns: 1fr 1fr;
  }
  @include respond-to(medium) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;
  }
  margin-bottom: 1em;

  .img-container {
    @for $i from 0 through 6 {
      &:nth-child(#{$i + 1}) {
        animation-delay: $i * 0.4s;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
}
.portfolio-links {
  animation-delay: 2.4s;

  .more-link {
    &:last-child {
      margin-left: 0.4em;
    }
  }

  @include respond-to(x-small) {
    br {
      display: none;
    }
  }

  @include respond-to(small) {
    font-size: $font-size-large;
    .more-link,
    .more-link:last-child {
      margin-left: 2em;
    }
  }
}
.more-link {
  border-bottom: 0.1em solid;
  &:hover {
    border-bottom-color: transparent;
  }
}
</style>
