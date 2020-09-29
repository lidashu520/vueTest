<template>
  <div class="container">
    <topComponent title='AMD患者营养态度和行为调查'>
      <span class="save" @click='saveInfo' slot='right'>保存</span>
    </topComponent>

    <!-- <p class="listTop questionsWord ">二、营养状况调查</p> -->
    <!-- 1 -->
     <div class="questions">
    <dl>
     <dt style="padding-top: 0.325rem"><span>1.  您目前的居住情况是？</span></dt>
      <el-radio-group v-model="radio1" @change="showOther1">
        <dd class="floatW20">
          <el-radio :label="11"><span class="questionsWord">A.独居</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="12"><span class="questionsWord">B.与配偶居住</span></el-radio>
        </dd>
        <dd class="floatW32">
          <el-radio :label="13"><span class="questionsWord">C.与亲属居住</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="14"><span class="questionsWord">D.与朋友居住</span></el-radio>
        </dd>
        <dd class="floatW19">
          <el-radio :label="15"><span class="questionsWord">E.其他</span></el-radio>
        </dd>
        <dd>
          <input v-show="is_Show1" class="questionsWord floatW55" style="width:48%" v-model="text1"  type="text" placeholder="具体和谁居住">
        </dd>
      </el-radio-group>
     </dl>

    <!-- 2 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>2.  您家里主要是谁在准备食物？</span></dt>
      <el-radio-group v-model="radio2" @change="showOther2">
        <dd class="floatW24">
          <el-radio :label="21"><span class="questionsWord">A.您自己</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="22"><span class="questionsWord"> B.配偶</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="23"><span class="questionsWord">C.其他亲属</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="24"><span class="questionsWord">D.保姆</span></el-radio>
        </dd>
        <dd class="floatW32">
          <el-radio :label="25"><span class="questionsWord">E.专业照顾者</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="26"><span class="questionsWord">F.其他</span></el-radio>
        </dd>
        <dd class="floatW48">
         <input v-show="is_Show2"  v-model="text2" class="questionsWord floatW50" type="text" placeholder="具体由谁照顾">
        </dd>
      </el-radio-group>
     </dl>

     <!-- 3 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>3.  您家里主要是谁在做饭？</span></dt>
      <el-radio-group v-model="radio3" @change="showOther3">
        <dd class="floatW24">
          <el-radio :label="31"><span class="questionsWord">A.您自己</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="32"><span class="questionsWord"> B.配偶</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="33"><span class="questionsWord">C.其他亲属</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="34"><span class="questionsWord">D.保姆</span></el-radio>
        </dd>
        <dd class="floatW32">
          <el-radio :label="35"><span class="questionsWord">E.专业照顾者</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="36"><span class="questionsWord">F.其他</span></el-radio>
        </dd>
        <dd class="floatW48">
           <input v-show="is_Show3"  v-model="text3" class="questionsWord floatW50" type="text" placeholder="具体由谁做饭">
        </dd>
      </el-radio-group>
     </dl>

     <!-- 4 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>4.  什么因素会影响您准备食物？</span></dt>
      <el-radio-group v-model="radio4">
        <dd class="floatW30">
          <el-radio :label="41"><span class="questionsWord">A.视力损害</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="42"><span class="questionsWord">B.躯体功能障碍</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="43"><span class="questionsWord">C.其他</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="44"><span class="questionsWord">D.不会影响</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 5 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>5.  什么因素会影响您做饭？</span></dt>
      <el-radio-group v-model="radio5">
        <dd class="floatW30">
          <el-radio :label="51"><span class="questionsWord">A.视力损害</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="52"><span class="questionsWord">B.躯体功能障碍</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="53"><span class="questionsWord">C.其他</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="54"><span class="questionsWord">D.不会影响</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 6 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>6.  什么因素会影响您做饭？</span></dt>
      <el-radio-group v-model="radio6">
        <dd class="floatW20" style="witdth:20.5%">
          <el-radio :label="61"><span class="questionsWord">A.能</span></el-radio>
        </dd>
        <dd class="floatW60">
          <el-radio :label="62"><span class="questionsWord">B.有时候能，有时候不能</span></el-radio>
        </dd>
        <dd class="floatW24">
          <el-radio :label="63"><span class="questionsWord">C.不能</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 7 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>7.  您家里谁去买菜？</span></dt>
      <el-radio-group v-model="radio7">
        <dd class="floatW24">
          <el-radio :label="71"><span class="questionsWord">A.您自己</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="72"><span class="questionsWord"> B.配偶</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="73"><span class="questionsWord">C.其他亲属</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="74"><span class="questionsWord">D.保姆</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="75"><span class="questionsWord">E.其他</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>


     <!-- 8 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>8. 您一般在哪里购买食物？</span></dt>
      <el-radio-group v-model="radio8">
        <dd class="floatW24">
          <el-radio :label="81"><span class="questionsWord">A.菜市场</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="82"><span class="questionsWord">B.超市</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="83"><span class="questionsWord">C.网络</span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="84"><span class="questionsWord">D.外卖</span></el-radio>
        </dd>
        <dd class="floatW40">
          <el-radio :label="85"><span class="questionsWord">E.杂货店/小卖部</span></el-radio>
        </dd>
        <dd class="floatW26">
          <el-radio :label="86"><span class="questionsWord">F.自己种植</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 9 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>9. 您平时每天具体买什么菜是由什么决定？(可多选)</span></dt>
      <el-checkbox-group v-model="checkList">
        <dd class="floatW20">
          <el-checkbox label="价格"><span class="questionsWord">A.价格</span></el-checkbox>
        </dd>
        <dd class="floatW20">
          <el-checkbox label="营养"><span class="questionsWord">B.营养</span></el-checkbox>
        </dd>
        <dd class="floatW20">
          <el-checkbox  label="喜好"><span class="questionsWord">C.喜好</span></el-checkbox>
        </dd>
        <dd class="floatW20">
          <el-checkbox label="习惯"><span class="questionsWord">D.习惯</span></el-checkbox>
        </dd>
        <dd class="floatW30">
          <el-checkbox label="自己会做的"><span class="questionsWord">E.自己会做的</span></el-checkbox>
        </dd>
        </el-checkbox-group>
     </dl>

     <br/>
     <br/>
     <br/>

     <!-- 10 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>10. 您愿意改变自己的饮食吗？</span></dt>
      <el-radio-group v-model="radio10">
        <dd class="floatW25">
          <el-radio :label="101"><span class="questionsWord">A.愿意</span></el-radio>
        </dd>
        <dd class="floatW28">
          <el-radio :label="102"><span class="questionsWord">B.不愿意</span></el-radio>
        </dd>
        <dd class="floatW28">
          <el-radio :label="103"><span class="questionsWord">C.无所谓</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

    <!-- 11 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>11. 您愿意改变自己的饮食吗？</span></dt>
      <el-radio-group v-model="radio11">
        <dd class="floatW30">
          <el-radio :label="111"><span class="questionsWord">A.煮熟的</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="112"><span class="questionsWord">B.生的</span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="113"><span class="questionsWord">C.没吃</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 12 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>12. 您愿意改变自己的饮食吗？</span></dt>
      <el-radio-group v-model="radio12" @change="showThirty">
        <dd class="floatW40">
          <el-radio :label="121"><span class="questionsWord">A.是</span></el-radio>
        </dd>
        <dd class="floatW40">
          <el-radio :label="122"><span class="questionsWord">B.否</span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <!-- 13 -->
     <dl v-show="isShow">
     <dt style="padding-top: 0.325rem"><span>13. 如果回答“是”，您具体是和哪些人讨论呢？</span></dt>
     <dt style="padding-top: 0.325rem"><span>(可多选)</span></dt>
      <el-checkbox-group v-model="checkList" @change="showOther13">
        <dd class="floatW28">
          <el-checkbox label="眼科医生"><span class="questionsWord">A.眼科医生</span></el-checkbox>
        </dd>
        <dd class="floatW25">
          <el-checkbox label="视光师"><span class="questionsWord">B.视光师</span></el-checkbox>
        </dd>
        <dd class="floatW25">
          <el-checkbox  label="营养师"><span class="questionsWord">C.营养师</span></el-checkbox>
        </dd>
        <dd class="floatW23" style="width:20%">
          <el-checkbox label="护士"><span class="questionsWord">D.护士</span></el-checkbox>
        </dd>
        <dd class="floatW18">
          <el-checkbox label="其他"><span class="questionsWord">E.其他</span></el-checkbox>
        </dd>
        <dd>
          <input v-show="is_Show13" v-model="text13" class="questionsWord floatW30" type="text" placeholder="具体的人">
        </dd>
        </el-checkbox-group>
     </dl>

    <div v-show="isShow">
      <br/>
    </div>

    <!-- 14 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>14. 您平时会服用一些营养补充剂（即保健品）吗？</span></dt>
      <el-radio-group v-model="radio14" @change="showThirty">
        <dd class="floatW50">
          <el-radio :label="141"><span class="questionsWord">A.是（继续回答21题）</span></el-radio>
        </dd>
        <dd class="floatW50">
          <el-radio :label="142"><span class="questionsWord">B.否（跳转到23题）</span></el-radio>
        </dd>
      </el-radio-group>
        <dd style="width:100%">
          <input class="questionsWord" v-model="text14" type="text" placeholder="什么牌子的营养补充剂">
        </dd>
     </dl>

   <!-- 15 -->
    <dl>
     <dt  style="padding-top: 0.325rem"><span>15. 您多久服用一次营养补充剂呢？ </span></dt>
      <el-radio-group v-model="radio15" @change="showOther15">
        <dd class="floatW30">
          <el-radio :label="151"><span class="questionsWord">A.2/日以上 </span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="152"><span class="questionsWord">B.2/日 </span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="153"><span class="questionsWord">C.1/日 </span></el-radio>
        </dd>
        <dd class="floatW26">
          <el-radio :label="154"><span class="questionsWord">D.2-3/周 </span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="155"><span class="questionsWord">E.1/周 </span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="156"><span class="questionsWord">F.其他 </span></el-radio>
        </dd>
        <dd class="float50">
          <input v-show="is_Show15"  v-model="text15"  class="questionsWord" type="text" placeholder="具体多久一次" >
        </dd>
      </el-radio-group>
     </dl>

    <!-- 16 -->
     <dl>
     <dt style="padding-top: 0.325rem"><span>16. 您没有服用营养补充剂的理由是什么呢？</span></dt>
     <dt style="padding-top: 0.325rem"><span>(可多选)</span></dt>
      <el-checkbox-group v-model="checkList16" @change="showOther16">
        <dd class="floatW22">
          <el-checkbox label="太贵"><span class="questionsWord">A.太贵</span></el-checkbox>
        </dd>
        <dd class="floatW40">
          <el-checkbox label="不清楚是否有效"><span class="questionsWord">B.不清楚是否有效</span></el-checkbox>
        </dd>
        <dd class="floatW35">
          <el-checkbox  label="害怕副作用"><span class="questionsWord">C.害怕副作用 </span></el-checkbox>
        </dd>
        <dd class="floatW50">
          <el-checkbox label="担心与其他药物产生反应"><span class="questionsWord">D.担心与其他药物产生反应</span></el-checkbox>
        </dd>
        <dd class="floatW24" style="width:23.5%">
          <el-checkbox label="太麻烦"><span class="questionsWord">E.太麻烦</span></el-checkbox>
        </dd>
        <dd class="floatW20">
          <el-checkbox label="其他"><span class="questionsWord">F.其他</span></el-checkbox>
        </dd>
        <dd>
          <input v-show="is_Show16" v-model="text16" class="questionsWord" type="text" placeholder="具体原因">
        </dd>
        </el-checkbox-group>
     </dl>

     </br>

     <!-- 17 -->
    <dl>
    <dt style="padding-top: 0.325rem"><span>17. 如果营养补充剂对您的眼睛疾病有效，您每月</span></dt>
    <dt style="padding-top: 0.325rem"><span>愿意花多少钱服用呢？</span></dt>
      <el-radio-group v-model="radio17">
        <dd class="floatW27">
          <el-radio :label="171"><span class="questionsWord">A.不愿意</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="172"><span class="questionsWord">B.100-200元</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="173"><span class="questionsWord">C.200-300元</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="174"><span class="questionsWord">D.300-500元</span></el-radio>
        </dd>
        <dd class="floatW37">
          <el-radio :label="175"><span class="questionsWord">E.500-1000元</span></el-radio>
        </dd>
        <dd class="floatW37">
          <el-radio :label="176"><span class="questionsWord">F.1000元以上</span></el-radio>
        </dd>
      </el-radio-group>
    </dl>

    <dl>
    <dt style="padding-top: 0.325rem"><span>18. 您觉得获得了足够的营养信息来管理眼部疾病</span></dt>
    <dt style="padding-top: 0.325rem"><span>吗？</span></dt>
      <el-radio-group v-model="radio18">
        <dd class="floatW29" style="width:30%">
          <el-radio :label="181"><span class="questionsWord">A.非常同意</span></el-radio>
        </dd>
        <dd class="floatW35">
          <el-radio :label="182"><span class="questionsWord">B.同意</span></el-radio>
        </dd>
        <dd class="floatW25" style="width:25.5%">
          <el-radio :label="183"><span class="questionsWord">C.不确定</span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="184"><span class="questionsWord">D.不同意</span></el-radio>
        </dd>
        <dd class="floatW34">
          <el-radio :label="185"><span class="questionsWord">E.非常不同意</span></el-radio>
        </dd>
      </el-radio-group>
    </dl>


    <!-- 19 -->
    <dl>
    <dt style="padding-top: 0.325rem"><span>19. 您一般在哪里获得AMD疾病相关信息？(可多选)</span></dt>
      <el-checkbox-group v-model="checkList19" @change="showOther19">
        <dd class="floatW28">
          <el-checkbox label="眼科医生"><span class="questionsWord">A.眼科医生</span></el-checkbox>
        </dd>
        <dd class="floatW25">
          <el-checkbox label="视光师"><span class="questionsWord">B.视光师</span></el-checkbox>
        </dd>
        <dd class="floatW25">
          <el-checkbox  label="护士"><span class="questionsWord">C.护士</span></el-checkbox>
        </dd>
        <dd class="floatW20">
          <el-checkbox label="网络"><span class="questionsWord">D.网络</span></el-checkbox>
        </dd>
        <dd class="floatW25">
          <el-checkbox label="报纸"><span class="questionsWord">E.报纸</span></el-checkbox>
        </dd>
        <dd class="floatW25">
          <el-checkbox label="电视"><span class="questionsWord">F.电视</span></el-checkbox>
        </dd>
        <dd class="floatW28">
          <el-checkbox label="社会团体"><span class="questionsWord">G.社会团体</span></el-checkbox>
        </dd>
        <dd class="floatW20">
          <el-checkbox label="其他"><span class="questionsWord">H.其他</span></el-checkbox>
        </dd>
        <dd>
          <input v-show="is_Show19" v-model="text19" class="questionsWord floatW30" type="text" placeholder="具体而言">
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
        radio3: 0,
        radio4: 0,
        radio5: 0,
        radio6: 0,
        radio7: 0,
        radio8: 0,
        checkList:[],
        radio10: 0,
        radio11: 0,
        radio12: 0,
        radio13: 0,
        radio14: 0,
        radio15: 0,
        checkList16:[],
        checkList19:[],
        radio17: 0,
        radio18: 0,
        radio19: 0,
        is_Show1: false,
        is_Show2: false,
        is_Show3: false,
        is_Show13: false,
        is_Show15: false,
        is_Show16: false,
        is_Show19: false,
        text1:'',
        text2:'',
        text3:'',
        text13:'',
        text14:'',
        text15:'',
        text16:'',
        text19:'',
        isShow: false
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

      showThirty() {
        if(this.radio12 === 122) this.isShow = false
        if(this.radio12 === 121) this.isShow = true
      },

      showOther13() {
       let str = this.checkList.join('_');
       if (str.indexOf("其他") != -1 ) {
         this.is_Show13 = true
       }else  {
         this.is_Show13 = false
         this.text13 = ''
       }
      },

      showOther1() {
        if(this.radio1 === 15) {
          this.is_Show1 = true
        }else{
          this.is_Show1 = false
          this.text1 = ''
        }
      },

      showOther2() {
        if(this.radio2 === 26) {
          this.is_Show2 = true
        }else{
          this.is_Show2 = false
          this.text2 = ''
        }
      },

      showOther3() {
        if(this.radio3 === 36) {
          this.is_Show3 = true
        }else{
          this.is_Show3 = false
          this.text3 = ''
        }
      },

      showOther15() {
        if(this.radio15 === 156) {
          this.is_Show15 = true
        }else{
          this.is_Show15 = false
          this.text15 = ''
        }
      },

      showOther16() {
       let str = this.checkList16.join('_');
       if (str.indexOf("其他") != -1 ) {
         this.is_Show16 = true
       }else  {
         this.is_Show16 = false
         this.text16 = ''
       }
      },

      showOther19() {
       let str = this.checkList19.join('_');
       if (str.indexOf("其他") != -1 ) {
         this.is_Show19 = true
       }else  {
         this.is_Show19 = false
         this.text19 = ''
       }
      },

    },
  }
</script>
