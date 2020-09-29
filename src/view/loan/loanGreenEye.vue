<template>
  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner1.jpg" slot='banner'/>
    </loanBanner>
    <!-- <loanDetail uid='uid'>
    </loanDetail> -->
     <!-- <div class="container food">
      <foodDetail uid='micro'>

      </foodDetail>
     </div>

     <div class="container choiceone">
      <choiceOne uid='micro'>

      </choiceOne>
    </div>

    <div class="container story">
      <choiceTwo uid='micro'>

      </choiceTwo>
    </div> -->

    <!-- <div class="container no-top">
      <partTwo uid='micro'>

      </partTwo>
    </div>

    <div class="partthree">
      <partThree uid='micro'>

      </partThree>
    </div> -->
    <dt class="yellowColor"><span class="partGreenColor">原发性开角型青光眼知多点</span></dt>
    <div class="loanDetail">

    <dl id="border">
      <dt>原发性开角型青光眼</dt>
      <template>
      <dd>
       <p><span>原发性开角型青光眼，又称慢性开角型青光眼、慢性单纯性青光眼。这一类青光眼有以下特征：
         ①两眼中至少一只眼的眼压持续＞21mmhg；②房角是开放的，具有正常外观；③眼底存在青光眼特征性视网膜视神经损害和（或）视野损害；
         ④没有与眼压升高相关的病因性眼部或全身其他异常。</span></p>
      </dd>
      <dd>
       <p><span>开角型青光眼的患病率为1.5％-2％。糖尿病患者、甲状腺功能低下者、心血管疾病和血液流变学异常者、近视眼患者，以及视网膜静脉阻塞患者是原发性开角型青光眼的高危人群。 </span></p>
      </dd>
      </template>
    </dl>
    <dl id="loanDetailSpecial">
      <dt>青光眼VS白内障</dt>
        <template>
         <!-- <template v-for='item in data.oldYellow'> -->
      <dd>
       <p><span>不同的是，大部分白内障病人经手术治疗可以完全恢复视力，但青光眼造成的视力衰退大部分是永久性的，不可逆转的。</span></p>
      </dd>
      </template>
    </dl>
    <dl>
      <dt>什么是青光眼</dt>
        <template>
      <dd>
       <p><span>眼球的运作像相机，会把影像聚焦在视网膜上，再由视神经将影像传送到大脑</span></p>
      </dd>
      </template>
    </dl>
    <dl id="loanDetailSpecial">
      <dt>视觉神经</dt>
        <template>
      <dd>
       <p><span>青光眼损害的，便是患者的视神经。随着病情恶化，患者的视觉神经会逐渐萎缩，就像隧道不断收窄一样，传送到大脑的影像范围会越来越小，最后导致失明</span></p>
      </dd>
      </template>
    </dl>
    <dl>
      <dt>什么是青光眼</dt>
        <template>
      <dd>
       <p><span>眼球的运作像相机，会把影像聚焦在视网膜上，再由视神经将影像传送到大脑</span></p>
      </dd>
      </template>
    </dl>
    <dl id="loanDetailSpecial">
      <dt>视力小偷</dt>
        <template>
      <dd>
       <p><span>由于早期的青光眼只影响到周边视野，而大部分的青光眼患者眼睛不痛也不红，如果不定期
          检查，到了晚期视野严重收窄时再警觉，因此青光眼又名›视力小偷</span></p>
      </dd>
      </template>
    </dl>
    <dl>
      <dt>什么是原发性青光眼</dt>
        <template>
      <dd>
       <p><span>原发性青光眼指单纯的青光眼，即并非由其他眼部疾病所导致。
相反，继发性青光眼是指由其他眼部疾病，例如由虹膜炎，眼睛创伤所导致。
什么是开角型青光眼？</span></p>
      </dd>
      <dd>
       <p><span></span></p>
      </dd>
      </template>
    </dl>
    <dl id="loanDetailSpecial">
      <dt>什么是开角型青光眼？</dt>
        <template>
      <dd>
       <p><span>要介绍闭角型青光眼不得不提眼压。眼球像一个气球，并有一个压力指数。不同的是，气球是充气，而眼球是充液体的</span></p>
      </dd>
      <dd>
       <p><span>决定眼压高低的是前房水，一种在眼内不断流动的透明营养液体，最终会从前方角排走。如果前房角开通，但排走房水的功能不良，便是开角型青光眼。相反，如果前房角闭塞，便是闭角型青光眼了。</span></p>
      </dd>
      </template>
    </dl>
    <!-- <!-- <dl class="hasIcon" :class='{ down : showFeatrue}'>
      <dt @click="showFeatrue = !showFeatrue">产品特点</dt>
      <dd v-show='showFeatrue'>
        <p v-html='data.feature'></p>
      </dd>
    </dl> -->
    <!-- <div class="btnWarp btn-float">
      <slot name="apply"></slot>
    </div> -->
  </div>

  </div>
</template>
<script>
import detailData from "../../data/old_yellow_detail.json"
  export default {
    data() {
      return {
        title: "",
        content: "",
//      greenOne
        data: {},
        showFeatrue: false,
        showTips: false,
        hasHot: false
//      greenOneEnd
      }
    },
    mounted() {
      // 根据传入的uid来，拉取该页面数据
      this.data = detailData['micro'];
      // 打开页面时需要判断是否点过这个页面，显示下面的红色小圆点
      let thisIcon = this.$store.state.loanIcons[['micro']];
      if (thisIcon) this.hasHot = false;
    },
    methods: {
      toggleTips() {
        this.showTips = !this.showTips;
        if (this.hasHot == true) {
          this.hasHot = !this.hasHot;
          this.$store.commit('changeLoanIconStatu', {
            name: 'micro',
            val: true
          })
        }
      }
    }

  }
</script>

