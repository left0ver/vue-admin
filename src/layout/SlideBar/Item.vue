<template>
  <div class="menu-item-wrap">
    <template v-if="route.meta?.icon !== undefined">
      <div>
        <svg-icon
          :icon-class="route.meta?.icon"
          v-if="typeof route.meta?.icon === 'string'"
          class="icon">
        </svg-icon>
        <el-icon v-else>
          <component :is="route.meta?.icon"></component>
        </el-icon>
      </div>
    </template>
    <div>
      <span class="title">{{route.meta?.title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

interface ItemProps {
  route: RouteRecordRaw
}
const props = defineProps<ItemProps>()
const { route } = toRefs(props)
</script>

<style lang="less" scoped>
.menu-item-wrap {
  display: flex;
  width: 100%;
  .icon {
    margin-right: 10px;
  }
  // .title {
  //   display: inline-block;
  //   width: 100%;
  //   text-align: center;
  // }
}
</style>
