<template>
  <app-page
    :progress="50"
    :waves="waves"
    class="skills">
    <container>
      <ul class="skill-list">
        <li
          v-for="skill in skills"
          :key="skill.title"
          class="skill-list-item animate">
          <section class="skill-list-info">
            <p class="skill-value ">{{ skill.value }}<span class="skill-value-percent">%</span></p>
            <h2 class="skill-title">
              {{ skill.title }}
            </h2>
          </section>
        </li>
      </ul>
      <p class="skills-description animate">
        Get your thing done by us at a very affordable cost. We make sure the quality content. We care about client satisfaction.
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
      skills: [
        {
          value: 67,
          title: 'User Experience'
        },
        {
          value: 89,
          title: 'User Interface'
        },
        {
          value: 56,
          title: 'UI Interaction'
        }
      ],
      waves: {
        waveFirst: 'm0 35.668c64.079 47.129 115.53-70.824 238.92-9.0463 115.13 76.66 196.27 69.365 268.6-26.621v162.03h-507.51z',
        waveSecond: 'm0 47.585s67.53-99.307 198.39-0.7937c128.79 102.65 152.23-135.89 308.78-8.1053 0.79722 2.4077 0 121.46 0 121.46h-507.16z'
      }
    }
  }
}
</script>

<style lang="scss">
.skills {
  @include respond-to(large) {
    margin-bottom: 10vh;
  }
}
.skill-list {
  text-align: center;
  @include respond-to(medium) {
    display: flex;

    .skill-list-item {
      margin-bottom: 0;
    }
  }
  @include respond-to(large) {
    text-align: left;

    .skill-list-item {
      margin-left: 0;
      margin-right: 4em;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  margin-bottom: 2em;
}
.skill-list-item {
  position: relative;
  .skill-value {
    margin-bottom: 0;
  }

  @for $i from 0 through 4 {
    &:nth-child(#{$i + 1}) {
      animation-delay: $i * 0.4s;
    }
  }
  @include respond-to(x-small) {
    margin: 0 auto 1em;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-image: linear-gradient(215deg, transparent 20%, rgba(white, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @include respond-to(medium) {
    width: 300px;
    height: 300px;
  }
  @include respond-to(large) {
    white-space: nowrap;
    justify-content: flex-start;
    padding-left: 3em;
  }
}
.skill-value {
  font-size: $font-size-xxx-large;
  opacity: 0.5;

  @include respond-to(x-small) {
    font-size: $font-size-xxxx-large;
  }
}
.skill-value-percent {
  font-size: $font-size-xx-large;

  @include respond-to(x-small) {
    font-size: $font-size-xxx-large;
  }
}
.skill-title {
  font-weight: 400;
  letter-spacing: 2px;

  @include respond-to(medium) {
    font-size: $font-size-large;
  }
  @include respond-to(large) {
    font-size: $font-size-xx-large;
  }
}
.skills-description {
  max-width: 1030px;
  animation-delay: 1.2s;
}
</style>
