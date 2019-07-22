<template>
  <div class="app-page-font bottom-border-1">

    <el-form-item :label='name+"文字颜色"'
                  class="app-nav-group-item">
      <el-color-picker v-model="value.fontColor" size="mini"/>
    </el-form-item>

    <el-form-item :label='name+"文字大小"'
                  class="app-nav-group-item">
      <el-input-number v-model="value.fontSize"
                       size="mini" :min="0"
                       :max="200"/>
    </el-form-item>

    <el-form-item :label='name+"文字字体"'>
      <el-radio-group v-model="value.fontWeight">
        <el-radio label="lighter">较细</el-radio>
        <el-radio label="normal" checkout="true">正常</el-radio>
        <el-radio label="bold">加粗</el-radio>
      </el-radio-group>
    </el-form-item>


    <el-form-item :label='name+"文字位置"'>
      <el-radio-group v-model="value.textAlign">
        <el-radio label="left">靠左</el-radio>
        <el-radio label="center">居中</el-radio>
        <el-radio label="right">靠右</el-radio>
      </el-radio-group>
    </el-form-item>

  </div>

</template>

<script>
  export default {
    name: 'app-page-font',
    props: ['value', 'name'],
    mounted() {
      if (!this.value) {
        this.$emit('input', {
          fontSize: 13,
          fontWeight: 'normal',
          fontColor: '#000'
        })
      }
    }
  }
</script>

<style lang="less">
  .app-page-font {

  }

</style>
