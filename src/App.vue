<!--
 * @Author: your name
 * @Date: 2020-07-31 13:25:23
 * @LastEditTime: 2020-08-04 17:04:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steven\src\App.vue
--> 
<template>
  <div id="app">
    <Button>fjdasf</Button>
    <imageHover />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import imageHover from './views/imageHover/imageHover.vue'

export default {
  name: 'App',
  components: {
    imageHover
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
