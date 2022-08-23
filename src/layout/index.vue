<template>
  <header>
    <Header />
  </header>
  <section class="section">
    <aside class="slide-bar">
      <Menu class="slide-menu" />
    </aside>
    <main class="app-main">
      <router-view></router-view>
    </main>
  </section>
</template>

<script lang="ts" setup>
import Menu from './SlideBar/index.vue'
import Header from './Header/index.vue'
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";
header {
  width: 100%;
  // background-color:@headerBg;
  // height: 150px;
  border-bottom: 1px solid #ccc;
}
.section {
  display: flex;
  .slide-bar {
    .slide-menu {
      width: @sideBarWidth;
    }
  }
  .app-main {
    flex:1
  }
}
</style>
