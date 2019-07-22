<template>
  <div :class="value.class" :style="value.style">
    {{#if value.child.length>0}}
    <ghost-structurev v-for="item,index in value.child" v-model="item"></ghost-structurev>
    {{/if}}
  </div>
</template>

<script>

  import mx from '../tagMixin'

  export default {
    name: "ghost-view",
    mixins: [mx]
  }
</script>
