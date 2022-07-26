<template>
  <div class="header-wrap">
    <div class="website-info header-left" @click="toHome">
      <div class="website-logo">
        <img
          src="../../images/logo.svg"
          alt="网站logo"
          srcset=""
          width="50"
          height="50" />
      </div>
      <div class="website-name">Vue Admin</div>
    </div>
    <div class="header-right">
      <div class="search-container">
        <Search />
      </div>
      <div class="avatar-container">
        <Avatar />
      </div>
      <ToggleDark />
      <div class="logout-container">
        <Logout />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import Search from './Search/index.vue'
import ToggleDark from '@/components/ToggleDark.vue'
import Avatar from './Avatar/index.vue'
import Logout from './Logout/index.vue'

const router = useRouter()
const toHome = () => {
  router.push("/dashboard")
}
</script>

<style lang="less" scoped>
@import "@/styles/minix.less";

.header-wrap {
  .flex-center();
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;


  .header-left.website-info {
    .flex-center();
    cursor: pointer;
    .website-name {
      margin-left: 6px;
      font-weight: 700;
      font-size: 22px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
    }

  }

  .header-right {
    .flex-center();
    .avatar-container {
      margin-left:15px;
    }
    .logout-container {
  margin-left:15px;
    }
  }
}
</style>
