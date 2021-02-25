<template>
  <div class="container">
    <topComponent title='辅助工具' :showLeft='false'></topComponent>
    <loanBanner></loanBanner>
    <!-- <ul class="indexList mt5">
      <li v-for='data in list' :class='data.cls'  @click='$router.push(data.push)'><b>{{data.tit}}</b>{{data.con}}</li>
      <li  class='icon04' ><b>糖尿病视网膜病变</b>暂无（敬请期待）</li>
      <li  class='icon02' ><b>干眼</b>暂无（敬请期待）</li>
    </ul> -->

    <div class="menu_list_title">
        <label>辅助工具列表</label>
    </div>
    <div class="mtrbl10">

        <table class="menu_list text-center">
            <tr>
                    <td style="width: 50%;" id="platPayorder">
                        <a @click="$router.push('/loan/yellowHomeList')" class="color545454 line_height">
                    <span style="" class="gongju01_bg">
                        <img src="../../assets/img/gj01.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                           老年黄斑变性
                        </a>
                    </td>
                    <td id="platAccountLog">
                        <a @click="$router.push('/loan/greenEyeHomeList')" class="color545454 line_height">
                    <span style="" class="gongju02_bg">
                        <img src="../../assets/img/gj02.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            青光眼
                        </a>
                    </td>
            </tr>
        </table>

        <table class="menu_list text-center">
            <tr>
                    <td style="width: 50%;" id="platPayorder">
                        <a class="color545454 line_height">
                    <span style="" class="gongju03_bg">
                        <img src="../../assets/img/gj03.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            干眼
                        </a>
                    </td>
                    <td id="platAccountLog">
                        <a class="color545454 line_height">
                    <span style="" class="gongju04_bg">
                        <img src="../../assets/img/gj04.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            视网膜病变
                        </a>
                    </td>
            </tr>
        </table>

    </div>
    <footComponent :idx='1'></footComponent>
  </div>
</template>
<script>
  // 引入banner组件
  import loanBanner from '../../components/loan/banner'
  export default {
    data() {
      return {
        list: [{
          cls: 'icon02',
          tit: '老年黄斑变性',
          con: '老年黄斑变性介绍、饮食与老年黄斑变性关系、营养补充介绍、辅助工具决策',
          push: '/loan/micro'
        },
          {
            cls: 'icon03',
            tit: '青光眼',
            con: '你是青光眼患者、什么是开角型青光眼、哪些治疗方案、适合自己的治疗方案',
            push: '/loan/greenEye'
          }
        ]
      }
    },
    components: {
      loanBanner
    },

    // created(){
    //   this.$ajax({
    //   method: 'get',
    //   url: '/validate',
    //   }).then(res => {
    //     if(res.success){
    //       return
    //     }
    //   }).catch(error => {
    //     this.$dialog("登录过期或请求超时,系统异常")
    //     this.$router.push('/login');
    //   });
    // }
  }
</script>
