<template>
  <div @click="selectItem(item, index)" class="app-page-content">
    <div :style='"position: relative;"+(select?"":"display:none")' v-if="close">
      <i class="el-icon-circle-close close" @click="handleRemoveComponents"></i>
    </div>
    <div :class="'body '+(select?'select':'')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shop-app-page-components',
    props: ['select', 'close', 'index', 'item'],
    methods: {
      handleRemoveComponents() {
        this.$confirm('此操作将删除该组件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$emit('handleRemove')
        }).catch(() => {
        })
      },
      selectItem(item, index) {
        this.$store.commit('SELECT_COMPONENT', index + 0)
      }
    }
  }
</script>

<style lang="less">
  .app-page-content {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    display: block;
    position: relative;


    .close {
      font-size: 20px;
      opacity: 0.7;
      position: absolute;
      z-index: 100;
      cursor: pointer;
      right: 3px;
      top: 3px;
    }

    .select:before {
      border: 2px dashed #e96859;
      box-sizing: border-box;
      pointer-events: none;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 20000;
    }

    /*.body:hover {*/
      /*border: 2px dashed #00a0e9;*/
      /*box-sizing: border-box;*/
      /*pointer-events: none;*/
      /*content: "";*/
      /*!*position: absolute;*!*/
      /*width: 100%;*/
      /*height: 100%;*/
      /*!*z-index: 20000;*!*/
    /*}*/


  }
</style>
