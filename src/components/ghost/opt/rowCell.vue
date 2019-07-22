<template>
  <div class="app-page-row-cell bottom-border-1">

    <el-form-item label="每行元素数量" class="app-banner-item">
      <el-radio-group v-model="value.rowCell" class="row-cell-group">
        <el-radio label="1" class="row-cell-radio">1个</el-radio>
        <el-radio label="2" class="row-cell-radio">2个</el-radio>
        <el-radio label="3" class="row-cell-radio">3个</el-radio>
        <el-radio label="4" class="row-cell-radio">4个</el-radio>
      </el-radio-group>
    </el-form-item>

  </div>

</template>

<script>
  export default {
    name: 'app-page-row-cell',
    props: ['value'],
    mounted() {
      if (!this.value) {
        this.$emit('input', {
          rowCell: 2
        })
      }
    }

  }
</script>

<style lang="less">

  .app-page-row-cell {
    .row-cell-group{
      /*display: flex;*/
      /*flex-wrap: wrap;*/
      /*align-items: center;*/
    }
    .row-cell-radio {
      padding-right: 0px;
      margin: 0px;

      span {
        padding: 0px 0px 0px 5px;
      }
    }
  }
</style>
