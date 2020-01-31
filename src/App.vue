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
  font-family: "M PLUS Rounded 1c"
}
</style>
