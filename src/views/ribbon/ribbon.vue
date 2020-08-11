<!--
 * @Author: your name
 * @Date: 2020-08-11 15:13:17
 * @LastEditTime: 2020-08-11 15:29:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\npm\src\views\ribbon\ribbon.vue
-->
<template>
  <div class="ribbon" :style="{color}">
    <span>
      <slot>{{text}}</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "ribbon",
  props: {
    backCol: {
      type: String,
      default: () => "#dc5947",
    },
    color: {
      type: String,
      default: () => "white",
    },
    text: {
      type: String,
      default: () => "dasfadf",
    },
  },
  watch: {
    backCol: {
      handler(val) {
        console.error(val);
        document.body.style.setProperty("--ribbon", val);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang='less' scoped>
.ribbon {
  position: relative;
  display: inline-block;
  margin-top: 30px;
}

.ribbon span {
  position: relative;
  z-index: 2;
  display: inline-block;
  padding: 0 15px;
  height: 32px;
  line-height: 32px;
  background-color: var(--ribbon);

  font-size: 16px;
  box-shadow: 0 10px 6px -9px rgba(0, 0, 0, 0.6);
}

.ribbon span::before,
.ribbon span::after {
  position: absolute;
  bottom: -6px;
  border-width: 3px 5px;
  border-style: solid;
  content: "";
}

.ribbon span::before {
  left: 0;
  border-color: #972f22 #972f22 transparent transparent;
}

.ribbon span::after {
  right: 0;
  border-color: #972f22 transparent transparent #972f22;
}

.ribbon::before,
.ribbon::after {
  position: absolute;
  top: 6px;
  content: "";
  border-style: solid;
  border-color: var(--ribbon);
}

.ribbon::before {
  left: -32px;
  border-width: 16px 26px 16px 16px;
  border-left-color: transparent;
}

.ribbon::after {
  right: -32px;
  border-width: 16px 16px 16px 26px;
  border-right-color: transparent;
}
</style>