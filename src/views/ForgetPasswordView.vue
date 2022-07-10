<template>
  <div>
    <MyParticles />
  </div>
  <div class="toggle-dark">
    <ToggleDark />
  </div>

  <div class="modify-password-form">
    <div class="modify-password-text"><span>修改密码</span></div>
    <div class="modify-password-username">
      <el-input
        v-model="username"
        clearable
        :prefix-icon="User"
        placeholder="用户名"></el-input>
    </div>
    <div class="phone">
      <el-input
        v-model="phone"
        clearable
        type="tel"
        :prefix-icon="Iphone"
        placeholder="手机号"></el-input>
    </div>

    <div class="captcha-wrap">
      <div class="captcha">
        <el-input placeholder="短信验证码"></el-input>
      </div>
      <div class="captcha-btn">
        <el-button
          :disabled="isSend"
          @click="sendCaptcha"
          >{{ captchaBtnText }}</el-button
        >
      </div>
    </div>
    <div class="new_password">
      <el-input
        v-model="newPassword"
        clearable
        show-password
        :prefix-icon="Lock"
        placeholder="新密码"></el-input>
    </div>
    <div class="check-password">
      <el-input
        v-model="checkPassword"
        clearable
        show-password
        :prefix-icon="Lock"
        placeholder="确认密码"></el-input>
    </div>
    <div class="other-link">
      <LoginLink />
    </div>
    <div>
      <el-button type="primary" round size="large">确认</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElInput, ElButton, } from "element-plus"
import { User, Lock, Iphone } from '@element-plus/icons-vue'
import { ref } from "vue"
import ToggleDark from "@/components/ToggleDark.vue"
import MyParticles from "@/components/MyParticles.vue"
import LoginLink from "@/components/LoginLink.vue"
import useSendCaptcha from "@/hooks/useSendCaptcha"

const username = ref("")
const phone = ref("")
const newPassword = ref("")
const checkPassword = ref("")
const isSend = ref(false)
const captchaBtnText = ref("发送验证码")
 const sendCaptcha = useSendCaptcha(isSend,captchaBtnText)
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

  >div {
    margin-bottom: 20px;
  }

  .modify-password-text {
    font-weight: bold;
    font-size: 22px;
    text-align: center;
  }

  .modify-password-username {}

  .phone {}

  .captcha-wrap {
    display: flex;

    .captcha {
      flex: 2;
      margin-right: 10px;
    }

    .captcha-btn {
      flex:1
    }
  }

  .new_password {}

  .check-password {}

  .other-link {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
