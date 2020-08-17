<!--
 * @Author: your name
 * @Date: 2020-07-31 13:25:23
 * @LastEditTime: 2020-08-14 16:00:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steven\src\App.vue
--> 
<template>
  <div id="app">
    <Button>fjdasf</Button>
    <imageHover >
      <!-- <span style="font-size: 16px">safhdsa</span> -->
    </imageHover>
    <headerBar leftText='fdjasklas11' rightText='fdasfda22'>
    </headerBar>
    <arrows  color="yellow" backCol="green" :data='list'/>
    <ribbon color="yellow" backCol="green">
      asdfhjkash
    </ribbon>
    <moveDialog :visible.sync='show' left='200' top="50">
      fdasgdhfasgfafas
      <br>
      ahfjkdashfjkas
    </moveDialog>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import imageHover from './views/imageHover/imageHover.vue'
import headerBar from './views/headerBar/headerBar.vue'
import arrows from './views/arrows/arrows.vue'
import ribbon from './views/ribbon/ribbon.vue'
import moveDialog from './views/moveDialog/moveDialog.vue'


export default {
  name: 'App',
  components: {
    imageHover,
    headerBar,
    arrows,
    ribbon,
    moveDialog
  },
  data(){
    return {
      show: true,
      list: [
        'zhang',
        'das',
        'dasfa'
      ]
    }
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
