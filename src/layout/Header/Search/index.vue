<template>
  <div class="search-wrap">
    <div>
      <el-input
        type="search"
        :prefix-icon="Search"
        size="large"
        clearable
        placeholder="搜索"></el-input>
    </div>
    <div class="search-icon">
      <svg-icon icon-class="search"></svg-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElInput } from 'element-plus'
import {  Search } from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.search-wrap {
  display: flex;
  align-items: center;
  .search-icon {
    margin-left: 8px;
  }
}
</style>
