<template>
  <div class="container">
    <topComponent title='个人中心' :showLeft='false'></topComponent>
    <dl class="userInfo">
      <dt>
        <p class="user-logo"></p>
        <p class="user-tel">您好<span>{{data.userMobile | filterPhone}}</span></p>
        <p class="user-tag">
          <span class="mLevel">白银1</span>
          <span class="mName">元气满满/身残志坚</span>
        </p>
      </dt>
      <dd>健康达人<span>{{data.orderApply}}分</span></dd>
      <dd>营养评估<span>{{data.orderRepay}}分</span></dd>
    </dl>
    <ul class="listCom list-arrow list-icon mt20">
      <listComponent v-for='(item,index) in items' :key='index' @click="$router.push(item.push)" :class='item.cls' :title='item.tit'>
         <template slot='right'>
          <i class="hasSuc" v-show='item.isOk'>已完成</i>
        </template>
      </listComponent>
    </ul>
    <p class="signOut mt20" @click='loginOut'>退出登陆</p>
    <footComponent :idx='4'></footComponent>
  </div>
</template>
<script>
  //引入页面数据
  import userData from '../../data/user/get_info_new.json';

  export default {
    data() {
      return {
        data: {},
        items: [

          {
          cls: "icon-jiekuan",
          push: "/user/info",
          isOk: false,
          tit: "个人信息",
          param: 'userInfo'
        },
          // {
          //   cls: "icon-jiangli",
          //   push: "/idpic",
          //   tit: "我的报告"
          // },
          {
            cls: "icon-phone",
            push: "/forget",
            isOk: false,
            tit: "重置密码"
          },
          {
            cls: "icon-help",
            push: "/user/helpList",
            isOk: false,
            tit: "帮助中心"
          },
          {
            cls: "icon-yijian",
            push: "/user/feedback",
            isOk: false,
            tit: "意见反馈"
          },
          {
            cls: "icon-about",
            push: "/user/aboutUs",
            isOk: false,
            tit: "关于我们"
          }
        ]
      }
    },
    methods: {
      loginOut() {
        this.$router.push('/login')    // 暂时不做处理只去登录页面
      },

    },
    mounted() {
      // 页面加载时拉取数据
      this.data = userData.data.userInfo
      // 循环获取vuex保存的信用中心状态值
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].isOk = this.$store.state.creditStatus[this.items[i].param]
        console.log('--------')
        console.log(this.items[i].isOk)
      }
    }
  }
</script>
