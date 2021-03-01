<template>
<div>
  <topComponent title='今日营养记录'>
    <span class="back" @click="$router.push('/ganyusys/ganyu')" slot="left">返回</span>
  </topComponent>
  <router-view></router-view>
  <div class="partThree">
    <div :class="cssType">
      <dl>
        <dt style="color: #8B4513">经典均衡饮食 &nbsp;&nbsp;&nbsp;&nbsp;(分号"/"下表示每日最大摄入量)</dt>
        <ul class="foodLogDetail ">
          <li style="width:20%">
              <dt style="color:gray;">叶黄素:</dt>
          </li>
          <li style="width:35%">
            <el-progress :percentage="leafPer" :stroke-width="18" :text-inside='true' color="#FFD700"></el-progress>
          </li>
          <li style="width:45%">
            <dt >{{leaf_kj}}/40 mg</dt>
          </li>

          <li style="width:20%">
              <dt style="color:gray;">维生素C:</dt>
          </li>
          <li style="width:35%">
            <el-progress :percentage="vcPer" :stroke-width="18" :text-inside='true' color="#ADFF2F"></el-progress>
          </li>
          <li style="width:45%">
            <dt >{{vc_kj}}/2000 mg</dt>
          </li>

          <li style="width:20%">
              <dt style="color:gray;">维生素E:</dt>
          </li>
          <li style="width:35%">
            <el-progress :percentage="vePer" :stroke-width="18" :text-inside='true' ></el-progress>
          </li>
          <li style="width:45%">
            <dt >{{ve_kj}}/468 mg</dt>
          </li>

          <li style="width:20%">
              <dt style="color:gray;">氧化锌:</dt>
          </li>
          <li style="width:35%">
            <el-progress :percentage="znoPer" :stroke-width="18" :text-inside='true' color="#1E90FF"></el-progress>
          </li>
          <li style="width:45%">
            <dt >{{zno_kj}}/2000 mg</dt>
          </li>

          <li style="width:20%">
              <dt style="color:gray;">氧化铜:</dt>
          </li>
          <li style="width:35%">
            <el-progress :percentage="cuoPer" :stroke-width="18" :text-inside='true' color="#EA7F21"></el-progress>
          </li>
          <li style="width:45%">
            <dt >{{cuo_kj}}/8 mg</dt>
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
      margin-top:2rem;
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
        leaf_kj: 0,
        vc_kj: 0,
        ve_kj: 0,
        zno_kj: 0,
        cuo_kj: 0,
        leafPer: 0,
        vcPer: 0,
        vePer: 0,
        znoPer: 0,
        cuoPer: 0,
        breakList: [],
        lunchList: [],
        dinnerList: [],
        addList: [],
        foodData: {},
        paramsData: []
      }
    },
    mounted() {
      if (this.$store.state.creditStatus['userDailyFood'] === true) {
        if (this.$store.state.creditDatas['userDailyFood'] !== undefined) {
          this.foodData = JSON.parse(this.$store.state.creditDatas['userDailyFood'])
          this.breakList = this.foodData.breakList
          this.lunchList = this.foodData.lunchList
          this.dinnerList = this.foodData.dinnerList
          this.addList = this.foodData.addList
          console.log(this.foodData)
        } else {
          // 如果vuex中未存储数据则发送ajax
          console.log('发送ajax')
        }
      }
      let data = null
      let index = -1
      if(JSON.stringify(this.$route.query) != '{}'){
        data = this.$route.query
        if(data.eatTime === '早餐') {
          this.breakList = this.addData(index,this.breakList,data)
        }
        if(data.eatTime === '午餐') {
          this.lunchList= this.addData(index,this.lunchList,data)
        }
        if(data.eatTime === '晚餐') {
          this.dinnerList = this.addData(index,this.dinnerList,data)
        }
        if(data.eatTime === '加餐') {
          this.addList = this.addData(index,this.addList,data)
        }
        this.foodData.breakList = this.breakList
        this.foodData.lunchList = this.lunchList
        this.foodData.dinnerList = this.dinnerList
        this.foodData.addList = this.addList
        this.$store.commit('uploadCreditStatu', {
            name: 'userDailyFood',
            val: true
          });
          this.$store.commit('uploadCreditData', {
            name: 'userDailyFood',
            val: JSON.stringify(this.foodData)
          });
      }
      if(this.breakList.length ===0 && this.lunchList.length===0 && this.dinnerList.length ===0 && this.addList.length ===0){
          this.cssType = 'partThreeGray'
      }else{
        if(this.breakList.length!=0) this.isBreak = true; this.showAdd = false
        if(this.lunchList.length!=0) this.isLunch = true; this.showAdd = false
        if(this.dinnerList.length!=0) this.isDinner = true; this.showAdd = false
        if(this.addList.length!=0) this.isAdd = true; this.showAdd = false
        this.cssType = 'partThreeSelect'
      }
        this.addElement(this.breakList)
        this.addElement(this.lunchList)
        this.addElement(this.dinnerList)
        this.addElement(this.addList)
        this.finalNum()

    },
    methods: {
      toPage(){
        this.paramsData.push({"value": this.leaf_kj, "name": "叶黄素"})
        this.paramsData.push({"value": this.vc_kj, "name": "维生素C"})
        this.paramsData.push({"value": this.ve_kj, "name": "维生素E"})
        this.paramsData.push({"value": this.zno_kj, "name": "氧化锌"})
        this.paramsData.push({"value": this.cuo_kj, "name": "氧化铜"})
        this.$router.push({ path: '/ganyusys/ganyu/daily/detail', query: this.paramsData})
      },
      addData(index,arryList,data) {
        for(let i = 0; i < arryList.length; i++) {
            if(arryList[i].name === data.name){
               index = i
               break
            }
          }
          if(index!=-1){
            arryList.splice(index,1,data);
          }else{
            arryList.push(data)
          }
          return arryList
      },
      addElement(arryList){
        for(let i = 0; i < arryList.length; i++) {
            this.leaf_kj = this.commonFun.add(this.leaf_kj , arryList[i].leaf_kj)
            this.vc_kj = this.commonFun.add(this.vc_kj , arryList[i].vc_kj)
            this.ve_kj = this.commonFun.add(this.ve_kj , arryList[i].ve_kj)
            this.zno_kj = this.commonFun.add(this.zno_kj , arryList[i].zno_kj)
            this.cuo_kj = this.commonFun.add(this.cuo_kj , arryList[i].cuo_kj)
          }
      },
      finalNum(){
        this.leafPer = this.commonFun.mul(this.commonFun.div(this.leaf_kj , 40) , 100)
        this.vcPer = this.commonFun.mul(this.commonFun.div(this.vc_kj , 2000) , 100)
        this.vePer = this.commonFun.mul(this.commonFun.div(this.ve_kj , 468) , 100)
        this.znoPer = this.commonFun.mul(this.commonFun.div(this.zno_kj , 2000) , 100)
        this.cuoPer = this.commonFun.mul(this.commonFun.div(this.cuo_kj , 8) , 100)
        if(this.leafPer>100) {
          this.cssType = 'partThreeRed'
          this.leafPer = 100
        }else{
          if(this.leafPer!=0) this.leafPer = parseFloat((this.leafPer).toFixed(2))
        }
        if(this.vcPer>100) {
          this.cssType = 'partThreeRed'
          this.vcPer = 100
        }else{
          if(this.vcPer!=0) this.vcPer = parseFloat((this.vcPer).toFixed(2))
        }
        if(this.vePer>100) {
          this.cssType = 'partThreeRed'
          this.vePer = 100
        }else{
          if(this.vePer!=0) this.vePer = parseFloat((this.vePer).toFixed(2))
        }
        if(this.znoPer>100) {
          this.cssType = 'partThreeRed'
          this.znoPer = 100
        }else{
          if(this.znoPer!=0) this.znoPer = parseFloat((this.znoPer).toFixed(2))
        }
        if(this.cuoPer>100) {
          this.cssType = 'partThreeRed'
          this.cuoPer = 100
        }else{
          if(this.cuoPer!=0) this.cuoPer = parseFloat((this.cuoPer).toFixed(2))
        }
        this.leaf_kj = parseFloat((this.leaf_kj).toFixed(3))
        this.vc_kj = parseFloat((this.vc_kj).toFixed(3))
        this.ve_kj = parseFloat((this.ve_kj).toFixed(3))
        this.zno_kj = parseFloat((this.zno_kj).toFixed(3))
        this.cuo_kj = parseFloat((this.cuo_kj).toFixed(3))
      }
    }


  }
</script>
