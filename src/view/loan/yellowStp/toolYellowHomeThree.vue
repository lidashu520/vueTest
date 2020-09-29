<template>
  <div class="rewardWarp">
    <rewardTitle :idx='2'></rewardTitle>
    <div  class="container choiceone">
      <div style="margin-top: 0.02rem;"  class="choiceOne">
        <dl>
          <template v-for='item in data.choiceOne'>
            <dd>
            <p><span>{{item.con}}</span></p>
            </dd>
          </template>
        </dl>
      </div>
    </div>
    <supFooter :idx='0'></supFooter>
  </div>
</template>
<script>

  // 引入data
   import detailData from "../../../data/old_yellow_detail.json"

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
      // 打开页面时需要判断是否点过这个页面，显示下面的红色小圆点
      let thisIcon = this.$store.state.loanIcons[this.uid];
      if (thisIcon) this.hasHot = false;
    }
  }


</script>
