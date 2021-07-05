<!--
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-07-01 17:57:59
 * @LastEditors:  
 * @LastEditTime: 2021-07-05 16:51:58
-->
<template>
  <div class="itemTree">
    <div class="itemTitle"
         :class=" treeVal.name === name ? 'active' : ''"
         :ref=" treeVal.name === name ? 'active' : ''">{{treeVal.name}} <span v-if="treeVal.child"
            @click="handClick">></span></div>
    <div v-show="treeVal.child && isShow">
      <menu-tree :list='treeVal.child'
                 @showItem='showItem'
                 :name='name'></menu-tree>

    </div>
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
<style lang='less'>
.itemTree {
  margin-bottom: 10px;
  .itemTitle {
    margin-bottom: 10px;
  }
}
</style>