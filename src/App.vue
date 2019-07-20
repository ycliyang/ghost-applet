<template>
  <div id="app">
    <router-view v-if="show"></router-view>
  </div>
</template>

<script>

  import {mapGetters} from "vuex"

  export default {
    name: 'app',
    data() {
      return {
        show: false
      }
    },
    computed: {
      ...mapGetters(["accessToken"])
    },
    mounted() {
      if (!this.accessToken) {
        this.$router.push('login')
      }
      this.show = true
    },

  }
</script>

<style lang="scss">
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: rgba(0, 0, 0, 0.9);
    height: 100%;
    box-sizing: border-box;
  }

  #app > div:first-child {
    height: 100%;
  }

  body {
    margin: 0px !important;
    height: 100vh;
    text-align: left;
  }

</style>
