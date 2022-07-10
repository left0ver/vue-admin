<template>
  <div>
    <MyParticles />
  </div>
  <div>
    <div class="toggle-dark">
      <ToggleDark />
    </div>
    <div class="login-form">
      <div class="login-text"><span>登录</span></div>
      <div class="login-form-username">
        <el-input autofocus v-model="username" clearable placeholder="用户名">
          <template #prefix>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </div>
      <div class="login-form-password">
        <el-input show-password v-model="password" clearable placeholder="密码">
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </div>
      <div class="other-link">
        <div class="register" @click="toRegister">注册</div>
        <div class="forget-password" @click="toForgetPassword">忘记密码</div>
      </div>
      <div>
        <el-button type="primary" size="large" round>登录</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted} from "vue"
import { ElInput, ElIcon, ElButton } from 'element-plus'
import { useRouter } from "vue-router"
import request from "@/utils/request"
import ToggleDark from "@/components/ToggleDark.vue"
import MyParticles from "@/components/MyParticles.vue"

const router =useRouter()
const username = ref("")
const password = ref("")
const toRegister = () => {
  router.push("/register")
}
const toForgetPassword = () => {
  router.push("/forget")
}
onMounted(() => {
  request.get("/vue-admin/login").then((res) => {
  console.log(res)
})
})
</script>
<style lang="less" scoped>

@import "@/styles/minix.less";
@import "@/styles/element_ui.less";

.el-button {
  width: 100%;
}
.toggle-dark {
 .toggleDark();
}
 .login-form {
  position:absolute;
  top: 50%;
  right: 150px;
  width: 250px;
  transform: translateY(-50%);
  .login-text {
    padding-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  }
  .login-form-username {
    margin-bottom:20px;
  }
  .login-form-password {
    margin-bottom:20px;
  }
  .other-link {
    display:flex;
    justify-content: space-between;
    margin-bottom: 20px;
    color:#29B6F6;
    > div {
      cursor: pointer;
    }

  }
}
</style>
