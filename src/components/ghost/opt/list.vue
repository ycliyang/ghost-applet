<template>
  <div class="app-components-list">
    <el-card>
      <div slot="header">
        页面组件 点击立即加入页面
      </div>
      <el-button size="small" type="success" plain v-for="(item,index) in cpts" :key="index"
                 @click.stop="handleAddComponents(item,index)">
        {{item.title}}
      </el-button>
    </el-card>
  </div>
</template>

<script>

  import { cpts } from '../index.js'

  export default {
    name: 'app-shop-components-list',
    data() {
      return {
        cpts: cpts
      }
    },
    mounted() {

    },
    methods: {
      handleAddComponents(item, index) {
        console.log('handleAddComponents', item)
        this.$emit('handleAddComponents', item)
      }
    }
  }
</script>

<style lang="less">

  .app-components-list {
    min-width: 300px;
    margin-top: 20px;
    button {
      margin-left: 5px !important;
      margin-right: 5px !important;
      margin-top: 3px !important;
      margin-bottom: 3px !important;
    }
  }

</style>
