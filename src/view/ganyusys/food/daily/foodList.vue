<template>
<div>
  <topComponent title='营养测评'>
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
      <li v-for='(data,index) in list' :key='index' class="food-item"  @click="centerDialogVisible = true">
        <div class="icon" >
          <img width="57" height="57" :src="data.src">
        </div>
        <div class="content">
          <h6 class="name">{{data.name}}</h6>
          <p class="desc" style="
          width:12rem;"><span style="color:red; font-size: 0.6525rem;">{{data.mg}}</span><span style="color:gray; font-size: 0.5525rem;"> &nbsp;&nbsp;/100克</span> </p>
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
        <calculate @child-event='parentEvent'></calculate>
    </el-dialog>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        centerDialogVisible: false,
        loading: false,
        count: 10,
        list: [
          {
            name: "米饭",
            mg: "0.92mg氧化锌 0.06mg氧化铜",
            src:"./static/food/1_米饭.jpg",
          },
          {
            name: "小米",
            mg: "3.63mg维生素E 1.87mg氧化锌 0.54mg氧化铜",
            src:"./static/CuRank8.png",
          },
          {
            name: "挂面",
            mg: "1.11mg维生素E 1.22mg氧化锌 0.44mg氧化铜",
            src:"./static/food/3_挂面.jpg",
          },
          {
            name: "馒头",
            mg: "0.65mg维生素E 0.71mg氧化锌 0.10mg氧化铜",
            src:"./static/food/4_馒头.jpg",
          },
          {
            name: "玉米(黄干)",
            mg: "2.20mg叶黄素 3.89mg维生素E 1.70mg氧化锌 0.10mg氧化铜",
            src:"./static/VeRank9.png",
          },
          {
            name: "小麦胚粉",
            mg: "23.20mg维生素E 23.40mg氧化锌 0.83mg氧化铜",
            src:"./static/CuRank7.png",
          },
          {
            name: "荞麦(带皮)",
            mg: "2.90mg氧化锌 14.05mg氧化铜",
            src:"./static/CuRank1.png",
          },
          {
            name: "燕麦片",
            mg: "3.07维生素E 2.59mg氧化锌 0.45mg氧化铜",
            src:"./static/CuRank10.png",
          },
          {
            name: "红椒",
            mg: "130mg维生素C 0.41mg维生素E 0.19mg氧化锌 0.09mg氧化铜",
            src:"./static/VcRank2.png",
          },
          {
            name: "青椒",
            mg: "59mg维生素C 0.38mg维生素E 0.21mg氧化锌 0.05mg氧化铜",
            src:"./static/VcRank6.png",
          },
          {
            name: "白菜",
            mg: "31mg维生素C 0.76mg维生素E 0.38mg氧化锌 0.05mg氧化铜",
            src:"./static/food/2_白菜.jpg",
          },
          {
            name: "西红柿",
            mg: "14mg维生素C 0.42mg维生素E 0.12mg氧化锌 0.04mg氧化铜",
            src:"./static/food/5_番茄.jpg",
          },
          {
            name: "西芹(芹菜)",
            mg: "4mg维生素C 0.32mg维生素E 0.10mg氧化锌 0.02mg氧化铜",
            src:"./static/food/6_西芹.jpg",
          },
          {
            name: "黄瓜",
            mg: "9mg维生素C 0.49mg维生素E 0.18mg氧化锌 0.05mg氧化铜",
            src:"./static/food/7_黄瓜.jpg",
          },
          {
            name: "南瓜",
            mg: "8mg维生素C 0.36mg维生素E 0.14mg氧化锌 0.03mg氧化铜",
            src:"./static/food/8_南瓜.jpg",
          },
          {
            name: "胡萝卜",
            mg: "16mg维生素C 0.14mg氧化锌 0.03mg氧化铜",
            src:"./static/food/9_胡卜.jpg",
          },
          {
            name: "红薯",
            mg: "26mg维生素C 0.28mg维生素E 0.15mg氧化锌 0.18mg氧化铜",
            src:"./static/food/10_红薯.jpg",
          },
          {
            name: "菜心",
            mg: "44mg维生素C 0.52mg维生素E 0.87mg氧化锌 0.18mg氧化铜",
            src:"./static/VcRank9.png",
          },
          {
            name: "茄子(紫，长)",
            mg: "7mg维生素E 2mg氧化锌 0.04mg氧化铜",
            src:"./static/VeRank8.png",
          },
          {
            name: "花菜",
            mg: "61mg维生素C 0.43mg维生素E 0.38mg氧化锌 0.05mg氧化铜",
            src:"./static/VcRank5.png",
          },
          {
            name: "羽衣甘蓝(熟)",
            mg: "20.50mg叶黄素 63mg维生素C 1.12mg维生素E 0.56mg氧化锌 0.06mg氧化铜",
            src:"./static/VcRank3.png",
          },
          {
            name: "西兰花",
            mg: "4mg叶黄素 51mg维生素C 0.91mg维生素E 0.78mg氧化锌 0.03mg氧化铜",
            src:"./static/VcRank7.png",
          },
          {
            name: "菠菜",
            mg: "12.60mg叶黄素 32mg维生素C 1.74mg维生素E 0.85mg氧化锌 0.10mg氧化铜",
            src:"./static/VcRank10.png",
          },
          {
            name: "蕨菜",
            mg: "1.62mg氧化锌 5.63mg氧化铜",
            src:"./static/CuRank4.png",
          },
          {
            name: "胡麻油",
            mg: "389.90mg维生素E 0.30mg氧化锌 0.02mg氧化铜",
            src:"./static/VeRank1.png",
          },
          {
            name: "豆油",
            mg: "93.08mg维生素E 1.09mg氧化锌 0.16mg氧化铜",
            src:"./static/VeRank2.png",
          },
          {
            name: "葵花籽油",
            mg: "54.60mg维生素E 1.11mg氧化锌",
            src:"./static/VeRank5.png",
          },
          {
            name: "芝麻油",
            mg: "68.53mg维生素E 0.17mg氧化锌 0.05mg氧化铜",
            src:"./static/VeRank3.png",
          },
          {
            name: "菜籽油",
            mg: "60.89mg维生素E 0.54mg氧化锌 0.18mg氧化铜",
            src:"./static/VeRank4.png",
          },
          {
            name: "猪肉(瘦)",
            mg: "0.34mg维生素E 2.99mg氧化锌 0.11mg氧化铜",
            src:"./static/ZnRank8.png",
          },
          {
            name: "牛肉(瘦)",
            mg: "0.35mg维生素E 3.71mg氧化锌 0.16mg氧化铜",
            src:"./static/ZnRank7.png",
          },
          {
            name: "羊肉(瘦)",
            mg: "0.31mg维生素E 6.06mg氧化锌 0.12mg氧化铜",
            src:"./static/ZnRank5.png",
          },
          {
            name: "鸡肉(均值)",
            mg: "14.58mg维生素E 0.58mg氧化锌 0.07mg氧化铜",
            src:"./static/food/11_鸡肉.jpg",
          },
          {
            name: "鸭肉(均值)",
            mg: "0.27mg维生素E 1.33mg氧化锌 0.21mg氧化铜",
            src:"./static/food/12_鸭肉.jpg",
          },
          {
            name: "鲫鱼",
            mg: "1.94mg氧化锌 0.08mg氧化铜",
            src:"./static/food/13_鲫鱼.jpg",
          },
          {
            name: "草鱼",
            mg: "2.03mg维生素E 0.87mg氧化锌 0.05mg氧化铜",
            src:"./static/food/14_草鱼.jpg",
          },
          {
            name: "生蚝",
            mg: "71.20mg氧化锌 11.50mg氧化铜",
            src:"./static/food/13_鲫鱼.jpg",
          },
          {
            name: "扇贝",
            mg: "11.69mg氧化锌 0.48mg氧化铜",
            src:"./static/CuRank9.png",
          },
          {
            name: "牡蛎(海蛎子)",
            mg: "0.81mg维生素E 9.39mg氧化锌 8.13mg氧化铜",
            src:"./static/CuRank3.png",
          },
          {
            name: "虾仁",
            mg: "1.46mg维生素E 3.82mg氧化锌 2.33mg氧化铜",
            src:"./static/CuRank5.png",
          },
          {
            name: "鸡蛋",
            mg: "6mg叶黄素 1.84mg维生素E 1.10mg氧化锌 0.15mg氧化铜",
            src:"./static/food/15_鸡蛋.jpg",
          },
          {
            name: "鹌鹑蛋",
            mg: "3.08mg维生素E 1.61mg氧化锌 0.09mg氧化铜",
            src:"./static/food/16_鹌鹑蛋.jpg",
          },
          {
            name: "草莓",
            mg: "47mg维生素C 0.71mg维生素E",
            src:"./static/VcRank8.png",
          },
          {
            name: "猕猴桃",
            mg: "5mg叶黄素 62mg维生素C 2.43mg维生素E 0.57mg氧化锌 1.87mg氧化铜",
            src:"./static/VcRank4.png",
          },
          {
            name: "酸枣",
            mg: "900mg维生素C 1.09mg氧化锌 0.16mg氧化铜",
            src:"./static/VcRank1.png",
          },
          {
            name: "苹果",
            mg: "4mg维生素C 2.12mg维生素E 0.19mg氧化锌 0.06mg氧化铜",
            src:"./static/food/17_苹果.jpg",
          },
          {
            name: "牛奶(纯牛奶)",
            mg: "2.5mg维生素C 0.52mg维生素E 1.05mg氧化锌 0.05mg氧化铜",
            src:"./static/food/18_牛奶.jpg",
          },
          {
            name: "豆浆",
            mg: "0.80mg维生素E 0.24mg氧化锌 0.07mg氧化铜",
            src:"./static/food/19_豆浆.jpg",
          },
        ],
        pageForm: {
          page: 1,
        },
        pageTotal:9999,
        isShow: false,
        eatCount: 0
      }
    },
    computed: {
      noMore () {
        // return this.pageTotal <  this.pageForm.page
        //====================
         return this.count >= 50
      },
      disabled () {
        console.log("this.loading:" + this.loading)
        console.log("this.noMore:" + this.noMore)
        console.log("end:" + (this.loading || this.noMore))
        return (this.loading || this.noMore)
        // ===========return this.loading || this.noMore
      }
    },
      created(){
        this.load();
          },
    methods: {
      //======================
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 50
          this.loading = false
        }, 800)
      },
      saveInfo() {
        console.log("保存")
        this.eatCount = 0
        this.isShow = false
        this.$router.push('/ganyusys/ganyu/daily')
      },
      parentEvent(data) {
        if(data!=null && data!=undefined){
          console.log(data)
          this.eatCount +=1
          this.isShow = true
        }
        this.centerDialogVisible = false;
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
