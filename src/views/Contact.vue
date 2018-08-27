<template>
  <app-page
    :progress="100"
    :waves="waves"
    class="contact">
    <container>
      <form
        action="#"
        class="contact-form">
        <div class="form-block-double">
          <div class="form-block animate">
            <input
              type="text"
              placeholder="Name"
              required>
          </div>
          <div class="form-block animate">
            <input
              type="email"
              placeholder="E-mail"
              required>
          </div>
        </div>
        <div class="form-block animate">
          <textarea
            name="message"
            placeholder="Type your message here..."
            required/>
        </div>
        <div class="form-block animate">
          <button type="submit">Send Message</button>
        </div>
      </form>
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
      waves: {
        waveFirst: 'm0 35.668c64.079 47.129 115.53-70.824 238.92-9.0463 115.13 76.66 196.27 69.365 268.6-26.621v162.03h-507.51z',
        waveSecond: 'm0 47.585s67.53-99.307 198.39-0.7937c128.79 102.65 152.23-135.89 308.78-8.1053 0.79722 2.4077 0 121.46 0 121.46h-507.16z'
      }
    }
  }
}
</script>

<style lang="scss">
.contact-form {
  & > .form-block {
    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.4s;
      }
    }
  }
  .form-block-double {
    .form-block {
      &:last-child {
        animation-delay: 0.4s;
      }
    }
  }
}
</style>
