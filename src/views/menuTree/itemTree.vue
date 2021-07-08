<!--
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-07-01 17:57:59
 * @LastEditors:  
 * @LastEditTime: 2021-07-08 14:54:34
-->
<template>
  <div class="itemTree">
    <div class="itemTitle"
         @click="handClick"
         :class="treeVal.name === active ? 'active' : ''"
         :ref=" treeVal.name === active ? 'active' : ''">
      {{treeVal.name}}
      <i v-if="treeVal.child"
         :class="!isShow ? 'rightActive': ''"
         class="el-icon-arrow-down direction"></i>
    </div>
    <el-collapse-transition>
      <div v-show="treeVal.child && isShow">
        <menu-tree :list='treeVal.child'
                   @showItem='showItem'
                   :activeClick='activeClick'
                   :active='active'></menu-tree>

      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
// import menuTree from './menuTree.vue'
export default {
  name: 'itemTree',
  data() {
    return {
      isShow: false,
    }
  },
  components: {
    menuTree: () => import('./menuTree.vue'),
  },
  props: {
    treeVal: {
      type: Object,
      default() {
        return {}
      },
    },
    active: {
      type: [String || Number],
      default: null,
    },
    activeClick: {
      type: Function,
      default: () => {},
    },
  },
  watch: {
    active: {
      handler(val) {
        let isTrue = this.treeVal.name === val
        if (isTrue) {
          this.$emit('showItem')
          this.$nextTick(() => {
            this.$refs.active.scrollIntoView({
              behavior: 'smooth', // 平滑过渡
              block: 'start',
            })
          })
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    showItem() {
      this.$emit('showItem')
      this.isShow = true
    },
    handClick() {
      this.isShow = !this.isShow

      if (this.treeVal.child) {
        this.activeClick('file', this.treeVal)
      } else {
        this.activeClick('item', this.treeVal)
      }
    },
  },
}
</script>
<style lang='less' scoped>
.itemTree {
  width: 100%;
  .itemTitle {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 10px;
    background: rgb(84, 92, 100);
    border-bottom: 1px solid white;
    color: white;
    &:hover {
      background: #303133;
      color: rgb(255, 208, 75);
      border-color: rgb(255, 208, 75);
    }
  }
  .active {
    background: #303133;
    color: rgb(255, 208, 75);
    border-color: rgb(255, 208, 75);
  }
}
.rightActive {
  transform: rotate(-90deg);
  transition: all 0.5s;
}
.direction {
  transition: all 0.5s;
  color: white;
}
</style>