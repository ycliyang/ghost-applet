<template>
  <div class="login">
    <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
      <el-form-item prop="username">
        <div>帐号：</div>
        <el-input @keyup.enter.native="handleLogin"
                  v-model="loginForm.username" auto-complete="off"
                  placeholder="请输入用户名">
          <i slot="prefix" class="iconfont icon-yonghu"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <div>密码：</div>
        <el-input @keyup.enter.native="handleLogin" type="password"
                  v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
          <!--<i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>-->
          <i slot="prefix" class="iconfont icon-mima"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <div>验证码：</div>
        <el-row :span="24">
          <el-col :span="14">
            <el-input @keyup.enter.native="handleLogin"
                      :maxlength="code.len" v-model="loginForm.code"
                      auto-complete="off" placeholder="请输入验证码">
              <i slot="prefix" class="iconfont icon-yanzhengma"></i>
            </el-input>
          </el-col>
          <el-col :span="10">
            <div class="login-code">
              <span class="login-code-img" @click="refreshCode" v-if="code.type == 'text'">{{code.value}}</span>
              <img :src="code.src" alt="验证码" class="login-code-img" @click="refreshCode" v-else/>
            </div>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>

  import {loginAccount} from '@/api/login'

  import {randomNum} from '@/utils/utils'


  export default {
    name: "Login",
    data() {
      return {
        codeSrc: '/admin/code',
        code: {
          src: '',
          value: '',
          len: 4,
          type: 'image'
        },
        loginForm: {
          username: '',
          password: '',
          code: '1111',
          randomStr: ''
        },
        loginRules: {
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, message: '密码长度最少为6位', trigger: 'blur'}
          ],
          code: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
            {min: 4, max: 4, message: '验证码长度为4位', trigger: 'blur'}
          ]
        },
      }
    },
    mounted() {
      this.refreshCode()
    },
    methods: {
      refreshCode() {
        this.loginForm.code = ''
        this.loginForm.randomStr = randomNum(this.code.len, true)
        this.code.type === 'text'
          ? (this.code.value = randomNum(this.code.len))
          : (this.code.src = `${this.codeSrc}/${this.loginForm.randomStr}`)
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            // debugger
            loginAccount(this.loginForm).then(res => {
              if (res.status === 200 && res.data.userId) {
                this.$store.commit('SET_APP_ID', res.data.appId)
                this.$store.commit('SET_ACCESS_TOKEN', res.data.access_token)
                this.$store.commit('SET_REFRESH_TOKEN', res.data.refresh_token)
                this.$store.commit('SET_USER_ID', res.data.userId)

                this.$router.push('')

              } else {
                this.refreshCode()
              }
            }).catch(res => {
              this.refreshCode()
            })
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
      padding: 20px;
      width: 400px;
      /*height: 350px;*/
    }

    .login-code {
      text-align: right;
    }

    .login-submit {
      width: 100%;
    }
  }
</style>
