<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  margin: auto;
  max-width: 1000px;
  color: #333333;
  font-family: "Amiko", "Helvetica", "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", YuGothic, "a-otf-midashi-go-mb31-pr6n", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;

}
</style>
