<template>
  <div>
    <MyParticles />
  </div>
  <div class="toggle-dark">
    <ToggleDark />
  </div>

  <div class="modify-password-form">
    <div class="modify-password-text"><span>修改密码</span></div>
    <el-form :model="forgetPasswordForm" :rules="forgetPasswordFormRules">
      <el-form-item class="modify-password-username" prop="username">
        <el-input
          v-model="forgetPasswordForm.username"
          clearable
          :prefix-icon="User"
          placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item class="phone" prop="phone">
        <el-input
          v-model="forgetPasswordForm.phone"
          clearable
          type="tel"
          :prefix-icon="Iphone"
          placeholder="手机号">
        </el-input>
      </el-form-item>
      <el-form-item class="captcha-wrap" prop="captchaCode">
        <div class="captcha">
          <el-input
            placeholder="短信验证码"
            v-model="forgetPasswordForm.captchaCode"></el-input>
        </div>
        <div class="captcha-btn">
          <el-button
            :disabled="forgetPasswordForm.isSend"
            @click="sendCaptcha"
            >{{ captchaBtnText }}</el-button
          >
        </div>
      </el-form-item>

      <el-form-item class="new_password" prop="newPassword">
        <el-input
          v-model="forgetPasswordForm.newPassword"
          clearable
          show-password
          :prefix-icon="Lock"
          placeholder="新密码"></el-input>
      </el-form-item>

      <el-form-item class="check-password" prop="checkPassword">
        <el-input
          v-model="forgetPasswordForm.checkPassword"
          clearable
          show-password
          :prefix-icon="Lock"
          placeholder="确认密码"></el-input>
      </el-form-item>
    </el-form>

    <div class="other-link">
      <LoginLink />
    </div>
    <div>
      <el-button type="primary" round size="large" @click="modifyPassword"
        >确认</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElInput, ElButton, FormRules, ElForm, ElFormItem,ElMessage } from "element-plus"
import { User, Lock, Iphone } from '@element-plus/icons-vue'
import { reactive, ref } from "vue"
import {useRouter} from 'vue-router'
import ToggleDark from "@/components/ToggleDark.vue"
import MyParticles from "@/components/MyParticles.vue"
import LoginLink from "@/components/LoginLink.vue"
import {useSendCaptcha} from "@/hooks"

const router = useRouter()
const forgetPasswordForm = reactive({ username: "", phone: "", newPassword: "", checkPassword: "", isSend: false, captchaCode: "" })
const captchaBtnText = ref("发送验证码")
const sendCaptcha = useSendCaptcha(forgetPasswordForm.isSend, captchaBtnText)
const validatePassword = (rule: any, value: string, callback: any):void => {
  value !== forgetPasswordForm.newPassword ? callback("两次密码不相同"):callback()
}
const forgetPasswordFormRules: FormRules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" }
  ],
  phone: [
    { required: true, message: "请输入手机号", trigger: "blur" }
  ],
  newPassword: [
    { required: true, message: "请输入新密码", trigger: "blur" }
  ],
  checkPassword: [
    {validator:validatePassword}
  ],
  captchaCode: [
    { required: true, message: "请输入短信验证码", trigger: "blur" }
  ]
}
const modifyPassword = () => {
  ElMessage.error({message: "没有修改功能，请使用测试账号进行登录",duration:4000})
  router.push("/login")
}
</script>

<style lang="less" scoped>
@import "@/styles/minix.less";
@import "@/styles/element_ui.less";

.el-button {
  height: 100%;
}

.toggle-dark {
  .toggleDark();
}

.modify-password-form {
  position: absolute;
  top: 50%;
  right: 150px;
  width: 400px;
  transform: translateY(-50%);
  .modify-password-text {
    font-weight: bold;
    font-size: 22px;
    text-align: center;
  }
  .modify-password-username {
    margin-bottom: 30px;
  }
  .phone {
    margin-bottom: 30px;
  }
  .captcha-wrap {
    display: flex;
    margin-bottom: 30px;
    .captcha {
      flex: 2;
      margin-right: 10px;
    }
    .captcha-btn {
      flex: 1
    }
  }
  .new_password {
    margin-bottom: 30px;
  }
  .check-password {
    margin-bottom: 30px;
  }
  .other-link {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
