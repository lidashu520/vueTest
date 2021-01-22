<template>
<div>
  <nutriRankTitle :idx='0' />
  <div  class="infinite-list-wrapper" style="margin:0rem 0.5rem 0rem 23%;overflow:auto;">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-distance = 50
      infinite-scroll-disabled="disabled">
      <!-- <li v-for="i in count" class="list-item">{{ i }}</li> -->
      <li v-for="i in count" class="food-item"  @click="centerDialogVisible = true">
        <div class="icon" >
          <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
        </div>
        <div class="content">
          <h6 class="name">皮蛋瘦肉粥</h6>
          <p class="desc"><span style="color:red; font-size: 0.5525rem;">{{i}}</span> <span style="color:gray; font-size: 0.5525rem;">千卡/100克</span></p>
        </div>
      </li>
       <!-- <li v-for='(data,index) in list' :key='index' class="food-item"  @click="centerDialogVisible = true">
        <div class="icon" >
          <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
        </div>
        <div class="content">
          <h6 class="name">{{data.name}}</h6>
          <p class="desc"><span style="color:red; font-size: 0.5525rem;">{{data.name}}</span> <span style="color:gray; font-size: 0.5525rem;">千卡/100克</span></p>
        </div>
      </li> -->
    </ul>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
        // return this.pageTotal <  this.pageForm.page
        //====================
         return this.count >= 10
      },
      disabled () {
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
          this.count += 0
          this.loading = false
        }, 800)
      },
      saveInfo() {
        console.log("保存")
        this.eatCount = 0
        this.isShow = false
        this.$router.push('/ganyusys/ganyu/daily')
      },
    }
  }
</script>
