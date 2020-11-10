<template>
  <div class="container">
    <topComponent title='视功能量表Pro'>
      <span class="back" @click="$router.push('/idpic/survival')" slot="left">返回</span>
      <!-- <span class="save" @click='saveInfo' slot='right'>保存</span> -->
    </topComponent>
     <!-- <p class="headBanner"><span class="look" >生存质量评估</span></p> -->
    <div style="margin-top: 0.22rem" class="container">
    <div class="questions" style="margin-top: -2.7rem">
    <!---1---->
    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C; color:#fff; font-size: 0.9375rem;
        margin: 0.125rem 8rem 0 0.25rem;background:#73BD4C" class='storySpecial'><span >总体健康和视力:</span></dt>
     </dl>
    </div>
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、你认为自己现在的健康狀況是  </span></dt>
        <el-radio-group v-model="form.radio1">
          <dd class="floatW25">
            <el-radio :label="11"><span class="questionsWord">非常好</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="12"><span class="questionsWord">很好</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="13"><span class="questionsWord">好</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="14"><span class="questionsWord">一般</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="15"><span class="questionsWord">差</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
        <!---2---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>2、你认为你自己现时的双眼视力(包括带眼镜或隐形</span></dt>
     <dt style="padding-top: 0.325rem"><span>眼镜)是 </span></dt>
        <el-radio-group v-model="form.radio2">
          <dd class="floatW26">
            <el-radio :label="21"><span class="questionsWord">非常好</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="22"><span class="questionsWord">好</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="23"><span class="questionsWord">一般</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="24"><span class="questionsWord">差</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="25"><span class="questionsWord">很差</span></el-radio>
          </dd>
          <dd class="floatW27">
            <el-radio :label="26"><span class="questionsWord">完全看不见</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
        <!---3---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>3、你有多少时间为你的视力而烦恼?  </span></dt>
        <el-radio-group v-model="form.radio3">
          <dd class="floatW25">
            <el-radio :label="31"><span class="questionsWord">没有时间</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="32"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="33"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="34"><span class="questionsWord">多数时间</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="35"><span class="questionsWord">所有时间</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    <!------4-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>4、你的眼睛和眼周围有没有感到疼痛或不适(例如  </span></dt>
     <dt style="padding-top: 0.325rem"><span>烧灼感、痒、或疼痛)  </span></dt>
        <el-radio-group v-model="form.radio4">
          <dd class="floatW20">
            <el-radio :label="41"><span class="questionsWord">没有</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="42"><span class="questionsWord">轻微</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="43"><span class="questionsWord">中等</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="44"><span class="questionsWord">严重</span></el-radio>
          </dd>
          <dd class="floatW24">
            <el-radio :label="45"><span class="questionsWord">很严重</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C; color:#fff; font-size: 0.9375rem;
        margin: 0.125rem 8rem 0 0.25rem;background:#73BD4C" class='storySpecial'><span >活动方面的困难:</span></dt>
     </dl>
    </div>
    <!---5---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>5、你认为你阅读报纸上的普通字体有多少困难? </span></dt>
        <el-radio-group v-model="form.radio5">
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
            <el-radio :label="56"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
        <!---6---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>6、你认为你做一些需要用眼细看的工作或爱好，如</span></dt>
     <dt style="padding-top: 0.325rem"><span>烹调、缝补、修理东西、或使用手工工具有多少困难?</span></dt>
        <el-radio-group v-model="form.radio6">
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
            <el-radio :label="66"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
        <!---7---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>7、因为你的视力问题， 你在放满了的柜子里(或物品</span></dt>
     <dt style="padding-top: 0.325rem"><span>架上)找东西有多少困难?</span></dt>
        <el-radio-group v-model="form.radio7">
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
            <el-radio :label="76"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    <!------8-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>8、你看街道路牌或商店名有多少困难? </span></dt>
        <el-radio-group v-model="form.radio8">
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
            <el-radio :label="86"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    <!------9-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>9、因为你的视力问题，你在夜晚或暗的地方上下台</span></dt>
     <dt style="padding-top: 0.325rem"><span>阶、楼梯、或围栏有多少困难? </span></dt>
        <el-radio-group v-model="form.radio9">
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
            <el-radio :label="96"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------10-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>10、因为你的视力问题，你走路时注意两旁的物体有</span></dt>
     <dt style="padding-top: 0.325rem"><span>多少困难? </span></dt>
        <el-radio-group v-model="form.radio10">
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
            <el-radio :label="106"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!-------11------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>11、因为你的视力问题，你观察他人对你讲话的反应</span></dt>
     <dt style="padding-top: 0.325rem"><span>有多少困难?  </span></dt>
        <el-radio-group v-model="form.radio11">
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
            <el-radio :label="116"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------12-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>12、因为你的视力问题，你为自己挑选和配衣服有多</span></dt>
     <dt style="padding-top: 0.325rem"><span>少困难?</span></dt>
        <el-radio-group v-model="form.radio12">
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
            <el-radio :label="126"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------13-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>13、因为你的视力问题，你在别人家庭、聚会、或饭</span></dt>
     <dt style="padding-top: 0.325rem"><span>馆等场所与人交往有多少困难?</span></dt>
        <el-radio-group v-model="form.radio13">
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
            <el-radio :label="136"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------14-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>14、因为你的视力问题，你外出看电影、戏剧表演、</span></dt>
     <dt style="padding-top: 0.325rem"><span>或运动比赛有多少困难? </span></dt>
        <el-radio-group v-model="form.radio14">
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
            <el-radio :label="146"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

 <!------15-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>15、你现时仍骑自行车或驾驶车辆吗，包括偶尔骑或</span></dt>
     <dt style="padding-top: 0.325rem"><span>驾驶一下？</span></dt>
        <el-radio-group v-model="form.radio15" @change="showOtherac">
           <dd class="floatW50">
            <el-radio :label="151"><span class="questionsWord">是(跳到15c题) </span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="152"><span class="questionsWord">不是(跳到15a)</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
     <!------15a-------->
     <dl v-show="isShow15a">
     <dt style="padding-top: 0.325rem"><span>15a、如果不是，你是从未骑过自行车或驾驶车辆还</span></dt>
     <dt style="padding-top: 0.325rem"><span>是停止了此项活动? </span></dt>
        <el-radio-group v-model="form.radio151" @change="showOtherb">
          <dd>
            <el-radio :label="1511"><span class="questionsWord">从未骑过自行车或驾驶车辆 (跳到17题)</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="1512"><span class="questionsWord">停止了骑车或驾驶车辆(跳到15b)</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!------15b-------->
     <dl v-show="isShow15b">
     <dt style="padding-top: 0.325rem"><span>15b、如果你是停止了骑车或驾驶车辆，主要是因为</span></dt>
     <dt style="padding-top: 0.325rem"><span>你的视力问题，还是其它原因，或两者原因都有？</span></dt>
        <el-radio-group v-model="form.radio152">
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
     <dl v-show="isShow15c">
     <dt style="padding-top: 0.325rem"><span>15c、如果你仍骑自行车或驾驶车辆，你白天在熟悉</span></dt>
     <dt style="padding-top: 0.325rem"><span>的地域骑车或驾驶车辆有多少困难？</span></dt>
        <el-radio-group v-model="form.radio153">
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
        <el-radio-group v-model="form.radio16">
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
            <el-radio :label="166"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!------16a-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>16a、你在复杂的环境如不良天气、上下班时间、交</span></dt>
     <dt style="padding-top: 0.325rem"><span>通拥挤混乱时骑车或驾驶车辆有多少困难？</span></dt>
        <el-radio-group v-model="form.radio161">
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
            <el-radio :label="1616"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C; color:#fff; font-size: 0.9375rem;
        margin: 0.125rem 8rem 0 0.25rem;background:#73BD4C" class='storySpecial'><span>对视力问题的反应:</span></dt>
     </dl>
    </div>
    <!---17---->

    <dl>
      <dt style="padding-top: 0.325rem"><span>17、你是否因为视力问题，实际做完的事比你想做的</span></dt>
      <dt style="padding-top: 0.325rem"><span>的少？</span></dt>
        <el-radio-group v-model="form.radio17">
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
        <el-radio-group v-model="form.radio18">
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
        <el-radio-group v-model="form.radio19">
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
        <el-radio-group v-model="form.radio20">
          <dd class="floatW24">
            <el-radio :label="201"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW27">
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
        <el-radio-group v-model="form.radio21">
          <dd class="floatW24">
            <el-radio :label="211"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW27">
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
        <el-radio-group v-model="form.radio22">
         <dd class="floatW24">
            <el-radio :label="221"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW27">
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
        <el-radio-group v-model="form.radio23">
          <dd class="floatW24">
            <el-radio :label="231"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW27">
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
        <el-radio-group v-model="form.radio24">
          <dd class="floatW24">
            <el-radio :label="241"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW27">
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
        <el-radio-group v-model="form.radio25">
         <dd class="floatW24">
            <el-radio :label="251"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW27">
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



    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C; color:#fff; font-size: 0.9375rem;
        margin: 0.125rem 8rem 0 0.25rem;background:#73BD4C" class='storySpecial'><span >补充问题:</span></dt>
     </dl>
    </div>
     <!---1---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>A1、你认为你的整体健康状况,，在如下尺度上(0代</span></dt>
      <dt style="padding-top: 0.325rem"><span>表临终状态，10代表最健康)处于哪个等级。</span></dt>
        <dd class="block">
          <el-slider
            v-model="form.value1"
            :step="1"
            :show-tooltip="false"
            :marks="marks"
            :min=0
            :max=10
            show-stops>
          </el-slider>
        </dd>
        <dd>
          <span class="fl partTwoYBgRed">最差</span><span class="fr partTwoYBgRed">最好</span>
        </dd>
     </dl>
        <!---2---->
     <dl>
     <br></br>
     <dt style="padding-top: 0.325rem"><span>A2、你认为你现时的双眼视力(包括戴眼镜或隐形眼</span></dt>
     <dt style="padding-top: 0.325rem"><span>镜后的视力)，在如下尺度上(0代表失明，10代</span></dt>
     <dt style="padding-top: 0.325rem"><span>表最好视力)处于哪个等级</span></dt>
        <dd class="block">
          <el-slider
            v-model="form.value2"
            :step="1"
            :show-tooltip="false"
            :marks="marks"
            :min=0
            :max=10
            show-stops>
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
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C; color:#fff; font-size: 0.9375rem;
        margin: 0.125rem 8rem 0 0.25rem;background:#73BD4C" class='storySpecial'><span >近视力:</span></dt>
     </dl>
    </div>
        <!---3---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>A3、你在戴眼镜的情况下阅读电话薄、药品说明书、</span></dt>
     <dt style="padding-top: 0.325rem"><span>或各种表格上的小写字体有多少困难？</span></dt>
        <el-radio-group v-model="form.radio43">
          <dd class="floatW30">
            <el-radio :label="431"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="432"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="433"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="434"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="435"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="436"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!------4-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>A4、因为你的视力问题，你检查你收到的发票(或账</span></dt>
     <dt style="padding-top: 0.325rem"><span>单)是否正确有多少困难？</span></dt>
        <el-radio-group v-model="form.radio44">
          <dd class="floatW30">
            <el-radio :label="441"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="442"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="443"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="444"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="445"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="446"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
     <!------5-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>A5、因为你的视力问题, 你做刮胡须、疏理自己发型、</span></dt>
     <dt style="padding-top: 0.325rem"><span>施化妆品之类的事有多少困难？</span></dt>
        <el-radio-group v-model="form.radio45">
          <dd class="floatW30">
            <el-radio :label="451"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="452"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="453"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="454"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="455"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="456"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C; color:#fff; font-size: 0.9375rem;
        margin: 0.125rem 8rem 0 0.25rem;background:#73BD4C" class='storySpecial'><span >远视力:</span></dt>
     </dl>
    </div>
     <!------6------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>A6、因为你的视力问题，你在一间房的距离之内辨认</span></dt>
     <dt style="padding-top: 0.325rem"><span>你熟识的人有多少困难？</span></dt>
        <el-radio-group v-model="form.radio46">
          <dd class="floatW30">
            <el-radio :label="461"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="462"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="463"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="464"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="465"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="466"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

     <!------7-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>A7、因为你的视力问题，你参加你有兴趣的娱乐或户</span></dt>
     <dt style="padding-top: 0.325rem"><span>外活动(如打麻将、下像棋、打台球、慢跑、或</span></dt>
     <dt style="padding-top: 0.325rem"><span>散步)有多少困难？</span></dt>
        <el-radio-group v-model="form.radio47">
          <dd class="floatW30">
            <el-radio :label="471"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="472"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="473"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="474"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="475"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="476"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <!------8-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>A8、因为你的视力问题，你观看和欣赏电视上的节目</span></dt>
     <dt style="padding-top: 0.325rem"><span>有多少困难？</span></dt>
        <el-radio-group v-model="form.radio48">
          <dd class="floatW30">
            <el-radio :label="481"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="482"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="483"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="484"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="485"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="486"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C; color:#fff; font-size: 0.9375rem;
        margin: 0.125rem 8rem 0 0.25rem;background:#73BD4C" class='storySpecial'><span >社会职能:</span></dt>
     </dl>
    </div>
     <!------9-------->
     <dl>
     <dt style="padding-top: 0.325rem"><span>A9、因为你的视力问题，你在自己家里招待朋友及家</span></dt>
     <dt style="padding-top: 0.325rem"><span>人有多少困难？</span></dt>
      <el-radio-group v-model="form.radio49">
        <dd class="floatW30">
            <el-radio :label="491"><span class="questionsWord">无任何困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="492"><span class="questionsWord">有点困难</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="493"><span class="questionsWord">中度困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="494"><span class="questionsWord">非常困难</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="495"><span class="questionsWord">因视力问题，停止此项活动</span></el-radio>
          </dd>
          <dd>
            <el-radio :label="496"><span class="questionsWord">因其它原因或没有兴趣，已停止此活动</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C; color:#fff; font-size: 0.9375rem;
        margin: 0.125rem 8rem 0 0.25rem;background:#73BD4C" class='storySpecial'><span >角色限制:</span></dt>
     </dl>
    </div>
     <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;下列问题是关于你做事受你的视力影响的情况。对每一问题，请选择一个与你的情况最接近的答案：</p>

<!------10-------->
    <dl>
     <dt style="padding-top: 0.325rem"><span>A11a、你是否因你的视力问题而受到他人较多的帮助</span></dt>
     <dt style="padding-top: 0.325rem"><span>？</span></dt>
        <el-radio-group v-model="form.radio410">
          <dd class="floatW28">
            <el-radio :label="4101"><span class="questionsWord">所有时间</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="4102"><span class="questionsWord">大多数时间</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="4103"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="4104"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="4105"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!------11-------->
    <dl>
     <dt style="padding-top: 0.325rem"><span>A11b、你能做的事情种类是否因你的视力问题而受到</span></dt>
     <dt style="padding-top: 0.325rem"><span>限制？</span></dt>
        <el-radio-group v-model="form.radio411">
          <dd class="floatW28">
            <el-radio :label="4111"><span class="questionsWord">所有时间</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="4112"><span class="questionsWord">大多数时间</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="4113"><span class="questionsWord">有时</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="4114"><span class="questionsWord">偶尔</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="4115"><span class="questionsWord">没有</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    </br>
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C; color:#fff; font-size: 0.9375rem;
        margin: 0.125rem 8rem 0 0.25rem;background:#73BD4C" class='storySpecial'><span >心情感受和独立性:</span></dt>
     </dl>
    </div>
     <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;对于下列每一种情形，请给出一个答案，表明与你实际情况符合的程度如何:</p>

    <!------12-------->
    <dl>
     <dt style="padding-top: 0.325rem"><span>A12、因为视力问题﹐我经常很烦躁或易怒？</span></dt>
        <el-radio-group v-model="form.radio412">
          <dd class="floatW24">
            <el-radio :label="4121"><span class="questionsWord">全部符合</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="4122"><span class="questionsWord">大部分符合</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="4123"><span class="questionsWord">不确定</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="4124"><span class="questionsWord">大部分不符合</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="4125"><span class="questionsWord">全部不符合</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

    <!------13-------->
    <dl>
      <dt style="padding-top: 0.325rem"><span>A13、因为视力问题﹐我不会单独外出？</span></dt>
          <el-radio-group v-model="form.radio413">
            <dd class="floatW24">
              <el-radio :label="4131"><span class="questionsWord">全部符合</span></el-radio>
            </dd>
            <dd class="floatW30">
              <el-radio :label="4132"><span class="questionsWord">大部分符合</span></el-radio>
            </dd>
            <dd class="floatW30">
              <el-radio :label="4133"><span class="questionsWord">不确定</span></el-radio>
            </dd>
            <dd class="floatW32">
              <el-radio :label="4134"><span class="questionsWord">大部分不符合</span></el-radio>
            </dd>
            <dd class="floatW32">
              <el-radio :label="4135"><span class="questionsWord">全部不符合</span></el-radio>
            </dd>
          </el-radio-group>
    </dl>


    </div>
    <div class="btnWarp">
        <span :class="this.cls" @click='saveInfo'>提交</span>
        <!-- <span  @click='saveInfo'>提交</span> -->
    </div>
    </div>
    <!----- dialog1  start ----->
    <el-dialog
      title=" 得分统计"
      :visible.sync="centerDialogVisible1"
      width="95%"
      center>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="content"
          label="各项指标"
          min-width="55%">
        </el-table-column>
        <el-table-column
          prop="score"
          label="得分">
        </el-table-column>
      </el-table>
    </div>
    </el-dialog>
    <!----- dialog1  end ----->

    <el-dialog
      :visible.sync="centerDialogVisible_bad"
      width="90%"
      center>

      <div class="container">
        <dt class="border ml20" style="line-height: 1.525rem;
          text-indent: 0.625rem;
          font-size: 0.9125rem;">您的生存质量评分为<span style=" font-size: 1.275rem;line-height: 2rem;
          font-weight: normal;text-indent: 0.825rem; color:red">{{this.form.total}}</span>分。</dt>
        <div class="hint">
            <dl>
            <dd>
              <p><span>您的生存质量评分为<span style=" font-size: 1.275rem;line-height: 2rem;
              font-weight: normal;text-indent: 0.825rem; color:red">{{this.form.total}}</span>分，低于最低分值<span style=" font-size: 1.275rem;line-height: 2rem;
              font-weight: normal;text-indent: 0.825rem; color:#73BD4C">62</span>分,请咨询您的主管医生和护士，进行对应的处理！！</span></p>
            </dd>
            </dl>
        </div>
        <img src="../../../assets/img/hushi.png"  class="fr" style="margin-top: 23px; "/>
      </div>
    </el-dialog>

    <el-dialog
      :visible.sync="centerDialogVisible_good"
      width="90%"
      center>

      <div class="container">
        <dt class="border ml20" style="line-height: 1.525rem;
          text-indent: 0.625rem;
          font-size: 0.9125rem;">您的生存质量评分为<span style=" font-size: 1.275rem;line-height: 2rem;
          font-weight: normal;text-indent: 0.825rem; color:#73BD4C">{{this.form.total}}</span>分。</dt>
        <div class="hint">
            <dl>
            <dd>
              <p><span style=" font-size: 1.275rem;line-height: 2rem;
              font-weight: normal;text-indent: 0.825rem; color:#73BD4C">您的生存质量评分正常，请继续保持 !</span></p>
            </dd>
            </dl>
        </div>
        <img src="../../../assets/img/hushi.png"  class="fr" style="margin-top: 23px; "/>
      </div>
    </el-dialog>

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
          radio151: 0,
          radio152: 0,
          radio153: 0,
          radio16: 0,
          radio161: 0,
          radio17: 0,
          radio18: 0,
          radio19: 0,
          radio20: 0,
          radio21: 0,
          radio22: 0,
          radio23: 0,
          radio24: 0,
          radio25: 0,
          value1: 0,
          value2: 0,
          radio43: 0,
          radio44: 0,
          radio45: 0,
          radio46: 0,
          radio47: 0,
          radio48: 0,
          radio49: 0,
          radio410: 0,
          radio411: 0,
          radio412: 0,
          radio413: 0,
          average1: 0,
          average2: 0,
          average3: 0,
          average4: 0,
          average5: 0,
          average6: 0,
          average7: 0,
          average8: 0,
          average9: 0,
          average10: 0,
          average11: 0,
          average12: 0,
          total: 0
        },
        isShow: false,
        marks: {
          0: '0',
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
          6: '6',
          7: '7',
          8: '8',
          9: '9',
          10: '10',
        },
        isShow15a: false,
        isShow15b: false,
        isShow15c: false,
        cls: 'subBtn',
        isSubmitted: true,
        centerDialogVisible1: false,
        centerDialogVisible_bad: false,
        centerDialogVisible_good: false,
        tableData: [{
          content: '生存质量(总分)',
          score: 0
          },
          {
            content: '一般健康',
            score: 0
          },
          {
            content: '总体视力',
            score: 0
          },
          {
            content: '眼痛',
            score: 0
          },
          {
            content: '近视力',
            score: 0
          },
          {
            content: '远视力',
            score: 0
          },
          {
            content: '社会功能',
            score: 0
          },
          {
            content: '心理问题',
            score: 0
          },
          {
            content: '角色困难',
            score: 0
          },
          {
            content: '依赖性',
            score: 0
          },
          {
            content: '驾驶',
            score: 0
          },
          {
            content: '色觉',
            score: 0
          },
          {
            content: '外周视力',
            score: 0
          },
        ],
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
            else if(this.form.radio6 === 0)  this.$dialog("请作答第6题");
            else if(this.form.radio7 === 0) this.$dialog("请作答第7题");
            else if(this.form.radio8 === 0) this.$dialog("请作答第8题");
            else if(this.form.radio9 === 0) this.$dialog("请作答第9题");
            else if(this.form.radio10 === 0) this.$dialog("请作答第10题");
            else if(this.form.radio11 === 0) this.$dialog("请作答第11题");
            else if(this.form.radio12 === 0) this.$dialog("请作答第12题");
            else if(this.form.radio13 === 0) this.$dialog("请作答第13题");
            else if(this.form.radio14 === 0) this.$dialog("请作答第14题");
            else if(this.form.radio15 === 0) this.$dialog("请作答第15题");
            else if(this.form.radio15 === 151 && this.form.radio153 === 0) this.$dialog("请作答第15c题");
            else if(this.form.radio15 === 152 && this.form.radio151 === 0) this.$dialog("请作答第15a题");
            else if(this.form.radio15 === 152 && this.form.radio151 === 1512 && this.form.radio152 === 0) this.$dialog("请作答第15b题");
            else if(this.form.radio16 === 0) this.$dialog("请作答第16题");
            else if(this.form.radio17 === 0) this.$dialog("请作答第17题");
            else if(this.form.radio18 === 0)  this.$dialog("请作答第18题");
            else if(this.form.radio19 === 0) this.$dialog("请作答第19题");
            else if(this.form.radio20 === 0) this.$dialog("请作答第20题");
            else if(this.form.radio21 === 0) this.$dialog("请作答第21题");
            else if(this.form.radio22 === 0) this.$dialog("请作答第22题");
            else if(this.form.radio23 === 0) this.$dialog("请作答第23题");
            else if(this.form.radio24 === 0) this.$dialog("请作答第24题");
            else if(this.form.radio25 === 0) this.$dialog("请作答第25题");
            else if(this.form.radio43 === 0) this.$dialog("请作答第A3题");
            else if(this.form.radio44 === 0) this.$dialog("请作答第A4题");
            else if(this.form.radio45 === 0) this.$dialog("请作答第A5题");
            else if(this.form.radio46 === 0) this.$dialog("请作答第A6题");
            else if(this.form.radio47 === 0) this.$dialog("请作答第A7题");
            else if(this.form.radio48 === 0) this.$dialog("请作答第A8题");
            else if(this.form.radio49 === 0) this.$dialog("请作答第A9题");
            else if(this.form.radio410 === 0) this.$dialog("请作答第A11a题");
            else if(this.form.radio411 === 0) this.$dialog("请作答第A11b题");
            else if(this.form.radio412 === 0) this.$dialog("请作答第A12题");
            else if(this.form.radio413 === 0) this.$dialog("请作答第A13题");
            else {
             let num =0;
             if(this.form.radio153 != 0){
               num = this.calculate_1(parseInt(this.form.radio153.toString().charAt(3)))
             }
              //calculate_1
              // 1,3,4,5,6,7,8,9,10,11,12,13,14,16,16a,15c
              // A3,A4,A5,A6,A7,A8,A9

              // calculate_2
              // 2

              // calculate_3
              // 17,18,19,20,21,22,23,24,25,
              // A11,,A12,A13

              // calculate_4
              // A1,A2
              // 一共39
              //  console.log("form.radio1:" + this.calculate_1(parseInt(this.form.radio1.toString().charAt(1))) )
              //  console.log("form.radio3:" + this.calculate_1(parseInt(this.form.radio3.toString().charAt(1))) )
              //  console.log("form.radio4:" + this.calculate_1(parseInt(this.form.radio4.toString().charAt(1))) )
              //  console.log("form.radio5:" + this.calculate_1(parseInt(this.form.radio5.toString().charAt(1))) )
              //  console.log("form.radio6:" + this.calculate_1(parseInt(this.form.radio6.toString().charAt(1))) )
              //  console.log("form.radio7:" + this.calculate_1(parseInt(this.form.radio7.toString().charAt(1))) )
              //  console.log("form.radio8:" + this.calculate_1(parseInt(this.form.radio8.toString().charAt(1))) )
              //  console.log("form.radio9:" + this.calculate_1(parseInt(this.form.radio9.toString().charAt(1))) )
              //  console.log("form.radio10:" + this.calculate_1(parseInt(this.form.radio10.toString().charAt(2))) )
              //  console.log("form.radio11:" + this.calculate_1(parseInt(this.form.radio11.toString().charAt(2))) )
              //  console.log("form.radio12:" + this.calculate_1(parseInt(this.form.radio12.toString().charAt(2))) )
              //  console.log("form.radio13:" + this.calculate_1(parseInt(this.form.radio13.toString().charAt(2))) )
              //  console.log("form.radio14:" + this.calculate_1(parseInt(this.form.radio14.toString().charAt(2))) )
              //  console.log("form.radio16:" + this.calculate_1(parseInt(this.form.radio16.toString().charAt(2))) )
              //  console.log("form.radio161:" + this.calculate_1(parseInt(this.form.radio161.toString().charAt(3))) )
              //  console.log("form.radio43:" + this.calculate_1(parseInt(this.form.radio43.toString().charAt(2))) )
              //  console.log("form.radio44:" + this.calculate_1(parseInt(this.form.radio44.toString().charAt(2))) )
              //  console.log("form.radio45:" + this.calculate_1(parseInt(this.form.radio45.toString().charAt(2))) )
              //  console.log("form.radio46:" + this.calculate_1(parseInt(this.form.radio46.toString().charAt(2))) )
              //  console.log("form.radio47:" + this.calculate_1(parseInt(this.form.radio47.toString().charAt(2))) )
              //  console.log("form.radio48:" + this.calculate_1(parseInt(this.form.radio48.toString().charAt(2))) )
              //  console.log("form.radio49:" + this.calculate_1(parseInt(this.form.radio49.toString().charAt(2))) )
              //  console.log("form.radio2:" + this.calculate_2(parseInt(this.form.radio2.toString().charAt(1)))  )
              //  console.log("form.radio17:" + this.calculate_3(parseInt(this.form.radio17.toString().charAt(2))) )
              //  console.log("form.radio18:" + this.calculate_3(parseInt(this.form.radio18.toString().charAt(2))) )
              //  console.log("form.radio19:" + this.calculate_3(parseInt(this.form.radio19.toString().charAt(2))) )
              //  console.log("form.radio20:" + this.calculate_3(parseInt(this.form.radio20.toString().charAt(2))) )
              //  console.log("form.radio21:" + this.calculate_3(parseInt(this.form.radio21.toString().charAt(2))) )
              //  console.log("form.radio22:" + this.calculate_3(parseInt(this.form.radio22.toString().charAt(2))) )
              //  console.log("form.radio23:" + this.calculate_3(parseInt(this.form.radio23.toString().charAt(2))) )
              //  console.log("form.radio24:" + this.calculate_3(parseInt(this.form.radio24.toString().charAt(2))) )
              //  console.log("form.radio25:" + this.calculate_3(parseInt(this.form.radio25.toString().charAt(2))) )
              //  console.log("form.radio410:" + this.calculate_3(parseInt(this.form.radio410.toString().charAt(3))) )
              //  console.log("form.radio411:" + this.calculate_3(parseInt(this.form.radio411.toString().charAt(3))) )
              //  console.log("form.radio412:" + this.calculate_3(parseInt(this.form.radio412.toString().charAt(3))) )
              //  console.log("form.radio413:" + this.calculate_3(parseInt(this.form.radio413.toString().charAt(3))) )
              //  console.log("value1:" + this.calculate_4(this.form.value1) )
              //  console.log("value2:" + this.calculate_4(this.form.value2) )

              this.form.total =  this.calculate_1(parseInt(this.form.radio1.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio3.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio4.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio5.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio6.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio7.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio8.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio9.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio10.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio11.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio12.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio13.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio14.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio16.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio161.toString().charAt(3))) +
                           this.calculate_1(parseInt(this.form.radio43.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio44.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio45.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio46.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio47.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio48.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio49.toString().charAt(2))) +
                           this.calculate_2(parseInt(this.form.radio2.toString().charAt(1))) +
                           this.calculate_3(parseInt(this.form.radio17.toString().charAt(2))) +
                           this.calculate_3(parseInt(this.form.radio18.toString().charAt(2))) +
                           this.calculate_3(parseInt(this.form.radio19.toString().charAt(2))) +
                           this.calculate_3(parseInt(this.form.radio20.toString().charAt(2))) +
                           this.calculate_3(parseInt(this.form.radio21.toString().charAt(2))) +
                           this.calculate_3(parseInt(this.form.radio22.toString().charAt(2))) +
                           this.calculate_3(parseInt(this.form.radio23.toString().charAt(2))) +
                           this.calculate_3(parseInt(this.form.radio24.toString().charAt(2))) +
                           this.calculate_3(parseInt(this.form.radio25.toString().charAt(2))) +
                           this.calculate_3(parseInt(this.form.radio410.toString().charAt(3))) +
                           this.calculate_3(parseInt(this.form.radio411.toString().charAt(3))) +
                           this.calculate_3(parseInt(this.form.radio412.toString().charAt(3))) +
                           this.calculate_3(parseInt(this.form.radio413.toString().charAt(3))) +
                           this.calculate_4(this.form.value1) +
                           this.calculate_4(this.form.value2) + num


             this.form.average1= ((this.calculate_1(parseInt(this.form.radio1.toString().charAt(1))) +
                           this.calculate_4(this.form.value1)) /2).toFixed(2)

             this.form.average2= ((this.calculate_1(parseInt(this.form.radio2.toString().charAt(1))) +
                           this.calculate_4(this.form.value2)) /2).toFixed(2)

             this.form.average3= ((this.calculate_1(parseInt(this.form.radio4.toString().charAt(1))) +
                           this.calculate_3(parseInt(this.form.radio19.toString().charAt(2))) )/2).toFixed(2)

             this.form.average4= ((this.calculate_1(parseInt(this.form.radio5.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio6.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio7.toString().charAt(1))) +
                           this.calculate_1(parseInt(this.form.radio43.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio44.toString().charAt(2))) +
                           this.calculate_1(parseInt(this.form.radio45.toString().charAt(2))) )/6).toFixed(2)

            this.form.average5= ((this.calculate_1(parseInt(this.form.radio8.toString().charAt(1))) +
                            this.calculate_1(parseInt(this.form.radio9.toString().charAt(1))) +
                            this.calculate_1(parseInt(this.form.radio14.toString().charAt(2))) +
                            this.calculate_1(parseInt(this.form.radio46.toString().charAt(2))) +
                            this.calculate_1(parseInt(this.form.radio47.toString().charAt(2))) +
                            this.calculate_1(parseInt(this.form.radio48.toString().charAt(2))) )/6).toFixed(2)

            this.form.average6= ((this.calculate_1(parseInt(this.form.radio11.toString().charAt(2))) +
                            this.calculate_1(parseInt(this.form.radio13.toString().charAt(2))) +
                            this.calculate_1(parseInt(this.form.radio49.toString().charAt(2))) )/3).toFixed(2)

            this.form.average7= ((this.calculate_1(parseInt(this.form.radio3.toString().charAt(1))) +
                            this.calculate_3(parseInt(this.form.radio21.toString().charAt(2))) +
                            this.calculate_3(parseInt(this.form.radio22.toString().charAt(2))) +
                            this.calculate_3(parseInt(this.form.radio25.toString().charAt(2))) +
                            this.calculate_3(parseInt(this.form.radio412.toString().charAt(3))) )/5).toFixed(2)

            this.form.average8= ((this.calculate_3(parseInt(this.form.radio17.toString().charAt(2))) +
                            this.calculate_3(parseInt(this.form.radio18.toString().charAt(2))) +
                            this.calculate_3(parseInt(this.form.radio410.toString().charAt(3))) +
                            this.calculate_3(parseInt(this.form.radio411.toString().charAt(3))) )/4).toFixed(2)

            this.form.average9= ((this.calculate_3(parseInt(this.form.radio20.toString().charAt(2))) +
                            this.calculate_3(parseInt(this.form.radio23.toString().charAt(2))) +
                            this.calculate_3(parseInt(this.form.radio24.toString().charAt(2))) +
                            this.calculate_3(parseInt(this.form.radio413.toString().charAt(3))) )/4).toFixed(2)

            this.form.average11 = this.calculate_1(parseInt(this.form.radio12.toString().charAt(2))).toFixed(2)

            this.form.average12 = this.calculate_1(parseInt(this.form.radio10.toString().charAt(2))).toFixed(2)

              if(num===0){
                this.form.average10 = ((this.calculate_1(parseInt(this.form.radio16.toString().charAt(2))) +
                            this.calculate_1(parseInt(this.form.radio161.toString().charAt(3))) )/2).toFixed(2)
                this.form.total =  (this.form.total/38).toFixed(2)
              } else {
                this.form.average10 = ((this.calculate_1(parseInt(this.form.radio16.toString().charAt(2))) +
                this.calculate_1(parseInt(this.form.radio161.toString().charAt(3))) + num )/3).toFixed(2)
                this.form.total =  (this.form.total/39).toFixed(2)
              }
              this.tableData[0].score = this.form.total;
              this.tableData[1].score = this.form.average1;
              this.tableData[2].score = this.form.average2;
              this.tableData[3].score = this.form.average3;
              this.tableData[4].score = this.form.average4;
              this.tableData[5].score = this.form.average5;
              this.tableData[6].score = this.form.average6;
              this.tableData[7].score = this.form.average7;
              this.tableData[8].score = this.form.average8;
              this.tableData[9].score = this.form.average9;
              this.tableData[10].score = this.form.average10;
              this.tableData[11].score = this.form.average11;
              this.tableData[12].score = this.form.average12;

              this.cls = "subBtn grayBg";
              this.isSubmitted = false;
              if(this.form.total<62){
                this.centerDialogVisible_bad = true
              }else if(this.form.total>=62) {
                this.centerDialogVisible_good = true
              }
              this.centerDialogVisible1 = true
              this.$dialog(["提交完成", "true"]);
            }

            }
      },

       calculate_1(val) {
         if(val===1) {
          return 100
        } else if(val===2) {
          return 75
        } else if(val===3) {
          return 50
        } else if(val===4) {
          return 25
        } else if(val===5) {
          return 0
        } else if(val===6) {
          return 100
        }
       },

       calculate_2(val) {
         if(val===1) {
          return 100
        } else if(val===2) {
          return 80
        } else if(val===3) {
          return 60
        } else if(val===4) {
          return 40
        } else if(val===5) {
          return 20
        } else if(val===6) {
          return 0
        }
       },

       calculate_3(val) {
         if(val===1) {
          return 0
        } else if(val===2) {
          return 25
        } else if(val===3) {
          return 50
        } else if(val===4) {
          return 75
        } else if(val===5) {
          return 100
        }
       },

       calculate_4(val) {
         return val*10
       },

       showOtherac(){
        if(this.form.radio15 === 151){
          this.form.radio153 === '';
          console.log('====' + this.form.radio153)
          this.isShow15c = true
          this.isShow15a = false
          this.isShow15b = false
          console.log('====' + this.form.radio153)
        }else if(this.form.radio15 === 152){
          this.form.radio151 === 0
          this.isShow15a = true
          this.isShow15b = false
          this.isShow15c = false
        }
      },

      showOtherb(){
        if(this.form.radio151 === 1511 ){
          this.isShow15b = false
        }else if(this.form.radio151 === 1512){
          this.isShow15b = true
        }
      },


      }


    }
</script>
