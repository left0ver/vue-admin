<template>
  <div>
    <MyParticles />
  </div>
  <div class="toggle-dark">
    <ToggleDark />
  </div>

  <div class="register-form">
    <div class="register-text"><span>注册</span></div>
    <div class="username">
      <el-input
        :prefix-icon="User"
        placeholder="用户名"
        clearable
        v-model="username"></el-input>
    </div>
    <div class="password">
      <el-input
        show-password
        :prefix-icon="Lock"
        placeholder="密码"
        clearable
        v-model="password"></el-input>
    </div>
    <div class="check-password">
      <el-input
        show-password
        :prefix-icon="Lock"
        placeholder="确认密码"
        clearable
        v-model="checkPassword"></el-input>
    </div>
    <div class="other-link">
      <div class="login-link" @click="()=>router.push('/login')">
        <span>登录</span>
        <span>
          <el-icon style="vertical-align: middle"><ArrowRight /></el-icon
        ></span>
      </div>
    </div>
    <div class="register-btn">
      <el-button type="primary" size="large" round>注册</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElInput, ElButton,ElIcon } from "element-plus"
import { User, Lock,ArrowRight } from '@element-plus/icons-vue'
import { ref } from "vue"
import { useRouter } from "vue-router"
import ToggleDark from "@/components/ToggleDark.vue"
import MyParticles from "@/components/MyParticles.vue"

const router =useRouter()
const username = ref("")
const password = ref("")
const checkPassword = ref("")
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
.register-form {
  position:absolute;
  top: 50%;
  right: 150px;
  width: 250px;
  height: 200px;
  transform: translateY(-50%);
  > div {
    margin-bottom:20px;
  }
  .register-text {
    font-weight: bold;
    font-size: 22px;
    text-align: center;
  }
  .username {

  }
  .password {}
  .check-password {}
  .other-link {
    display:flex;
    flex-direction: row-reverse;
    color:#29B6F6;
    .login-link {
      cursor: pointer;
    }
  }

  .register-btn {
    width: 100%;
  }
}
</style>
