import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { defineComponent } from 'vue'
import { Setting } from '@element-plus/icons-vue'
import { Roles } from '@/type'
import Layout from '@/layout/index.vue'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    // 是可选的
    roles?: Roles[]
    // 默认是 false
    hidden?: boolean
    breadcrumb?: boolean
    // 显示在slideBar上面的label
    title?: string
    icon?: string | ReturnType<typeof defineComponent>
    // 需要高亮的页面的url
    activeMenu?: string
  }
}

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/RegisterView.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/forget',
    name: 'forget',
    component: () =>
      import(
        /* webpackChunkName: "forget" */ '../views/ForgetPasswordView.vue'
      ),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    // 如果只有一个children，则meta需要写在外面，children内部的meta不生效
    children: [
      {
        path: 'dashboard',
        name: 'dashboard1',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '../views/DashBoardView.vue'
          ),
        // 只有一个children，该meta不生效
        meta: {
          title: 'dashboard',
          // hidden: false,
        },
      },
    ],
    meta: {
      title: 'dash',
      icon: Setting,
    },
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
      activeMenu: '',
      icon: 'bug',
    },
  },
  {
    path: '/',
    name: 'teacher',
    component: Layout,
    children: [
      {
        path: 'teacher',
        component: () =>
          import(/* webpackChunkName: "teacher" */ '../views/TeacherView.vue'),
      },
    ],
    meta: {
      roles: [Roles.TEACHER],
      hidden: false,
      breadcrumb: true,
      title: 'teacher',
      icon: 'bug',
    },
  },
  {
    path: '/',
    name: 'admin',
    component: Layout,
    children: [
      {
        path: 'admin',
        component: () =>
          import(/* webpackChunkName: "admin" */ '../views/AdminView.vue'),
        meta: {
          roles: [Roles.ADMIN],
          hidden: false,
          breadcrumb: true,
          title: 'admin',
          icon: 'bug',
        },
      },
    ],
    meta: {
      roles: [Roles.ADMIN],
      hidden: false,
      breadcrumb: true,
      title: 'admin',
      icon: 'bug',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

export default router
