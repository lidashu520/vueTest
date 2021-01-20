<template>
<div>
  <topComponent title='今日营养记录'>
    <span class="back" @click="$router.push('/ganyusys/ganyu')" slot="left">返回</span>
  </topComponent>
  <router-view></router-view>
<div class="partThree">
  <div class="partThreeSelect">
    <dl>
      <dt style="color: #8B4513">经典均衡饮食</dt>
        <!--2，3 li 展示  before(仿造薄荷)-->
        <!-- <li style="width:51%">
            <dt><el-progress type="circle" :percentage="15" color="#73BD4C"></el-progress></dt>
        </li>
        <li style="width:28%">
            <dt style="color:gray">还可以吃</dt>
            <dt style="font-size: 0.8025rem;">158080</dt>
            <dt style="color:gray">推荐预算</dt>
            <dt style="font-size: 0.8025rem;">1390</dt>
        </li> -->
      <ul class="foodLogDetail ">
        <li style="width:20%">
            <dt style="color:gray;">叶黄素:</dt>
        </li>
        <li style="width:45%">
          <el-progress :percentage="40" :stroke-width="18" :text-inside='true' color="#FFD700"></el-progress>
        </li>
        <li style="width:35%">
          <dt >4/10 mg</dt>
        </li>

        <li style="width:20%">
            <dt style="color:gray;">维生素C:</dt>
        </li>
        <li style="width:45%">
          <el-progress :percentage="30" :stroke-width="18" :text-inside='true' color="#ADFF2F"></el-progress>
        </li>
        <li style="width:35%">
          <dt >150/500 mg</dt>
        </li>

        <li style="width:20%">
            <dt style="color:gray;">维生素D:</dt>
        </li>
         <li style="width:45%">
          <el-progress :percentage="55" :stroke-width="18" :text-inside='true' ></el-progress>
        </li>
        <li style="width:35%">
          <dt >146.85/267 mg</dt>
        </li>

        <li style="width:20%">
            <dt style="color:gray;">氧化锌:</dt>
        </li>
         <li style="width:45%">
          <el-progress :percentage="85" :stroke-width="18" :text-inside='true' color="#1E90FF"></el-progress>
        </li>
        <li style="width:35%">
          <dt >21.25/25 mg</dt>
        </li>

        <li style="width:20%">
            <dt style="color:gray;">氧化铜:</dt>
        </li>
         <li style="width:45%">
          <el-progress :percentage="100" :stroke-width="18" :text-inside='true' color="#EA7F21"></el-progress>
        </li>
        <li style="width:35%">
          <dt >2/2 mg</dt>
        </li>
      </ul>
    </dl>
  </div>
</div>
<ul style="height:3rem">
  <li style="float:left;  margin-left:0.5rem">
      <dt style="color:#000; font-weight: bold;">午餐</dt>
  </li>
  <li style="float:left; margin-left:0.5rem">
    <span style="color:gray; font-size: 0.5525rem;">建议621-759千卡</span>
  </li>
</ul>
<ul style="border-bottom: 1px solid #E4E4E4;">
  <li class="food-item">
    <div class="icon">
      <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
    </div>
      <div class="content">
        <h6 class="name">皮蛋瘦肉粥</h6>
        <p class="desc"><span style="color:red; font-size: 0.5525rem;">1000</span> <span style="color:gray; font-size: 0.5525rem;">千卡/100克</span></p>
      </div>
  </li>
</ul>
<div style=
    "width: 100%;
    margin-top:2rem;
    height: 2rem;
    position: relative;">
<el-button
    style="
    position: absolute;
    left: 50%;
    transform: translateX(-50%);"
    type="success" round @click='toPage'>营养分析
  </el-button>
</div>
  <p style="
    text-align: center;
    margin-top:0.5rem;
    color:gray; font-size: 0.5525rem;">完整记录三餐分析才准确
  </p>
  <footerFoodLog></footerFoodLog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        a:12,
        aSum:20,
        loading: false,
      }
    },
    methods: {
      toPage(){
        this.$router.push('/ganyusys/ganyu/daily/detail')
      }
    }
  }
</script>
