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
      <ul class="foodLogDetail ">
        <li style="width:20%">
            <dt style="color:gray;">摄入</dt>
            <dt style="font-size: 0.8025rem;">123456</dt>
        </li>
        <li style="width:51%">
            <dt><el-progress type="circle" :percentage="15" color="#73BD4C"></el-progress></dt>
        </li>
        <li style="width:28%">
            <dt style="color:gray">还可以吃</dt>
            <dt style="font-size: 0.8025rem;">158080</dt>
            <dt style="color:gray">推荐预算</dt>
            <dt style="font-size: 0.8025rem;">1390</dt>
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
        <p class="desc"><span style="color:red; font-size: 0.5525rem;">{{unit}}</span> <span style="color:gray; font-size: 0.5525rem;">千卡/100克</span></p>
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
    type="success" round>营养分析
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
        centerDialogVisible: false,
        loading: false,
        count: 1,
        list: [],
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
         return this.count >= 20
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
          this.count += 2
          this.loading = false
        }, 2000)
      },
      // load(){
      //   console.log("this.pageTotal：" + this.pageTotal)
      //   console.log("this.pageForm.page：" + this.pageForm.page)
      //   this.loading = true
      //   if(this.pageTotal >=  this.pageForm.page){
      //     setTimeout(() => {
      //     this.$ajax({
      //       async: false,
      //       method: 'post',
      //       url: '/info/page',
      //       data: this.pageForm
      //     }).then(res => {
      //       console.log(res)
      //       this.list = [...this.list, ...res.data.data.data]
      //       this.pageTotal = res.data.data.totalPage;
      //       this.pageForm.page ++;
      //       console.log("list.length:" + this.list.length)
      //       console.log("pageIndex:" + this.pageForm.page)
      //       console.log("Total:" + this.pageTotal)
      //       console.log("=================")
      //       this.loading = false
      //     }).catch(error => {
      //       alert('获取数据错误');
      //       console.log(error);
      //     });
      //   }, 1000)
      //   }else {
      //     console.log("没有更多")
      //     this.loading = false
      //     this.noMore = true
      //   }
      // },
      saveInfo() {
        console.log("保存")
        this.eatCount = 0
        this.isShow = false
        this.$router.push('/ganyusys/ganyu')
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
            top: 10rem;
            bottom: 0;
            right: 0;
            padding: 0;
        }
</style>
