<template>
  <div class="container">
    <topComponent title='患者自我报告结局' :showLeft='false'>
    </topComponent>
    <!-- <loanBanner></loanBanner> -->
    <!-- <ul class="indexList mt5">
      <li v-for='data in list' :class='data.cls'  @click='$router.push(data.push)'><b>{{data.tit}}</b>{{data.con}}</li>
      <li  class='icon04' ><b>糖尿病视网膜病变</b>暂无（敬请期待）</li>
      <li  class='icon02' ><b>干眼</b>暂无（敬请期待）</li>
    </ul> -->
    <el-carousel class="loanBanner" :interval="5000" arrow="always">
    <el-carousel-item  v-for="item in imgs" v-bind:key="item.url" >
      <img :src="item.url"/>
    </el-carousel-item>
    </el-carousel>

    <div class="menu_list_title">
        <label>患者自我报告结局列表</label>
    </div>
    <div class="mtrbl10">

        <table class="menu_list text-center">
            <tr>
                    <td style="width: 50%;" id="platPayorder">
                        <a @click="$router.push('/idpic/other/')" class="color545454 line_height">
                    <span style="" class="check_bg">
                        <img src="../../assets/img/check.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            症状监测
                        </a>
                    </td>
                    <td style="width: 50%;" id="platAccountLog">
                        <a @click="$router.push('/idpic/survival')" class="color545454 line_height">
                    <span style="" class="ceping_bg">
                        <img src="../../assets/img/ceping.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            生存质量测评
                        </a>
                    </td>
            </tr>
        </table>

    </div>
    <footComponent :idx='2'></footComponent>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgs: [
        {url: require('../../assets/img/loanBanner1.jpg'), link: '/content1'},
        {url: require('../../assets/img/loanBanner2.jpg'), link: '/content1'},
        {url: require('../../assets/img/loanBanner3.jpg'), link: '/content1'},
        {url: require('../../assets/img/banner_2.jpg'), link: '/content1'},
      ],
    }
    }
  }
</script>
