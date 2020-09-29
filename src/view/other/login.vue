<template>
  <div class="container bgF">
    <topComponent title='登录' :showLeft='false'>
      <span class="back" @click='goCancel' slot="left">取消</span>
    </topComponent>
    <h2 class="logoIcon">{{appName}}</h2>
    <ul class="formCom form-login form-mini">
      <li class="icon-clear">
        <label>
          <span>账号</span>
          <input type="number" placeholder="请输入手机号" v-model.number='loginForm.name'>
          <i @click='loginForm.name = ""'></i>
        </label>
      </li>
      <li :class='[{"icon-eye1":showPwd},{"icon-eye2":!showPwd}]'>
        <label>
          <span>密码</span>
          <input :type="showPwd?'password':'text'" placeholder="请输入6-12位密码" v-model.trim='loginForm.pwd'>
          <i @click='showPwd = !showPwd'></i>
        </label>
      </li>
      <li>
        <canvasCode @codeHasChange='sendCode'></canvasCode>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click='logIn'>登录</span>
    </div>
    <div class="forgetWarp">
      <span class="col6" @click="$router.push('/reg')">马上注册</span>
      <span class="fr col6" @click="$router.push('/forget')">忘记密码？</span>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        loginForm: {
          name: '',
          pwd: ''
        },
        code: '',
        showPwd: true,  //开关--密码可见
        canvas: {}      //存放canvas DOM节点
      }
    },
    methods: {
       ...mapMutations(['changeLogin']),
      logIn: function() {
        let _this = this;
        //先做一些简单的判断再提交ajax
        if (/^[1][345678][0-9]{9}$/.test(this.loginForm.name) === false) this.$dialog('帐号不正确');
        else if (/^[\d\D]{6,12}$/.test(this.loginForm.pwd) === false) this.$dialog('密码不正确');
        else if (this.code.toUpperCase() !== this.canvasCode.codeNums.toUpperCase()) this.$dialog('验证码不正确');
        else {
          //先跳到借款首页暂代，后期ajax替换
          // this.$router.push('/loan')
          this.$ajax({
          method: 'post',
          url: '/platUser/login',
          data: _this.loginForm
        }).then(res => {
          _this.userToken = 'Bearer ' + res.data.data.token;
          console.log(_this.userToken);
          // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: _this.userToken });
          const loading = this.$loading({
          lock: true,                             // 是否锁屏
          text: '正在登录...',                     // 加载动画的文字
          spinner: 'el-icon-loading',             // 引入的loading图标
          background: 'rgba(0, 0, 0, 0.7)'       // 背景颜色
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
          _this.$router.push('/loan');
          // alert('登陆成功');
        }).catch(error => {
          alert('账号或密码错误');
          console.log(error);
        });
        }
      },
      goCancel: function() {
        //根据情景不一样，跳转的页面也会不同，暂定跳到我的借款首页
        //...省略
        this.$router.push('/loan')
      },
      sendCode:function(val) {
        this.code = val
      }
    }
  }
</script>
