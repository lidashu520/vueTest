<template>
<div>
  <topComponent :title='titleName'>
    <span class="back" @click="$router.push('/ganyusys/ganyu/daily')" slot="left">返回</span>
    <span class="save" @click='saveInfo' slot='right'>完成<el-badge v-show="isShow" class="mark" :value="eatCount" :max="10"/></span>
  </topComponent>
  <div  class="infinite-list-wrapper" style="overflow:auto; height:100%">
    <ul
      style="height:100%"
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-distance = 50
      infinite-scroll-disabled="disabled">
      <li v-for='(data,index) in list' :key='index' :value='data' class="food-item" @click="showDialog(data)">
        <div class="icon" >
          <img width="57" height="57" :src="data.src">
        </div>
        <div class="content">
          <h6 class="name">{{data.name}}</h6>
          <p class="desc" style="
          width:12rem;"><span style="color:red; font-size: 0.6525rem;">{{data.mg}}</span><span style="color:gray; font-size: 0.6525rem;"> &nbsp;&nbsp;/100克</span> </p>
        </div>
      </li>
    </ul>
    <p class="noMore" v-if="loading">加载中...</p>
    <p class="noMore" v-if="noMore">没有更多了</p>
    <el-dialog
        v-if="centerDialogVisible"
        class="abow_dialog"
        :visible.sync="centerDialogVisible"
        width="100%"
        :destroy-on-close= true
        :show-close= false>
        <calculate :listData='value' @child-event='parentEvent'></calculate>
    </el-dialog>
  </div>
  </div>
</template>

<script>
 import foodList from '../../../../data/foodList.json'
  export default {
    data () {
      return {
        titleName: '',
        value:{},
        centerDialogVisible: false,
        loading: false,
        count: 10,
        list: foodList,
        pageForm: {
          page: 1,
        },
        pageTotal:9999,
        isShow: false,
        eatCount: 0,
        selectData: {}
      }
    },
    computed: {
      noMore () {
         return this.count >= 50
      },
      disabled () {
        return (this.loading || this.noMore)
      }
    },
      mounted(){
        if(this.$route.query.value==='早餐') this.titleName = '添加早餐'
        if(this.$route.query.value==='午餐') this.titleName = '添加午餐'
        if(this.$route.query.value==='晚餐') this.titleName = '添加晚餐'
        if(this.$route.query.value==='加餐') this.titleName = '加餐'
        this.load();
      },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 50
          this.loading = false
        }, 600)
      },
      saveInfo() {
        this.eatCount = 0
        this.isShow = false
        this.$router.push({ path: '/ganyusys/ganyu/daily', query: this.selectData})
      },
      parentEvent(data) {
        if(data!=null && data!=undefined){
          this.selectData = data
          this.eatCount +=1
          this.isShow = true
        }
        this.centerDialogVisible = false;
      },
      showDialog(data){
        this.value = data
        this.value.eatTime = this.$route.query.value
        this.centerDialogVisible = true
      }

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
</style>
