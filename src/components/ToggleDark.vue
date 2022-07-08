<template>
  <div>
    <el-switch
      v-model="isDark"
      style="margin-left: 24px;--el-switch-on-color:#4C4D4F;"
      inline-prompt
      size="large"
      :active-icon="Sunny"
      :inactive-icon="Moon"
      :change="toggleDark" />
  </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { ElSwitch } from 'element-plus'
import {Sunny,Moon} from '@element-plus/icons-vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
