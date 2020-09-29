<template>
  <div class="container">
    <topComponent title='其他'>
      <!-- <span class="save" @click='saveInfo' slot='right'>保存</span> -->
    </topComponent>
    <p class="mt10 mrl1">&nbsp;&nbsp;&nbsp;</p>
    <p class="listTop questionsWord mt10 mrl1">  &nbsp;&nbsp;&nbsp;<b>眼部状况：-----------------------------</b></p>

    <div class="questions">
    <!---1---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、您是否有眼部水肿的情况发生？  </span></dt>
        <el-radio-group v-model="radio1" @change="show1_1">
          <dd class="floatW50">
            <el-radio :label="11"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="12"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl v-show="isShow1_1">
      <dt style="padding-top: 0.325rem"><span>1.1、您是否合并有睁眼困难？  </span></dt>
        <el-radio-group v-model="radio1001">
          <dd class="floatW50">
            <el-radio :label="10011"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="10012"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---2---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>2、您是否有视力障碍的情况发生？  </span></dt>
        <el-radio-group v-model="radio2" @change="show2_1">
          <dd class="floatW50">
            <el-radio :label="21"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="22"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <dl v-show="isShow2_1">
      <dt style="padding-top: 0.325rem"><span>2.1、是否突然视力下降 ？  </span></dt>
        <el-radio-group v-model="radio2001">
          <dd class="floatW50">
            <el-radio :label="20011"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="20012"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---3---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>3、您是否有眼部发红的情况发生？  </span></dt>
        <el-radio-group v-model="radio3">
          <dd class="floatW50">
            <el-radio :label="31"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="32"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---4---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>4、您是否有眼部发痒的情况发生？  </span></dt>
        <el-radio-group v-model="radio4">
          <dd class="floatW50">
            <el-radio :label="41"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="42"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---5---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>5、您是否有流泪与溢泪的情况发生？  </span></dt>
        <el-radio-group v-model="radio5">
          <dd class="floatW50">
            <el-radio :label="51"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="52"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---6---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>6、您的眼部是否有分泌物？  </span></dt>
        <el-radio-group v-model="radio6" @change="showOther">
          <dd class="floatW50">
            <el-radio :label="61"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="62"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


    <!---7---->
    <div v-show="isShow">
    <p class="mt10 mrl1">&nbsp;&nbsp;&nbsp;</p>
    <p class="listTop questionsWord mt10 mrl">  &nbsp;&nbsp;&nbsp;<b>眼部分泌物评估：-------------------------</b></p>
    <dl>
      <dt style="padding-top: 0.325rem"><span>1)、分泌物性质： </span></dt>
        <el-radio-group v-model="radio7">
          <dd class="floatW20">
            <el-radio :label="71"><span class="questionsWord">血性</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="72"><span class="questionsWord">脓性</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="73"><span class="questionsWord">水样</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="74"><span class="questionsWord">黏性</span></el-radio>
          </dd>
          <dd class="floatW24" style="width:24.5%">
            <el-radio :label="75"><span class="questionsWord">黏脓性</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---8---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>2)、分泌物的颜色： </span></dt>
        <el-radio-group v-model="radio8">
          <dd class="floatW25">
            <el-radio :label="81"><span class="questionsWord">血红色</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="82"><span class="questionsWord">淡粉色</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="83"><span class="questionsWord">淡黄色</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="84"><span class="questionsWord">深黄色</span></el-radio>
          </dd>
          <dd class="floatW20" style="width:20.5%">
            <el-radio :label="85"><span class="questionsWord">白色</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---9---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>3)、分泌物的量：  </span></dt>
        <el-radio-group v-model="radio9">
          <dd class="floatW25">
            <el-radio :label="91"><span class="questionsWord">1-2ml</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="92"><span class="questionsWord">2-4ml</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="93"><span class="questionsWord">>4ml</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    </div>

    <p class="mt10 mrl1">&nbsp;&nbsp;&nbsp;</p>
     <p class="listTop questionsWord mt10 mrl1">  &nbsp;&nbsp;&nbsp;<b>全身其他症状：-----------------------------</b></p>

    <!---10---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>1)、您是否有高热寒战的情况发生？  </span></dt>
        <el-radio-group v-model="radio10">
          <dd class="floatW50">
            <el-radio :label="101"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="102"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---11---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>2)、您是否有腹泻的情况发生？ </span></dt>
        <el-radio-group v-model="radio11">
          <dd class="floatW50">
            <el-radio :label="111"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="112"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!---12---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>3)、您是否有疲乏的情况发生？  </span></dt>
        <el-radio-group v-model="radio12">
          <dd class="floatW50">
            <el-radio :label="121"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="122"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!---13---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>4)、您是否有便秘的情况发生？  </span></dt>
        <el-radio-group v-model="radio13">
          <dd class="floatW50">
            <el-radio :label="131"><span class="questionsWord">是</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="132"><span class="questionsWord">否</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


    </div>
   <div class="btnWarp">
        <span class="subBtn" @click='saveInfo'>提交</span>
   </div>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        radio1: 0,
        radio1001: 0,
        radio2: 0,
        radio2001: 0,
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
        isShow1_1: false,
        isShow2_1: false,
        isShow: false
      }
    },
    methods: {
      saveInfo: function() {
        console.log("提交")
      },
      show1_1() {
        if(this.radio1 === 12) this.isShow1_1 = false
        if(this.radio1 === 11) this.isShow1_1 = true
      },
      show2_1() {
        if(this.radio2 === 22) this.isShow2_1 = false
        if(this.radio2 === 21) this.isShow2_1 = true
      },
      showOther() {
        if(this.radio6 === 62) this.isShow = false
        if(this.radio6 === 61) this.isShow = true
      },
    }
  }
</script>
