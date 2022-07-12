<template>
  <div>
    <MyParticles />
  </div>
  <div class="toggle-dark">
    <ToggleDark />
  </div>
  <div class="login-form">
    <div class="login-text"><span>登录</span></div>
    <el-form
      ref="formRef"
      show-message
      :model="loginForm"
      status-icon
      :rules="loginFormRules">
      <el-form-item class="login-form-username" prop="username">
        <el-input
          autofocus
          v-model="loginForm.username"
          placeholder="用户名"
          :prefix-icon="User">
        </el-input>
      </el-form-item>
      <el-form-item class="login-form-password" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="密码"
          :prefix-icon="Lock"
          :validate-event="false">
        </el-input>
      </el-form-item>
    </el-form>

    <div class="other-link">
      <div class="register" @click="toRegister">注册</div>
      <div class="forget-password" @click="toForgetPassword">忘记密码</div>
    </div>
    <div>
      <el-button type="primary" size="large" round @click="login(formRef)"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted,reactive} from "vue"
import { ElInput, ElButton, ElForm, ElFormItem, FormRules } from 'element-plus'
import type { FormInstance } from "element-plus"
import { useRouter } from "vue-router"
import { Lock,User } from '@element-plus/icons-vue'
import request from "@/utils/request"
import ToggleDark from "@/components/ToggleDark.vue"
import MyParticles from "@/components/MyParticles.vue"
import { users } from "../../mock/user"
import type { IUser } from '../../mock/type'

const router = useRouter()
const loginForm = reactive({
  username: "leftover",
  password: "123456",
})
const formRef = ref<FormInstance>()
const login = (form: FormInstance | undefined) => {
  if (!form) return
  form.validateField("password", (isValid) => {
    if (isValid) {
      router.replace("/home")
    } else {
      loginForm.password = ''
    }
  })
}
const validateLoginForm = (rule: any, value: any, callback: any) => {
  const isCorrect:boolean =users.some((user:IUser)=>user.username===loginForm.username&&value==='123456')
  if (value === '') {
    callback('请输入密码')
  }else if(!isCorrect) {
    callback('账户或密码错误')
  } else {
    callback()
  }
}
const loginFormRules: FormRules = {
  username: [{ required: true, message: '请输入用户名' }],
  password: [
    {validator:validateLoginForm}
  ],
}
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
.toggle-dark {
 .toggleDark();
}
 .login-form {
  position:absolute;
  top: 50%;
  right: 150px;
  width: 400px;
  transform: translateY(-50%);
  .login-text {
    padding-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  }
  .login-form-username {
    margin-bottom:30px;
  }
  .login-form-password {
    margin-bottom:30px;
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
