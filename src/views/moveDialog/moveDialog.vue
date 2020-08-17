<!--
 * @Author: your name
 * @Date: 2020-08-14 10:58:59
 * @LastEditTime: 2020-08-14 19:45:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\npm\src\views\moveDialog\moveDialog.vue
-->
<template>
  <div class="moveDialog" ref="move"  :style="{
      top: top + 'px',
      left: left + 'px',
      
  }" v-drag v-if="visible">
    <header :style="{background: backCol}">
      <span>标题</span>
      <i @click="close">X</i>
    </header>
    <slot>ahfadsfh</slot>
  </div>
</template>

<script>
export default {
  name: "moveDialog",
  props: {
    top: {
        type: [String, Number],
        default: ()=>'100'
    },
    left: {
        type: String || Number,
        default: ()=>'10'
    },
    backCol: {
      type: String,
      default: () => "skyblue",
    },
    title: {
      type: String,
      default: () => "标题",
    },
    visible: {
      type: Boolean,
      default: () => false,
    },
  },
  directives: {
    drag: (val) => {
      val.onmousedown = (event) => {
        let isNext = event.target.nodeName.toLowerCase() === "header";
        if (!isNext) return false;
        let maxWidth = window.innerWidth;
        let maxheight = window.innerHeight;        
        let nodeWidth = val.offsetWidth;
        let nodeHeight = val.offsetHeight;
        let x = event.offsetX;
        let y = event.offsetY;
        let vnode = val.style;
        document.onmousemove = (e) => {
          e.preventDefault();
          let clientX = e.clientX - x;
          let clientY = e.clientY - y;
          if (clientX < 0) {
            vnode.left = 0 + "px";
          } else if (clientX + nodeWidth > maxWidth) {
            vnode.left = maxWidth - nodeWidth + "px";
          } else {
            vnode.left = clientX + "px";
          }
          if (clientY < 0) {
            vnode.top = 0 + "px";
          } else if (clientY + nodeHeight > maxheight) {
            vnode.top = maxheight - nodeHeight + "px";
          } else {
            vnode.top = clientY + "px";
          }
          
        };
        document.onmouseup = () => (document.onmousemove = null);
      };
    },
  },
  methods: {
    close() {
      this.$emit("close", false);
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang='less' scoped>
.moveDialog {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  min-width: 300px;
  background: white;
  > header {
    display: flex;
    justify-content: space-between;
    background: blueviolet;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
  }
}
</style>