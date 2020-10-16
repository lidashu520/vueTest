<template>
  <div class="container">
    <topComponent title='蒙特利尔认知评估量表'>
      <!-- <span class="save" @click='saveInfo' slot='right'>保存</span> -->
    </topComponent>
    <p class="mt10 mrl10">&nbsp;&nbsp;&nbsp;</p>
    <div class="questions">
    <!---1---->
     <dl>
        <dt style="padding-top: 0.325rem"><span>表格当前页：{{currentPage}} / {{pageCount}}</span>
            <el-button style="margin-top:-20px" @click="change1">上一页</el-button>
            <el-button style="margin-top:-20px" @click="change2">下一页</el-button>
        </dt>
          <!-- <pdf
              :src="src"
              :page="currentPage"
              @num-pages="pageCount = $event"
              @page-loaded="currentPage = $event"
          ></pdf> -->
        <div style="margin: 0 auto;text-align: center">
        <img  :src="src" style="margin: 0 auto">
        </div>
     </dl>
    </div>
      <dl>
         <span style="padding-left: 1.325rem;
                      color: #000000;
                      text-indent: 0.625rem;
                      font-size: 0.78rem;
                      position: relative;
                      font-weight: bold;">
           得分：
         </span><el-input-number v-model="num" :min="0" :max="100" label="描述文字"></el-input-number>
     </dl>
   <div class="btnWarp">
        <span class="subBtn" :class="this.cls" @click='saveInfo'>提交</span>
   </div>
 </div>
</template>

<script>
  import pdf from 'vue-pdf';
  export default {
    components: {
      pdf
    },
    data() {
      return {
        // src:'./static/MoCA.pdf',
        src:'./static/pdf1.png',
        msg: 'Welcome to Your Vue.js App',
        currentPage: 1,
        pageCount: 4,
        num: 0,
        cls: 'subBtn',
        isSubmitted: true,
      }
    },
    methods: {
      saveInfo: function() {
        if(this.isSubmitted) {
          if(this.num === 0)  { this.$dialog("请输入得分"); return; }
              this.$dialog("提交完成");
              this.cls = "subBtn grayBg"
              this.isSubmitted = false
        }
      },
      change1(){
      if(this.currentPage>1){
        this.currentPage--
        this.src = "./static/pdf" + this.currentPage + ".png";
      }
      },
      change2(){
        if(this.currentPage < this.pageCount){
          this.currentPage++
          this.src = "./static/pdf" + this.currentPage + ".png";
        }
      }
    }
  }
</script>

<style scoped>
.pdf-set{
  display: inline-block;
  height:800px;
  width:800px;
}
</style>
