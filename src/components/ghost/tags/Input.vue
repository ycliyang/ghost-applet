<template>
  <input :type="value.type" :class="value.class" :style="value.style" :value="value.value"/>
</template>

<script>

  import mx from '../tagMixin'

  export default {
    name: "ghost-input",
    dom:{tag:'input',name:'输入框'},
    mixins: [mx]
  }
</script>
