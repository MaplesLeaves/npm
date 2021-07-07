<!--
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-07-07 16:58:51
 * @LastEditors:  
 * @LastEditTime: 2021-07-07 17:40:40
-->
<template>
  <div class="test">
    <menu-tree :list="list"
               :active='active'
               :activeClick='changeActive'></menu-tree>
  </div>
</template>
<script>
import menuTree from './menuTree.vue'
export default {
  components:{
    menuTree
  },
  props: {
    list: {
      type: Array,
      default: [],
    },
    activeClick: {
      type: Function,
      default: () => {},
    },
    active: {
      type: [String || Number],
      default: null,
    },
  },
  methods: {
    changeActive(type, val){ 
      if (type !== 'file') {
        console.error(val)
          this.$emit('update:active', val.name)
      }
    this.activeClick(type, val)
    },
    updateVal(value) {
      this.$emit('update:name', this.name + 1)
    },
  },
}
</script>

<style>
</style>