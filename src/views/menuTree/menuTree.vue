<!--
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-07-01 17:43:25
 * @LastEditors:  
 * @LastEditTime: 2021-07-07 17:31:18
-->
<template>
  <div class="meuTree">
    <ul>
      <li v-for="(item, index) in list"
          :key="index">
        <itemTree :treeVal="item"
                  :active='active'
                  :activeClick='activeClick'
                  @showItem='$emit("showItem")'>
        </itemTree>
      </li>
    </ul>
  </div>
</template>

<script>
// import itemTree from
export default {
  name: 'menuTree',
  data() {
    return {}
  },
  components: {
    itemTree: () => import('./itemTree.vue'),
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
    active: {
        type: [String || Number],
      default: null,
    },
    activeClick:{
      type: Function,
      default:()=>{}
    }
  },
  watch: {
    active: {
      handler(val) {
        let isTrue = this.list.some((item) => {
          return item.name === val
        })
        if (isTrue) {
          this.$emit('showItem')
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    handClick() {
      this.isShow = !this.isShow
    },
  },
}
</script>
<style lang='less' scoped>
.meuTree {
  background: red;
  width: 100%;
  box-sizing: border-box;
  ul {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    li{
      width: 100%;
    }
  }
}
</style>