<template>
  <div class="app-page-popover">

    <el-popover
      ref="popover"
      width="400"
      trigger="manual"
      popper-class="popover"
      v-model="select">

      <i class="el-icon-circle-close popover-content-close" @click.stop="handleClose"></i>
      <div class="popover-content">
        <slot></slot>
      </div>

    </el-popover>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex'

  export default {
    name: 'app-page-com-popover',
    props: ['selectStatus'],
    data() {
      return {
        select: false
      }
    },
    computed: {
      ...mapGetters(['selectComponent'])
    },
    watch: {
      selectStatus() {
        this.select = this.selectStatus
      }
    },
    methods: {
      handleClose() {
        // this.select = false
        this.$store.commit('REMOVE_COMPONENT')
      }
    }

  }
</script>

<style lang="less">

  .app-page-popover {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;


    .popover{
      top: 120px !important;
      padding: 5px 0px !important;
      bottom: 20px;
      right: 0;
      margin-right: 15px;
      position: absolute;
    }

    .popover-content {

      .el-form-item {
        margin-bottom: 8px !important;

        .el-form-item__label {
          width: 120px !important;
        }

        .el-form-item__content {
          margin-left: 120px;
        }
      }
    }

    .popover-content {
      max-height: 90vh;
      overflow: auto;
      padding-right: 10px;
      height: 100%;

      .el-radio {
        margin-left: 5px;
        min-width: 60px;
      }
    }

    .popover-content-close {
      position: absolute;
      top: -15px;
      right: -15px;
      font-size: 30px;
      cursor: pointer;
    }
  }
</style>
