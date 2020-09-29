<template>
  <div class="rewardWarp">
    <yellowStpOneTitle :idx='0'></yellowStpOneTitle>
    <div style="margin-top: 8.4rem" class="container choiceone">

      <!--start-->
    <div class="choiceOne">

    <dl>
     <!-- <dt class="yellowColor">第一部分：</dt>
     <dt class="whiteColor">选择与不选择营养补充的效益与风险比较</dt> -->
     <dt class="yellowColor">第一部分：</dt>
     <dt class="partGreenColor">选择与不选择营养补充的效益与风险比较</dt>
    </dl>


     <!-- 具体包括什么start -->

     <dl >
      <dt class="border" >具体包括什么?</dt>
      <dd >
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
      <dd >
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
  </div>
      <!-- end -->
    </div>
  <supFooter :idx='1'></supFooter>
  </div>
</template>

<script>
  // 引入data
   import detailData from "../../../data/old_yellow_detail.json"
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
    mounted() {
      // 根据传入的uid来，拉取该页面数据
      this.data = detailData['micro'];
    }
  }
</script>
