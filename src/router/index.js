import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/Dashboard.vue'
import Maintenance from '../views/Maintenane.vue'
import Bill from '../views/Bill.vue'
import Properties from '../views/Properties.vue'
import User from '../views/User.vue'
import Message from '../views/Messages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component:Maintenance
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bill',
    name: 'Bill',
    component: Bill
  },
  {
    path: '/properties',
    name: 'Properties',
    component: Properties
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/messages',
    name: 'Message',
    component:Message
  }

]

const router = new VueRouter({
  routes
})

export default router
