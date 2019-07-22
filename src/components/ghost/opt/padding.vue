<template>
  <div class="app-page-padding bottom-border-1">

    <el-form-item :label='name+"内边上"' class="app-nav-group-item">
      <el-input-number v-model="value.paddingTop"
                       size="mini" :min="0" :max="200"/>
    </el-form-item>

    <el-form-item :label='name+"内边下"' class="app-nav-group-item">
      <el-input-number v-model="value.paddingBottom"
                       size="mini" :min="0" :max="200"/>
    </el-form-item>

    <el-form-item :label='name+"内边左"' class="app-nav-group-item">
      <el-input-number v-model="value.paddingLeft"
                       size="mini" :min="0" :max="200"/>
    </el-form-item>

    <el-form-item :label='name+"内边右"' class="app-nav-group-item">
      <el-input-number v-model="value.paddingRight"
                       size="mini" :min="0" :max="200"/>
    </el-form-item>

  </div>
</template>

<script>
  export default {
    name: 'app-page-padding',
    props: ['value', 'name'],
    mounted() {
      if (!this.value) {
        this.$emit('input', {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        })
      }
    }
  }
</script>

<style scoped>

</style>
