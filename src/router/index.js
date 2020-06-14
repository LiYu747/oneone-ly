import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/Login'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'Exit',
        name: 'Exit',
        component: () => import('../views/exit/Exit')
      },
      {
        path: 'Published',
        name: 'Published',
        component: () => import('../views/published/Published')
      },
      {
        path: 'Statistical',
        name: 'Statistical',
        component: () => import('../views/statistical/Statistical')
      },
      {
        path: 'Picture',
        name: 'Picture',
        component: () => import('../views/picture/Picture')
      },
      {
        path: 'Paging',
        name: 'Paging',
        component: () => import('../views/paging/Paging')
      },
      {
        path: 'Excel',
        name: 'Excel',
        component: () => import('../views/excel/Excel')
      },
      {
        path: 'Label',
        name: 'Label',
        component: () => import('../views/label/Label')
      },
    ]

  },
 
  {
    path: '/Login',
    name: 'Login',
    component:Login
  },
  {
    path: '/Registered',
    name: 'Registered',
    component: () => import('../views/registered/Registered')
  },
  {
    path:'*',
    component: () => import('../views/err/Err')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let whitepath = ['/Login','/Registered']
router.beforeEach((to, from, next) => {
  let user =  localStorage.getItem('user')
  if(whitepath.includes(to.path)){
      next()
  }
  else{
       user?next():next('/Login')
  }
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
