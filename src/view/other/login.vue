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
      <li v-show="isShow">
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
import {Message} from 'element-ui'
  export default {
    data() {
      return {
        loginForm: {
          name: '',
          pwd: ''
        },
        count:0,
        code: '',
        isShow: false,  //显示验证码
        showPwd: true,  //开关--密码可见
        canvas: {}      //存放canvas DOM节点
      }
    },
    methods: {
       ...mapMutations(['changeLogin']),
       ...mapMutations(['changePhone']),
      logIn: function(){
        let _this = this;
        //先做一些简单的判断再提交ajax
        if (/^[1][345678][0-9]{9}$/.test(this.loginForm.name) === false) this.$dialog('帐号不正确');
        else if (/^[\d\D]{6,12}$/.test(this.loginForm.pwd) === false) this.$dialog('密码格式不正确');
        else if(this.isShow){
          if (this.code.toUpperCase() !== this.canvasCode.codeNums.toUpperCase()) {
            this.$dialog('验证码不正确');
            return
          }
        }
          this.$ajax({
          method: 'post',
          url: '/platUser/login',
          data: _this.loginForm
          }).then(res => {
          if(res.success===true){
          _this.userToken = res.data.token;
          // 将用户token保存到vuex中
          _this.changeLogin({ token: _this.userToken });
          _this.changePhone({ phone: _this.loginForm.name });
          const loading = this.$loading({
          lock: true,                             // 是否锁屏
          text: '正在登录...',                     // 加载动画的文字
          spinner: 'el-icon-loading',             // 引入的loading图标
          background: 'rgba(0, 0, 0, 0.7)'       // 背景颜色
        });
        setTimeout(() => {
          loading.close();
        }, 500);
          _this.$router.push('/loan');
        }else if(res.data.code='201'){
          this.count++;
          this.showCode()
          this.$dialog("账号不存在或账号、密码错误!")
        }else{
          this.count++;
          this.showCode()
          this.$dialog("账号不存在或账号、密码错误!")
        }
      }).catch(error => {
          this.count++;
          this.showCode()
          this.$dialog("请求超时或系统异常!")
          });
      },
      goCancel: function() {
        //根据情景不一样，跳转的页面也会不同，暂定跳到我的借款首页
        //...省略
        this.$router.push('/loan')
      },
      sendCode:function(val) {
        this.code = val
      },
      showCode:function() {
        if(this.count>=2){
          this.isShow = true
        }
      }
      },

  }
</script>
