<template>
  <div class="container">
    <topComponent title='抑郁评估量表'>
      <!-- <span class="save" @click='saveInfo' slot='right'>保存</span> -->
    </topComponent>
    <p class="mt10 mrl10">&nbsp;&nbsp;&nbsp;</p>
    <div class="questions">
    <!---1---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、我觉得闷闷不乐，情绪低沉  </span></dt>
        <el-radio-group v-model="form.radio1">
          <dd class="floatW41">
            <el-radio :label="11"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="12"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="13"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="14"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---2---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>2、我觉得一天之中早晨最好  </span></dt>
        <el-radio-group v-model="form.radio2">
          <dd class="floatW41">
            <el-radio :label="21"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="22"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="23"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="24"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---3---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>3、我一阵阵地哭出来或是想哭  </span></dt>
        <el-radio-group v-model="form.radio3">
          <dd class="floatW41">
            <el-radio :label="31"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="32"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="33"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="34"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---4---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>4、我晚上睡眠不好  </span></dt>
        <el-radio-group v-model="form.radio4">
          <dd class="floatW41">
            <el-radio :label="41"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="42"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="43"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="44"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---5---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>5、我吃的和平时一样多 </span></dt>
        <el-radio-group v-model="form.radio5">
          <dd class="floatW41">
            <el-radio :label="51"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="52"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="53"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="54"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---6---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>6、我与异性接触时和以往一样感到愉快  </span></dt>
        <el-radio-group v-model="form.radio6">
          <dd class="floatW41">
            <el-radio :label="61"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="62"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="63"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="64"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---7---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>7、我发觉我的体重在下降  </span></dt>
        <el-radio-group v-model="form.radio7">
          <dd class="floatW41">
            <el-radio :label="71"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="72"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="73"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="74"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---8---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>8、我有便秘的苦恼  </span></dt>
        <el-radio-group v-model="form.radio8">
          <dd class="floatW41">
            <el-radio :label="81"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="82"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="83"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="84"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


    <!---9---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>9、我心跳比平时快  </span></dt>
        <el-radio-group v-model="form.radio9">
          <dd class="floatW41">
            <el-radio :label="91"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="92"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="93"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="94"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---10---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>10、我无缘无故感到疲乏  </span></dt>
        <el-radio-group v-model="form.radio10">
          <dd class="floatW41">
            <el-radio :label="101"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="102"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="103"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="104"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


    <!---11---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>11、我的头脑和平时一样清楚 </span></dt>
        <el-radio-group v-model="form.radio11">
          <dd class="floatW41">
            <el-radio :label="111"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="112"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="113"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="114"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


    <!---12---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>12、我觉得经常做的事情并没有困难  </span></dt>
        <el-radio-group v-model="form.radio12">
          <dd class="floatW41">
            <el-radio :label="121"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="122"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="123"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="124"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


    <!---13---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>13、我觉得不安而平静不下来  </span></dt>
        <el-radio-group v-model="form.radio13">
          <dd class="floatW41">
            <el-radio :label="131"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="132"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="133"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="134"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---14---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>14、我对将来抱有希望  </span></dt>
        <el-radio-group v-model="form.radio14">
          <dd class="floatW41">
            <el-radio :label="141"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="142"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="143"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="144"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---15---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>15、我比平常容易激动  </span></dt>
        <el-radio-group v-model="form.radio15">
          <dd class="floatW41">
            <el-radio :label="151"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="152"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="153"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="154"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---16---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>16、我觉得做出决定是容易的  </span></dt>
        <el-radio-group v-model="form.radio16">
          <dd class="floatW41">
            <el-radio :label="161"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="162"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="163"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="164"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


     <!---17---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>17、我觉得自己是个有用的人，有人需要  </span></dt>
        <el-radio-group v-model="form.radio17">
          <dd class="floatW41">
            <el-radio :label="171"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="172"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="173"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="174"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---18---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>18、我的生活过得很有意思  </span></dt>
        <el-radio-group v-model="form.radio18">
          <dd class="floatW41">
            <el-radio :label="181"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="182"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="183"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="184"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---19---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>19、我认为如果我死了别人会生活的更好些 </span></dt>
        <el-radio-group v-model="form.radio19">
          <dd class="floatW41">
            <el-radio :label="191"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="192"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="193"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="194"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---20---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>20、平常感兴趣的事我仍然照样感兴趣 </span></dt>
        <el-radio-group v-model="form.radio20">
          <dd class="floatW41">
            <el-radio :label="201"><span class="questionsWord">A.没有或很少时间</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="202"><span class="questionsWord">B.小部分时间</span></el-radio>
          </dd>
          <dd class="floatW31" style="width:31.5%">
            <el-radio :label="203"><span class="questionsWord">C.相当多时间</span></el-radio>
          </dd>
          <dd class="floatW55">
            <el-radio :label="204"><span class="questionsWord">D.绝大部分或全部时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    </div>
   <div class="btnWarp">
        <span :class="this.cls" @click='saveInfo'>提交</span>
   </div>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        form:{
          radio1: 0,
          radio2: 0,
          radio3: 0,
          radio4: 0,
          radio5: 0,
          radio6: 0,
          radio7: 0,
          radio8: 0,
          radio9: 0,
          radio10: 0,
          radio11: 0,
          radio12: 0,
          radio13: 0,
          radio14: 0,
          radio15: 0,
          radio16: 0,
          radio17: 0,
          radio18: 0,
          radio19: 0,
          radio20: 0
        },
        cls: 'subBtn',
        isSubmitted: true,
        mess: null
      }
    },
    methods: {
      saveInfo: function() {
        if(this.isSubmitted) {
          if(this.form.radio1 === 0)  this.$dialog("请作答第1题");
            else if(this.form.radio2 === 0) this.$dialog("请作答第2题");
            else if(this.form.radio3 === 0) this.$dialog("请作答第3题");
            else if(this.form.radio4 === 0) this.$dialog("请作答第4题");
            else if(this.form.radio5 === 0) this.$dialog("请作答第5题");
            else if(this.form.radio6 === 0) this.$dialog("请作答第6题");
            else if(this.form.radio7 === 0) this.$dialog("请作答第7题");
            else if(this.form.radio8 === 0) this.$dialog("请作答第8题");
            else if(this.form.radio9 === 0) this.$dialog("请作答第9题");
            else if(this.form.radio10 === 0) this.$dialog("请作答第10题");
            else if(this.form.radio11 === 0) this.$dialog("请作答第11题");
            else if(this.form.radio12 === 0) this.$dialog("请作答第12题");
            else if(this.form.radio13 === 0) this.$dialog("请作答第13题");
            else if(this.form.radio14 === 0) this.$dialog("请作答第14题");
            else if(this.form.radio15 === 0) this.$dialog("请作答第15题");
            else if(this.form.radio16 === 0) this.$dialog("请作答第16题");
            else if(this.form.radio17 === 0) this.$dialog("请作答第17题");
            else if(this.form.radio18 === 0) this.$dialog("请作答第18题");
            else if(this.form.radio19 === 0) this.$dialog("请作答第19题");
            else if(this.form.radio20 === 0) this.$dialog("请作答第20题");
            else {
              // 反向计分题号：2、5、6、11、12、14、16、17、18、20
              let total =  this.calculateNeg(parseInt(this.form.radio2.toString().charAt(1))) +
                           this.calculateNeg(parseInt(this.form.radio5.toString().charAt(1))) +
                           this.calculateNeg(parseInt(this.form.radio6.toString().charAt(1))) +
                           this.calculateNeg(parseInt(this.form.radio11.toString().charAt(2))) +
                           this.calculateNeg(parseInt(this.form.radio12.toString().charAt(2))) +
                           this.calculateNeg(parseInt(this.form.radio14.toString().charAt(2))) +
                           this.calculateNeg(parseInt(this.form.radio16.toString().charAt(2))) +
                           this.calculateNeg(parseInt(this.form.radio17.toString().charAt(2))) +
                           this.calculateNeg(parseInt(this.form.radio18.toString().charAt(2))) +
                           this.calculateNeg(parseInt(this.form.radio20.toString().charAt(2))) +
                           // 正向向计分题号：1、3、4、7、8、9、10、13、15、19
                           parseInt(this.form.radio1.toString().charAt(1)) +
                           parseInt(this.form.radio3.toString().charAt(1)) +
                           parseInt(this.form.radio4.toString().charAt(1)) +
                           parseInt(this.form.radio7.toString().charAt(1)) +
                           parseInt(this.form.radio8.toString().charAt(1)) +
                           parseInt(this.form.radio9.toString().charAt(1))  +
                           parseInt(this.form.radio10.toString().charAt(2)) +
                           parseInt(this.form.radio13.toString().charAt(2)) +
                           parseInt(this.form.radio15.toString().charAt(2)) +
                           parseInt(this.form.radio19.toString().charAt(2))
                          total = Math.floor(total*1.25)
                          let info = ""
                          if(total<53 && total>=25)  info = "您的精神正常"
                          else if(total>=53 && total<=62) info= "您是轻度抑郁"
                          else if(total>=63 && total<=72) info= "您是中度抑郁"
                          else if(total>72) info= "您是重度抑郁"
                          this.mess = this.$message({
                            dangerouslyUseHTMLString: true,
                            message: '<b style="font-size: 1.575rem;line-height: 4rem; font-weight: normal;text-indent: 1.225rem;">您的得分： ' +  total +'  </b>' +
                            '<br> <b style="font-size: 1.575rem;line-height: 4rem; font-weight: normal;text-indent: 1.225rem;"> ' +  info +'  </b></br>',
                            type: 'success',
                            center: true,
                            offset: 180,
                            showClose: true,
                            duration: 0
                          });
                          this.$dialog(["提交完成", "true"]);
                          this.cls = "subBtn grayBg"
                          this.isSubmitted = false
               }
            }
        },
        calculateNeg(val) {
         if(val===1) {
          return 4
        } else if(val===2) {
          return 3
        } else if(val===3) {
          return 2
        } else if(val===4) {
          return 1
        }
       },
      },
      destroyed(){
      if(this.mess!=null){
        this.mess.close();
      }
    }
    }
</script>
