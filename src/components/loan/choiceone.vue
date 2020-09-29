<template>
  <div class="choiceOne">
    <!-- <dl>
      <template v-for='item in data.choiceOne'>
      <dd>
       <p><span>{{item.con}}</span></p>
      </dd>
      </template>
    </dl> -->

    <dl>
     <!-- <dt class="yellowColor">第一部分：</dt>
     <dt class="whiteColor">选择与不选择营养补充的效益与风险比较</dt> -->
     <dt class="yellowColor">第一部分：</dt>
     <dt class="partGreenColor">选择与不选择营养补充的效益与风险比较</dt>
    </dl>


     <!-- 具体包括什么start -->

     <dl class="hasIcon" :class='{ hot : hasHot , down : showTips }'>
      <dt class="border" @click="toggleTips">具体包括什么?</dt>
      <dd v-show='showTips'>
        <span class="greenColor">选择营养补充</span>
       <div class="choiceDetail">
        <!-- <dl id="loanDetailSpecial"> -->
        <dl>
         <template v-for='item in data.containYes'>
          <dd>
           <p><span>{{item.con}}</span></p>
         </dd>
         </template>
        </dl>
       </div>
      </dd>
      <dd v-show='showTips'>
        <span class="redColor">不选择营养补充</span>
       <div class="choiceDetail">
        <!-- <dl id="loanDetailSpecial"> -->
        <dl>
         <template v-for='item in data.containNo'>
          <dd>
           <p><span>{{item.con}}</span></p>
         </dd>
         </template>
        </dl>
       </div>
      </dd>
    </dl>
      <!-- 具体包括什么end -->

      <!-- 益处是什么start -->
    <dl class="hasIcon" :class='{ hot : hasHot , down : showTips1 }'>
      <dt class="border" @click="toggleTips1">益处是什么?</dt>
      <dd v-show='showTips1'>
        <span class="greenColor">选择营养补充</span>
       <div class="choiceDetail">
        <!-- <dl id="loanDetailSpecial"> -->
        <dl>
         <template v-for='item in data.goodYes'>
          <dd>
           <p><span>{{item.con}}</span></p>
         </dd>
         </template>
        </dl>
       </div>
      </dd>
      <dd v-show='showTips1'>
        <span class="redColor">不选择营养补充</span>
       <div class="choiceDetail">
        <!-- <dl id="loanDetailSpecial"> -->
        <dl>
         <template v-for='item in data.goodNo'>
          <dd>
           <p><span>{{item.con}}</span></p>
         </dd>
         </template>
        </dl>
       </div>
      </dd>
    </dl>
    <!-- 益处是什么end -->

    <!-- 风险和副作用是什么start -->
    <dl class="hasIcon" :class='{ hot : hasHot , down : showTips2 }'>
      <dt class="border" @click="toggleTips2">风险和副作用是什么?</dt>
      <dd v-show='showTips2'>
        <span class="greenColor">选择营养补充</span>
       <div class="loanDetail">
        <!-- <dl id="loanDetailSpecial"> -->
        <dl>
         <template v-for='item in data.dangerYes'>
          <dd>
           <p><span>{{item.con}}</span></p>
         </dd>
         </template>
        </dl>
       </div>
      </dd>
      <dd v-show='showTips2'>
        <span class="redColor">不选择营养补充</span>
       <div class="loanDetail">
        <!-- <dl id="loanDetailSpecial"> -->
        <dl>
         <template v-for='item in data.dangerNo'>
          <dd>
           <p><span>{{item.con}}</span></p>
         </dd>
         </template>
        </dl>
       </div>
      </dd>
    </dl>
    <!-- 风险和副作用是什么end -->
  </div>
</template>
<script>
  // 引入data
   import detailData from "../../data/old_yellow_detail.json"
    //  import detailData from "../../data/loan_detail.json"

  export default {
    data() {
      return {
        data: {},
        showFeatrue: false,
        showTips: false,
        showTips1: false,
        showTips2: false,
        hasHot: false
      }
    },
    methods: {
      toggleTips() {
        this.showTips = !this.showTips;
        if (this.hasHot == true) {
          this.hasHot = !this.hasHot;
          this.$store.commit('changeLoanIconStatu', {
            name: this.uid,
            val: true
          })
        }
      },
      toggleTips1() {
        this.showTips1 = !this.showTips1;
        if (this.hasHot == true) {
          this.hasHot = !this.hasHot;
          this.$store.commit('changeLoanIconStatu', {
            name: this.uid,
            val: true
          })
        }
      },
      toggleTips2() {
        this.showTips2 = !this.showTips2;
        if (this.hasHot == true) {
          this.hasHot = !this.hasHot;
          this.$store.commit('changeLoanIconStatu', {
            name: this.uid,
            val: true
          })
        }
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
