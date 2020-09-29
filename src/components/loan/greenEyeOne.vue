<template>
  <div class="loanDetail">
    <dl id="border">
      <dt>决策辅助工具的使用对象</dt>
      <template v-for='item in data.object'>
      <dd>
       <p><span>{{item.con}}</span></p>
      </dd>
      </template>
    </dl>
    <dl id="loanDetailSpecial">
      <dt>老年黄斑变性是什么？</dt>
         <template v-for='item in data.oldYellow'>
      <dd>
       <p><span>{{item.con}}</span></p>
      </dd>
      </template>
    </dl>
    <dl>
      <dt>老年黄斑变性的主要症状是什么？</dt>
      <dd>
        <p v-html='data.zhengZhuang'></p>
      </dd>
    </dl>
    <!-- <!-- <dl class="hasIcon" :class='{ down : showFeatrue}'>
      <dt @click="showFeatrue = !showFeatrue">产品特点</dt>
      <dd v-show='showFeatrue'>
        <p v-html='data.feature'></p>
      </dd>
    </dl> -->
    <dl id="loanDetailSpecial" class="hasIcon dot" :class='{ hot : hasHot , down : showTips }'>
      <dt class="border" @click="toggleTips">症状表现</dt>
      <dd v-show='showTips'>
        <img src="../../assets/img/zhengzhuang.png" slot='banner'/>
      </dd>
    </dl>
    <div class="btnWarp btn-float">
      <slot name="apply"></slot>
    </div>
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
