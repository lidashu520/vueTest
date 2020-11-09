<template>
  <div class="container">
    <topComponent title='匹兹堡睡眠质量指数量表'>
      <!-- <span class="save" @click='saveInfo' slot='right'>保存</span> -->
    </topComponent>
    <p class="mt10 mrl10">&nbsp;&nbsp;&nbsp;</p>
    <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;<b>指导语：</b>下面一些问题是关于您最近一个月的睡眠状况，这仅仅与您的睡眠习惯有关。请选择或填写最符合您近一个月白天和晚上实际情况的选项，并尽可能地做精确回答。其中划有横杠的部分是需要自己填写。</p>
    <p class="mt10 mrl10">&nbsp;&nbsp;&nbsp;</p>
    <div class="questions">
    <!---1---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、在最近一个月中，您晚上上床睡觉通常是  </span></dt>
      <dt style="padding-top: 0.325rem; ">
        <span>
          <el-time-picker
            size="small"
            v-model="form.value1"
            placeholder="选择时间">
          </el-time-picker>
          &nbsp;&nbsp;&nbsp; 点钟
        </span>
      </dt>
     </dl>

     <dl>
      <dt style="padding-top: 0.325rem"><span>2、在最近一个月中，您每晚通常要多长时间才能入 </span></dt>
      <dt style="padding-top: 0.325rem"><span>睡(从上床到入睡） </span></dt>

      <el-input-number style="margin:0.325rem 0 0 1.25rem" size="small" v-model="form.value2" controls-position="right" @change="handleChange" :min="0" :max="120"></el-input-number>
        <span style="margin-top: 0.125rem;
                      color: #000000;
                      text-indent: 0.625rem;
                      font-size: 0.78rem;
                      position: relative;
                      font-weight: bold;">
      &nbsp;&nbsp;&nbsp; 分钟
        </span>
     </dl>

      <dl>
      <dt style="padding-top: 0.325rem"><span>3、在最近一个月中，您每天早上通常  </span></dt>
      <dt style="padding-top: 0.325rem">
        <span>
          <el-time-picker
            size="small"
            v-model="form.value3"
            placeholder="选择时间">
          </el-time-picker>
          &nbsp;&nbsp;&nbsp;  点钟起床
        </span>
      </dt>
     </dl>

      <dl>
      <dt style="padding-top: 0.325rem"><span>4、在最近一个月中，您每晚实际睡眠的时间为 </span></dt>
          <el-input-number style="margin:0.325rem 0 0 1.25rem"  size="small" v-model="form.value4" :precision="2" :step="0.5" :min="0" :max="24"></el-input-number>
          &nbsp;&nbsp;&nbsp;
          <span style="margin-top: 0.125rem;
                      color: #000000;
                      text-indent: 0.625rem;
                      font-size: 0.78rem;
                      position: relative;
                      font-weight: bold;">
            小时
         </span>
      <dt style="padding-top: 0.325rem">
        <span >
         （注意不等同于卧床时间，可以有小数）。
        </span>
      </dt>
     </dl>

     <p class="listTop questionsWord mt20 mrl10">  &nbsp;&nbsp;&nbsp;<b>选择题：</b> 从下列问题中选择一个最符合您的情况的选项作为答案</p>
     <dl>
      <dt style="padding-top: 0.325rem"><span>5、在最近一个月中，您是否因下列情况影响睡眠而</span></dt>
      <dt style="padding-top: 0.325rem"><span>烦恼，并描述其程度： </span></dt>
      <dt style="padding-top: 0.325rem"><span>A．不能在30分钟内入睡： </span></dt>
        <el-radio-group v-model="form.radio51">
          <dd class="floatW50">
            <el-radio :label="511"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="512"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="513"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="514"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

     <dl>
        <dt style="padding-top: 0.325rem"><span>B．在晚上睡眠过程中醒来或早醒（凌晨醒后不容易 </span></dt>
        <dt style="padding-top: 0.325rem"><span>再次入睡）： </span></dt>
        <el-radio-group v-model="form.radio52">
          <dd class="floatW50">
            <el-radio :label="521"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="522"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="523"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="524"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>C．晚上起床上洗手间： </span></dt>
        <el-radio-group v-model="form.radio53">
          <dd class="floatW50">
            <el-radio :label="531"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="532"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="533"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="534"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>D．晚上睡觉时出现不舒服的呼吸： </span></dt>
        <el-radio-group v-model="form.radio54">
          <dd class="floatW50">
            <el-radio :label="541"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="542"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="543"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="544"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>E. 晚上睡觉出现大声咳嗽或鼾声：</span></dt>
        <el-radio-group v-model="form.radio55">
          <dd class="floatW50">
            <el-radio :label="551"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="552"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="553"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="554"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>F. 晚上睡觉感到寒冷：</span></dt>
        <el-radio-group v-model="form.radio56">
          <dd class="floatW50">
            <el-radio :label="561"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="562"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="563"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="564"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>G. 晚上睡觉感到太热：</span></dt>
        <el-radio-group v-model="form.radio57">
          <dd class="floatW50">
            <el-radio :label="571"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="572"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="573"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="574"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>H．晚上睡觉做恶梦： </span></dt>
        <el-radio-group v-model="form.radio58">
          <dd class="floatW50">
            <el-radio :label="581"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="582"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="583"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="584"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>I. 晚上睡觉身上出现疼痛不适： </span></dt>
        <el-radio-group v-model="form.radio59">
          <dd class="floatW50">
            <el-radio :label="591"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="592"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="593"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="594"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>J. 其他影响睡眠的问题和原因： </span></dt>
        <dt style="padding-top: 0.325rem"><span>如有，请说明这个问题： </span></dt>
        <dt style="margin: 0.325rem 1.325rem 0.325rem 0rem;">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="form.textarea5"
            @change="isShowRadio5J"
            maxlength="150"
            show-word-limit
          >
          </el-input>
        </dt>
        <dt v-show="showRadio5J" style="padding-top: 0.325rem"><span>并描述其程度： </span></dt>
        <el-radio-group v-show="showRadio5J" v-model="form.radio510">
          <dd class="floatW50">
            <el-radio :label="5101"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="5102"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="5103"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="5104"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>6. 在最近一个月中，总的来说，您认为自己的睡眠 </span></dt>
        <dt style="padding-top: 0.325rem"><span>质量： </span></dt>
        <el-radio-group v-model="form.radio6">
          <dd class="floatW25">
            <el-radio :label="61"><span class="questionsWord">1).很好 </span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="62"><span class="questionsWord">2).较好 </span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="63"><span class="questionsWord">3).较差 </span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="64"><span class="questionsWord">4).很差 </span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>7. 在最近一个月中，您是否要服药物（包括医院和 </span></dt>
        <dt style="padding-top: 0.325rem"><span>药店购买的药物）才能入睡：</span></dt>
        <el-radio-group v-model="form.radio7">
          <dd class="floatW50">
            <el-radio :label="71"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="72"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="73"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="74"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>8. 在最近一个月中，您是否在开车、吃饭、或参加 </span></dt>
        <dt style="padding-top: 0.325rem"><span>社会活动时时常感到困倦： </span></dt>
        <el-radio-group v-model="form.radio8">
          <dd class="floatW50">
            <el-radio :label="81"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="82"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="83"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="84"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>


      <dl>
        <dt style="padding-top: 0.325rem"><span>9. 在最近一个月中，您在积极完成事情上是否感到 </span></dt>
        <dt style="padding-top: 0.325rem"><span>精力不足： </span></dt>
        <el-radio-group v-model="form.radio9">
          <dd class="floatW50">
            <el-radio :label="91"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="92"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="93"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="94"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>10. 您是与人同睡一床，或有室友： </span></dt>
        <el-radio-group v-model="form.radio10">
          <dd class="floatW50">
            <el-radio :label="101"><span class="questionsWord">1). 没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="102"><span class="questionsWord">2). 同伴或室友在另以房间</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="103"><span class="questionsWord">3). 同伴在同一房间但不同床</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="104"><span class="questionsWord">4). 同伴在同一床上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

    <!-- <p class="listTop questionsWord mt20 mrl10">  &nbsp;&nbsp;&nbsp;如果您是与人同睡一床或有室友，请询问他您在过去一个月里是否出现以下情况：</p>

      <dl>
        <dt style="padding-top: 0.325rem"><span>A. 在您睡觉时，有无打鼾声：</span></dt>
        <el-radio-group v-model="form.radio101">
          <dd class="floatW50">
            <el-radio :label="1011"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1012"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1013"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1014"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>B. 在您睡觉时，有无打鼾声：</span></dt>
        <el-radio-group v-model="form.radio102">
          <dd class="floatW50">
            <el-radio :label="1021"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1022"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1023"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1024"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>C. 在您睡觉时，呼吸之间有没有长时间停顿：</span></dt>
        <el-radio-group v-model="form.radio103">
          <dd class="floatW50">
            <el-radio :label="1031"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1032"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1033"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1034"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>D. 在您睡觉时，您的腿是否有抽动或痉挛：</span></dt>
        <el-radio-group v-model="form.radio104">
          <dd class="floatW50">
            <el-radio :label="1041"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1042"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1043"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1044"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>E. 在您睡觉时，是否有其他睡觉不安宁的情况， </span></dt>
        <dt style="padding-top: 0.325rem"><span>如果有，请描述这个问题： </span></dt>
        <dt style="margin: 0.325rem 1.325rem 0.325rem 0rem;">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="form.textarea10"
            @change="isShowRadio10E"
            maxlength="150"
            show-word-limit
          >
          </el-input>
        </dt>
        <dt v-show="showRadio10E" style="padding-top: 0.325rem"><span>并描述其程度： </span></dt>
        <el-radio-group v-show="showRadio10E" v-model="form.radio105">
          <dd class="floatW50">
            <el-radio :label="1051"><span class="questionsWord">1). 过去一个月没有</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1052"><span class="questionsWord">2). 每周平均不足一个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1053"><span class="questionsWord">3). 每周平均有一或两个晚上</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="1054"><span class="questionsWord">4). 每周有平均三个或更多晚上</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl>
        <dt style="padding-top: 0.325rem"><span>11.您认为您目前的作息制度是否适合您：</span></dt>
        <el-radio-group v-model="form.radio11" @change="isShowText11">
          <dd class="floatW50">
            <el-radio :label="111"><span class="questionsWord">1). 适合</span></el-radio>
          </dd>
          <dd class="floatW50">
            <el-radio :label="112"><span class="questionsWord">2). 不适合</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

      <dl v-show="showText11">
        <dt style="padding-top: 0.325rem"><span> 如果不是，您有对自己的建议或想法吗？ </span></dt>
        <dt style="margin: 0.325rem 1.325rem 0.325rem 0rem;">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="form.textarea11"
            maxlength="150"
            show-word-limit
          >
          </el-input>
        </dt>
      </dl> -->


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
          value1:  '',
          value2: '',
          value3: '',
          value4:  '',
          radio51: 0,
          radio52: 0,
          radio53: 0,
          radio54: 0,
          radio55: 0,
          radio56: 0,
          radio57: 0,
          radio58: 0,
          radio59: 0,
          radio510: 0,
          textarea5: '',
          radio6:0,
          radio7:0,
          radio8:0,
          radio9:0,
          radio10:0,
          // radio101:0,
          // radio102:0,
          // radio103:0,
          // radio104:0,
          // radio105:0,
          // textarea10: '',
          // radio11:0,
          // textarea11: ''
        },
        cls: 'subBtn',
        isSubmitted: true,
        showRadio5J: false,
        showRadio10E: false,
        showText11: false,
        mess: null
      }
    },
    methods: {
      saveInfo: function() {
        console.log(this.form.radio510)
        console.log(this.form.radio10)
        console.log(this.form.textarea11)
        if(this.isSubmitted) {
            if(this.form.value1 === '') this.$dialog("请作答第1题");
            else if(this.form.value2 === 0) this.$dialog("请作答第2题");
            else if(this.form.radio3 === '') this.$dialog("请作答第3题");
            else if(this.form.value4 === 0) this.$dialog("请作答第4题");
            else if(this.form.radio4 === 0) this.$dialog("请作答第4题");
            else if(this.form.radio51 === 0) this.$dialog("请作答第5A题");
            else if(this.form.radio52 === 0) this.$dialog("请作答第5B题");
            else if(this.form.radio53 === 0) this.$dialog("请作答第5C题");
            else if(this.form.radio54 === 0) this.$dialog("请作答第5D题");
            else if(this.form.radio55 === 0) this.$dialog("请作答第5E题");
            else if(this.form.radio56 === 0) this.$dialog("请作答第5F题");
            else if(this.form.radio57 === 0) this.$dialog("请作答第5G题");
            else if(this.form.radio58 === 0) this.$dialog("请作答第5H题");
            else if(this.form.radio59 === 0) this.$dialog("请作答第5I题");
            else if(this.form.radio510 === 0 && this.form.textarea5!='' ) this.$dialog("请作答第5J题");
            else if(this.form.radio6 === 0) this.$dialog("请作答第6题");
            else if(this.form.radio7 === 0) this.$dialog("请作答第7题");
            else if(this.form.radio8 === 0) this.$dialog("请作答第8题");
            else if(this.form.radio9 === 0) this.$dialog("请作答第9题");
            else if(this.form.radio10 === 0) this.$dialog("请作答第10题");
            // else if(this.form.radio105 === 0 && this.form.textarea10!='' ) this.$dialog("请作答第10E题");
            // else if(this.form.radio11 === 0) this.$dialog("请作答第11题");
            else {
                // console.log("A:" + this.calculateA())
                // console.log("B:" + this.calculateB())
                // console.log("C:" + this.calculateC())
                // console.log("D:" + this.calculateD())
                // console.log("E:" + this.calculateE())
                // console.log("F:" + this.calculateF())
                // console.log("G:" + this.calculateG())
                let total = this.calculateA() + this.calculateB() + this.calculateC() + this.calculateD() +
                            this.calculateE() + this.calculateF() + this.calculateG()
                let info = ""
                if(total<=7)  info = "您的睡眠质量较好,请继续保持！"
                else if(total>7) info= "您的睡眠质量较差，请注意改善！"
                this.mess = this.$message({
                  dangerouslyUseHTMLString: true,
                  message: '<b style="font-size: 1.575rem;line-height: 4rem; font-weight: normal;text-indent: 1.225rem;">您测评的总分为： ' +  total +'  </b>' +
                  '<br> <b style="font-size: 1.575rem;line-height: 4rem; font-weight: normal;text-indent: 1.225rem;"> ' +  info +'  </b></br>',
                  type: 'success',
                  center: true,
                  offset: 180,
                  showClose: true,
                  duration: 0
                });
                this.$dialog(["提交完成", "true"]);
                this.cls = "subBtn grayBg"
                this.isSubmitted = false
            }
        }
      },

      // isShowRadio10E(){
      //   if(this.form.textarea10!=''){
      //     this.showRadio10E = true
      //   }else {
      //     this.showRadio10E = false
      //     this.form.radio105 = 0
      //   }
      // },
      isShowRadio5J(){
        if(this.form.textarea5!=''){
          this.showRadio5J = true
        }else {
          this.showRadio5J = false
          this.form.radio510 = 0
        }
      },

      handleChange(value) {
        console.log(value);
      },

      calculateA(){
        if(this.form.radio6 === 61){
            return 0;
        }else if (this.form.radio6 === 62){
            return 1;
        }else if (this.form.radio6 === 63){
            return 2;
        }else if (this.form.radio6 === 64){
            return 3;
        }
      },

      calculateB(){
        let val2 = 0;
         if(this.value2<=15){
           val2 = 0;
         }else if(this.value2>=16&&value2<=30){
           val2 = 1;
         }else if(this.value2>=31&&value2<=60){
           val2 = 2;
         }else if(this.value2>60){
           val2 = 3;
         }
        let val5a = 0
        if(this.form.radio51 === 511){
           val5a = 0;
        }else if(this.form.radio51 === 512){
           val5a = 1;
        }else if(this.form.radio51 === 513){
           val5a = 2;
        }else if(this.form.radio51 === 514){
           val5a = 3;
        }

        let sumB= 0;
        if((val2 + val5a)===0){
          sumB = 0;
        }else if((val2 + val5a)>=1 && (val2 + val5a)<=2){
          sumB = 1;
        }else if((val2 + val5a)>=3 && (val2 + val5a)<=4){
          sumB = 2;
        }else if((val2 + val5a)>=5 && (val2 + val5a)<=6){
          sumB = 3;
        }
          return sumB;
      },

      calculateC(){
        if(this.form.value4 > 7){
            return 0;
        }else if (this.form.value4>6 && this.form.value4 <=7){
            return 1;
        }else if (this.form.value4>=5 && this.form.value4 <=6){
            return 2;
        }else if (this.value4 <5){
            return 3;
        }
      },

      calculateD(){
         let start = this.form.value1.getTime()/1000/3600;
         let end = this.form.value3.getTime()/1000/3600;
         let sleepHours = end - start;
            if(sleepHours<0){
              sleepHours = sleepHours + 24;
            }
          // sleepHours = sleepHours.toFixed(2)
          let val = (this.form.value4/sleepHours).toFixed(2);
          if(val>=0.85){
            return 0;
          }else if(val>=0.75 && val<0.85){
            return 2;
          }else if(val>=0.65 && val<0.75){
            return 3;
          }else if(val<0.65){
            return 4;
          }
      },

      calculateE(){
        let radio5J = 0;
        if(this.showRadio5J) {
          radio5J = this.calculate(parseInt(this.form.radio510.toString().charAt(3)))
        }
        let total = this.calculate(parseInt(this.form.radio52.toString().charAt(2))) +
                    this.calculate(parseInt(this.form.radio53.toString().charAt(2))) +
                    this.calculate(parseInt(this.form.radio54.toString().charAt(2))) +
                    this.calculate(parseInt(this.form.radio55.toString().charAt(2))) +
                    this.calculate(parseInt(this.form.radio56.toString().charAt(2))) +
                    this.calculate(parseInt(this.form.radio57.toString().charAt(2))) +
                    this.calculate(parseInt(this.form.radio58.toString().charAt(2))) +
                    this.calculate(parseInt(this.form.radio59.toString().charAt(2))) +
                    radio5J
                    if(total===0){
                      return 0;
                    }else if(total>=1 && total<=9){
                      return 1;
                    }else if(total>=10 && total<=18){
                      return 2;
                    }else if(total>=19 && total<=27){
                      return 3;
                    }
      },

      calculateF() {
         if(this.form.radio7 === 71) {
          return 0
        } else if(this.form.radio7 === 72) {
          return 1
        } else if(this.form.radio7 === 73) {
          return 2
        } else if(this.form.radio7 === 74) {
          return 3
        }
      },

      calculateG() {
        let total = this.calculate(parseInt(this.form.radio8.toString().charAt(1))) +
                    this.calculate(parseInt(this.form.radio9.toString().charAt(1)))
        if(total===0){
            return 0;
          }else if(total>=1 && total<=2){
            return 1;
          }else if(total>=3 && total<=4){
            return 2;
          }else if(total>=5 && total<=6){
            return 3;
          }
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
        }
      }


    },
    destroyed(){
      if(this.mess!=null){
        this.mess.close();
      }
    }
  }
</script>
