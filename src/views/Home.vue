<template>
  <div class="home">

    <el-container>

      <el-aside style="background-color: rgb(238, 241, 246);width: auto">
        <menu-left-nav></menu-left-nav>
      </el-aside>
      <el-main>

        <!--<el-header>-->
          <!--<i class="icon-font el-icon-s-fold menu-collapse"></i>-->
        <!--</el-header>-->

      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import MenuLeftNav from "@/components/menu/LeftNav.vue";

  @Component({
    components: {MenuLeftNav},
  })
  export default class Home extends Vue {
  }
</script>

<style lang="scss">
  .home {
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
