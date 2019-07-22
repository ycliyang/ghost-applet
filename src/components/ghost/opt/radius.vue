<template>
  <div class="app-page-radius bottom-border-1">

    <!--<el-form-item :label='name+"左上圆角"' class="app-nav-group-item">-->
    <!--<el-input-number v-model="value.radiusTopLeft"-->
    <!--size="mini" :min="0" :max="200"/>-->
    <!--</el-form-item>-->

    <!--<el-form-item :label='name+"左下圆角"' class="app-nav-group-item">-->
    <!--<el-input-number v-model="value.radiusBottomLeft"-->
    <!--size="mini" :min="0" :max="200"/>-->
    <!--</el-form-item>-->

    <!--<el-form-item :label='name+"右上圆角"' class="app-nav-group-item">-->
    <!--<el-input-number v-model="value.radiusTopRight"-->
    <!--size="mini" :min="0" :max="200"/>-->
    <!--</el-form-item>-->

    <!--<el-form-item :label='name+"右下圆角"' class="app-nav-group-item">-->
    <!--<el-input-number v-model="value.radiusBottomRight"-->
    <!--size="mini" :min="0" :max="200"/>-->
    <!--</el-form-item>-->


    <el-form-item :label='name+"圆角"' class="app-nav-group-item">

      <div>

        <el-input type="number" v-model="value.radiusTopLeft"
                  size="mini" :min="0" :max="200">
          <i slot="prepend" class="icon-radius-top-left"/>
        </el-input>
        <el-input type="number" v-model="value.radiusTopRight"
                  size="mini" :min="0" :max="200">
          <i slot="append" class="icon-radius-top-right"/>
        </el-input>
      </div>

      <div>

        <el-input type="number" v-model="value.radiusBottomLeft"
                  size="mini" :min="0" :max="200">
          <i slot="prepend" class="icon-radius-bottom-left"/>
        </el-input>

        <el-input type="number" v-model="value.radiusBottomRight"
                  size="mini" :min="0" :max="200">
          <i slot="append" class="icon-radius-bottom-right"/>
        </el-input>
      </div>
    </el-form-item>

  </div>
</template>

<script>
  export default {
    name: 'app-page-radius',
    props: ['value', 'name'],
    mounted() {
      if (!this.value) {
        this.$emit('input', {
          radiusTopLeft: 0,
          radiusBottomLeft: 0,
          radiusTopRight: 0,
          radiusBottomRight: 0
        })
      }
    }
  }
</script>

<style lang="less">
  .app-page-radius {
    .el-input {
      width: 100px;

      input {
        padding-left: 4px;
        padding-right: 4px;
      }

      .el-input-group__prepend,.el-input-group__append{
        padding: 0 5px;
      }
    }
  }

</style>
