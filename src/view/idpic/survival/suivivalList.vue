<template>
  <div class="container">
    <topComponent title='症状监测' ></topComponent>
    <ul class="listCom list-arrow list-icon no-top">
      <listComponent v-for='(data,index) in datas' :key='index' :class='data.cls' @click="$router.push(data.push)" :title='data.tit'>
        <template slot='right'>
          <i class="hasSuc" v-show='data.isOk'>已完成</i>
        </template>
      </listComponent>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //已完成的开关
        datas: [
          {
          cls: 'icon-info',
          tit: '疼痛',
          push: '/idpic/other1',
          isOk: false,
          param: 'idpic_other1'
        },
          {
            cls: 'icon-urgent',
            tit: '恶心、呕吐',
            push: '/idpic/other2',
            isOk: false,
            param: 'userContacts'
          },
          {
            cls: 'icon-credit',
            tit: '头晕',
            push: '/idpic/other3',
            isOk: false,
            param: 'userScan'
          },
          {
            cls: 'icon-other',
            tit: '抑郁',
            push: '/idpic/other4',
            isOk: false,
            param: 'userPhone'
          },
          {
            cls: 'icon-work',
            tit: '焦虑',
            push: '/idpic/other5',
            isOk: false,
            param: 'userWork'
          },
          {
            cls: 'icon-idPic',
            tit: '匹兹堡睡眠质量',
            push: '/idpic/other6',
            isOk: false,
            param: 'userIdpic'
          },
          {
            cls: 'icon-fund',
            tit: '认知评估',
            push: '/idpic/other7',
            isOk: false,
            param: 'userFund'
          },
          {
            cls: 'icon-shebao',
            tit: '照顾者压力和负担',
            push: '/idpic/other8',
            isOk: false,
            param: 'userSB'
          },
          {
            cls: 'icon-chuxu',
            tit: '其他',
            push: '/idpic/other9',
            isOk: false,
            param: 'userChuxu'
          },
          // {
          //   cls: 'icon-bank',
          //   tit: 'J. 角色表现',
          //   push: '/idpic/otherj',
          //   isOk: false,
          //   param: 'userZhima'
          // },
          // {
          //   cls: 'icon-bank',
          //   tit: '银行卡信息',
          //   push: '/credit/bankInfo',
          //   isOk: false,
          //   param: 'userBank'
          // },
          // {
          //   cls: 'icon-credit',
          //   tit: '查询央行征信',
          //   push: '/creditReport',
          //   isOk: false,
          //   param: 'userCredit'
          // },
          // {
          //   cls: 'icon-alipay',
          //   tit: '支付宝认证',
          //   push: '/credit/alipay',
          //   isOk: false,
          //   param: 'userAlipay'
          // },
        ]
      }
    },
    mounted() {
      // 循环获取vuex保存的信用中心状态值
      for (let i = 0; i < this.datas.length; i++) {
        this.datas[i].isOk = this.$store.state.creditStatus[this.datas[i].param]
      }
    }
  }
</script>
