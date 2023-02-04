import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/View.vue'
import GithubRepos from '../views/Pages/GithubRepos/View.vue'
import { routeName } from './routeName'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: routeName.HOME,
    component: Home
  },
  {
    path: '/projects',
    name: routeName.PROJECTS,
    component: GithubRepos
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
