<template>
  <div class="container">
    <topComponent title='症状监测' :showLeft='false'>
      <span class="back" @click="$router.push('/idpic')" slot="left">返回</span>
    </topComponent>
    <!-- <loanBanner></loanBanner> -->
    <!-- <ul class="indexList mt5">
      <li v-for='data in list' :class='data.cls'  @click='$router.push(data.push)'><b>{{data.tit}}</b>{{data.con}}</li>
      <li  class='icon04' ><b>糖尿病视网膜病变</b>暂无（敬请期待）</li>
      <li  class='icon02' ><b>干眼</b>暂无（敬请期待）</li>
    </ul> -->
    <!-- <el-carousel :interval="5000" arrow="always">
    <el-carousel-item  v-for="item in imgs" v-bind:key="item.url" >
      <img :src="item.url"/>
    </el-carousel-item>
    </el-carousel> -->

    <div class="menu_list_title">
        <label>症状监测评估列表</label>
    </div>
    <div class="mtrbl10">

        <table class="menu_list text-center">
            <tr>
                    <td style="width: 25%;" id="platPayorder">
                        <a  @click="centerDialogVisible = true" class="color545454 line_height">
                    <span style="" class="check01_bg">
                        <img src="../../assets/img/modifyPwd.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            焦虑
                        </a>
                    </td>
                    <td @click="$router.push('/idpic/other')" style="width: 25%;" id="platAccountLog">
                        <a  class="color545454 line_height">
                    <span style="" class="check02_bg">
                        <img src="../../assets/img/ceping.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            其它症状
                        </a>
                    </td>

                   <td style="width: 25%;" id="platAccountLog">
                        <a class="color545454 line_height">
                    <span style="" class="check03_bg">
                        <img src="../../assets/img/people.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            视力
                        </a>
                    </td>
            </tr>
        </table>


        <table class="menu_list text-center">
            <tr>
                    <td style="width: 25%;" id="platPayorder">
                        <a  class="color545454 line_height">
                    <span style="" class="check04_bg">
                        <img src="../../assets/img/check.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            水肿
                        </a>
                    </td>
                    <td style="width: 25%;" id="platAccountLog">
                        <a  class="color545454 line_height">
                    <span style="" class="check05_bg">
                        <img src="../../assets/img/gj01.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            睡眠障碍
                        </a>
                    </td>

                   <td style="width: 25%;" id="platAccountLog">
                        <a class="color545454 line_height">
                    <span style="" class="check06_bg">
                        <img src="../../assets/img/sub_agent.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            疼痛
                        </a>
                    </td>
            </tr>
        </table>

        <table class="menu_list text-center">
            <tr>
                    <td style="width: 25%;" id="platPayorder">
                        <a  class="color545454 line_height">
                    <span style="" class="check07_bg">
                        <img src="../../assets/img/notice_set_icon.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            抑郁
                        </a>
                    </td>
                    <td style="width: 25%;" id="platAccountLog">
                        <a  class="color545454 line_height">
                    <span style="" class="check08_bg">
                        <img src="../../assets/img/goods_icon.png"
                             style="width: 54px;margin-top: 23px;"/>
                    </span><br/>
                            照顾者压力
                        </a>
                    </td>

                    <td style="width: 25%;" id="platAccountLog">
                    </td>
            </tr>
        </table>

    </div>
<el-dialog
  :visible.sync="centerDialogVisible"
  width="90%"
  center>
  <hint></hint>
</el-dialog>
  </div>
</template>

<script>
  import hint from '../../components/common/hint'
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
