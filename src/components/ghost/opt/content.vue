<template>
  <div class="app-page-comp">

    <div :style='itemModel.style|componentsStyle'>
      <slot name="content"></slot>
    </div>

    <compPopover :selectStatus="select">

      <el-form>
        <el-form-item label="组件背景颜色" v-if="itemModel.style">
          <el-color-picker v-model="itemModel.style.backgroundColor" size="mini"></el-color-picker>
        </el-form-item>
        <app-page-padding v-model="itemModel.style" name="组件"></app-page-padding>
        <slot name="form-base"></slot>
      </el-form>

      <slot name="form-data"></slot>

    </compPopover>

  </div>
</template>

<script>
  import compPopover from './comp-popover.vue'
  import AppPagePadding from './padding'

  export default {
    components: {AppPagePadding, compPopover},
    name: 'shop-app-page-components-base',
    props: ['select', 'itemModel'],
    data() {
      return {}
    },
    watch: {
      itemModel() {
      }
    },
    methods: {}
  }
</script>

<style>
  .app-page-comp {

  }
</style>
