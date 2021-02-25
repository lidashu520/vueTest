<template>
<div>
  <topComponent title='今日营养记录'>
    <span class="back" @click="$router.push('/ganyusys/ganyu')" slot="left">返回</span>
  </topComponent>
  <router-view></router-view>
  <div class="partThree">
    <div :class="cssType">
      <dl>
        <dt style="color: #8B4513">经典均衡饮食</dt>
        <ul class="foodLogDetail ">
          <li style="width:20%">
              <dt style="color:gray;">叶黄素:</dt>
          </li>
          <li style="width:45%">
            <el-progress :percentage="leafPer" :stroke-width="18" :text-inside='true' color="#FFD700"></el-progress>
          </li>
          <li style="width:35%">
            <dt >4/10 mg</dt>
          </li>

          <li style="width:20%">
              <dt style="color:gray;">维生素C:</dt>
          </li>
          <li style="width:45%">
            <el-progress :percentage="vcPer" :stroke-width="18" :text-inside='true' color="#ADFF2F"></el-progress>
          </li>
          <li style="width:35%">
            <dt >150/500 mg</dt>
          </li>

          <li style="width:20%">
              <dt style="color:gray;">维生素E:</dt>
          </li>
          <li style="width:45%">
            <el-progress :percentage="vePer" :stroke-width="18" :text-inside='true' ></el-progress>
          </li>
          <li style="width:35%">
            <dt >146.85/267 mg</dt>
          </li>

          <li style="width:20%">
              <dt style="color:gray;">氧化锌:</dt>
          </li>
          <li style="width:45%">
            <el-progress :percentage="znoPer" :stroke-width="18" :text-inside='true' color="#1E90FF"></el-progress>
          </li>
          <li style="width:35%">
            <dt >21.25/25 mg</dt>
          </li>

          <li style="width:20%">
              <dt style="color:gray;">氧化铜:</dt>
          </li>
          <li style="width:45%">
            <el-progress :percentage="cuoPer" :stroke-width="18" :text-inside='true' color="#EA7F21"></el-progress>
          </li>
          <li style="width:35%">
            <dt >2/2 mg</dt>
          </li>
        </ul>
      </dl>
    </div>
  </div>
  <div v-show="isBreak">
    <ul style="height:3rem">
      <li style="float:left;  margin-left:0.5rem">
          <dt style="color:#000; font-weight: bold;">早餐</dt>
      </li>
      <li style="float:left; margin-left:0.5rem">
        <span style="color:gray; font-size: 0.6525rem;">建议621-759千卡</span>
      </li>
    </ul>
    <ul style="border-bottom: 1px solid #E4E4E4;">
      <li class="food-item" v-for='(data,index) in breakList' :key='index' :value='data'>
        <div class="icon">
          <img width="57" height="57" :src='data.src'>
        </div>
          <div class="content">
            <h6 class="name">{{data.name}}</h6>
            <p class="desc"><span style="color:re; font-size: 0.6525rem;">{{data.result}} {{data.listOfName}}</span></p>
          </div>
      </li>
    </ul>
  </div>

  <div v-show="isLunch">
    <ul style="height:3rem">
      <li style="float:left;  margin-left:0.5rem">
          <dt style="color:#000; font-weight: bold;">午餐</dt>
      </li>
      <li style="float:left; margin-left:0.5rem">
        <span style="color:gray; font-size: 0.6525rem;">建议621-759千卡</span>
      </li>
    </ul>
    <ul style="border-bottom: 1px solid #E4E4E4;">
      <li class="food-item" v-for='(data,index) in lunchList' :key='index' :value='data'>
        <div class="icon">
          <img width="57" height="57" :src='data.src'>
        </div>
          <div class="content">
            <h6 class="name">{{data.name}}</h6>
            <p class="desc"><span style="color:gray; font-size: 0.6525rem;">{{data.result}} {{data.listOfName}}</span> </p>
          </div>
      </li>
    </ul>
  </div>

  <div v-show="isDinner">
    <ul style="height:3rem">
      <li style="float:left;  margin-left:0.5rem">
          <dt style="color:#000; font-weight: bold;">晚餐</dt>
      </li>
      <li style="float:left; margin-left:0.5rem">
        <span style="color:gray; font-size: 0.6525rem;">建议621-759千卡</span>
      </li>
    </ul>
    <ul style="border-bottom: 1px solid #E4E4E4;">
      <li class="food-item" v-for='(data,index) in dinnerList' :key='index' :value='data'>
        <div class="icon">
          <img width="57" height="57" :src='data.src'>
        </div>
          <div class="content">
            <h6 class="name">{{data.name}}</h6>
            <p class="desc"><span style="color:gray; font-size: 0.6525rem;">{{data.result}} {{data.listOfName}}</span> </p>
          </div>
      </li>
    </ul>
  </div>

  <div v-show="isAdd">
    <ul style="height:3rem">
      <li style="float:left;  margin-left:0.5rem">
          <dt style="color:#000; font-weight: bold;">加餐</dt>
      </li>
      <li style="float:left; margin-left:0.5rem">
        <span style="color:gray; font-size: 0.6525rem;">建议621-759千卡</span>
      </li>
    </ul>
    <ul style="border-bottom: 1px solid #E4E4E4;">
      <li class="food-item" v-for='(data,index) in addList' :key='index' :value='data'>
        <div class="icon">
          <img width="57" height="57" :src='data.src'>
        </div>
          <div class="content">
            <h6 class="name">{{data.name}}</h6>
            <p class="desc"><span style="color:gray; font-size: 0.6525rem;">{{data.result}} {{data.listOfName}}</span> </p>
          </div>
      </li>
    </ul>
  </div>
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
      type="success" :disabled='showAdd' round @click='toPage'>营养分析
    </el-button>
  </div>
    <p v-show="showAdd" style="
      margin-top:1.5rem;
      text-align: center;
      margin:auto;
      color:gray; font-size: 0.6525rem;">还没有记录请添加屏幕下方按钮来添加
    </p>
    <p style="
      text-align: center;
      margin-top:0.5rem;
      color:gray; font-size: 0.6525rem;">完整记录三餐分析才准确
    </p>
  <footerFoodLog></footerFoodLog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cssType: 'partThreeGray',
        isShow: false,
        showAdd: true,
        isBreak: false,
        isLunch: false,
        isDinner: false,
        isAdd: false,
        leafPer: 0,
        vcPer: 0,
        vePer: 0,
        znoPer: 0,
        cuoPer: 0,
        breakList: [],
        lunchList: [],
        dinnerList: [],
        addList: []
      }
    },
    mounted() {
      let data = null
      if(this.$route.query){
        data = this.$route.query
        if(data.eatTime === '早餐') this.breakList.push(data)
        if(data.eatTime === '午餐') this.lunchList.push(data)
        if(data.eatTime === '晚餐') this.dinnerList.push(data)
        if(data.eatTime === '加餐') this.addList.push(data)
      }
      if(this.breakList.length ===0 && this.lunchList.length===0 && this.dinnerList.length ===0 && this.addList.length ===0){
          this.cssType = 'partThreeGray'
      }else{
        if(this.breakList.length!=0) this.isBreak = true
        if(this.lunchList.length!=0) this.isLunch = true
        if(this.dinnerList.length!=0) this.isDinner = true
        if(this.addList.length!=0) this.isAdd = true
        this.cssType = 'partThreeSelect'
      }

    },
    methods: {
      toPage(){
        this.$router.push('/ganyusys/ganyu/daily/detail')
      }
    }


  }
</script>
