<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
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

<style>
#app {
  margin: auto;
  color: #333333;
  overflow: hidden;
  font-family: "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", YuGothic, "a-otf-midashi-go-mb31-pr6n", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}
</style>
