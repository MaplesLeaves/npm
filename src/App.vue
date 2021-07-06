<!--
 * @Author: your name
 * @Date: 2020-07-31 13:25:23
 * @LastEditTime: 2021-07-06 14:27:05
 * @LastEditors:  
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steven\src\App.vue
--> 
<template>
  <div id="app">
    <!-- <imageHover >
    </imageHover>
    <headerBar leftText='fdjasklas11' rightText='fdasfda22'>
      <div>
        打飞机卡死了
      </div>
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
    <special-button type="neon" text="测试1" color='red'></special-button>
    <special-button type="draw" text="测试2" ></special-button>
    <special-button type="circle">
    </special-button>
    <special-button
      type="frozen"
      text="测试3"
      :hoverCol="{
        startCol: 'red',
        endCol: 'green',
        shadowCol: 'yellow'
      }"
    ></special-button>
    <draw-button color='skyblue'  />
    <frozen-button />
    <a-button>
      fadsdfjalk 
    </a-button> -->
    <input type="text" name="" v-model='val' id="">
    <special-button @click="clickO">
      fdsafa
    </special-button>
    <div class="list">
      <menu-tree :list="data" :name='userName'></menu-tree>
    </div>
    
  </div>
</template>

<script>

import imageHover from "./views/imageHover/imageHover.vue";
import headerBar from "./views/headerBar/headerBar.vue";
import arrows from "./views/arrows/arrows.vue";
import ribbon from "./views/ribbon/ribbon.vue";
import moveDialog from "./views/moveDialog/moveDialog.vue";
import specialButton from "./views/specialButton/specialButton.vue";
import menuTree from "./views/menuTree/menuTree.vue";


export default {
  name: "App",
  components: {
    imageHover,
    headerBar,
    arrows,
    ribbon,
    moveDialog,
    specialButton,
    menuTree
  },
  data() {
    return {
      show: true,
      list: ["zhang", "das", "dasfa"],
      userName: 'wangwu',
      val:'',
      data:[
        {
          name: 'zhangsan',
          child:[
            {
              name: '里斯'
            }
          ]
        },
        {
          name: 'zhangsan2',
          child:[
            {
              name: '里斯2'
            }
          ]
        },
        {
          name: 'zhangsan3',
          child:[
            {
              name: '里斯3',
              child: [
                {
                  name:'lisi',
                  child:[
                    {
                      name: 'wangwu'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'zhangsan3',
          child:[
            {
              name: '里斯3',
              child: [
                {
                  name:'lisi',
                  child:[
                    {
                      name: 'wangwu'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'zhangsan3',
          child:[
            {
              name: '里斯3',
              child: [
                {
                  name:'lisi',
                  child:[
                    {
                      name: 'wangwu'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'zhangsan3',
          child:[
            {
              name: '里斯3',
              child: [
                {
                  name:'lisi',
                  child:[
                    {
                      name: 'wangwu'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'zhangsan4',
          child:[
            {
              name: '里斯4'
            }
          ]
        }
      ]
    };
  },
  methods:{
    clickO(){
      console.error('fasdf')
      this.userName = this.val
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .list{
    // height: 150px;
    // overflow-y: auto;
  }
}
</style>
