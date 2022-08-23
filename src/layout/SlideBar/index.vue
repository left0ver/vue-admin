<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      router
      unique-opened
      :background-color="variables.menuBg"
      :active-text-color="variables.menuActiveColor"
      :text-color="variables.menuTextColor"
      collapse-transition>
      <template
        v-for="menuItem in getRenderMenus(routesStore.routes)"
        :key="menuItem.name || menuItem.children[0].name">
        <SlideBarItem :route="menuItem"> </SlideBarItem>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import {useRoute} from 'vue-router'
import SlideBarItem from './SlideBarItem.vue'
import { useRoutesStore } from '@/store'
import variables from  '@/styles/variables.module.less'


const routesStore = useRoutesStore()
const route= useRoute()
const getRenderMenus = (routes:RouteRecordRaw[]) => {
  return routes.filter(route => {
    if (route.children !== undefined && route.children.length > 1) {
      route.children = getRenderMenus(route.children)
    }
    if (route.meta !== undefined) {
      return !route.meta.hidden
    }
    return true
  })
}

const activeMenu = computed(() => {
  if (route.meta !== undefined && route.meta.activeMenu!== undefined && route.meta.activeMenu !=='' ) {
    return route.meta.activeMenu
  }
  return route.path
})
</script>

<style lang="less" scoped></style>
