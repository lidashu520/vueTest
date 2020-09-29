<template>
  <div class="container">
    <topComponent title='干预支持系统' :showLeft='false'></topComponent>
    <!-- <loanBanner></loanBanner> -->
    <!-- <ul class="indexList mt5">
      <li v-for='data in list' :class='data.cls'  @click='$router.push(data.push)'><b>{{data.tit}}</b>{{data.con}}</li>
      <li  class='icon04' ><b>糖尿病视网膜病变</b>暂无（敬请期待）</li>
      <li  class='icon02' ><b>干眼</b>暂无（敬请期待）</li>
    </ul> -->
    <div class="indexBanner" style="margin-top:-0.01rem">
      <img src="../../assets/img/yingYangBanner.png" slot='banner'/>
    </div>
    <div class="menu_list_title">
        <label>健康管理</label>
    </div>
    <div class="mtrbl10">

        <table class="menu_list text-center">
            <tr>
                    <td style="width: 50%;" >
                        <a @click="$router.push('/ganyusys/pinggu')" class="color545454 line_height">
                    <span style="" class="food01_bg">
                        <img src="../../assets/img/food_1.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                           老年黄斑变性
                        </a>
                    </td>
                    <td >
                        <a  class="color545454 line_height">
                    <span style="" class="food02_bg">
                        <img src="../../assets/img/food_2.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            视网膜病变
                        </a>
                    </td>
            </tr>
        </table>

        <table class="menu_list text-center">
            <tr>
                    <td style="width: 50%;" >
                        <a class="color545454 line_height">
                    <span style="" class="food03_bg">
                        <img src="../../assets/img/food_3.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            干眼
                        </a>
                    </td>
                    <td >
                        <a class="color545454 line_height">
                    <span style="" class="food04_bg">
                        <img src="../../assets/img/food_4.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            青光眼
                        </a>
                    </td>
            </tr>
        </table>

    </div>
    <footComponent :idx='3'></footComponent>
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
    }
  }
</script>
