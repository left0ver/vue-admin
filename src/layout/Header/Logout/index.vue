<template>
  <div class="logout-wrap" @click="logout">
    <svg-icon icon-class="logout"></svg-icon>
    <span class="logout-text">退出</span>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { reset } from '@/utils/reset'

const router = useRouter()
const logout = () => {
reset()
router.replace("/login")
}
</script>

<style lang="less" scoped>
  .logout-wrap {
  color: #888;
  text-align: center;
  cursor: pointer;
    .logout-text {
        padding-left: 5px;
        font-weight: 400;
        font-size: 16px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
}
</style>
