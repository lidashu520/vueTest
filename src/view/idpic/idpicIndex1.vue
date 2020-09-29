<template>
  <div class="container">
    <topComponent title='患者自我报告结局'>
      <i class="ask" @click='goHelp' slot='right'></i>
    </topComponent>
    <p class="reportBanner"><span class="look" @click='goLogin'><i></i>登录查看最新自我报告结局</span></p>
    <dl class="reportList">
      <dt>历史自我报告结局<span>未记录</span></dt>
      <dd @click='goCover(1)'><span class="time">2016-08-23</span>2015070703000178126968</dd>
      <dd @click='goCover(2)'><span class="time">2016-08-23</span>2015070703000178126968</dd>
      <dd @click='goCover(3)'><span class="time">2016-08-23</span>2015070703000178126968</dd>
    </dl>
    <!-- <div class="btnWarp">
      <span class="subBtn" @click='goLogin'>申请最新征信报告</span>
    </div> -->
    <div class="btnWarp">
      <span class="subBtn greenBg" @click='goCover(2)'>查看患者报告</span>
    </div>
    <!--<div class="btnWarp">
            <span class="subBtn noBg">申请最新征信报告</span>
        </div>-->
    <footComponent :idx='2'></footComponent>
  </div>
</template>
<script>
  export default {
    methods: {
      goLogin() {
        this.$router.push('creditReport/login')
      },
      goCover(param) {
        this.$router.push('creditReport/cover')
        //实际跳转根据传入的参数来
      },
      goHelp() {
        this.$router.push('creditReport/helps')
      }
    }
  }
</script>
