<template>
  <div class="login">
    <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
      <el-form-item prop="username">
        <div>帐号：</div>
        <el-input @keyup.enter.native="handleLogin"
                  v-model="loginForm.username" auto-complete="off"
                  placeholder="请输入用户名">
          <!--<i slot="prefix" class="icon-yonghu"></i>-->
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <div>密码：</div>
        <el-input @keyup.enter.native="handleLogin" type="password"
                  v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
          <!--<i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>-->
          <i slot="prefix" class="icon-mima"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>

  import {loginAccount} from '@/api/login'

  export default {
    name: "Login",
    data() {
      return {

        loginForm: {
          username: '',
          password: '',
          code: '',
          randomStr: ''
        },
        loginRules: {
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, message: '密码长度最少为6位', trigger: 'blur'}
          ]
        },
      }
    },
    mounted() {
    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            debugger
            loginAccount(this.loginForm)
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .login {
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-form {
      background-color: white;
      border-radius: 5px;
      border: grey 1px solid;
      padding: 10px;
      width: 400px;
      height: 350px;
    }
  }
</style>
