<!--
 * @Author: your name
 * @Date: 2020-08-11 13:37:29
 * @LastEditTime: 2020-08-11 14:13:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\npm\src\views\headerBar\headerBar.vue
-->
<template>
  <div class="headerBar" style=" height: 200px;" :style="{background: color}">
    <div class="left">
      <span>{{leftText}}</span>
    </div>
    <div class="right">
      <span>{{rightText}}</span>
    </div>
    <slot>
      
    </slot>
  </div>
</template>

<script>
export default {
  name: "headerBar",
  props: {
    color: {
      type: String,
      default: () => "#eee",
    },
    leftText: {
      type: String,
      default: () => "fdasfa",
    },
    rightText: {
      type: String,
      default: () => "fdasfda",
    },
  },
};
</script>

<style lang='less' scoped>
.headerBar {
  position: relative;

  .left {
    width: 200px;
    height: 140px;
    position: absolute;
    top: -8px;
    left: -8px;
    overflow: hidden;
  }

  .left::before {
    position: absolute;
    left: 124px;
    border-radius: 8px 8px 0 0;
    width: 16px;
    height: 8px;
    background-color: #972f22;
    content: "";
  }

  .left::after {
    position: absolute;
    left: 0;
    top: 124px;
    border-radius: 0 8px 8px 0;
    width: 8px;
    height: 16px;
    background-color: #972f22;
    content: "";
  }

  .left span {
    display: inline-block;
    text-align: center;
    width: 200px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 30px;
    left: -50px;
    z-index: 2;
    overflow: hidden;
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    border: 1px dashed #fff;
    box-shadow: 0 0 0 3px #dc5947, 0 14px 7px -9px rgba(0, 0, 0, 0.6);
    background-color: #dc5947;
    color: #fff;
  }
  .right {
    width: 140px;
    height: 200px;
    position: absolute;
    top: -8px;
    right: -8px;
    overflow: hidden;
  }

  .right::before {
    position: absolute;
    right: 124px;
    border-radius: 8px 8px 0 0;
    width: 16px;
    height: 8px;
    background-color: #972f22;
    content: "";
  }

  .right::after {
    position: absolute;
    right: 0;
    top: 124px;
    border-radius: 0 8px 8px 0;
    width: 8px;
    height: 16px;
    background-color: #972f22;
    content: "";
  }

  .right span {
    display: inline-block;
    text-align: center;
    width: 200px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 30px;
    right: -50px;
    z-index: 2;
    overflow: hidden;
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    border: 1px dashed #fff;
    box-shadow: 0 0 0 3px #dc5947, 0 14px 7px -9px rgba(0, 0, 0, 0.6);
    background-color: #dc5947;
    color: #fff;
  }
}
</style>