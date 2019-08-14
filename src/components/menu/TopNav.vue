<template>
  <div class="menu-top-nav">
    顶部导航
  </div>
</template>

<script>
  export default {
    name: "MenuTopNav",
    data(){
      return {

      }
    }
  }
</script>

<style lang="scss">
  $grey-color: #e9e9e9;

  .menu-top-nav {
    height: 100%;
    background-color: white;
    border-bottom: 1px $grey-color solid;
    border-left: 1px $grey-color solid;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;

    box-shadow: 0px 3px 5px $grey-color;
  }
</style>
