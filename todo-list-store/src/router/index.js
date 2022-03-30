import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/AboutView'
import HomeView from '../views/HomeView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todos',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:About
  }
]

const router = new VueRouter({
  routes
})

export default router
