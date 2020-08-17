<!--
 * @Author: your name
 * @Date: 2020-08-17 10:32:05
 * @LastEditTime: 2020-08-17 16:57:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\npm\src\views\specialButton\specialButton.vue
-->
<template>
  <div :class="type" v-if="text">
    <div class="btn-container">
      <!-- <solt></solt> -->
      <slot></slot>
      <button :style="{'--lienCol': color, '--startCol': hoverCol.startCol,'--endCol': hoverCol.endCol,'--shadowCol': hoverCol.shadowCol}"  @click="clickMe">{{text}}</button>
    </div>
  </div>
</template>

<script>
export default {
  naem: "specialButton",
  props: {
    type: {
      type: String, // [neon, draw, circle, frozen]
      default: () => "",
    },
    color: {
      type: String,
      default: () => "",
    },
    hoverCol: {
      type: Object,
      default: () => {
        return {
          startCol: "pink",
          endCol: "orange",
          shadowCol: "rgba(49, 196, 190, 0.75)",
        };
      },
    },
    text: {
      type: String || Number,
      default: () => "fd",
    },
  },
  methods: {
    clickMe() {
      this.$emit("click");
    },
  },
};
</script>

<style lang='less' scoped>
.neon {
  display: inline-block;
  button {
    border: 1px solid var(--lienCol);
    outline: none;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 12px;
    padding: 5px 10px;
    font-weight: 300;
    color: var(--lienCol);
  }
  button:hover {
    color: white;
    background-color: var(--lienCol);
    -webkit-box-shadow: 10px 10px 99px 6px var(--lienCol);
    -moz-box-shadow: 10px 10px 99px 6px var(--lienCol);
    box-shadow: 10px 10px 99px 6px var(--lienCol);
  }
}
.frozen {
  display: inline-block;
  button {
    border: 0;
    margin: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 20px;
    border-radius: 50px;
    color: white;
    outline: none;
    position: relative;
  }
  button:before {
    content: "";
    display: block;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.4) 50%
    );
    background-size: 210% 100%;
    background-position: right bottom;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 50px;
    transition: all 1s;
    -webkit-transition: all 1s;
  }
  button {
    background-image: linear-gradient(to right, var(--startCol), var(--endCol));
    box-shadow: 0 4px 15px 0 var(--shadowCol);
  }
  button:hover:before {
    background-position: left bottom;
  }
}
.draw {
  display: inline-block;
  button {
    border: 0;
    background: none;
    text-transform: uppercase;
    color: var(--lienCol);
    font-weight: bold;
    position: relative;
    outline: none;
    padding: 10px 20px;
    box-sizing: border-box;
  }

  button::before,
  button::after {
    box-sizing: inherit;
    position: absolute;
    content: "";
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  button::after {
    bottom: 0;
    right: 0;
  }

  button::before {
    top: 0;
    left: 0;
  }

  button:hover::before,
  button:hover::after {
    width: 100%;
    height: 100%;
  }

  button:hover::before {
    border-top-color: var(--lienCol);
    border-right-color: var(--lienCol);
    transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
  }

  button:hover::after {
    border-bottom-color: var(--lienCol);
    border-left-color: var(--lienCol);
    transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,
      height 0.3s ease-out 1s;
  }
}
.circle {
  display: inline-block;
  button {
    position: relative;
    outline: none;
    border: 0;
    border-radius: 50px;
    color: white;
    background: var(--shadowCol);
    padding: 15px 20px 16px 60px;
    text-transform: uppercase;
    background: linear-gradient(
      to right,
      var(--startCol) 50%,
      var(--endCol) 50%
    );
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 2s ease;
  }
  button:hover {
    background-position: left bottom;
  }
}
</style>