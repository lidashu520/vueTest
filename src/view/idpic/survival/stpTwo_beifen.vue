<template>
  <div class="container">
    <topComponent title='视功能量表'>
      <span class="back" @click="$router.push('/idpic')" slot="left">返回</span>
    </topComponent>
     <p class="headBanner"><span class="look" >第二部分<span style="margin-left: 0.5rem">活动方面的困难</span></span></p>
     <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;下列问题是关于你在进行一些活动时，因视力问题(包括带眼镜或隐形眼镜)而遇到困难的情况。</p>
    <div style="margin-top: 0.02rem" class="container">
    <div class="questions" style="margin-top: -2.7rem">
    <!---5---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>5、你认为你阅读报纸上的普通字体有多少困难? </span></dt>
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
        <!---6---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>6、你认为你做一些需要用眼细看的工作或爱好，如</span></dt>
     <dt style="padding-top: 0.325rem"><span>烹调、缝补、修理东西、或使用手工工具有多少困难?</span></dt>
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
        <!---7---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>7、因为你的视力问题， 你在放满了的柜子里(或物品</span></dt>
     <dt style="padding-top: 0.325rem"><span>架上)找东西有多少困难?</span></dt>
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
     <dt style="padding-top: 0.325rem"><span>8、你看街道路牌或商店名有多少困难? </span></dt>
        <el-radio-group v-model="radio9">
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
    <!------9-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>9、因为你的视力问题，你在夜晚或暗的地方上下台</span></dt>
     <dt style="padding-top: 0.325rem"><span>阶、楼梯、或围栏有多少困难? </span></dt>
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

     <!------10-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>10、因为你的视力问题，你走路时注意两旁的物体有</span></dt>
     <dt style="padding-top: 0.325rem"><span>多少困难? </span></dt>
        <el-radio-group v-model="radio10">
           <dd class="floatW30">
            <el-radio :label="101"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="102"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="103"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="104"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="105"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="106"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!-------11------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>11、因为你的视力问题，你观察他人对你讲话的反应</span></dt>
     <dt style="padding-top: 0.325rem"><span>有多少困难?  </span></dt>
        <el-radio-group v-model="radio8">
           <dd class="floatW30">
            <el-radio :label="111"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="112"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="113"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="114"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="115"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="116"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------12-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>12、因为你的视力问题，你为自己挑选和配衣服有多</span></dt>
     <dt style="padding-top: 0.325rem"><span>少困难?</span></dt>
        <el-radio-group v-model="radio12">
           <dd class="floatW30">
            <el-radio :label="121"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="122"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="123"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="124"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="125"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="126"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------13-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>13、因为你的视力问题，你在别人家庭、聚会、或饭</span></dt>
     <dt style="padding-top: 0.325rem"><span>馆等场所与人交往有多少困难?</span></dt>
        <el-radio-group v-model="radio13">
           <dd class="floatW30">
            <el-radio :label="131"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="132"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="133"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="134"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="135"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="136"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------14-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>14、因为你的视力问题，你外出看电影、戏剧表演、</span></dt>
     <dt style="padding-top: 0.325rem"><span>或运动比赛有多少困难? </span></dt>
        <el-radio-group v-model="radio14">
           <dd class="floatW30">
            <el-radio :label="141"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="142"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="143"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="144"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="145"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="146"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

 <!------15-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>15、你现时仍骑自行车或驾驶车辆吗，包括偶尔骑或</span></dt>
     <dt style="padding-top: 0.325rem"><span>驾驶一下？</span></dt>
        <el-radio-group v-model="radio15">
           <dd class="floatW55">
            <el-radio :label="151"><span class="questionsWord">是(跳到15c题) </span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="152"><span class="questionsWord">不是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
     <!------15a-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>15a、如果不是，你是从未骑过自行车或驾驶车辆还</span></dt>
     <dt style="padding-top: 0.325rem"><span>是停止了此项活动? </span></dt>
        <el-radio-group v-model="radio15a">
          <dd>
            <el-radio :label="1511"><span class="questionsWord">从未骑过自行车或驾驶车辆 (跳到17题)</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1512"><span class="questionsWord">停止了骑车或驾驶车辆</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!------15b-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>15b、如果你是停止了骑车或驾驶车辆，主要是因为</span></dt>
     <dt style="padding-top: 0.325rem"><span>你的视力问题，还是其它原因，或两者原因都有？</span></dt>
        <el-radio-group v-model="radio15b">
          <dd>
            <el-radio :label="1521"><span class="questionsWord">视力问题 (跳到17题)</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1522"><span class="questionsWord">其它原因 (跳到17题)</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1523"><span class="questionsWord">两者原因都有 (跳到17题)</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!------15c-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>15c、如果你仍骑自行车或驾驶车辆，你白天在熟悉</span></dt>
     <dt style="padding-top: 0.325rem"><span>的地域骑车或驾驶车辆有多少困难？</span></dt>
        <el-radio-group v-model="radio14">
           <dd class="floatW30">
            <el-radio :label="1531"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="1532"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="1533"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1534"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!------16-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>16、你夜晚在有路灯的马路上骑自行车或夜晚驾驶车</span></dt>
     <dt style="padding-top: 0.325rem"><span>辆有多少困难？</span></dt>
        <el-radio-group v-model="radio16">
           <dd class="floatW30">
            <el-radio :label="161"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="162"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="163"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="164"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="165"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="166"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!------16a-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>16a、你在复杂的环境如不良天气、上下班时间、交</span></dt>
     <dt style="padding-top: 0.325rem"><span>通拥挤混乱时骑车或驾驶车辆有多少困难？</span></dt>
        <el-radio-group v-model="radio16a">
           <dd class="floatW30">
            <el-radio :label="1611"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="1612"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="1613"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1614"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1615"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1616"><span class="questionsWord">因其它原因或没有兴趣﹐已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    </div>
    <div class="btnWarp">
        <span class="subBtn" @click='logIn'>提交</span>
    </div>
    </div>
    <survivalFooter :idx='1'></survivalFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
        radio15a: 0,
        radio15b: 0,
        radio15c: 0,
        radio16: 0,
        radio16a: 0
      }
    },
    methods: {
      logIn: function() {
        console.log("提交")
      }
    }
  }
</script>
