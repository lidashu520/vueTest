<template>
  <div  class="infinite-list-wrapper" style="overflow:auto; height:100%">
    <ul
      style="height:100%"
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-distance = 50
      infinite-scroll-disabled="disabled">
      <!-- <li v-for="i in count" class="list-item">{{ i }}</li> -->
      <!-- <li v-for="i in count" class="food-item"  @click="centerDialogVisible = true">
        <div class="icon" >
          <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
        </div>
        <div class="content">
          <h6 class="name">皮蛋瘦肉粥</h6>
          <p class="desc"><span style="color:red; font-size: 0.1525rem;">{{i}}</span> <span style="color:gray; font-size: 0.1525rem;">千卡/100克</span></p>
        </div>
      </li> -->
       <li v-for='(data,index) in list' :key='index' class="food-item"  @click="centerDialogVisible = true">
        <div class="icon" >
          <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
        </div>
        <div class="content">
          <h6 class="name">{{data.name}}</h6>
          <p class="desc"><span style="color:red; font-size: 0.5525rem;">{{data.name}}</span> <span style="color:gray; font-size: 0.5525rem;">千卡/100克</span></p>
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
        <!-- <hint></hint> -->
              <!-- :close-on-click-modal= false
        :close-on-press-escape= false -->
        <calculate @child-event='parentEvent'></calculate>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        centerDialogVisible: false,
        loading: false,
        count: 10,
        list: [],
        pageForm: {
          page: 1,
        },
        pageTotal:9999,
      }
    },
    computed: {
      noMore () {
        return this.pageTotal <  this.pageForm.page
        //  return this.count >= 20
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
      // load () {
      //   this.loading = true
      //   setTimeout(() => {
      //     this.count += 2
      //     this.loading = false
      //   }, 2000)
      // },
      load(){
        console.log("this.pageTotal：" + this.pageTotal)
        console.log("this.pageForm.page：" + this.pageForm.page)
        this.loading = true
        if(this.pageTotal >=  this.pageForm.page){
          setTimeout(() => {
          this.$ajax({
            async: false,
            method: 'post',
            url: '/info/page',
            data: this.pageForm
          }).then(res => {
            console.log(res)
            this.list = [...this.list, ...res.data.data.data]
            this.pageTotal = res.data.data.totalPage;
            this.pageForm.page ++;
            console.log("list.length:" + this.list.length)
            console.log("pageIndex:" + this.pageForm.page)
            console.log("Total:" + this.pageTotal)
            console.log("=================")
            this.loading = false
          }).catch(error => {
            alert('获取数据错误');
            console.log(error);
          });
        }, 1000)
        }else {
          console.log("没有更多")
          this.loading = false
          this.noMore = true
        }
      },
      parentEvent(data) {
        if(data!=null && data!=undefined){
          console.log(data)
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
