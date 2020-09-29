<template>
  <div class="container">
    <topComponent title='视功能量表'>
      <span class="back" @click="$router.push('/idpic')" slot="left">返回</span>
    </topComponent>
     <p class="headBanner"><span class="look" >第四部分<span style="margin-left: 0.5rem">补充问题</span></span></p>
    <div style="margin-top: 0.02rem" class="container">
    <div class="questions" style="margin-top: -2.7rem">
    <!---1---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、你认为你的整体健康状况,，在如下尺度上(0代</span></dt>
      <dt style="padding-top: 0.325rem"><span>表临终状态，10代表最健康)处于哪个等级。</span></dt>
        <dd class="block">
          <el-slider
          class ="sliderTop"
          v-model="value1"
          :min=0
          :max=10
          :step="1">
          </el-slider>
        </dd>
        <dd>
          <span class="fl partTwoYBgRed">最差</span><span class="fr partTwoYBgRed">最好</span>
        </dd>
     </dl>
        <!---2---->
     <dl>
     <br></br>
     <dt style="padding-top: 0.325rem"><span>2、你认为你现时的双眼视力(包括戴眼镜或隐形眼</span></dt>
     <dt style="padding-top: 0.325rem"><span>镜后的视力)，在如下尺度上(0代表失明，10代</span></dt>
     <dt style="padding-top: 0.325rem"><span>表最好视力)处于哪个等级</span></dt>
        <dd class="block">
          <el-slider
          class ="sliderTop"
          v-model="value2"
          :min=0
          :max=10
          :step="1">
          </el-slider>
        </dd>
        <dd>
          <span class="fl partTwoYBgRed">最差</span><span class="fr partTwoYBgRed">最好</span>
        </dd>
     </dl>

    </br>
    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C;" class='storySpecial'><span >近视力:</span></dt>
     </dl>
    </div>
        <!---3---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>3、你在戴眼镜的情况下阅读电话薄、药品说明书、</span></dt>
     <dt style="padding-top: 0.325rem"><span>或各种表格上的小写字体有多少困难？</span></dt>
        <el-radio-group v-model="radio3">
          <dd class="floatW30">
            <el-radio :label="31"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="32"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="33"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="34"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="35"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="36"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!------4-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>4、因为你的视力问题，你检查你收到的发票(或账</span></dt>
     <dt style="padding-top: 0.325rem"><span>单)是否正确有多少困难？</span></dt>
        <el-radio-group v-model="radio3">
          <dd class="floatW30">
            <el-radio :label="41"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="42"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="43"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="44"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="45"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="46"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
     <!------5-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>5、因为你的视力问题, 你做刮胡须、疏理自己发型、</span></dt>
     <dt style="padding-top: 0.325rem"><span>施化妆品之类的事有多少困难？</span></dt>
        <el-radio-group v-model="radio5">
          <dd class="floatW30">
            <el-radio :label="51"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="52"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="53"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="54"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="55"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="56"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C;" class='storySpecial'><span >远视力:</span></dt>
     </dl>
    </div>
     <!------6------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>6、因为你的视力问题，你在一间房的距离之内辨认</span></dt>
     <dt style="padding-top: 0.325rem"><span>你熟识的人有多少困难？</span></dt>
        <el-radio-group v-model="radio6">
          <dd class="floatW30">
            <el-radio :label="61"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="62"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="63"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="64"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="65"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="66"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------7-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>7、因为你的视力问题，你参加你有兴趣的娱乐或户</span></dt>
     <dt style="padding-top: 0.325rem"><span>外活动(如打麻将、下像棋、打台球、慢跑、或</span></dt>
     <dt style="padding-top: 0.325rem"><span>散步)有多少困难？</span></dt>
        <el-radio-group v-model="radio7">
          <dd class="floatW30">
            <el-radio :label="71"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="72"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="73"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="74"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="75"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="76"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!------8-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>8、因为你的视力问题，你观看和欣赏电视上的节目</span></dt>
     <dt style="padding-top: 0.325rem"><span>有多少困难？</span></dt>
        <el-radio-group v-model="radio8">
          <dd class="floatW30">
            <el-radio :label="81"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="82"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="83"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="84"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="85"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="86"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C;" class='storySpecial'><span >社会职能:</span></dt>
     </dl>
    </div>
     <!------9-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>9、因为你的视力问题，你在自己家里招待朋友及家</span></dt>
     <dt style="padding-top: 0.325rem"><span>人有多少困难？</span></dt>
      <el-radio-group v-model="radio9">
        <dd class="floatW30">
            <el-radio :label="91"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="92"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="93"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="94"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="95"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="96"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C;" class='storySpecial'><span >角色限制:</span></dt>
     </dl>
    </div>
     <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;下列问题是关于你做事受你的视力影响的情况。对每一问题，请选择一个与你的情况最接近的答案：</p>

<!------10-------->
    <dl>
     <dt style="padding-top: 0.325rem"><span>10、你是否因你的视力问题而受到他人较多的帮助？</span></dt>
        <el-radio-group v-model="radio10">
          <dd class="floatW28">
            <el-radio :label="101"><span class="questionsWord">所有时间</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="102"><span class="questionsWord">大多数时间</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="103"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="104"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="105"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!------11-------->
    <dl>
     <dt style="padding-top: 0.325rem"><span>11、你能做的事情种类是否因你的视力问题而受到限</span></dt>
     <dt style="padding-top: 0.325rem"><span>制？</span></dt>
        <el-radio-group v-model="radio11">
          <dd class="floatW28">
            <el-radio :label="111"><span class="questionsWord">所有时间</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="112"><span class="questionsWord">大多数时间</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="113"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="114"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="115"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C;" class='storySpecial'><span >心情感受和独立:</span></dt>
     </dl>
    </div>
     <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;对于下列每一种情形，请给出一个答案，表明与你实际情况符合的程度如何:</p>

    <!------12-------->
    <dl>
     <dt style="padding-top: 0.325rem"><span>12、因为视力问题﹐我经常很烦躁或易怒？</span></dt>
        <el-radio-group v-model="radio12">
          <dd class="floatW24">
            <el-radio :label="121"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="122"><span class="questionsWord">大部分符合</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="123"><span class="questionsWord">不确定</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="124"><span class="questionsWord">大部分不符合</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="125"><span class="questionsWord">全部不符合</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!------13-------->
    <dl>
      <dt style="padding-top: 0.325rem"><span>13、因为视力问题﹐我不会单独外出？</span></dt>
          <el-radio-group v-model="radio13">
            <dd class="floatW24">
              <el-radio :label="131"><span class="questionsWord">全部符合</span></el-radio>
            </dd>
            <dd class="floatW25">
              <el-radio :label="132"><span class="questionsWord">大部分符合</span></el-radio>
            </dd>
            <dd class="floatW30">
              <el-radio :label="133"><span class="questionsWord">不确定</span></el-radio>
            </dd>
            <dd class="floatW32">
              <el-radio :label="134"><span class="questionsWord">大部分不符合</span></el-radio>
            </dd>
            <dd class="floatW32">
              <el-radio :label="135"><span class="questionsWord">全部不符合</span></el-radio>
            </dd>
          </el-radio-group>
    </dl>

    </div>
    </div>
    <div class="btnWarp">
        <span class="subBtn" @click='logIn'>提交</span>
    </div>

    <survivalFooter :idx='3'></survivalFooter>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0,
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
      }
    },
    methods: {
      logIn: function() {
        console.log("提交")
      }
    }
  }
</script>
