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
        waveFirst: 'm0 83.198c242.19 109.93 436.65-165.2 903-21.101 435.14 178.82 741.81 161.8 1015.2-62.097v377.95h-1918.1z',
        waveSecond: 'm0 112.3s255.23-234.37 749.81-1.8732c486.76 242.26 575.35-320.71 1167-19.129 3.0131 5.6824 0 286.66 0 286.66h-1916.8z'
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
