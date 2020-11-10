<template>
  <div class="foodDetail">
    <dl>
      <dt class="foodDetailSpecial">饮食与老年黄斑变性的关系？</dt>
      <template v-for='item in data.food'>
      <dd class="foodColor">
       <p><span>{{item.con}}</span></p>
      </dd>
      </template>
    </dl>
    <div class="yinYang">
    <dl>
      <dt>什么是营养补充？</dt>
         <template v-for='item in data.yinYang'>
      <dd>
       <p><span>{{item.con}}</span></p>
      </dd>
      </template>
    </dl>
    <dl>
      <dt>你的选择是什么？</dt>
         <template v-for='item in data.choice'>
      <dd>
       <p><span>{{item.con}}</span></p>
      </dd>
      </template>
    </dl>
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
        data: {}
      }
    },
    props: ['uid'],
    mounted() {
      // 根据传入的uid来，拉取该页面数据
      this.data = detailData[this.uid];
    }
  }
</script>
