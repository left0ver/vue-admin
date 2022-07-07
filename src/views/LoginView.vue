<template>
  <div>
    <div class="login-form">
      <el-input autofocus v-model="username"></el-input>
      <el-input show-password v-model="password"></el-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import { ElInput } from 'element-plus'

const username = ref("")
const password = ref("")
</script>
<style lang="less" scoped>
/deep/ .login-form {
  width: 150px;
}
</style>
