<template>
  <div>
    <MyParticles />
  </div>
  <div class="toggle-dark">
    <ToggleDark />
  </div>
  <div class="register-form">
    <div class="register-text"><span>注册</span></div>
    <el-form :model="registerForm" show-message status-icon :rules="rules">
      <el-form-item class="username" prop="username"></el-form-item>
      <el-input
        :prefix-icon="User"
        placeholder="用户名"
        v-model="registerForm.username"></el-input>
      <el-form-item class="password" prop="password">
        <el-input
          type="password"
          :prefix-icon="Lock"
          placeholder="密码"
          v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item class="check-password" prop="checkPassword">
        <el-input
          type="password"
          :prefix-icon="Lock"
          placeholder="确认密码"
          v-model="registerForm.checkPassword"></el-input>
      </el-form-item>
    </el-form>
    <div class="other-link">
      <LoginLink />
    </div>
    <div class="register-btn">
      <el-button type="primary" size="large" round @click="registerAction"
        >注册</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElInput, ElButton, FormRules, ElForm, ElFormItem,ElMessage  } from "element-plus"
import { User, Lock, } from '@element-plus/icons-vue'
import { reactive, } from "vue"
import { useRouter } from 'vue-router'
import ToggleDark from "@/components/ToggleDark.vue"
import MyParticles from "@/components/MyParticles.vue"
import LoginLink from "@/components/LoginLink.vue"

const router =useRouter()
const registerForm = reactive({
  username: "",
  password: "",
  checkPassword: ""
})
const checkPassword = (rule: any, value: string, callback: any):void => {
  value !== registerForm.password ? callback("两次密码不相同"):callback()
}
const rules: FormRules = {
  username: [
    { required: true, message: "请输入账户", trigger: "blur" }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" }
  ],
  checkPassword: [
    { validator: checkPassword }
  ]
}
const registerAction = ():void => {
  ElMessage.error({message: "没有注册功能，请使用测试账号进行登录",duration:4000})
  router.push("/login")
}
</script>

<style lang="less" scoped>
@import "@/styles/minix.less";
@import "@/styles/element_ui.less";

.toggle-dark {
  .toggleDark();
}

.register-form {
  position: absolute;
  top: 50%;
  right: 150px;
  width: 400px;
  transform: translateY(-50%);
  .register-text {
    font-weight: bold;
    font-size: 22px;
    text-align: center;
  }
  el-form-item {
    margin-bottom: 30px;
  }
  .username {
    margin-bottom: 30px;
  }
  .password {
    margin-top: 30px;
  }
  .check-password {
    margin-bottom: 30px
  }
  .other-link {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 30px;
  }
  .register-btn {
    width: 100%;
  }
}
</style>
