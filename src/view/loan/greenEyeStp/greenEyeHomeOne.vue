<template>
  <div class="rewardWarp">
    <greenEyeTitle :idx='0'></greenEyeTitle>
    <div style="margin-top: 2.72rem" class="container">
    <el-carousel class="loanBanner" :interval="5000" arrow="always">
      <el-carousel-item  v-for="item in imgs" v-bind:key="item.url" >
        <img :src="item.url"/>
      </el-carousel-item>
    </el-carousel>
  <div class="loanDetail">
    <dl class="hasIcon" :class='{ hot : hasHot , down : showTips1 }'>
      <dt @click="toggleTips1">原发性开角型青光眼知多点</dt>
        <dd v-show='showTips1'>
          <p><span>原发性开角型青光眼，又称慢性开角型青光眼、慢性单纯性青光眼。这一类青光眼有以下特征：</span></p>
          <p><span>1.两眼中至少一只眼的眼压持续＞21mmhg；</span></p>
          <p><span>2.房角是开放的，具有正常外观；</span></p>
          <p><span>3.眼底存在青光眼特征性视网膜视神经损害和（或）视野损害；</span></p>
          <p><span>4.没有与眼压升高相关的病因性眼部或全身其他异常。</span></p>
        </dd>
        <dd v-show='showTips1'>
          <p><span>开角型青光眼的患病率为1.5％-2％。.糖尿病患者、甲状腺功能低下者、心血管疾病和血液流变学异常者、近视眼患者，以及视网膜静脉阻塞患者是原发性开角型青光眼的高危人群。</span></p>
        </dd>
    </dl>
    <dl id="loanDetailSpecial" class="hasIcon" :class='{ hot : hasHot , down : showTips2 }'>
      <dt @click="toggleTips2">青光眼VS白内障</dt>
        <dd v-show='showTips2'>
          <p><span>不同的是，大部分白内障病人经手术治疗可以完全恢复视力，但青光眼造成的视力衰退大部分是永久性的，不可逆转的。</span></p>
        </dd>
        <dd v-show='showTips2'>
          <img src="../../../assets/img/greenEye.png" slot='banner'/>
        </dd>
    </dl>
    <dl class="hasIcon" :class='{ hot : hasHot , down : showTips3 }'>
      <dt @click="toggleTips3">什么是青光眼</dt>
        <dd v-show='showTips3'>
          <p><span>眼球的运作像相机，会把影像聚焦在视网膜上，再由视神经将影像传送到大脑。</span></p>
        </dd>
        <dd v-show='showTips3'>
          <img src="../../../assets/img/greenEye_1.png" slot='banner'/>
        </dd>
    </dl>
    <dl id="loanDetailSpecial" class="hasIcon" :class='{ hot : hasHot , down : showTips4 }'>
      <dt @click="toggleTips4">视觉神经</dt>
        <dd v-show='showTips4'>
          <p><span>青光眼损害的，便是患者的视神经。随着病情恶化，患者的视觉神经会逐渐萎缩，就像隧道不断收窄一样，传送到大脑的影像范围会越来越小，最后导致失明。</span></p>
        </dd>
        <dd v-show='showTips4'>
          <img src="../../../assets/img/greenEye_2.png" slot='banner'/>
        </dd>
    </dl>
    <dl class="hasIcon" :class='{ hot : hasHot , down : showTips5 }'>
      <dt @click="toggleTips5">视力小偷</dt>
        <dd v-show='showTips5'>
          <p><span>由于早期的青光眼只影响到周边视野，而大部分的青光眼患者眼睛不痛也不红，如果不定期
            检查，到了晚期视野严重收窄时再警觉，因此青光眼又名“视力小偷”。</span></p>
        </dd>
    </dl>
    <div class="btnWarp btn-float">
      <slot name="apply"></slot>
    </div>
  </div>

  <greenEyeFooter :idx='0'></greenEyeFooter>
  </div>
  </div>

</template>

<script>
      // 引入data
  import detailData from "../../../data/old_yellow_detail.json"
  export default {

    data() {
      return {
        imgs: [
        {url: require('../../../assets/img/loanBanner1.jpg'), link: '/content1'},
        {url: require('../../../assets/img/loanBanner2.jpg'), link: '/content1'},
        {url: require('../../../assets/img/loanBanner3.jpg'), link: '/content1'},
        {url: require('../../../assets/img/banner_2.jpg'), link: '/content1'},
      ],
      data: {},
        showFeatrue: false,
        showTips1: false,
        showTips2: false,
        showTips3: false,
        showTips4: false,
        showTips5: false,
        hasHot: false
      }
    },

    methods: {
      toggleTips1() {
        this.showTips1 = !this.showTips1;
        if (this.hasHot == true) {
          this.hasHot = !this.hasHot;
        }
      },

      toggleTips2() {
        this.showTips2 = !this.showTips2;
        if (this.hasHot == true) {
          this.hasHot = !this.hasHot;
        }
      },
      toggleTips3() {
        this.showTips3 = !this.showTips3;
        if (this.hasHot == true) {
          this.hasHot = !this.hasHot;
        }
      },
    toggleTips4() {
        this.showTips4 = !this.showTips4;
        if (this.hasHot == true) {
          this.hasHot = !this.hasHot;
        }
      },
    toggleTips5() {
        this.showTips5 = !this.showTips5;
        if (this.hasHot == true) {
          this.hasHot = !this.hasHot;
        }
      }
    },
    props: ['uid'],
    mounted() {
      // 根据传入的uid来，拉取该页面数据
      this.data = detailData['micro'];
      // 打开页面时需要判断是否点过这个页面，显示下面的红色小圆点
      let thisIcon = this.$store.state.loanIcons[this.uid];
      if (thisIcon) this.hasHot = false;
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
