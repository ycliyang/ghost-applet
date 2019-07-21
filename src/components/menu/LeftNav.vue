<template>


  <el-menu default-active="1-4-1" class="menu-left-nav"
           @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="0" @click="isCollapse=!isCollapse">
      <span slot="title">{{isCollapse?"展开":"收起"}}</span>
      <i :class='isCollapse?"el-icon-s-unfold":"el-icon-s-fold"'></i>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">菜单列表</span>
    </el-menu-item>
  </el-menu>

</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    name: "MenuLeftNav",
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {}
  })
  export default class LeftNav extends Vue {
  }
</script>

<style lang="scss">
  .menu-left-nav:not(.el-menu--collapse) {
    min-height: 400px;
    width: 200px;
  }
</style>
