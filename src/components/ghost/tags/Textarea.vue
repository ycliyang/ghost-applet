<template>
  <input :type="value.type" :class="value.class" :style="value.style" :value="value.value"/>
</template>

<script>

  import mx from '../tagMixin'

  export default {
    name: "ghost-textarea",
    dom:{tag:'textarea',name:'多行输入框'},
    mixins: [mx]
  }
</script>
