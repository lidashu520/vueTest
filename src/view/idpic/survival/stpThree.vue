<template>
  <div class="container">
    <topComponent title='视功能量表'>
      <span class="back" @click="$router.push('/idpic')" slot="left">返回</span>
    </topComponent>
     <p class="headBanner"><span class="look" >第三部分<span style="margin-left: 0.5rem">对视力问题的反应</span></span></p>
     <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;下列问题是关于你做事受你的视力影响的情况。对每一问题，请选择一个与你的情况最接近的答案。</p>
    <div style="margin-top: 0.02rem" class="container">
    <div class="questions" style="margin-top: -2.7rem">
    <!---17---->

    <dl>
      <dt style="padding-top: 0.325rem"><span>17、你是否因为视力问题，实际做完的事比你想做的</span></dt>
      <dt style="padding-top: 0.325rem"><span>的少？</span></dt>
        <el-radio-group v-model="radio17">
          <dd class="floatW28">
            <el-radio :label="171"><span class="questionsWord">所有时间</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="172"><span class="questionsWord">大多数时间</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="173"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="174"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="175"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
        <!---18---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>18、你工作或参与其它活动的时间是否因你的视力问</span></dt>
     <dt style="padding-top: 0.325rem"><span>题而缩减了？</span></dt>
        <el-radio-group v-model="radio18">
          <dd class="floatW28">
            <el-radio :label="181"><span class="questionsWord">所有时间</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="182"><span class="questionsWord">大多数时间</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="183"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="184"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="185"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
        <!---19---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>19、你眼部或眼周围的疼痛或不适，如烧灼感、痒、</span></dt>
     <dt style="padding-top: 0.325rem"><span>或疼痛,影响你做你想做的事的程度如何？</span></dt>
        <el-radio-group v-model="radio19">
          <dd class="floatW28">
            <el-radio :label="191"><span class="questionsWord">所有时间</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="192"><span class="questionsWord">大多数时间</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="193"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="194"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="195"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;对于下列每一种情形，请给出一个答案，表明与你实际情况符合的程度如何。</p>
    <!------20-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>20、因为视力问题﹐我大多数时间都留在家中</span></dt>
        <el-radio-group v-model="radio20">
          <dd class="floatW24">
            <el-radio :label="201"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="202"><span class="questionsWord">大部分符合</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="203"><span class="questionsWord">不确定</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="204"><span class="questionsWord">大部分不符合</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="205"><span class="questionsWord">全部不符合</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
     <!------21-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>21、因为视力问题，我常常感到灰心、沮丧</span></dt>
        <el-radio-group v-model="radio21">
          <dd class="floatW24">
            <el-radio :label="211"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="212"><span class="questionsWord">大部分符合</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="213"><span class="questionsWord">不确定</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="214"><span class="questionsWord">大部分不符合</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="215"><span class="questionsWord">全部不符合</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------22-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>22、因为视力问题，我对自己做事没有把握</span></dt>
        <el-radio-group v-model="radio22">
         <dd class="floatW24">
            <el-radio :label="221"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="222"><span class="questionsWord">大部分符合</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="223"><span class="questionsWord">不确定</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="224"><span class="questionsWord">大部分不符合</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="225"><span class="questionsWord">全部不符合</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------23-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>23、因为视力问题，我不得不过多地相信他人的说法</span></dt>
        <el-radio-group v-model="radio23">
          <dd class="floatW24">
            <el-radio :label="231"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="232"><span class="questionsWord">大部分符合</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="233"><span class="questionsWord">不确定</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="234"><span class="questionsWord">大部分不符合</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="235"><span class="questionsWord">全部不符合</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!------24-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>24、因为视力问题，我常常需要他人的帮助</span></dt>
        <el-radio-group v-model="radio24">
          <dd class="floatW24">
            <el-radio :label="241"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="242"><span class="questionsWord">大部分符合</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="243"><span class="questionsWord">不确定</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="244"><span class="questionsWord">大部分不符合</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="245"><span class="questionsWord">全部不符合</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------25-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>25、因为视力问题，我担心会做出一些令他人或自己</span></dt>
     <dt style="padding-top: 0.325rem"><span>尴尬的事</span></dt>
        <el-radio-group v-model="radio24">
         <dd class="floatW24">
            <el-radio :label="251"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="252"><span class="questionsWord">大部分符合</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="253"><span class="questionsWord">不确定</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="254"><span class="questionsWord">大部分不符合</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="255"><span class="questionsWord">全部不符合</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    </div>
    <div class="btnWarp">
        <span class="subBtn" @click='logIn'>提交</span>
    </div>
    </div>
    <survivalFooter :idx='2'></survivalFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio17: 0,
        radio18: 0,
        radio19: 0,
        radio20: 0,
        radio21: 0,
        radio22: 0,
        radio23: 0,
        radio24: 0,
        radio25: 0
      }
    },
    methods: {
      logIn: function() {
        console.log("提交")
      }
    }
  }
</script>
