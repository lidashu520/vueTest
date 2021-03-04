<template>
<div>
  <topComponent :title='titleName'>
    <span class="back" @click="$router.push('/ganyusys/ganyu/daily')" slot="left">返回</span>
    <span class="save" @click='saveInfo' slot='right'>完成<el-badge v-show="isShow" class="mark" :value="eatCount" :max="10"/></span>
  </topComponent>
  <div class="rewardWarp">
    <ul class="tabTitle" style="top: 2.75rem; border-bottom: 1px #fff solid;">
      <li v-for='(item,index) of items' :class='{on : index === idx }' @click="goChange(item)">{{item.name}}</li>
    </ul>
  </div>
  <div class="defineCls">
    <ul>
      <li @click="addDefineFood"><i class="el-icon-plus"></i> 添加自定义食物</li>
    </ul>
  </div>
    <ul style="border-bottom: 1px solid #E4E4E4; margin-top:5.5rem">
      <li class="food-item" v-for='(data,index) in defineList' :key='index' :value='data' @click="showDialog(data)">
        <div class="icon">
          <img width="57" height="57" :src='data.src'>
        </div>
          <div class="content">
            <h6 class="name">{{data.name}}</h6>
            <p class="desc" style="width:12rem;"><span style="color:red; font-size: 0.6525rem;">{{data.mg}}</span><span style="color:re; font-size: 0.6525rem;"> &nbsp;&nbsp;/ {{data.unit}}</span></p>
          </div>
      </li>
    </ul>
    <el-dialog
        v-if="centerDialogVisible"
        class="abow_dialog"
        :visible.sync="centerDialogVisible"
        width="100%"
        :destroy-on-close= true
        :show-close= false>
        <calculate-define :listData='value' @child-event='parentEvent'></calculate-define>
    </el-dialog>
  </div>
</template>

<script>
import calculateDefine from '../../../../components/common/calculateDefine.vue'
  export default {
  components: { calculateDefine },
    data () {
      return {
        titleName: '',
        value:{},
        centerDialogVisible: false,
        count: 10,
        pageForm: {
          page: 1,
        },
        pageTotal:9999,
        isShow: false,
        eatCount: 0,
        selectList: [],
        idx: 1,
        items: [
          {
            name: "常用",
            push: "/ganyusys/ganyu/daily/search",
          },
          {
            name: "自定义",
            push: "/ganyusys/ganyu/daily/define",
          },
        ],
        defineList: [],
        definefoodData:{}
      }
    },
    mounted(){
      if (this.$store.state.creditStatus['userDefineFood'] === true) {
        if (this.$store.state.creditDatas['userDefineFood'] !== undefined) {
          this.definefoodData = JSON.parse(this.$store.state.creditDatas['userDefineFood'])
          this.defineList = this.definefoodData.defineList
        } else {
          // 如果vuex中未存储数据则发送ajax
          console.log('发送ajax')
        }
      }
      if(this.$route.query.value==='早餐') this.titleName = '添加早餐'
      if(this.$route.query.value==='午餐') this.titleName = '添加午餐'
      if(this.$route.query.value==='晚餐') this.titleName = '添加晚餐'
      if(this.$route.query.value==='加餐') this.titleName = '加餐'
    },
    methods: {
      saveInfo() {
        this.eatCount = 0
        this.isShow = false
        this.$router.push({ path: '/ganyusys/ganyu/daily', query: this.selectList})
      },
      parentEvent(data) {
        let index = -1
        if(data!=null && data!=undefined){
          this.selectList = this.addData(index,this.selectList,data)
          this.eatCount = this.selectList.length
          this.isShow = true
        }
        this.centerDialogVisible = false;
      },
      showDialog(data){
        this.value = data
        this.value.eatTime = this.$route.query.value
        this.centerDialogVisible = true
      },
      goChange(item){
        if(item.name === '常用'){
          this.idx = 0
        }else{
          this.idx = 1
        }
        this.$router.push({ path: item.push, query:{value:this.$route.query.value}})
      },
      addDefineFood(){
        this.$router.push({ path: '/ganyusys/ganyu/daily/defineEdit', query:{value:this.$route.query.value}})
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
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .abow_dialog {
    display: flex;
    justify-content: center;
    align-items: Center;
    overflow: hidden;
  }
    .abow_dialog .el-dialog {
        margin: 0 auto !important;
        overflow: hidden;
    }
      .abow_dialog .el-dialog .el-dialog__body {
          position: fixed;
          left: 0;
          top: 12rem;
          bottom: 0;
          right: 0;
          padding: 0;
      }
  .defineCls  {
      height: 2.75rem;
      overflow: hidden;
      background: #fff;
      z-index: 9;
      position: fixed;
      top: 5.5rem;
      width: 100%;
  }
  .defineCls  ul {
    border-top: 1px #E6F0DF solid;
    border-bottom: 1px #E6F0DF solid;
    }
    .defineCls li {
      display: inline-block;
      width: 100%;
      cursor: pointer;
      text-align: center;
      line-height: 2.2rem;
      font-size: 0.8375rem;
    }
</style>
