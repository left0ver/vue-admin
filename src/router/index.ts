import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Roles } from '@/type'
import Layout from '@/layout/index.vue'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    // 是可选的
    roles?: Roles[]
    hidden?: boolean
    breadcrumb?: boolean
    title?: string
    icon?: string
    activeMenu?: boolean
  }
}

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/RegisterView.vue'),
  },
  {
    path: '/forget',
    name: 'forget',
    component: () =>
      import(
        /* webpackChunkName: "forget" */ '../views/ForgetPasswordView.vue'
      ),
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '../views/DashBoardView.vue'
          ),
      },
    ],
  },
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/leftover',
    name: 'leftover',
    component: () =>
      import(/* webpackChunkName: "leftover" */ '../views/LeftoverView.vue'),
    meta: {
      roles: [Roles.LEFTOVER],
      hidden: false,
      breadcrumb: true,
      title: 'Leftover',
      icon: 'bug',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

export default router
