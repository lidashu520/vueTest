<template>
<div class="partTwoNoTop">
  <dl>
     <dt class="yellowColor">第二部分：<span class="partGreenColor">您的价值观匹配与干预选择</span></dt>
  </dl>
  <div class="partTwo">
    <dl>
      <dt>对你而言什么最重要？</dt>
      <dd>
          <p>下图中列出了选择营养补充或者不选择营养补充需要考虑的因素</p>
      </dd>
       <dd>
          <p>请标出您在做出选择的时候，以下这些因素对您的影响程度</p>
      </dd>
    </dl>
  </div>
   <dl>
      <dd class="partTwoBg">
        <p><span class="flWord">选择营养补充物的原因</span> <span class="fr">不选择营养补充物的原因</span></p>
      </dd>
    </dl>
  <div class="partTwoSelect">
    <!----1------>
    <dl>
      <dd>
          <p><span class="flWord">我愿意尝试新的辅助疗</span><span class="fr">我<span class="partTwoRedColor">不</span>愿意尝试新的辅助</span></p>
      </dd>
       <dd>
          <p><span class="flWord">法即便可能没有效果</span><span class="fr">疗法因为可能没有效果</span></p>
      </dd>
      <dd class="block">
      <el-slider
      class ="sliderTop"
      v-model="value1"
      :step="10">
      </el-slider>
      <span class="demonstration">0~40表示愿意，50表示同等重要，60~100表示不愿意</span>
     </dd>
      <dd>
          <p><span class="fl partTwoYBg">非常重要</span> <span class="textCenter">同样重要</span><span class="fr partTwoYBg">非常重要</span></p>
      </dd>
    </dl>

    <!-----2------>
    <dl>
      <dd>
          <p><span class="flWord">我愿意每天按照营养搭</span><span class="fr">我<span class="partTwoRedColor">不</span>愿意每天按照营养</span></p>
      </dd>
       <dd>
          <p><span class="flWord">配进食即便可能没有效果</span><span class="fr">搭配进食因为可能没有效果</span></p>
      </dd>
      <dd class="block">
      <el-slider
      class ="sliderTop"
      v-model="value2"
      :step="10">
      </el-slider>
      <span class="demonstration">0~40表示愿意，50表示同等重要，60~100表示不愿意</span>
     </dd>
      <dd>
          <p><span class="fl partTwoYBgRed">非常重要</span> <span class="textCenter">同样重要</span><span class="fr partTwoYBgRed">非常重要</span></p>
      </dd>
    </dl>


  <!-----3------>
    <dl>
      <dd>
          <p><span class="flWord">我愿意每天按照营养搭</span>  <span class="fr">我<span class="partTwoRedColor">不</span>愿意每天按照营养</span></p>
      </dd>
       <dd>
          <p><span class="flWord">配进食即使可能会给</span> <span class="fr">搭配进食因为会给</span></p>
      </dd>
      <dd>
          <p><span class="flWord">生活带来不便</span> <span class="fr">生活带来不便</span></p>
      </dd>
      <dd class="block">
      <el-slider
      class ="sliderTop .mt40"
      v-model="value3"
      :step="10">
      </el-slider>
      <span class="demonstration">0~40表示愿意，50表示同等重要，60~100表示不愿意</span>
     </dd>
      <dd>
          <p><span class="fl partTwoYBg">非常重要</span> <span class="textCenter">同样重要</span><span class="fr partTwoYBg">非常重要</span></p>
      </dd>
    </dl>

  <!-----4------>
    <dl>
      <dd>
          <p><span class="flWord">我愿意尝试营养补充物</span><span class="fr">我<span class="partTwoRedColor">不</span>愿意尝试营养补充物</span></p>
      </dd>
       <dd>
          <p><span class="flWord">即便可能存在一定的</span> <span class="fr">因为可能存在一定的</span></p>
      </dd>
      <dd>
          <p><span class="flWord">风险和副作用</span> <span class="fr">风险和副作用</span></p>
      </dd>
      <dd class="block">
      <el-slider
      class ="sliderTop"
      v-model="value4"
      :step="10">
      </el-slider>
      <span class="demonstration">0~40表示愿意，50表示同等重要，60~100表示不愿意</span>
     </dd>
      <dd>
          <p><span class="fl partTwoYBgRed">非常重要</span> <span class="textCenter">同样重要</span><span class="fr partTwoYBgRed">非常重要</span></p>
      </dd>
    </dl>

  <!-----5------>
    <dl>
      <dd>
          <p><span class="flWord">如果我尝试了营养补充，</span><span class="fr">我<span class="partTwoRedColor">不</span>愿意定期检测</span></p>
      </dd>
       <dd>
          <p><span class="flWord">我愿意定期检测眼部情况</span><span class="fr">眼部情况</span></p>
      </dd>
      <div >
      <dd class="block">
      <el-slider
      class ="sliderTop"
      v-model="value5"
      :step="10">
      </el-slider>
      <span class="demonstration">0~40表示愿意，50表示同等重要，60~100表示不愿意</span>
     </dd>
      </div>
      <dd>
          <p><span class="fl partTwoYBg">非常重要</span> <span class="textCenter">同样重要</span><span class="fr partTwoYBg">非常重要</span></p>
      </dd>
    </dl>

  <!-----6------>
    <dl>
      <dd>
          <p>其他重要原因<span class="fr">其他重要原因</span></p>
      </dd>
      <dd class="block">
      <el-slider
      class ="sliderTop"
      v-model="value6"
      :step="10">
      </el-slider>
      <span class="demonstration">0~40表示愿意，50表示同等重要，60~100表示不愿意</span>
     </dd>
      <dd>
          <p><span class="fl partTwoYBgRed">非常重要</span> <span class="textCenter">同样重要</span><span class="fr partTwoYBgRed">非常重要</span></p>
      </dd>
    </dl>
  </div>

 <!-----7------>
 <!-- <div class="partTwoDd">

     <dl>
     <dd>现在，请仔细观察，以上各考虑因素中，您标为最重要的是什么？来帮助您做出选择。</dd>
     <dd>根据您个人的治疗期望，结合对以上因素的考虑，您想做出哪种选择？</dd>
     <dd>请选择一项。</dd>
     </dl>
  </div> -->

  <!-- <div class="partTwoSelect">
    <dl>
      <dd>
          <p><span class="fl">选择营养补充物</span><span class="fr">不选择营养补充物</span></p>
      </dd>
      <dd class="block">
      <el-slider
      class ="sliderTop"
      v-model="value7"
      :step="10">
      </el-slider>
      <span class="demonstration">0~40表示愿意，50表示同等重要，60~100表示不愿意</span>
     </dd>
      <dd>
          <p><span  class="fl partTwoYBg">倾向</span> <span style="margin-left:4.4rem">不清楚</span><span  class="fr partTwoYBg">倾向</span></p>
      </dd>
    </dl>
  </div> -->
</div>
</template>
<script>
  // 引入data
   //import detailData from "../../data/old_yellow_detail.json"
     import detailData from "../../data/loan_detail.json"

  export default {
    data() {
      return {
        value1: 50,
        value2: 50,
        value3: 50,
        value4: 50,
        value5: 50,
        value6: 50,
        value7: 50,
        data: {},
        showFeatrue: false,
        showTips: false,
        hasHot: false
      }
    },
    props: ['uid'],
    mounted() {
      // 根据传入的uid来，拉取该页面数据
      this.data = detailData[this.uid];
      // 打开页面时需要判断是否点过这个页面，显示下面的红色小圆点
      let thisIcon = this.$store.state.loanIcons[this.uid];
      if (thisIcon) this.hasHot = false;
    }
  }
</script>
