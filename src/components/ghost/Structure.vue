<template>
  <component v-bind:is="item.tag"/>
</template>

<script>
  import moduleMixin from './tagMixin'

  export default {
    mixins: [moduleMixin],
    name: "ghost-structure"
  }
</script>

<style lang="scss">

  .ghost-structure {

  }
</style>
