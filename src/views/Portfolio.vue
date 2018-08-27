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
        waveFirst: 'm0 0c54.686 36.646 327.26 335.16 903 102.21 575.74-232.96 712.1 104.6 1015.2-19.015v294.76h-1918.1z',
        waveSecond: 'm0 170.36s263.04-175.8 749.81 0c486.76 175.8 640.96-347.85 1167-104.74 3.013 5.6165 0 312.33 0 312.33h-1916.8z'
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
