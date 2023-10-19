<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 在 Home、Search 显示，在 Login、Register 隐藏 -->
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style></style>
