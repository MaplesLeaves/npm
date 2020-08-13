<!--
 * @Author: your name
 * @Date: 2020-08-11 14:45:17
 * @LastEditTime: 2020-08-13 17:15:13
 * @LastEditors: Please set LastEditors
 * @Description: 箭头模板
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\npm\src\views\arrows\arrows.vue
-->
<template>
  <div class="arrows">
    <span class="arrowsList" :style="{color: color}" :class="{item:item}" v-for="item in data" :key="item">距离结束还有10天</span>
  </div>
</template>

<script>
export default {
  name: "arrows",
  data() {
    return {
      num: 10,
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    color: {
        type: String,
        default:()=>"white"
    },
    backCol: {
        type: String,
        default: ()=>'#dc5947'
    }
  },
  watch: {
    backCol: {
      handler(val) {
        document.body.style.setProperty("--color", val);
      },
      deep: true,
      immediate: true,
    },
  },
  created() {},
};
</script>

<style lang='less' scoped>
.arrowsList {
  position: relative;
  display: inline-block;
  margin-right: 16px;
  padding: 0 10px;
  height: 32px;
  line-height: 32px;
  background: var(--color);
  font-size: 16px;
}
.item {
  margin-left: 10px;
}
.arrowsList::before {
  position: absolute;
  top: 0;
  left: -16px;
  border-width: 16px 16px 16px 0;
  border-style: solid;
  border-color: transparent var(--color) transparent transparent;
  content: "";
}

.arrowsList::after {
  position: absolute;
  top: 0;
  right: -16px;
  border-width: 16px 16px 16px 0;
  border-style: solid;
  border-color: var(--color) transparent var(--color) var(--color);
  content: "";
}
</style>