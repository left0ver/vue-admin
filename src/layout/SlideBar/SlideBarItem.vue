<template>
  <div>
    <el-menu-item
      :style="{ paddingLeft: route.meta?.icon === undefined ? '40px !important':'0'}"
      :index="getCurentIndex(route,parentIndex)"
      v-if="!hasChildren(route)">
      <Item :route="route" />
    </el-menu-item>

    <el-sub-menu v-else :index="route.path">
      <template #title>
        <Item :route="route" />
      </template>
      <template v-for="child in route.children" :key="child.path">
        <SlideBarItem :route="child" :parent-index="route.path"> </SlideBarItem>
      </template>
    </el-sub-menu>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, defineProps } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import Item from './Item.vue'

interface SlideBarItemProps {
  parentIndex?: string
  route: RouteRecordRaw
}
const props = defineProps<SlideBarItemProps>()
const {route} = toRefs(props)

function hasChildren(route: RouteRecordRaw): boolean {
  return route.children !== undefined && route.children.length > 1
}

const getCurentIndex = (route: RouteRecordRaw, parentIndex?: string) => {
  const childrenPath = route.children ? route.path + route.children[0].path : route.path
  if (parentIndex !== undefined) {
    return parentIndex === "/" ? `${parentIndex}${  childrenPath}` :  `${parentIndex}/${  childrenPath}`
  }
  return childrenPath
}
</script>

<style lang="less" scoped>
/deep/.el-menu-item {
  padding-left: 20px !important;
}
.icon {
  margin-right: 8px;
}
</style>
