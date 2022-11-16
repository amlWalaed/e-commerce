import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/join-us',
    name: 'join-us',
    component: () => import(/* webpackChunkName: "join-us" */'../views/join-us.vue')
  },
  {
    path: '/categories/:name',
    name: 'categories',
    component: () => import(/* webpackChunkName: "products" */'../views/products.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */'../views/cart.vue')
  },
  {
    path: '/product/:id',
    name: 'productDetails',
    component: () => import(/* webpackChunkName: "cart" */'../views/productDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
