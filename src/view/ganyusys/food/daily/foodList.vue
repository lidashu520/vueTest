<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <!-- <li v-for="i in count" class="list-item">{{ i }}</li> -->
      <li v-for="i in count" class="food-item"  @click="centerDialogVisible = true">
        <div class="icon" >
          <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
        </div>
        <div class="content">
          <h6 class="name">皮蛋瘦肉粥</h6>
          <p class="desc"><span style="color:red; font-size: 0.1525rem;">{{i}}</span> <span style="color:gray; font-size: 0.1525rem;">千卡/100克</span></p>
        </div>
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
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
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
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
