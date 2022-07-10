<template>
  <div class="login-link" @click="() => router.back()">
    <span>返回</span>
    <span>
      <el-icon style="vertical-align: middle">
        <ArrowRight />
      </el-icon>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { ElIcon } from "element-plus"
import { useRouter } from "vue-router"

const router = useRouter()
</script>

<style lang="less" scoped>
.login-link {
  color: #29B6F6;
  cursor: pointer;
}
</style>
