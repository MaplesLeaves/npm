<!--
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-07-07 16:58:51
 * @LastEditors:  
 * @LastEditTime: 2021-07-08 14:56:43
-->
<template>
  <div class="mapMenu">
    <menu-tree :list="list"
               :active='active'
               :activeClick='changeActive'></menu-tree>
  </div>
</template>
<script>
import menuTree from './menuTree.vue'
export default {
  name:'mapMenu',
  components: {
    menuTree,
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
    changeActive(type, val) {
      if (type !== 'file') {
        this.$emit('update:active', val.name)
      }
      this.activeClick(type, val)
    },
  },
}
</script>

<style>
</style>