<!--
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-07-01 17:57:59
 * @LastEditors:  
 * @LastEditTime: 2021-07-06 17:11:29
-->
<template>
  <div class="itemTree">
    <div class="itemTitle"
    @click="handClick"
         :class=" treeVal.name === name ? 'active' : ''"
         :ref=" treeVal.name === name ? 'active' : ''">
         {{treeVal.name}} 
            <i v-if="treeVal.child" :class="!isShow ? 'rightActive': ''" class="el-icon-arrow-down direction"></i>
            </div>
            <el-collapse-transition>
    <div v-show="treeVal.child && isShow">
      <menu-tree :list='treeVal.child'
                 @showItem='showItem'
                 :name='name'></menu-tree>

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
    name: {
      type: String,
      default: '',
    },
  },
  watch: {
    name: {
      handler(val) {
        let isTrue = this.treeVal.name === val
        if (isTrue) {
          this.$emit('showItem')
          this.$nextTick(() => {
            console.error(
              this.$refs.active.scrollIntoView({
                behavior: 'smooth', // 平滑过渡
                block: 'start',
              })
            )
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
    background: skyblue;
    border-bottom: 1px solid white;
  }
}
.rightActive{
  transform: rotate(-90deg);
  transition:  all .5s;
}
.direction{
  transition:  all .5s;
  color: white;
}
</style>