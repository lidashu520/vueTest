<template>
  <div class="container">
    <topComponent title='AMD饮食测评'>
      <span class="save" @click='saveInfo' slot='right'>保存</span>
    </topComponent>

    <!-- <p class="listTop questionsWord ">二、营养状况调查</p> -->
    <!-- 1 -->
     <div class="questions">
     <dl>
     <dt style="padding-top: 0.325rem"><span>1. 您觉得饮食会影响您的健康吗？</span></dt>
      <el-radio-group v-model="form.radio1">
        <dd class="floatW35">
          <el-radio :label="11"><span class="questionsWord">A.非常影响 </span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="12"><span class="questionsWord">B.影响</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="13"><span class="questionsWord">C.不清楚</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>
    <!-- 2 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>2. 您觉得饮食会影响您眼睛的健康吗？</span></dt>
      <el-radio-group v-model="form.radio2">
        <dd class="floatW35">
          <el-radio :label="21"><span class="questionsWord">A.非常影响 </span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="22"><span class="questionsWord">B.影响</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="23"><span class="questionsWord">C.不清楚</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 3 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>3.  以下列举的食物哪些是您上周吃过的？(可多选)  </span></dt>
      <dd>
        <el-checkbox-group v-model="form.checkList3" @change="showOther3">
            <dd class="floatW20">
              <el-checkbox label="A"><span class="questionsWord">胡萝卜</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="B"><span class="questionsWord">冰欺凌</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox  label="C"><span class="questionsWord">菠菜 </span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="D"><span class="questionsWord">卷心菜 </span></el-checkbox>
            </dd>
            <dd class="floatW60">
              <el-checkbox label="E"><span class="questionsWord">羽衣甘蓝(紫色包包白)</span></el-checkbox>
            </dd>
            <dd class="floatW17">
              <el-checkbox label="F"><span class="questionsWord">橘子</span></el-checkbox>
            </dd>
            <dd class="floatW18">
              <el-checkbox label="G"><span class="questionsWord">奶酪</span></el-checkbox>
            </dd>
            <dd class="floatW18">
              <el-checkbox label="H"><span class="questionsWord">辣椒</span></el-checkbox>
            </dd>
            <dd class="floatW18">
              <el-checkbox label="I"><span class="questionsWord">芒果</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="J"><span class="questionsWord">其他</span></el-checkbox>
            </dd>
            <dd>
              <input v-show="is_Show3" v-model="text3" class="questionsWord floatW30" type="text" placeholder="具体而言">
            </dd>
        </el-checkbox-group>
      </dd>
     </dl>

    <br>
    <br>
    <br v-show="is_Show3">
    <br v-show="is_Show3">
     <!-- 4 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>4. 以下哪种类型的食物含有大量的不饱和酸，有较</span></dt>
     <dt style="padding-top: 0.325rem"><span>强的抗氧化能力？</span></dt>
      <el-radio-group v-model="form.radio4">
        <dd class="floatW25">
          <el-radio :label="41"><span class="questionsWord">A.蔬菜类</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="42"><span class="questionsWord">B.肉类</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="43"><span class="questionsWord">C.鱼类</span></el-radio>
        </dd>
        <dd class="floatW20" style="width:21.2%">
          <el-radio :label="44"><span class="questionsWord">D.蛋类</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="45"><span class="questionsWord">E.水果类</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 5 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>5. 玉米中那种营养素含量高？</span></dt>
      <el-radio-group v-model="form.radio5">
        <dd class="floatW30">
          <el-radio :label="51"><span class="questionsWord">A.维生素A</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="52"><span class="questionsWord">B.维生素B</span></el-radio>
        </dd>
        <dd class="floatW46">
          <el-radio :label="53"><span class="questionsWord">C.叶黄素/玉米黄素</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="54"><span class="questionsWord">D.胡萝卜素</span></el-radio>
        </dd>
        <dd class="floatW30" style="width:29.5%">
          <el-radio :label="55"><span class="questionsWord">E.维生素E</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 6 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>6. 您觉得以下哪种蔬菜对视力恢复有好处（多选）？  </span></dt>
      <dd>
        <el-checkbox-group v-model="form.checkList6">
            <dd class="floatW20">
              <el-checkbox label="A"><span class="questionsWord">A.菠菜</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="B"><span class="questionsWord">B.西蓝花</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox  label="C"><span class="questionsWord">C.紫菜</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="D"><span class="questionsWord">D.胡萝卜</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="E"><span class="questionsWord">E.都没有</span></el-checkbox>
            </dd>
        </el-checkbox-group>
      </dd>
     </dl>

     </br>
     </br>
     </br>

     <!-- 7 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>7. 年龄相关性黄斑变性患者每天应摄入多少含量的</span></dt>
     <dt style="padding-top: 0.325rem"><span>叶黄素/玉米黄素较为适宜？</span></dt>
      <el-radio-group v-model="form.radio7">
        <dd class="floatW35">
          <el-radio :label="71"><span class="questionsWord">A.10mg/2mg</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="72"><span class="questionsWord"> B.5mg/2mg</span></el-radio>
        </dd>
        <dd class="floatW34" style="width:34.5%">
          <el-radio :label="73"><span class="questionsWord">C.15mg/5mg</span></el-radio>
        </dd>
        <dd class="floatW27">
          <el-radio :label="74"><span class="questionsWord">D.不清楚</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>


     <!-- 8 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>8. 您知道以下哪些抗氧化物质有益年龄相关性黄斑</span></dt>
     <dt style="padding-top: 0.325rem"><span>变性的治疗吗（多选）？</span></dt>
      <el-checkbox-group v-model="form.checkList8">
            <dd class="floatW45">
              <el-checkbox label="A"><span class="questionsWord">A.叶黄素/玉米黄素</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="B"><span class="questionsWord">B.维生素C</span></el-checkbox>
            </dd>
            <dd class="floatW28">
              <el-checkbox  label="C"><span class="questionsWord">C.维生素E</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="D"><span class="questionsWord">D.氧化锌</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="E"><span class="questionsWord">E.氧化铜</span></el-checkbox>
            </dd>
        </el-checkbox-group>
     </dl>

     </br>
     </br>
     </br>

     <!-- 9 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>9. 以下那种食物叶黄素含量最高？</span></dt>
     <el-radio-group v-model="form.radio9">
      <dd class="floatW25">
          <el-radio :label="91"><span class="questionsWord">A.干玉米</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="92"><span class="questionsWord">B.羽衣甘蓝</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="93"><span class="questionsWord">C.菠菜</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="94"><span class="questionsWord">D.西兰花</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="95"><span class="questionsWord">E.鸡蛋</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 10 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>10. 您认为营养可以减缓AMD病情发展吗？</span></dt>
      <el-radio-group v-model="form.radio10">
        <dd class="floatW20" style="width:20.7%">
          <el-radio :label="101"><span class="questionsWord">A.是</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="102"><span class="questionsWord">B.否</span></el-radio>
        </dd>
        <dd class="floatW33">
          <el-radio :label="103"><span class="questionsWord">C.不清楚</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

    <!-- 11 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>11. 您觉得以下哪些食物含有大量的抗氧化物质，可</span></dt>
     <dt style="padding-top: 0.325rem"><span>以延缓年龄相关性黄斑变性的发生（多选）？</span></dt>
      <el-checkbox-group v-model="form.checkList11">
            <dd class="floatW20">
              <el-checkbox label="A"><span class="questionsWord">A.鸡蛋</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="B"><span class="questionsWord">B.土豆</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox  label="C"><span class="questionsWord">C.瘦肉</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="D"><span class="questionsWord">D.冬瓜</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="E"><span class="questionsWord">E.牛奶</span></el-checkbox>
            </dd>
        </el-checkbox-group>
     </dl>

     <br>
     <br>
     <br>

     <!-- 12 -->
     <!-- <dl>
     <dt style="padding-top: 0.325rem"><span>12. 您觉得饮食会影响您眼睛的健康吗？</span></dt>
      <el-radio-group v-model="radio12" @change="showThirty">
        <dd class="floatW40">
          <el-radio :label="121"><span class="questionsWord">A.是</span></el-radio>
        </dd>
        <dd class="floatW40">
          <el-radio :label="122"><span class="questionsWord">B.否</span></el-radio>
        </dd>
      </el-radio-group>
     </dl> -->

     <!-- 12 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>12. 您觉得下列哪些项目对您的视力有不利影响？</span></dt>
     <dt style="padding-top: 0.325rem"><span>(多选)</span></dt>
      <el-checkbox-group v-model="form.checkList12">
            <dd class="floatW50">
              <el-checkbox label="A"><span class="questionsWord">A.长时间用电脑，看手机</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="B"><span class="questionsWord">B.躺着看书或长时间看书</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox  label="C"><span class="questionsWord">C.昏暗或强光下看书</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="D"><span class="questionsWord">D.睡眠不足</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="E"><span class="questionsWord">E.不注意用眼卫生揉眼</span></el-checkbox>
            </dd>
        </el-checkbox-group>
     </dl>

    <!-- 13 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>13. 您觉得下列哪些项目对您的视力有益（多选）？</span></dt>
      <el-checkbox-group v-model="form.checkList13">
            <dd class="floatW50">
              <el-checkbox label="A"><span class="questionsWord">A.常看绿色</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="B"><span class="questionsWord">B.佩戴眼镜</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox  label="C"><span class="questionsWord">C.常做眼保健操</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="D"><span class="questionsWord">D.保持眼球卫生</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="E"><span class="questionsWord">E.合理膳食</span></el-checkbox>
            </dd>
        </el-checkbox-group>
     </dl>

   <!-- 14 -->
    <dl>
     <dt  style="padding-top: 0.325rem"><span>14. 常吃西兰花对眼睛有什么好处？ </span></dt>
      <el-radio-group v-model="form.radio14">
        <dd class="floatW25">
          <el-radio :label="141"><span class="questionsWord">A.防癌 </span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="142"><span class="questionsWord">B.防过敏</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="143"><span class="questionsWord">C.降脂</span></el-radio>
        </dd>
        <dd class="floatW29">
          <el-radio :label="144"><span class="questionsWord">D.抗氧化</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="145"><span class="questionsWord">E.以上都不对</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

    <!-- 15 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>15. 保护眼底黄斑以及预防眼底黄斑疾病，在日常生</span></dt>
     <dt style="padding-top: 0.325rem"><span>(活中我们应该注意什么（多选）？</span></dt>
      <el-checkbox-group v-model="form.checkList15">
        <dd class="floatW50">
          <el-checkbox label="A"><span class="questionsWord">A.减少电子产品的使用时间</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="B"><span class="questionsWord">B.避免阳光直射</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox  label="C"><span class="questionsWord">C.多吃含胡萝卜素、维生素E、维甘素的食物</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="D"><span class="questionsWord">D.避免运动</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="E"><span class="questionsWord">E.忌烟酒</span></el-checkbox>
        </dd>
        </el-checkbox-group>
     </dl>

     <!-- 16 -->
    <dl>
     <dt style="padding-top: 0.325rem"><span>16. 您觉得以下哪些食物有益年龄相关性黄斑变性的</span></dt>
     <dt style="padding-top: 0.325rem"><span>治疗（多选）？</span></dt>
      <el-checkbox-group v-model="form.checkList16">
        <dd class="floatW50">
          <el-checkbox label="A"><span class="questionsWord">A.多食富含叶黄素的食物</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="B"><span class="questionsWord">B.积极使用药物治疗</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox  label="C"><span class="questionsWord">C.适当的锻炼，控制体重及血压、血脂和血粘稠</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="D"><span class="questionsWord">D.服用抗氧化剂和微量元素</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="E"><span class="questionsWord">E.不抽烟喝酒</span></el-checkbox>
        </dd>
        </el-checkbox-group>
     </dl>
      <div class="btnWarp">
        <span :class="this.cls" @click='saveInfo'>提交</span>
        <!-- <span  @click='saveInfo'>提交</span> -->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
        radio1: 0,
        radio2: 0,
      checkList3:[],
        radio4: 0,
        radio5: 0,
      checkList6:[],
        radio7: 0,
      checkList8:[],
        radio9: 0,
        radio10: 0,
      checkList11:[],
      checkList12:[],
      checkList13:[],
        radio14: 0,
      checkList15:[],
      checkList16:[],
        },
        is_Show3: false,
        text3:'',
        isShow: false,
        cls: 'subBtn',
        isSubmitted: true
      }
    },

    methods: {
      saveInfo() {
          this.$store.commit('uploadCreditStatu', {
            name: 'userInfo',
            val: true
          });
          this.$store.commit('uploadCreditData', {
            name: 'userInfo',
            val: JSON.stringify(this.data)
          });
          if(this.isSubmitted) {
          if(this.form.radio1 === 0)  this.$dialog("请作答第1题");
            else if(this.form.radio2 === 0) this.$dialog("请作答第2题");
            else if (this.form.checkList3.length === 0) this.$dialog("请作答3题");
            else if(this.form.radio4 === 0) this.$dialog("请作答第4题");
            else if(this.form.radio5 === 0) this.$dialog("请作答第5题");
            else if (this.form.checkList6.length === 0) this.$dialog("请作答6题");
            else if(this.form.radio7 === 0) this.$dialog("请作答第7题");
            else if (this.form.checkList8.length === 0) this.$dialog("请作答8题");
            else if(this.form.radio9 === 0) this.$dialog("请作答第9题");
            else if(this.form.radio10 === 0) this.$dialog("请作答第10题");
            else if (this.form.checkList11.length === 0) this.$dialog("请作答11题");
            else if (this.form.checkList12.length === 0) this.$dialog("请作答12题");
            else if (this.form.checkList13.length === 0) this.$dialog("请作答13题");
            else if(this.form.radio14 === 0) this.$dialog("请作答第14题");
            else if (this.form.checkList15.length === 0) this.$dialog("请作答15题");
            else if (this.form.checkList16.length === 0) this.$dialog("请作答16题");
            else {
              // console.log("score1:" + this.calculate1_2_7_10(parseInt(this.form.radio1.toString().charAt(1))) )
              // console.log("score2:" + this.calculate1_2_7_10(parseInt(this.form.radio1.toString().charAt(1))) )
              // console.log("score3:" + this.calculate3(this.form.checkList3))
              // console.log("score4:" + this.calculate4(parseInt(this.form.radio4.toString().charAt(1))) )
              // console.log("score5:" + this.calculate5(parseInt(this.form.radio5.toString().charAt(1))) )

              // console.log("score6:" + this.calculate6(this.form.checkList6) )
              // console.log("score7:" + this.calculate1_2_7_10(parseInt(this.form.radio7.toString().charAt(1))) )
              // console.log("score8:" + this.calculate8_12_13_16(this.form.checkList8) )
              // console.log("score9:" + this.calculate9(parseInt(this.form.radio9.toString().charAt(1))) )
              // console.log("score10:" + this.calculate1_2_7_10(parseInt(this.form.radio10.toString().charAt(2))) )

              // console.log("score11:" + this.calculate11(this.form.checkList11) )
              // console.log("score12:" + this.calculate8_12_13_16(this.form.checkList12) )
              // console.log("score13:" + this.calculate8_12_13_16(this.form.checkList13) )
              // console.log("score14:" + this.calculate14(parseInt(this.form.radio14.toString().charAt(2))) )
              // console.log("score15:" + this.calculate15(this.form.checkList15) )
              // console.log("score16:" + this.calculate8_12_13_16(this.form.checkList16) )

                 // 答案：1: A   2:A   3:ACDEFH    4:C    5:E
                  //      6:ABCD   7:A   8:ABCDE   9:B   10:A
                  //      11:ACE  12:ABCDE    13:ABCDE   14:D  15:ABCE  16:ABCDE
              let total =  this.calculate1_2_7_10(parseInt(this.form.radio1.toString().charAt(1))) +
                           this.calculate1_2_7_10(parseInt(this.form.radio2.toString().charAt(1))) +
                           this.calculate3(this.form.checkList3) +
                           this.calculate4(parseInt(this.form.radio4.toString().charAt(1))) +
                           this.calculate5(parseInt(this.form.radio5.toString().charAt(1))) +
                           this.calculate6(this.form.checkList6) +
                           this.calculate1_2_7_10(parseInt(this.form.radio7.toString().charAt(1))) +
                           this.calculate8_12_13_16(this.form.checkList8) +
                           this.calculate9(parseInt(this.form.radio9.toString().charAt(1))) +
                           this.calculate1_2_7_10(parseInt(this.form.radio10.toString().charAt(2))) +
                           this.calculate11(this.form.checkList11) +
                           this.calculate8_12_13_16(this.form.checkList12) +
                           this.calculate8_12_13_16(this.form.checkList13) +
                           this.calculate14(parseInt(this.form.radio14.toString().charAt(2))) +
                           this.calculate15(this.form.checkList15) +
                           this.calculate8_12_13_16(this.form.checkList16)

                           this.$message({
                            dangerouslyUseHTMLString: true,
                            message: '<b style="font-size: 1.575rem;line-height: 4rem; font-weight: normal;text-indent: 1.225rem;">您的得分： ' +  total +'  </b>',
                            type: 'success',
                            center: true,
                            offset: 180,
                            showClose: true,
                            duration: 0
                          });
                          this.cls = "subBtn grayBg";
                          this.isSubmitted = false;
                          this.$dialog(["提交完成", "true"]);
               }
            }
      },


      showOther3() {
       let str = this.checkList3.join('_');
       if (str.indexOf("其他") != -1 ) {
         this.is_Show3 = true
       }else  {
         this.is_Show3 = false
         this.text3 = ''
       }
      },

      calculate1_2_7_10(val) {
         if(val===1) {
          return 3
        } else {
          return 0
        }
       },

   // 答案：1: A   2:A   3:ACDEFH    4:C    5:E
  //      6:ABCD   7:A   8:ABCDE   9:B   10:A
  //      11:ACE  12:ABCDE    13:ABCDE   14:D  15:ABCE  16:ABCDE
      calculate3(val) {
         let count=0;
         let flag = false;
         for(let i=0;i<val.length;i++){
            if("ACDEFH".indexOf(val[i]) != -1 ){
               count++;
            } else {
              flag = true;
              break;
            }
         }
          if(flag){
            return 0;
          }else {
            return 0.5*count;
          }
       },

       calculate4(val) {
         if(val===3) {
          return 3
        } else {
          return 0
        }
       },

       calculate5(val) {
         if(val===5) {
          return 3
        } else {
          return 0
        }
       },

       calculate14(val) {
         if(val===4) {
          return 3
        } else {
          return 0
        }
       },

       calculate9(val) {
         if(val===2) {
          return 3
        } else {
          return 0
        }
       },

       calculate6(val) {
         let count=0;
         let flag = false;
         for(let i=0;i<val.length;i++){
            if("ABCD".indexOf(val[i]) != -1 ){
               count++;
            } else {
              flag = true;
              break;
            }
         }
          if(flag){
            return 0;
          }else {
            if(val.length==="ABCD".length){
               return 3;
            } else {
               return 2;
            }
          }
       },

       calculate8_12_13_16(val) {
         let count=0;
         let flag = false;
         for(let i=0;i<val.length;i++){
            if("ABCDE".indexOf(val[i]) != -1 ){
               count++;
            } else {
              flag = true;
              break;
            }
         }
          if(flag){
            return 0;
          }else {
            if(val.length==="ABCDE".length){
               return 3;
            } else {
               return 2;
            }

          }
       },

       calculate11(val) {
         let count=0;
         let flag = false;
         for(let i=0;i<val.length;i++){
            if("ACE".indexOf(val[i]) != -1 ){
               count++;
            } else {
              flag = true;
              break;
            }
         }
          if(flag){
            return 0;
          }else {
            if(val.length==="ACE".length){
               return 3;
            } else {
               return 2;
            }
          }
       },

       calculate15(val) {
         let count=0;
         let flag = false;
         for(let i=0;i<val.length;i++){
            if("ABCE".indexOf(val[i]) != -1 ){
               count++;
            } else {
              flag = true;
              break;
            }
         }
          if(flag){
            return 0;
          }else {
            if(val.length==="ABCE".length){
               return 3;
            } else {
               return 2;
            }
          }
       },

    },
  }
</script>
