<template>
  <div class="container">
    <topComponent title='B. 便秘'>
      <!-- <span class="save" @click='saveInfo' slot='right'>保存</span> -->
    </topComponent>
    <p class="mt10 mrl10">&nbsp;&nbsp;&nbsp;</p>
    <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;尊敬的患者朋友: 您好!便秘对身体的影响多种多样，本问卷是想了解您在便秘发生时的感受，以下有7个条目供选择，每个条目对应着不同的参考值，请您根据个人情况，选择出您的感受。</p>
    <div class="questions">
    <!---1---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、因为您的眼部疾病，您有过便秘吗？  </span></dt>
        <el-radio-group v-model="radio1">
          <dd class="floatW20">
            <el-radio :label="11"><span class="questionsWord">没有</span></el-radio>
          </dd>
          <dd class="floatW40">
            <el-radio :label="12"><span class="questionsWord">偶尔有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="13"><span class="questionsWord">时常有</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="14"><span class="questionsWord">经常有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    <!---2---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>2、您术后有过便秘吗？  </span></dt>
        <el-radio-group v-model="radio2">
          <dd class="floatW20">
            <el-radio :label="21"><span class="questionsWord">没有</span></el-radio>
          </dd>
          <dd class="floatW40">
            <el-radio :label="22"><span class="questionsWord">偶尔有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="23"><span class="questionsWord">时常有</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="24"><span class="questionsWord">经常有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
     <!---3---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>3、便秘时您感到害怕、恐惧吗？</span></dt>
        <el-radio-group v-model="radio3">
          <dd class="floatW20">
            <el-radio :label="31"><span class="questionsWord">没有</span></el-radio>
          </dd>
          <dd class="floatW40">
            <el-radio :label="32"><span class="questionsWord">偶尔有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="33"><span class="questionsWord">时常有</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="34"><span class="questionsWord">经常有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---4---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>4、便秘会影响您的情绪吗？  </span></dt>
        <el-radio-group v-model="radio4">
          <dd class="floatW20">
            <el-radio :label="41"><span class="questionsWord">不会</span></el-radio>
          </dd>
          <dd class="floatW28">
            <el-radio :label="42"><span class="questionsWord">有一点影响</span></el-radio>
          </dd>
          <dd class="floatW28">
            <el-radio :label="43"><span class="questionsWord">有一些影响</span></el-radio>
          </dd>
          <dd class="floatW28">
            <el-radio :label="44"><span class="questionsWord">完全影响</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---5---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>5、便秘会影响您的食欲吗？  </span></dt>
        <el-radio-group v-model="radio5">
          <dd class="floatW20">
            <el-radio :label="51"><span class="questionsWord">不会</span></el-radio>
          </dd>
          <dd class="floatW28">
            <el-radio :label="52"><span class="questionsWord">有一点影响</span></el-radio>
          </dd>
          <dd class="floatW28">
            <el-radio :label="53"><span class="questionsWord">有一些影响</span></el-radio>
          </dd>
          <dd class="floatW28">
            <el-radio :label="54"><span class="questionsWord">完全影响</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!---6---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>6、便秘时您服用过药物吗？？</span></dt>
        <el-radio-group v-model="radio6">
          <dd class="floatW20">
            <el-radio :label="61"><span class="questionsWord">没有</span></el-radio>
          </dd>
          <dd class="floatW40">
            <el-radio :label="62"><span class="questionsWord">偶尔有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="63"><span class="questionsWord">时常有</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="64"><span class="questionsWord">经常有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---7---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>7、您便秘时有伴随症状吗？  </span></dt>
        <el-radio-group v-model="radio6">
            <dd class="floatW20">
              <el-radio :label="71"><span class="questionsWord">没有</span></el-radio>
            </dd>
            <dd class="floatW40">
              <el-radio :label="72"><span class="questionsWord">偶尔有</span></el-radio>
            </dd>
            <dd class="floatW25">
              <el-radio :label="73"><span class="questionsWord">时常有</span></el-radio>
            </dd>
            <dd class="floatW30">
              <el-radio :label="74"><span class="questionsWord">经常有</span></el-radio>
            </dd>
          </el-radio-group>
     </dl>

    </div>
   <div class="btnWarp">
        <span class="subBtn" @click='logIn'>提交</span>
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
        checkList: []
      }
    },
    methods: {
      logIn: function() {
         // this.$message({
          //   showClose: true,
          //   message: '您的得分为:' + total,
          //   type: 'success',
          //   center: true,
          //   offset: 160,
          //   duration: 0
          // });
          // this.$notify({
          //   title: ' 你的得分为:   ' + total + '',
          //   type: 'success',
          //   offset: 160,
          //   duration: 0
          // });

          // console.log("1:" + parseInt(this.form.radio1.toString().charAt(1)))
// console.log("3:" + parseInt(this.form.radio3.toString().charAt(1)))
// console.log("4:" + parseInt(this.form.radio4.toString().charAt(1)))
// console.log("7:" + parseInt(this.form.radio7.toString().charAt(1)))
// console.log("8:" + parseInt(this.form.radio8.toString().charAt(1)))
// console.log("9:" + parseInt(this.form.radio9.toString().charAt(1)))
// console.log("10:" + parseInt(this.form.radio10.toString().charAt(2)))
// console.log("13:" + parseInt(this.form.radio13.toString().charAt(2)))
// console.log("15:" + parseInt(this.form.radio15.toString().charAt(2)))
// console.log("19:" + parseInt(this.form.radio19.toString().charAt(2)))


//                  console.log("2:" + this.calculateNeg(parseInt(this.form.radio2.toString().charAt(1))));
//                  console.log("5:" + this.calculateNeg(parseInt(this.form.radio5.toString().charAt(1))))
//                  console.log("6:" + this.calculateNeg(parseInt(this.form.radio6.toString().charAt(1))))
//                  console.log("11:" + this.calculateNeg(parseInt(this.form.radio11.toString().charAt(2))))
//                  console.log("12:" + this.calculateNeg(parseInt(this.form.radio12.toString().charAt(2))))
//                  console.log("14:" + this.calculateNeg(parseInt(this.form.radio14.toString().charAt(2))))
//                  console.log("16:" + this.calculateNeg(parseInt(this.form.radio16.toString().charAt(2))))
//                  console.log("17:" + this.calculateNeg(parseInt(this.form.radio17.toString().charAt(2))))
//                  console.log("18:" + this.calculateNeg(parseInt(this.form.radio18.toString().charAt(2))))
//                  console.log("20:" + this.calculateNeg(parseInt(this.form.radio20.toString().charAt(2))))
        console.log("提交")
      }
    }
  }
</script>
