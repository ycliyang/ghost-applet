<template>
  <button :class="value.class" :style="value.style">
    {{value.value}}
  </button>
</template>

<script>

  import mx from '../tagMixin'

  export default {
    name: "ghost-button",
    mixins: [mx]
  }
</script>
