<template>
  <svg class="svg-icon" aria-hidden="true" v-bind="$attrs" :class="className">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { toRefs,computed,defineProps} from "vue"

interface IconProps {
  iconClass: string;
  svgClass?:string;
}
const props = defineProps<IconProps>()
const { iconClass, svgClass } = toRefs(props)
const iconName = computed(() => `#icon-${iconClass.value}`)
const className = computed(() => {
  if (svgClass ===undefined) {
    return ''
  }
  return svgClass
})
</script>

<style lang="less" scoped>
  .svg-icon {
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
