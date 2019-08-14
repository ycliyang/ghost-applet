<template>
  <div class="home-space">

    <el-container>

      <el-aside style="background-color: rgb(238, 241, 246);width: auto">
        <menu-left-nav></menu-left-nav>
      </el-aside>
      <el-main>

        <el-header style="height: 51px;padding:0px;line-height: 50px;">
          <menu-top-nav></menu-top-nav>
        </el-header>

      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import MenuLeftNav from "@/components/menu/LeftNav.vue";
  import MenuTopNav from '@/components/menu/TopNav.vue';

  @Component({
    components: {MenuTopNav, MenuLeftNav},
  })
  export default class Home extends Vue {
  }
</script>

<style lang="scss">
  .home-space {
    .el-container {
      height: 100%;
      border: 1px solid #eee
    }
    .el-main{
      padding: 0px;
    }
    .el-header{
      text-align: left;
      display: flex;
      align-items: center;
    }
    .menu-collapse{
      font-size: 30px;
    }
  }
</style>
