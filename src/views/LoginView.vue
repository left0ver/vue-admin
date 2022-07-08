<template>
  <div>
    <MyParticles />
  </div>
  <div>
    <div class="switch-dark">
      <ToggleDark />
    </div>
    <div class="login-form">
      <div class="login-text"><span>登录</span></div>
      <div class="login-form-username">
        <el-input autofocus v-model="username" clearable>
          <template #prefix>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </div>
      <div class="login-form-password">
        <el-input show-password v-model="password" clearable>
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </div>
      <div>
        <el-button type="primary" size="large" round>登录</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import { ElInput,ElIcon,ElButton } from 'element-plus'
import ToggleDark from "@/components/ToggleDark.vue"
import MyParticles from "@/components/MyParticles.vue"

const username = ref("")
const password = ref("")
</script>
<style lang="less" scoped>
/deep/ .el-input {
  height:40px;
}
.el-button {
  width: 100%;
}
.switch-dark {
  display: flex;
  flex-direction: row-reverse;
  margin-right:50px
}
 .login-form {
  position:absolute;
  top: 50%;
  right: 150px;
  width: 250px;
  height: 200px;
  transform: translateY(-50%);
  .login-text {
    padding-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
  }
  .login-form-username {
    margin-bottom:15px;
  }
  .login-form-password {
    margin-bottom:15px;
  }
}
</style>
