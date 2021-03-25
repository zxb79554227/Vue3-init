import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LayOne',
    component: ()=>import('../layouts/MainPage/index.vue'),
    children:[
      {
        path:'/home',
        name: 'LayOne',
        component: ()=>import('../layouts/MainPage/index.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
