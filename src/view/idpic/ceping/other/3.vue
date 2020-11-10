<template>
  <div class="container">
    <topComponent title='头晕评价量表'>
      <!-- <span class="save" @click='saveInfo' slot='right'>保存</span> -->
    </topComponent>
    <p class="mt10 mrl10">&nbsp;&nbsp;&nbsp;</p>
    <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;本问卷的目的是评估头晕给您带来的困扰,请选择相对应的选项,请不要漏项。</p>
    <div class="questions" >

    <!---1---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、您是否有头晕的情况发生？  </span></dt>
        <el-radio-group v-model="form.radio1" @change="showOther">
          <dd class="floatW35">
            <el-radio :label="11"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW35">
            <el-radio :label="12"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <div v-show="isShow">
    <!---2---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>2、当您抬头向上看时,头晕会加重吗？ </span></dt>
        <el-radio-group v-model="form.radio2">
          <dd class="floatW18">
            <el-radio :label="21"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="22"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="23"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="24"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---3---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>3、当您在超市的货架通道上行走时头晕会加重吗？  </span></dt>
        <el-radio-group v-model="form.radio3">
          <dd class="floatW18">
            <el-radio :label="31"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="32"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="33"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="34"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---4---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>4、当参加一些比较剧烈的活动,比如体育运动、跳</span></dt>
      <dt style="padding-top: 0.325rem"><span>舞、打扫卫生或收拾餐具等家务劳动时头晕是否</span></dt>
      <dt style="padding-top: 0.325rem"><span>会加重？</span></dt>
        <el-radio-group v-model="form.radio4">
          <dd class="floatW18">
            <el-radio :label="41"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="42"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="43"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="44"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---5---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>5、感觉到头痛时您发生过呕吐吗？  </span></dt>
        <el-radio-group v-model="form.radio5">
          <dd class="floatW18">
            <el-radio :label="51"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="52"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="53"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="54"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---6---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>6、在床上翻身会使头晕加重吗？  </span></dt>
        <el-radio-group v-model="form.radio6">
          <dd class="floatW18">
            <el-radio :label="61"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="62"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="63"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="64"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---7---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>7、沿人行道行走时会使您头晕加重吗？  </span></dt>
        <el-radio-group v-model="form.radio7">
          <dd class="floatW18">
            <el-radio :label="71"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="72"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="73"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="74"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!---8---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>8、弯腰低头时头晕会加重吗？  </span></dt>
        <el-radio-group v-model="form.radio8">
          <dd class="floatW18">
            <el-radio :label="81"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="82"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="83"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="84"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---9---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>9、头晕会让您感到有挫败感吗？  </span></dt>
        <el-radio-group v-model="form.radio9">
          <dd class="floatW18">
            <el-radio :label="91"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="92"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="93"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="94"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---10---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>10、由于头晕,您是否曾经在别人面前感到不好意思？  </span></dt>
        <el-radio-group v-model="form.radio10">
          <dd class="floatW18">
            <el-radio :label="101"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="102"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="103"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="104"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---11---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>11、您是否因为头晕而害怕独自出门？  </span></dt>
        <el-radio-group v-model="form.radio11">
          <dd class="floatW18">
            <el-radio :label="111"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="112"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="113"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="114"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


     <!---12---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>12、由于头晕,您是否好怕别人认为您是喝醉了酒？  </span></dt>
        <el-radio-group v-model="form.radio12">
          <dd class="floatW18">
            <el-radio :label="121"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="122"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="123"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="124"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---13---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>13、头晕是否使您难以集中注意力？  </span></dt>
        <el-radio-group v-model="form.radio13">
          <dd class="floatW18">
            <el-radio :label="131"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="132"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="133"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="134"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---14---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>14、您是否因为头晕而害怕独自在家？  </span></dt>
        <el-radio-group v-model="form.radio14">
          <dd class="floatW18">
            <el-radio :label="141"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="142"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="143"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="144"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---15---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>15、由于头晕,您是否感到自己是个残疾人？  </span></dt>
        <el-radio-group v-model="form.radio15">
          <dd class="floatW18">
            <el-radio :label="151"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="152"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="153"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="154"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---16---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>16、头晕是否对您和家人以及朋友的关系造成压力？  </span></dt>
        <el-radio-group v-model="form.radio16">
          <dd class="floatW18">
            <el-radio :label="161"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="162"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="163"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="164"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

   <!---17---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>17、由于头晕,您是否感到心情压抑？  </span></dt>
        <el-radio-group v-model="form.radio17">
          <dd class="floatW18">
            <el-radio :label="171"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="172"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="173"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="174"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---18---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>18、头晕会限制您的工作或旅行吗？  </span></dt>
        <el-radio-group v-model="form.radio18">
          <dd class="floatW18">
            <el-radio :label="181"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="182"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="183"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="184"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---19---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>19、头晕会使您上、下床感到困难吗？ </span></dt>
        <el-radio-group v-model="form.radio19">
          <dd class="floatW19">
            <el-radio :label="191"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="192"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="193"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="194"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---20---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>20、头晕会限制您参加社交活动吗,比如外出吃饭、 </span></dt>
      <dt style="padding-top: 0.325rem"><span>看电影、跳舞或参加聚会？  </span></dt>
        <el-radio-group v-model="form.radio20">
          <dd class="floatW19">
            <el-radio :label="201"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="202"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="203"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="204"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---21---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>21、头晕会使您阅读感到困难吗？ </span></dt>

        <el-radio-group v-model="form.radio21">
          <dd class="floatW19">
            <el-radio :label="211"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="212"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="213"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="214"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---22---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>22、您是否因为头晕而不敢登高？ </span></dt>

        <el-radio-group v-model="form.radio22">
          <dd class="floatW19">
            <el-radio :label="221"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="222"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="223"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="224"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---23---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>23、由于头晕,您在进行繁重的家务劳动时是否感到困难？ </span></dt>

        <el-radio-group v-model="form.radio23">
          <dd class="floatW19">
            <el-radio :label="231"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="232"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="233"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="234"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---24---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>24、由于头晕,您独自行走时是否感到困难？ </span></dt>

        <el-radio-group v-model="form.radio24">
          <dd class="floatW19">
            <el-radio :label="241"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="242"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="243"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="244"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---25---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>25、由于头晕,您在黑暗中行走是否感到困难？ </span></dt>

        <el-radio-group v-model="form.radio25">
          <dd class="floatW19">
            <el-radio :label="251"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="252"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="253"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="254"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---26---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>26、头晕是否会对您从事的工作和家务造成影响？ </span></dt>

        <el-radio-group v-model="form.radio26">
          <dd class="floatW19">
            <el-radio :label="261"><span class="questionsWord">总是</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="262"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="263"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="264"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    </div>
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
          radio20: 0,
          radio21: 0,
          radio22: 0,
          radio23: 0,
          radio24: 0,
          radio25: 0,
          radio26: 0
        },
        isShow: false,
        cls: 'subBtn',
        isSubmitted: true,
      }
    },
    methods: {
      saveInfo: function() {
        if(this.isSubmitted) {
          if(this.form.radio1 === 0)  { this.$dialog("请作答第1题"); return; }
            else if(this.isShow) {
              if(this.form.radio2 === 0) this.$dialog("请作答第2题")
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
              else if(this.form.radio21 === 0) this.$dialog("请作答第21题");
              else if(this.form.radio22 === 0) this.$dialog("请作答第22题");
              else if(this.form.radio23 === 0) this.$dialog("请作答第23题");
              else if(this.form.radio24 === 0) this.$dialog("请作答第24题");
              else if(this.form.radio25 === 0) this.$dialog("请作答第25题");
              else if(this.form.radio26 === 0) this.$dialog("请作答第26题");
              // 请求1-26 ajax
            } else {
              // 请求1 ajax
            }
            this.$dialog(["提交完成", "true"]);
            this.cls = "subBtn grayBg"
            this.isSubmitted = false
        }
      },
      showOther(){
        if(this.form.radio1 === 11 ){
          this.isShow = true
        }else {
          this.isShow = false
        }
      }
    }
  }
</script>
