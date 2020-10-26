<template>
  <div class="container">
    <topComponent title='照顾者压力和负担评估'>
      <!-- <span class="save" @click='saveInfo' slot='right'>保存</span> -->
    </topComponent>
    <p class="mt10 mrl10">&nbsp;&nbsp;&nbsp;</p>
    <div class="questions">
    <!---1---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、您是否认为,您所照料的病人会向您提出过多的  </span></dt>
      <dt style="padding-top: 0.325rem"><span>照顾要求？  </span></dt>
        <el-radio-group v-model="form.radio1">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="11"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="12"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="13"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="14"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="15"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---2---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>2、您是否认为，由于护理病人会使自己时间不够？  </span></dt>
        <el-radio-group v-model="form.radio2">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="21"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="22"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="23"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="24"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="25"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---3---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>3、您是否认为，在照料病人和努力做好家务及工作 </span></dt>
      <dt style="padding-top: 0.325rem"><span>之间,你会感到有压力?  </span></dt>
        <el-radio-group v-model="form.radio3">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="21"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="22"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="23"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="24"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="25"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---4---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>4、您是否认为,因病人的行为而感到为难？ </span></dt>
        <el-radio-group v-model="form.radio4">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="41"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="42"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="43"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="44"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="45"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---5---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>5、您是否认为,有病人在您的身边而感到烦恼？ </span></dt>
        <el-radio-group v-model="form.radio5">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="51"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="52"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="53"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="54"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="55"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>6、您是否认为,您的病人己经影响到了您和您的家人 </span></dt>
      <dt style="padding-top: 0.325rem"><span>与朋友间的关系？  </span></dt>
        <el-radio-group v-model="form.radio6">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="61"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="62"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="63"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="64"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="65"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <dl>
      <dt style="padding-top: 0.325rem"><span>7、您是否认为,对未来感到担心? </span></dt>
        <el-radio-group v-model="form.radio7">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="71"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="72"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="73"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="74"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="75"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>8、您是否认为,病人依赖于您？ </span></dt>
        <el-radio-group v-model="form.radio8">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="81"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="82"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="83"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="84"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="85"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>9、当病人在您身边时,您感到紧张吗？ </span></dt>
        <el-radio-group v-model="form.radio9">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="91"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="92"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="93"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="94"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="95"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>10、您是否认为,由于护理病人,您的健康受到影响？ </span></dt>
        <el-radio-group v-model="form.radio10">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="101"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="102"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="103"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="104"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="105"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>11、您是否认为,由于护理病人,您没有时间办自己的 </span></dt>
      <dt style="padding-top: 0.325rem"><span>私事？ </span></dt>
        <el-radio-group v-model="form.radio11">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="111"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="112"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="113"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="114"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="115"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>12、您是否认为，由于护理病人，您的社交受到影 </span></dt>
      <dt style="padding-top: 0.325rem"><span>响？ </span></dt>
        <el-radio-group v-model="form.radio12">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="121"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="122"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="123"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="124"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="125"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>13、您有没有由于病人在家，放弃请朋友来家的想 </span></dt>
      <dt style="padding-top: 0.325rem"><span>法？ </span></dt>
        <el-radio-group v-model="form.radio13">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="131"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="132"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="133"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="134"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="135"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>14、您是否认为，病人只期盼您的照顾，您好像是 </span></dt>
      <dt style="padding-top: 0.325rem"><span>她/他唯一可依赖的人？ </span></dt>
        <el-radio-group v-model="form.radio14">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="141"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="142"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="143"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="144"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="145"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>15、您是否认为，除外您的花费，您没有余钱用于 </span></dt>
      <dt style="padding-top: 0.325rem"><span>护理病人？ </span></dt>
        <el-radio-group v-model="form.radio15">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="151"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="152"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="153"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="154"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="155"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>16、您是否认为，您有可能花费更多的时间护理病</span></dt>
      <dt style="padding-top: 0.325rem"><span>人？</span></dt>
        <el-radio-group v-model="form.radio16">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="161"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="162"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="163"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="164"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="165"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>17、您是否认为，开始护理以来，按照自己的意愿</span></dt>
      <dt style="padding-top: 0.325rem"><span>生活已经不可能了？</span></dt>
        <el-radio-group v-model="form.radio17">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="171"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="172"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="173"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="174"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="175"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>18、您是否希望，能把病人留给别人来照顾？</span></dt>
        <el-radio-group v-model="form.radio18">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="181"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="182"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="183"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="184"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="185"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>19、您对病人有不知如何是好的情形吗？</span></dt>
        <el-radio-group v-model="form.radio19">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="191"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="192"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="193"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="194"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="195"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <dl>
      <dt style="padding-top: 0.325rem"><span>20、您认为应该为病人做更多的事情是吗？</span></dt>
        <el-radio-group v-model="form.radio20">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="201"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="202"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="203"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="204"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="205"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>21、您认为在护理患者上您能做的更好吗？</span></dt>
        <el-radio-group v-model="form.radio21">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="211"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="212"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="213"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="214"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="215"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>22、综合看来您怎样评价自己在护理上的负担？</span></dt>
        <el-radio-group v-model="form.radio22">
          <dd class="floatW28" style="width:28.5%">
            <el-radio :label="221"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="222"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="223"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="224"><span class="questionsWord">常常</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="225"><span class="questionsWord">总是</span></el-radio>
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
          radio20: 0,
          radio21: 0,
          radio22: 0
        },
        cls: 'subBtn',
        isSubmitted: true,
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
            else if(this.form.radio21 === 0) this.$dialog("请作答第21题");
            else if(this.form.radio22 === 0) this.$dialog("请作答第22题");
            else {
                this.$dialog(["提交完成", "true"]);;
                this.cls = "subBtn grayBg"
                this.isSubmitted = false
            }
        }
      }
    }
  }
</script>
