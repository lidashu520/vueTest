<template>
  <div class="container">
    <topComponent title='疼痛评估量表'>
      <!-- <span class="save" @click='saveInfo' slot='right'>保存</span> -->
    </topComponent>

    <p class="mt10 mrl10">&nbsp;&nbsp;&nbsp;</p>
    <div class="questions">

    <dl>
        <dt style="padding-top: 0.325rem"> <span>疼痛强度(视觉模拟评分法)</span>
         <img style="margin: 0.5rem 0 0 0.5rem" src="../../../../assets/img/painNew.jpg" />
        </dt>
        <div class="block">
          <el-slider
            v-model="value"
            :step="10"
            :show-tooltip="false"
            :marks="marks"
            :format-tooltip="formatTooltip"
            :disabled ="isAble"
            show-stops>
          </el-slider>
        </div>
     </dl>

    <p v-show="isShow" class="mt10 mrl1">&nbsp;&nbsp;&nbsp;</p>
    <p v-show="isShow" class="listTop questionsWord mt10 mrl1">  &nbsp;&nbsp;&nbsp;<b>第一部分：疼痛性质评估</b></p>
    <!---1.1---->
    <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>1、请选择疼痛发生的类型  </span></dt>
        <el-radio-group v-model="form.radio1_1">
          <dd>
            <el-radio :label="1.11"><span class="questionsWord">短暂性疼痛：搏动的,像受到猛击的，跳动的</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1.12"><span class="questionsWord">有空间感的疼痛：像枪击样，像泵式或抽样</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1.13"><span class="questionsWord">点状压痛：像钻样，像针扎样，像针刺穿样，</span>
            <br><span class="questionsWord">像蜜蜂蜇人样刺人的</span></br>
            </el-radio>
          </dd>
          <dd >
            <el-radio :label="1.14"><span class="questionsWord">灼痛：灼热的</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1.15"><span class="questionsWord">酸麻痛：瘙痒的，像麻刺样</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    <!---1.2---->
     <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>2、请选择疼痛发生的频率  </span></dt>
        <el-radio-group v-model="form.radio1_2">
          <dd class="floatW35">
            <el-radio :label="1.21"><span class="questionsWord">几分钟-1小时</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="1.22"><span class="questionsWord">1-3小时</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="1.23"><span class="questionsWord">4-6小时</span></el-radio>
          </dd>
          <dd class="floatW25" style="width:24.5%">
            <el-radio :label="1.24"><span class="questionsWord">7-9小时</span></el-radio>
          </dd>
          <dd class="floatW28">
            <el-radio :label="1.25"><span class="questionsWord">10-12小时</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---1.3---->
     <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>3、请选择疼痛常发生的时间  </span></dt>
        <el-radio-group v-model="form.radio1_3">
          <dd class="floatW18">
            <el-radio :label="1.31"><span class="questionsWord">早晨</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="1.32"><span class="questionsWord">中午</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="1.33"><span class="questionsWord">下午</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="1.34"><span class="questionsWord">晚上</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


     <!---1.4---->
     <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>4、请选择疼痛发生的频率  </span></dt>
        <el-radio-group v-model="form.radio1_4">
          <dd class="floatW30" style="width:30.5%">
            <el-radio :label="1.41"><span class="questionsWord">仅仅几分钟</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="1.42"><span class="questionsWord">1-3小时</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="1.43"><span class="questionsWord">4-6小时</span></el-radio>
          </dd>
          <dd class="floatW25" style="width:24.5%">
            <el-radio :label="1.44"><span class="questionsWord">7-9小时</span></el-radio>
          </dd>
          <dd class="floatW28">
            <el-radio :label="1.45"><span class="questionsWord">10-12小时</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---1.5---->
     <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>5、请选择疼痛时的伴随症状  </span></dt>
        <el-radio-group v-model="form.radio1_5">
          <dd class="floatW18">
            <el-radio :label="2.51"><span class="questionsWord">恶心</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="2.52"><span class="questionsWord">呕吐</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="2.53"><span class="questionsWord">腹泻</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="2.54"><span class="questionsWord">发热</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="2.55"><span class="questionsWord">焦虑</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="2.56"><span class="questionsWord">其他</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>



    <p v-show="isShow" class="mt10 mrl1">&nbsp;&nbsp;&nbsp;</p>
    <p v-show="isShow" class="listTop questionsWord mt10 mrl1">  &nbsp;&nbsp;&nbsp;<b>第二部分：疼痛对生活质量的影响</b></p>
    <!---2.1---->
    <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>1、疼痛让我难以入睡  </span></dt>
        <el-radio-group v-model="form.radio2_1">
          <dd class="floatW24">
            <el-radio :label="2.11"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.12"><span class="questionsWord">几乎没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.13"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.14"><span class="questionsWord">经常有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.15"><span class="questionsWord">总是有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---2.2---->
    <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>2、疼痛让我感到愤怒  </span></dt>
        <el-radio-group v-model="form.radio2_2">
          <dd class="floatW24">
            <el-radio :label="2.21"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.22"><span class="questionsWord">几乎没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.23"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.24"><span class="questionsWord">经常有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.25"><span class="questionsWord">总是有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---2.3---->
     <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>3、疼痛让我工作学习有困难  </span></dt>
        <el-radio-group v-model="form.radio2_3">
          <dd class="floatW24">
            <el-radio :label="2.31"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.32"><span class="questionsWord">几乎没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.33"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.34"><span class="questionsWord">经常有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.35"><span class="questionsWord">总是有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---2.4---->
     <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>4、疼痛让我难以集中注意力  </span></dt>
        <el-radio-group v-model="form.radio2_4">
          <dd class="floatW24">
            <el-radio :label="2.41"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.42"><span class="questionsWord">几乎没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.43"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.44"><span class="questionsWord">经常有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.45"><span class="questionsWord">总是有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---2.5---->
     <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>5、疼痛让我步行约100米的距离有困难  </span></dt>
        <el-radio-group v-model="form.radio2_5">
          <dd class="floatW24">
            <el-radio :label="2.51"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.52"><span class="questionsWord">几乎没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.53"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.54"><span class="questionsWord">经常有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.55"><span class="questionsWord">总是有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---2.6---->
     <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>6、疼痛让我难以开心  </span></dt>
        <el-radio-group v-model="form.radio2_6">
          <dd class="floatW24">
            <el-radio :label="2.61"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.62"><span class="questionsWord">几乎没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.63"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.64"><span class="questionsWord">经常有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.65"><span class="questionsWord">总是有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---2.7---->
     <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>7、疼痛让我保持站立有困难  </span></dt>
        <el-radio-group v-model="form.radio2_7">
          <dd class="floatW24">
            <el-radio :label="2.71"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.72"><span class="questionsWord">几乎没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.73"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.74"><span class="questionsWord">经常有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.75"><span class="questionsWord">总是有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---2.8---->
     <dl v-show="isShow">
      <dt style="padding-top: 0.325rem"><span>8、疼痛让我产生精神压力  </span></dt>
        <el-radio-group v-model="form.radio2_8">
          <dd class="floatW24">
            <el-radio :label="2.81"><span class="questionsWord">从来没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.82"><span class="questionsWord">几乎没有</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="2.83"><span class="questionsWord">有时有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.84"><span class="questionsWord">经常有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="2.85"><span class="questionsWord">总是有</span></el-radio>
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
          radio1_1: 0,
          radio1_2: 0,
          radio1_3: 0,
          radio1_4: 0,
          radio1_5: 0,
          radio2_1: 0,
          radio2_2: 0,
          radio2_3: 0,
          radio2_4: 0,
          radio2_5: 0,
          radio2_6: 0,
          radio2_7: 0,
          radio2_8: 0,
        },
        value: 0,
        isShow: false,
        marks: {
          0: '0',
          10: '1',
          20: '2',
          30: '3',
          40: '4',
          50: '5',
          60: '6',
          70: '7',
          80: '8',
          90: '9',
          100: '10',
        },
        cls: 'subBtn',
        isSubmitted: true,
        isAble: false
      }
    },
    methods: {
      saveInfo: function() {

       if(this.isSubmitted) {
          if(this.value>=40) {
            if(this.form.radio1_1 === 0)  this.$dialog("请作答第一部分：第1题");
            else if(this.form.radio1_2 === 0) this.$dialog("请作答第一部分：请作答第2题");
            else if(this.form.radio1_3 === 0) this.$dialog("请作答第一部分：请作答第3题");
            else if(this.form.radio1_4 === 0) this.$dialog("请作答第一部分：请作答第4题");
            else if(this.form.radio1_5 === 0) this.$dialog("请作答第一部分：请作答第5题");
            else if(this.form.radio2_1 === 0)  this.$dialog("请作答第二部分：第1题");
            else if(this.form.radio2_2 === 0) this.$dialog("请作答第二部分：请作答第2题");
            else if(this.form.radio2_3 === 0) this.$dialog("请作答第二部分：请作答第3题");
            else if(this.form.radio2_4 === 0) this.$dialog("请作答第二部分：请作答第4题");
            else if(this.form.radio2_5 === 0) this.$dialog("请作答第二部分：请作答第5题");
            else if(this.form.radio2_6 === 0) this.$dialog("请作答第二部分：请作答第6题");
            else if(this.form.radio2_7 === 0) this.$dialog("请作答第二部分：请作答第7题");
            else if(this.form.radio2_8 === 0) this.$dialog("请作答第二部分：请作答第8题");
            else {
              this.$dialog("提交完成");
              let total =  this.calculate(parseInt(this.form.radio2_1.toString().split(".")[1].charAt(1))) +
                           this.calculate(parseInt(this.form.radio2_2.toString().split(".")[1].charAt(1))) +
                           this.calculate(parseInt(this.form.radio2_3.toString().split(".")[1].charAt(1))) +
                           this.calculate(parseInt(this.form.radio2_4.toString().split(".")[1].charAt(1))) +
                           this.calculate(parseInt(this.form.radio2_5.toString().split(".")[1].charAt(1))) +
                           this.calculate(parseInt(this.form.radio2_6.toString().split(".")[1].charAt(1))) +
                           this.calculate(parseInt(this.form.radio2_7.toString().split(".")[1].charAt(1))) +
                           this.calculate(parseInt(this.form.radio2_8.toString().split(".")[1].charAt(1)))
              this.cls = "subBtn grayBg";
              this.isSubmitted = false;
              this.isAble = true;
              this.$message({
                dangerouslyUseHTMLString: true,
                message: '<b style="font-size: 1.575rem;line-height: 4rem; font-weight: normal;text-indent: 1.225rem;">您的得分： ' +  total +'  </b>',
                type: 'success',
                center: true,
                offset: 180,
                showClose: true,
                duration: 0
              });
              // console.log("value1:"+ this.value);
            }
          }else {
            this.$dialog("提交完成");
            this.cls = "subBtn grayBg"
            this.isSubmitted = false
            this.isAble = true
            // console.log("value2:"+ this.value)
          }
       }
      },
      formatTooltip(val) {
        if(val / 10 >= 4) {
          this.isShow = true
        } else {
          this.isShow = false
        }
        return val / 10;
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
        } else if(val===5) {
          return 4
        }
       },

    }
  }
</script>
