<template>
  <div class="container bgF">
    <topComponent title='知识问答'></topComponent>
    <p class="listTop">需要对接第三方接口，功能未开发。点击下方按钮，模拟已经完成。</p>
    <p class="listTop">{{tip}}</p>
    <ul class="answerList">
      <li>
       <el-button circle size="mini" v-if="choice !== 'A'" @click='clickA' hidden=isShow>A</el-button>
       <el-button circle size="mini" v-if="choice === 'A'" type='primary'>A</el-button>
       <span :class='textClassA'>需要对接第三方接口，功能未开发。点击下方按钮，模拟已经完成,需要对接第三方接口。</span>
      </li>
      <li>
      <el-button circle size="mini" v-if="choice !== 'B'" @click='clickB' hidden=isShow>B</el-button>
      <el-button circle size="mini" v-if="choice === 'B'" type='primary'>B</el-button>
       <span :class='textClassB'>需要对接第三方接口，功能未开发。点击下方按钮，模拟已经完成,需要对接第三方接口。</span>
      </li>
      <li>
      <el-button circle size="mini" v-if="choice !== 'C'" @click='clickC' hidden=isShow>C</el-button>
      <el-button circle size="mini" v-if="choice === 'C'" type='primary'>C</el-button>
       <span :class='textClassC'>需要对接第三方接口，功能未开发。点击下方按钮，模拟已经完成,需要对接第三方接口。</span>
      </li>
      <li>
      <el-button circle size="mini" v-if="choice !== 'D'" @click='clickD' hidden=isShow>D</el-button>
      <el-button circle size="mini" v-if="choice === 'D'" type='primary'>D</el-button>
       <span :class='textClassD'>需要对接第三方接口，功能未开发。点击下方按钮，模拟已经完成,需要对接第三方接口。</span>
      </li>
    </ul>
    <!-- <div class="btnWarp">
      <span class="subBtn" @click='goSave'>提交答案</span>
    </div> -->
    <ul class="standardAnswer">
    <li><span>答案：B</span></li>
    </ul>
    <footerAnwser></footerAnwser>
    <!-- <progressBar></progressBar> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tip: '',
        choice: '',
        isShow: true,
        textClassA: 'block',
        textClassB: 'block',
        textClassC: 'block',
        textClassD: 'block'
      }
    },
    methods: {
      goSave() {
        //验证答案
        this.$dialog(["识别完成", "false"]);
        setTimeout(() => {
          this.$router.back()
        }, 2000);
      },
      clickA() {
        this.choice='A';
        this.isShow=false;
        this.textClassA='textColor';
        this.textClassB='block';
        this.textClassC='block';
        this.textClassD='block';
      },
      clickB() {
        this.choice='B';
        this.isShow=false;
        this.textClassA='block';
        this.textClassB='textColor';
        this.textClassC='block';
        this.textClassD='block';
      },
      clickC() {
        this.choice='C';
        this.isShow=false;
        this.textClassA='block';
        this.textClassB='block';
        this.textClassC='textColor';
        this.textClassD='block';
      },
      clickD() {
        this.choice='D';
        this.isShow=false;
        this.textClassA='block';
        this.textClassB='block';
        this.textClassC='block';
        this.textClassD='textColor';
      }
    },
    mounted() {
      // 页面加载时
      if (this.$store.state.creditStatus['userScan'] === true) {
        if (this.$store.state.creditDatas['userScan'] !== undefined) {
          this.tip = '之前已经完成了认证'
        } else {
          // 如果vuex中未存储数据则发送ajax
          console.log('发送ajax')
        }
      }
    }
  }
</script>
