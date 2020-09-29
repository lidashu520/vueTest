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
      <el-radio-group v-model="radio1">
        <dd class="floatW30">
          <el-radio :label="11"><span class="questionsWord">A.非常影响 </span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="12"><span class="questionsWord">B.影响</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="13"><span class="questionsWord">C.不清楚</span></el-radio>
        </dd>
        <dd class="floatW26">
          <el-radio :label="14"><span class="questionsWord">D.不影响</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="15"><span class="questionsWord">E.完全不影响</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>
    <!-- 2 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>2. 您觉得饮食会影响您眼睛的健康吗？</span></dt>
      <el-radio-group v-model="radio2">
        <dd class="floatW30">
          <el-radio :label="21"><span class="questionsWord">A.非常影响 </span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="22"><span class="questionsWord">B.影响</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="23"><span class="questionsWord">C.不清楚</span></el-radio>
        </dd>
        <dd class="floatW26">
          <el-radio :label="24"><span class="questionsWord">D.不影响</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="25"><span class="questionsWord">E.完全不影响</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 3 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>3.  以下列举的食物哪些是您上周吃过的？(可多选)  </span></dt>
      <dd>
        <el-checkbox-group v-model="checkList3" @change="showOther3">
            <dd class="floatW20">
              <el-checkbox label="胡萝卜"><span class="questionsWord">胡萝卜</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="冰欺凌"><span class="questionsWord">冰欺凌</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox  label="菠菜"><span class="questionsWord">菠菜 </span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="卷心菜"><span class="questionsWord">卷心菜 </span></el-checkbox>
            </dd>
            <dd class="floatW60">
              <el-checkbox label="紫色包包白"><span class="questionsWord">羽衣甘蓝(紫色包包白)</span></el-checkbox>
            </dd>
            <dd class="floatW17">
              <el-checkbox label="橘子"><span class="questionsWord">橘子</span></el-checkbox>
            </dd>
            <dd class="floatW18">
              <el-checkbox label="奶酪"><span class="questionsWord">奶酪</span></el-checkbox>
            </dd>
            <dd class="floatW18">
              <el-checkbox label="辣椒"><span class="questionsWord">辣椒</span></el-checkbox>
            </dd>
            <dd class="floatW18">
              <el-checkbox label="芒果"><span class="questionsWord">芒果</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="其他"><span class="questionsWord">E.其他</span></el-checkbox>
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
      <el-radio-group v-model="radio4">
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
      <el-radio-group v-model="radio5">
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
          <el-radio :label="55"><span class="questionsWord">D.维生素E</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 6 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>6. 您觉得以下哪种蔬菜对视力恢复有好处（多选）？  </span></dt>
      <dd>
        <el-checkbox-group v-model="checkList6">
            <dd class="floatW20">
              <el-checkbox label="A.菠菜"><span class="questionsWord">A.菠菜</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="B.西蓝花"><span class="questionsWord">B.西蓝花</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox  label="C.紫菜"><span class="questionsWord">C.紫菜</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="D.胡萝卜"><span class="questionsWord">D.胡萝卜</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="E.都没有"><span class="questionsWord">E.都没有</span></el-checkbox>
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
      <el-radio-group v-model="radio7">
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
     <dt style="padding-top: 0.325rem"><span>8. 您一般在哪里购买食物？</span></dt>
      <el-checkbox-group v-model="checkList8">
            <dd class="floatW45">
              <el-checkbox label="A.叶黄素/玉米黄素"><span class="questionsWord">A.叶黄素/玉米黄素</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="B.维生素C"><span class="questionsWord">B.维生素C</span></el-checkbox>
            </dd>
            <dd class="floatW28">
              <el-checkbox  label="C.维生素E"><span class="questionsWord">C.维生素E</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="D.氧化锌"><span class="questionsWord">D.氧化锌</span></el-checkbox>
            </dd>
            <dd class="floatW25">
              <el-checkbox label="E.氧化铜"><span class="questionsWord">E.氧化铜</span></el-checkbox>
            </dd>
        </el-checkbox-group>
     </dl>

     </br>
     </br>
     </br>

     <!-- 9 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>9. 以下那种食物叶黄素含量最高？</span></dt>
     <el-radio-group v-model="radio9">
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
      <el-radio-group v-model="radio10">
        <dd class="floatW20">
          <el-radio :label="101"><span class="questionsWord">A.是</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="102"><span class="questionsWord">B.否</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="103"><span class="questionsWord">C.不清楚</span></el-radio>
        </dd>
        <dd class="floatW29">
          <el-radio :label="103"><span class="questionsWord">D.也许会</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

    <!-- 11 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>11. 您觉得以下哪些食物含有大量的抗氧化物质，可</span></dt>
     <dt style="padding-top: 0.325rem"><span>以延缓年龄相关性黄斑变性的发生（多选）？</span></dt>
      <el-checkbox-group v-model="checkList11">
            <dd class="floatW20">
              <el-checkbox label="A.鸡蛋"><span class="questionsWord">A.鸡蛋</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="B.土豆"><span class="questionsWord">B.土豆</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox  label="C.瘦肉"><span class="questionsWord">C.瘦肉</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="D.冬瓜"><span class="questionsWord">D.冬瓜</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="E.牛奶"><span class="questionsWord">E.牛奶</span></el-checkbox>
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
      <el-checkbox-group v-model="checkList12">
            <dd class="floatW50">
              <el-checkbox label="A.长时间用电脑，看手机"><span class="questionsWord">A.长时间用电脑，看手机</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="B.躺着看书或长时间看书"><span class="questionsWord">B.躺着看书或长时间看书</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox  label="C.昏暗或强光下看书"><span class="questionsWord">C.昏暗或强光下看书</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="D.睡眠不足"><span class="questionsWord">D.睡眠不足</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="E.不注意用眼卫生揉眼"><span class="questionsWord">E.不注意用眼卫生揉眼</span></el-checkbox>
            </dd>
        </el-checkbox-group>
     </dl>

    <!-- 13 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>13. 您觉得下列哪些项目对您的视力有益（多选）？</span></dt>
      <el-checkbox-group v-model="checkList13">
            <dd class="floatW50">
              <el-checkbox label="A.常看绿色"><span class="questionsWord">A.常看绿色</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="B.佩戴眼镜"><span class="questionsWord">B.佩戴眼镜</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox  label="C.常做眼保健操"><span class="questionsWord">C.常做眼保健操</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="D.保持眼球卫生"><span class="questionsWord">D.保持眼球卫生</span></el-checkbox>
            </dd>
            <dd class="floatW50">
              <el-checkbox label="E.合理膳食"><span class="questionsWord">E.合理膳食</span></el-checkbox>
            </dd>
        </el-checkbox-group>
     </dl>

   <!-- 14 -->
    <dl>
     <dt  style="padding-top: 0.325rem"><span>14. 常吃西兰花对眼睛有什么好处？ </span></dt>
      <el-radio-group v-model="radio14">
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
      <el-checkbox-group v-model="checkList15">
        <dd class="floatW50">
          <el-checkbox label="太贵"><span class="questionsWord">A.减少电子产品的使用时间</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="不清楚是否有效"><span class="questionsWord">B.避免阳光直射</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox  label="害怕副作用"><span class="questionsWord">C.多吃含胡萝卜素、维生素E、维甘素的食物</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="担心与其他药物产生反应"><span class="questionsWord">D.避免运动</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="太麻烦"><span class="questionsWord">E.忌烟酒</span></el-checkbox>
        </dd>
        </el-checkbox-group>
     </dl>

     <!-- 16 -->
    <dl>
     <dt style="padding-top: 0.325rem"><span>16. 您觉得以下哪些食物有益年龄相关性黄斑变性的</span></dt>
     <dt style="padding-top: 0.325rem"><span>治疗（多选）？</span></dt>
      <el-checkbox-group v-model="checkList16">
        <dd class="floatW50">
          <el-checkbox label="A.多食富含叶黄素的食物"><span class="questionsWord">A.多食富含叶黄素的食物</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="B.积极使用药物治疗"><span class="questionsWord">B.积极使用药物治疗</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox  label="C.适当的锻炼，控制体重及血压、血脂和血粘稠"><span class="questionsWord">C.适当的锻炼，控制体重及血压、血脂和血粘稠</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="D.服用抗氧化剂和微量元素"><span class="questionsWord">D.服用抗氧化剂和微量元素</span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="E.不抽烟喝酒"><span class="questionsWord">E.不抽烟喝酒</span></el-checkbox>
        </dd>
        </el-checkbox-group>
     </dl>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
        is_Show3: false,
        text3:'',
        isShow: false,
        checkList:[]
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
          this.$dialog(["保存成功", "true"]);
          setTimeout(() => {
            this.$router.back()
          }, 2000)
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

    },
  }
</script>
