<!--
 * @Author: your name
 * @Date: 2020-08-04 16:03:42
 * @LastEditTime: 2020-08-13 17:32:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\npm\src\views\imageHover\imageHover.vue
-->
<template>
  <div class="imageHover">
    <div style="max-width:1366px;margin:0 auto;">
      <div
        class="photo_item"
        
        @mouseenter="(event)=>imgEventHandle(event,true)"
        @mouseleave="(event)=>imgEventHandle(event,false)"
      >
        <div class="photo_mask"></div>
        
        
        <slot>
          <img :src="src" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imageHover",
  props:{
    src: {
      type: String,
      default: () => 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596604739479&di=262e31b19963c9e12b7af1a1c1a0c95e&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg'
    }
  },
  methods: {
    imgEventHandle(event, is_enter) {
      let direction_index;
      const direction_list = ["top", "right", "bottom", "left"];
      const x = event.clientX;
      const y =  event.clientY;
      // 中点坐标
      const rect_dom = event.target.getBoundingClientRect();
      const x0 = rect_dom.left + rect_dom.width / 2;
      const y0 = rect_dom.top + rect_dom.height / 2;
      const k0 = rect_dom.height / rect_dom.width;
      // 当前鼠标点斜率
      const k = (y - y0) / (x - x0);
      if (k <= k0 && k >= -k0) {
        // 左右进出
        direction_index = x >= x0 ? 1 : 3;
      } else {
        // 上下进出
        direction_index = y >= y0 ? 2 : 0;
      }
      direction_list.forEach((item) => {
        event.target.childNodes[0].classList.remove(
          `${is_enter ? "leave" : "enter"}_${item}`
        );
      });
      event.target.childNodes[0].classList.add(
        `${is_enter ? "enter" : "leave"}_${direction_list[direction_index]}`
      );
    },
  },
};
</script>

<style lang="less" scoped>
.imageHover{
  display: inline-block;
  font-size: 0;
}
.photo_item {
  display: inline-block;
  position: relative;
  break-inside: avoid;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 10px 10px 5px #ccc;
  &:hover {
    .photo_mask {
      z-index: 1;
    }
  }
  img {
    width: 100%;
    
  }
  .photo_mask {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    &.enter_top {
      animation: enter-top 0.3s ease-in;
    }
    &.leave_top {
      animation: leave-top 0.3s ease-out;
    }
    &.enter_right {
      animation: enter-right 0.3s ease-in;
    }
    &.leave_right {
      animation: leave-right 0.3s ease-out;
    }
    &.enter_bottom {
      animation: enter-bottom 0.3s ease-in;
    }
    &.leave_bottom {
      animation: leave-bottom 0.3s ease-out;
    }
    &.enter_left {
      animation: enter-left 0.3s ease-in;
    }
    &.leave_left {
      animation: leave-left 0.3s ease-out;
    }
  }
}
@keyframes enter-top {
  0% {
    z-index: -1;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes leave-top {
  0% {
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    z-index: -1;
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes enter-right {
  0% {
    z-index: -1;
    transform: translate3d(100%, 0, 0);
  }
  100% {
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes leave-right {
  0% {
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    z-index: -1;
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes enter-bottom {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes leave-bottom {
  0% {
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    z-index: -1;
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes enter-left {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes leave-left {
  0% {
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    z-index: -1;
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
