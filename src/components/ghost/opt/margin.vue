<template>
  <div class="app-page-margin bottom-border-1">

    <el-form-item :label='name+"外边上"' class="app-nav-group-item">
      <el-input-number v-model="value.marginTop"
                       size="mini" :min="0" :max="200"/>
    </el-form-item>

    <el-form-item :label='name+"外边下"' class="app-nav-group-item">
      <el-input-number v-model="value.marginBottom"
                       size="mini" :min="0" :max="200"/>
    </el-form-item>

    <el-form-item :label='name+"外边左"' class="app-nav-group-item">
      <el-input-number v-model="value.marginLeft"
                       size="mini" :min="0" :max="200"/>
    </el-form-item>

    <el-form-item :label='name+"外边右"' class="app-nav-group-item">
      <el-input-number v-model="value.marginRight"
                       size="mini" :min="0" :max="200"/>
    </el-form-item>

  </div>
</template>

<script>
  export default {
    name: 'app-page-margin',
    props: ['value', 'name'],
    mounted() {
      if (!this.value) {
        this.$emit('input', {
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          marginTop: 0
        })
      }
    }
  }
</script>

<style scoped>

</style>
