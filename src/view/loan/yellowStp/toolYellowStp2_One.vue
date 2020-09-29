<template>
  <div class="rewardWarp">
    <!-- <yellowStpTwoTitle :idx='0'></yellowStpTwoTitle> -->
    <div style="margin-top: 0.02rem" class="container no-top">
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
      v-model="form.value1"
      :step="10"
      range
      :show-tooltip="false"
      :marks="marks1">
      </el-slider>
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
          <p><span class="flWord">配进食即便可能</span><span class="fr">搭配进食因为可能</span></p>
      </dd>
      <dd>
          <p><span class="flWord">没有效果</span><span class="fr">没有效果</span></p>
      </dd>
      <dd class="block">
      <el-slider
      class ="sliderTop"
      v-model="form.value2"
      :step="10"
      range
      :show-tooltip="false"
      :marks="marks2">
      </el-slider>
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
      class ="sliderTop"
      v-model="form.value3"
      :step="10"
      range
      :show-tooltip="false"
      :marks="marks3">
      </el-slider>
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
      v-model="form.value4"
      :step="10"
      range
      :show-tooltip="false"
      :marks="marks4">
      </el-slider>
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
      v-model="form.value5"
      :step="10"
      range
      :show-tooltip="false"
      :marks="marks5">
      </el-slider>
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
      v-model="form.value6"
      :step="10"
      range
      :show-tooltip="false"
      :marks="marks6">
      </el-slider>
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
  <div class="btnWarp">
        <span :class="this.cls" @click=' saveInfo '>提交</span>
  </div>
</div>

       <!--------->
    </div>


    <supFooter :idx='2'></supFooter>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        form:{
          value1: [50,50],
          value2: [50,50],
          value3: [50,50],
          value4: [50,50],
          value5: [50,50],
          value6: [50,50]
        },
        marks1: {
          0: '100',
          10: '80',
          20: '60',
          30: '40',
          40: '20',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '0')
          },
          60: '20',
          70: '40',
          80: '60',
          90: '80',
          100: '100',
        },
        marks2: {
          0: '100',
          10: '80',
          20: '60',
          30: '40',
          40: '20',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '0')
          },
          60: '20',
          70: '40',
          80: '60',
          90: '80',
          100: '100',
        },
        marks3: {
          0: '100',
          10: '80',
          20: '60',
          30: '40',
          40: '20',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '0')
          },
          60: '20',
          70: '40',
          80: '60',
          90: '80',
          100: '100',
        },
        marks4: {
          0: '100',
          10: '80',
          20: '60',
          30: '40',
          40: '20',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '0')
          },
          60: '20',
          70: '40',
          80: '60',
          90: '80',
          100: '100',
        },
        marks5: {
          0: '100',
          10: '80',
          20: '60',
          30: '40',
          40: '20',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '0')
          },
          60: '20',
          70: '40',
          80: '60',
          90: '80',
          100: '100',
        },
        marks6: {
          0: '100',
          10: '80',
          20: '60',
          30: '40',
          40: '20',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '0')
          },
          60: '20',
          70: '40',
          80: '60',
          90: '80',
          100: '100',
        },
        cls: 'subBtn',
        isSubmitted: true
      }
    },
    methods: {
       saveInfo : function() {
        if(this.isSubmitted) {
          if(this.form.value1[0]!=50&&this.form.value1[1]!=50){
            this.$dialog('第一题起点和终点的值必须为零，请重新选择');
            return
          }
          if(this.form.value2[0]!=50&&this.form.value2[1]!=50){
            this.$dialog('第二题起点和终点的值必须为零，请重新选择');
            return
          }
          if(this.form.value3[0]!=50&&this.form.value3[1]!=50){
            this.$dialog('第三题起点和终点的值必须为零，请重新选择');
            return
          }
          if(this.form.value4[0]!=50&&this.form.value4[1]!=50){
            this.$dialog('第四题起点和终点的值必须为零，请重新选择');
            return
          }
          if(this.form.value5[0]!=50&&this.form.value5[1]!=50){
            this.$dialog('第五题起点和终点的值必须为零，请重新选择');
            return
          }
          if(this.form.value6[0]!=50&&this.form.value6[1]!=50){
            this.$dialog('第六题起点和终点的值必须为零，请重新选择');
            return
          }else {
                this.$dialog("提交完成");
                this.cls = "subBtn grayBg"
                this.isSubmitted = false
          }
        }
      }

    },
  }
</script>
