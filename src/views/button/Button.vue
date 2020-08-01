<!--
 * @Author: your name
 * @Date: 2020-07-31 13:28:15
 * @LastEditTime: 2020-07-31 15:15:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steven\src\views\Button.vue
--> 
<template>
  <button :class="[`leave-${type}`, 'leave-button', `leave-${size}`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: () => "success",
    },
    /**
     * @description: 大小描述
     * @param {type}  // medium / small / mini
     * @return:
     */

    size: {
      type: String,
      default: () => "small",
    },
  },
};
</script>

<style lang='less' scoped>
.leave-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
}
.leave-success {
  background: #409eff;
  color: white;
  border-color: #409eff;
  &:hover {
    background: rgba(64, 158, 255, 0.5);
    border-color: rgba(64, 158, 255, 0.5) !important;
  }
}
.leave-mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.leave-small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.leave-mediu {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>