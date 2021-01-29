<template>
  <div>
  <topComponent title='营养测评'>
    <span class="back" @click="$router.push('/ganyusys/ganyu/daily')" slot="left">返回</span>
    <span class="save" @click='saveInfo' slot='right'>完成<el-badge v-show="isShow" class="mark" :value="eatCount" :max="10"/></span>
  </topComponent>
  <router-view></router-view>
  <div  class="infinite-list-wrapper" style="overflow:auto; height:100%">
    <ul
      style="height:100%"
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-distance = 50
      infinite-scroll-disabled="disabled">
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
        return this.pageTotal <  this.pageForm.page
      },
      disabled () {
        return (this.loading || this.noMore)
      }
    },
    mounted(){
      this.$ajax({
      method: 'get',
      url: '/validate',
      }).then(res => {
        if(res.success){
          this.load()
          return
        }
      }).catch(error => {
        this.$dialog("登录过期或请求超时,系统异常")
        this.$router.push('/login');
      });
    },
    methods: {
      load(){
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
            this.list = [...this.list, ...res.data.data]
            this.pageTotal = res.data.totalPage;
            this.pageForm.page ++;
            console.log("list.length:" + this.list.length)
            console.log("pageIndex:" + this.pageForm.page)
            console.log("Total:" + this.pageTotal)
            console.log("=================")
            this.loading = false
          }).catch(error => {
            this.$dialog("token失效，请重新登录!")
            this.$router.push('/login')
          });
        }, 200)
        }else {
          console.log("没有更多")
          this.loading = false
          this.noMore = true
        }
      },
      saveInfo() {
        this.eatCount = 0
        this.isShow = false
        this.$router.push('/ganyusys/ganyu/daily',)
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
