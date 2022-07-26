<template>
  <div class="avatar-wrap">
    <el-avatar>{{username}} </el-avatar>
  </div>
</template>

<script lang="ts" setup>
import { useUserInfoStore } from "@/store"

const username =useUserInfoStore().name.slice(0,2)
</script>
