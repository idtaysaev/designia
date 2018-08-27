import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
