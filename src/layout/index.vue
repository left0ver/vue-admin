<template>
  <header>
    <Header />
  </header>
  <aside>
    <Menu />
  </aside>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts" setup>
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
</script>

<style lang="less" scoped>
header {
  width: 95%;
  margin: 0 auto;
  // height: 150px;
}
</style>
