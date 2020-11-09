<template>
<div class="container">
  <topComponent title='焦虑评估量表'>
  </topComponent>
  <!-- <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;本量表按最新中国常模结果设计，总分的正常上限为40分，标准分为50分，你焦虑评定的分界值是50分，
    标准分低于50分值说明你心理状况正常，超过50分说明你有焦虑症状,分值越高，说明您的焦虑症状越严重，
    需要接受心理咨询甚至需要在医生指导下服药。</p> -->
  <p class="mt10 mrl10">&nbsp;&nbsp;&nbsp;</p>
  <div class="questions">
    <!---1---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、我觉得比平常容易紧张或着急  </span></dt>
        <el-radio-group v-model="form.radio1">
          <dd class="floatW32">
            <el-radio :label="11"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="12"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="13"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW42" style="width:42.3%">
            <el-radio :label="14"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
        <!---2---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>2、我无缘无故地感到害怕  </span></dt>
        <el-radio-group v-model="form.radio2">
          <dd class="floatW32">
            <el-radio :label="21"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="22"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="23"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW42" style="width:42.3%">
            <el-radio :label="24"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
        <!---3---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>3、我容易心里烦乱或觉得惊恐  </span></dt>
        <el-radio-group v-model="form.radio3">
          <dd class="floatW32">
            <el-radio :label="31"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="32"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="33"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="34"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


    <dl>
     <dt style="padding-top: 0.325rem"><span>4、我觉得我可能将要发疯  </span></dt>
        <el-radio-group v-model="form.radio4">
          <dd class="floatW32">
            <el-radio :label="41"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="42"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="43"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="44"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>5、我觉得一切都很好，也不会发生什么不幸  </span></dt>
        <el-radio-group v-model="form.radio5">
          <dd class="floatW32">
            <el-radio :label="51"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="52"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="53"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="54"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <dl>
     <dt style="padding-top: 0.325rem"><span>6、我手脚发抖打颤  </span></dt>
        <el-radio-group v-model="form.radio6">
          <dd class="floatW32">
            <el-radio :label="61"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="62"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="63"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="64"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

   <dl>
     <dt style="padding-top: 0.325rem"><span>7、我因为头痛、颈痛和背痛而苦恼  </span></dt>
        <el-radio-group v-model="form.radio7">
          <dd class="floatW32">
            <el-radio :label="71"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="72"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="73"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="74"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <dl>
     <dt style="padding-top: 0.325rem"><span>8、我感觉容易衰弱和疲乏  </span></dt>
        <el-radio-group v-model="form.radio8">
          <dd class="floatW32">
            <el-radio :label="81"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="82"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="83"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="84"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>9、我得心平气和，并且容易安静坐着  </span></dt>
        <el-radio-group v-model="form.radio9">
          <dd class="floatW32">
            <el-radio :label="91"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="92"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="93"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="94"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>10、我觉得心跳得很快  </span></dt>
        <el-radio-group v-model="form.radio10">
          <dd class="floatW32">
            <el-radio :label="101"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="102"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="103"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="104"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>11、我因为一阵阵头晕而苦恼 </span></dt>
        <el-radio-group v-model="form.radio11">
          <dd class="floatW32">
            <el-radio :label="111"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="112"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="113"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="114"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>12、我有晕倒发作，或觉得要晕倒似的  </span></dt>
        <el-radio-group v-model="form.radio12">
          <dd class="floatW32">
            <el-radio :label="121"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="122"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="123"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="124"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>13、我吸气呼气都感到很容易  </span></dt>
        <el-radio-group v-model="form.radio13">
          <dd class="floatW32">
            <el-radio :label="131"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="132"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="133"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="134"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>14、我的手脚麻木和刺痛  </span></dt>
        <el-radio-group v-model="form.radio14">
          <dd class="floatW32">
            <el-radio :label="141"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="142"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="143"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="144"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>15、我因为胃痛和消化不良而苦恼  </span></dt>
        <el-radio-group v-model="form.radio15">
          <dd class="floatW32">
            <el-radio :label="151"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="152"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="153"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="154"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>16、我常常要小便  </span></dt>
        <el-radio-group v-model="form.radio16">
          <dd class="floatW32">
            <el-radio :label="161"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="162"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="163"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="164"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>17、我的手脚常常是干燥温暖的 </span></dt>
        <el-radio-group v-model="form.radio17">
          <dd class="floatW32">
            <el-radio :label="171"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="172"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="173"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="174"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>18、我脸红发热 </span></dt>
        <el-radio-group v-model="form.radio18">
          <dd class="floatW32">
            <el-radio :label="181"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="182"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="183"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="184"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <dl>
     <dt style="padding-top: 0.325rem"><span>19、我容易入睡并且一夜睡得很好 </span></dt>
        <el-radio-group v-model="form.radio19">
          <dd class="floatW32">
            <el-radio :label="191"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="192"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="193"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="194"><span class="questionsWord">绝大部分时间有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>20、我做恶梦 </span></dt>
        <el-radio-group v-model="form.radio20">
          <dd class="floatW32">
            <el-radio :label="201"><span class="questionsWord">没有或很少有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="202"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="203"><span class="questionsWord">大部分时间有</span></el-radio>
          </dd>
          <dd class="floatW35" style="width:42.3%">
            <el-radio :label="204"><span class="questionsWord">绝大部分时间有</span></el-radio>
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
              let total =  this.calculate(parseInt(this.form.radio1.toString().charAt(1))) +
                           this.calculate(parseInt(this.form.radio2.toString().charAt(1))) +
                           this.calculate(parseInt(this.form.radio3.toString().charAt(1))) +
                           this.calculate(parseInt(this.form.radio4.toString().charAt(1))) +
                           this.calculate(parseInt(this.form.radio5.toString().charAt(1))) +
                           this.calculate(parseInt(this.form.radio6.toString().charAt(1))) +
                           this.calculate(parseInt(this.form.radio7.toString().charAt(1))) +
                           this.calculate(parseInt(this.form.radio8.toString().charAt(1))) +
                           this.calculate(parseInt(this.form.radio9.toString().charAt(1))) +
                           this.calculate(parseInt(this.form.radio10.toString().charAt(2))) +
                           this.calculate(parseInt(this.form.radio11.toString().charAt(2))) +
                           this.calculate(parseInt(this.form.radio12.toString().charAt(2))) +
                           this.calculate(parseInt(this.form.radio13.toString().charAt(2))) +
                           this.calculate(parseInt(this.form.radio14.toString().charAt(2))) +
                           this.calculate(parseInt(this.form.radio15.toString().charAt(2))) +
                           this.calculate(parseInt(this.form.radio16.toString().charAt(2))) +
                           this.calculate(parseInt(this.form.radio17.toString().charAt(2))) +
                           this.calculate(parseInt(this.form.radio18.toString().charAt(2))) +
                           this.calculate(parseInt(this.form.radio19.toString().charAt(2))) +
                           this.calculate(parseInt(this.form.radio20.toString().charAt(2)))

                          total = Math.floor(total*1.25)
                          let info = ""
                          if(total<53 && total>=0)  info = "您的焦虑评估正常"
                          else if(total>=53 && total<=62) info= "您是轻度焦虑"
                          else if(total>=63 && total<=72) info= "您是中度焦虑"
                          else if(total>72) info= "您是重度焦虑"
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
                          // this.isSubmitted = false

                this.$dialog(["提交完成", "true"]);;
                this.cls = "subBtn grayBg"
            }
        }
      },
      calculate(val) {
         if(val===1) {
          return 0
        } else if(val===2) {
          return 1
        } else if(val===3) {
          return 2
        } else if(val===4) {
          return 3
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
