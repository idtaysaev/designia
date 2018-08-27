<template>
  <div class="menu">
    <div
      :class="{ active: menuActive }"
      class="menu-toggle"
      @click="toggleMenu()"/>
    <nav
      :class="{ active: menuActive }"
      class="nav">
      <ul class="nav-list">
        <li
          v-for="page in pages"
          :key="page.name"
          class="nav-list-item">
          <router-link
            :to="page.path"
            class="nav-link"
            @click.native="closeMenu">{{ page.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuActive: false
    }
  },
  computed: {
    pages () {
      return [
        {
          path: '/',
          name: 'About'
        },
        {
          path: '/skills',
          name: 'Skills'
        },
        {
          path: '/portfolio',
          name: 'Portfolio'
        },
        {
          path: '/contact',
          name: 'Contact'
        }
      ]
    }
  },
  methods: {
    toggleMenu () {
      this.menuActive = !this.menuActive
    },
    closeMenu () {
      this.menuActive = false
    }
  }
}
</script>

<style lang="scss">
.nav {
  // display: none;
  position: fixed;
  top: 0;
  right: 0;
  text-align: right;
  padding-top: 2em;
  background-color: rgba(black, 0.3);
  transition: transform 0.3s ease-in-out;
  transform: translate3d(100%, 0, 0);
  border-bottom-left-radius: 1em;
  &.active {
    transform: translate3d(0, 0, 0);
  }
  @include respond-to(medium) {
    text-align: left;
    position: static;
    padding-top: 0;
    background-color: transparent;
    transform: none;
    border-bottom-left-radius: 0;
    &.active {
      transform: none;
    }
  }
}
.nav-list {
  font-size: $font-size-regular;
  @include respond-to(medium) {
    display: flex;
  }
  text-transform: uppercase;
}
.nav-list-item {
  @include respond-to(medium) {
    &:not(:last-child) {
      margin-right: 1em;
    }
  }
}
.nav-link {
  display: block;
  padding: 1em;
  @include respond-to(medium) {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: calc(50% - 5px);
      bottom: 0;
      width: 10px;
      height: 10px;
      background-color: white;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &.router-link-exact-active {
      &::before {
        opacity: 1;
      }
    }
  }
}
.menu-toggle {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  padding: 17px 10px;
  border-bottom-left-radius: 50%;
  background-color: white;
  opacity: 0.5;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: $color-accent;
    transition: transform 0.3s ease-in-out;
  }
  &::before {
    margin-bottom: 8px;
  }

  &.active {
    opacity: 0.8;
    &::before {
      transform: rotate(45deg) translate3d(4px, 4px, 0);
    }
    &::after {
      transform: rotate(-45deg) translate3d(4px, -4px, 0);
    }
  }
  @include respond-to(medium) {
    display: none;
  }
}
</style>
