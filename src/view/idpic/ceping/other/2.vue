<template>
  <div class="container">
    <topComponent title='恶心、呕吐'>
      <!-- <span class="save" @click='saveInfo' slot='right'>保存</span> -->
    </topComponent>
    <!-- <p class="mt10 mrl10">&nbsp;&nbsp;&nbsp;</p>
    <p class="listTop questionsWord mt10 mrl10">  &nbsp;&nbsp;&nbsp;尊敬的患者朋友: 您好!水肿对身体的影响多种多样，本问卷是想了解您在水肿发生时的感受，以下有8个条目供选择，每个条目对应着不同的参考值，请您根据个人情况，选择出您的感受。</p> -->
    <div class="questions mt40" >
    <!---1---->
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、因为您的眼部疾病，您发生过恶心的情况吗？  </span></dt>
        <el-radio-group v-model="form.radio1">
          <dd class="floatW18">
            <el-radio :label="11"><span class="questionsWord">没有</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="12"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="13"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="14"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    <!---2---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>2、因为您的眼部疾病，您发生过呕吐吗？  </span></dt>
        <el-radio-group v-model="form.radio2" @change="showOther">
          <dd class="floatW18">
            <el-radio :label="21"><span class="questionsWord">没有</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="22"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="23"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="24"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
     <!---3---->
     <div v-show="isShow">
     <dl>
      <dt style="padding-top: 0.325rem"><span>3、感觉到头痛时您发生过呕吐吗？  </span></dt>
        <el-radio-group v-model="form.radio3">
          <dd class="floatW18">
            <el-radio :label="31"><span class="questionsWord">没有</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="32"><span class="questionsWord">很少</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="33"><span class="questionsWord">时常</span></el-radio>
          </dd>
          <dd class="floatW18">
            <el-radio :label="34"><span class="questionsWord">总是</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>


      <!---4---->
      <!-- <dl>
        <dt style="padding-top: 0.325rem"><span>4、您术后发生过呕吐吗？</span></dt>
          <el-radio-group v-model="radio4">
            <dd class="floatW34">
              <el-radio :label="41"><span class="questionsWord">10-20ml</span></el-radio>
            </dd>
            <dd class="floatW27">
              <el-radio :label="42"><span class="questionsWord">20-50ml</span></el-radio>
            </dd>
            <dd class="floatW36">
              <el-radio :label="43"><span class="questionsWord">50-100ml</span></el-radio>
            </dd>
            <dd class="floatW27">
              <el-radio :label="44"><span class="questionsWord">100ml以上</span></el-radio>
            </dd>
          </el-radio-group>
      </dl> -->


      <dl>
        <dt style="padding-top: 0.325rem"><span>4、您术后发生过呕吐吗？</span></dt>
          <el-radio-group v-model="form.radio4">
            <dd class="floatW20">
              <el-radio :label="41"><span class="questionsWord">没有</span></el-radio>
            </dd>
            <dd class="floatW40">
              <el-radio :label="42"><span class="questionsWord">偶尔有</span></el-radio>
            </dd>
            <dd class="floatW25">
              <el-radio :label="43"><span class="questionsWord">时常有</span></el-radio>
            </dd>
            <dd class="floatW30">
              <el-radio :label="44"><span class="questionsWord">经常有</span></el-radio>
            </dd>
          </el-radio-group>
      </dl>

      <!---5---->
      <dl>
        <dt style="padding-top: 0.325rem"><span>5、请选择您呕吐的次数</span></dt>
          <el-radio-group v-model="form.radio5">
            <dd class="floatW20">
              <el-radio :label="51"><span class="questionsWord">0次 </span></el-radio>
            </dd>
            <dd class="floatW20">
              <el-radio :label="52"><span class="questionsWord">1-2次</span></el-radio>
            </dd>
            <dd class="floatW20">
              <el-radio :label="53"><span class="questionsWord">2-3次</span></el-radio>
            </dd>
            <dd class="floatW25">
              <el-radio :label="54"><span class="questionsWord">3-5次</span></el-radio>
            </dd>
          </el-radio-group>
      </dl>


     <!---6---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>6、您呕吐时有用过止吐药吗？  </span></dt>
        <el-radio-group v-model="form.radio6">
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
        <dt style="padding-top: 0.325rem"><span>7、请选择您呕吐物的量</span></dt>
          <el-radio-group v-model="form.radio7">
            <dd class="floatW34">
              <el-radio :label="71"><span class="questionsWord">10-20ml</span></el-radio>
            </dd>
            <dd class="floatW27">
              <el-radio :label="72"><span class="questionsWord">20-50ml</span></el-radio>
            </dd>
            <dd class="floatW36">
              <el-radio :label="73"><span class="questionsWord">50-100ml</span></el-radio>
            </dd>
            <dd class="floatW27">
              <el-radio :label="74"><span class="questionsWord">100ml以上</span></el-radio>
            </dd>
          </el-radio-group>
      </dl>

      <dl>
      <dt style="padding-top: 0.325rem"><span>8、请选择您呕吐物的量  </span></dt>
        <el-radio-group v-model="form.radio8">
          <dd class="floatW40">
            <el-radio :label="81"><span class="questionsWord">透明、白稀的</span></el-radio>
          </dd>
          <dd class="floatW20">
            <el-radio :label="82"><span class="questionsWord">鲜红色</span></el-radio>
          </dd>
          <dd class="floatW27">
            <el-radio :label="83"><span class="questionsWord">咖啡色</span></el-radio>
          </dd>
          <dd class="floatW30">
            <el-radio :label="84"><span class="questionsWord">黄绿色</span></el-radio>
          </dd>
        </el-radio-group>
      </dl>

     <!---8---->
     <dl>
      <dt style="padding-top: 0.325rem"><span>9、您呕吐时有以下伴随症状吗？</span></dt>
        <el-radio-group v-model="form.radio9">
            <dd class="floatW20">
              <el-radio :label="91"><span class="questionsWord">疼痛</span></el-radio>
            </dd>
            <dd class="floatW20">
              <el-radio :label="92"><span class="questionsWord">腹泻</span></el-radio>
            </dd>
            <dd class="floatW20">
              <el-radio :label="93"><span class="questionsWord">焦虑</span></el-radio>
            </dd>
            <dd class="floatW29" style="width:29.5%">
              <el-radio :label="94"><span class="questionsWord">视力模糊</span></el-radio>
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
          radio9: 0
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
            else if(this.form.radio2 === 0) {
              this.$dialog("请作答第2题");
              return;
            }else if(this.isShow) {
              if(this.form.radio3 === 0) this.$dialog("请作答第3题");
              else if(this.form.radio4 === 0) this.$dialog("请作答第4题");
              else if(this.form.radio5 === 0) this.$dialog("请作答第5题");
              else if(this.form.radio6 === 0) this.$dialog("请作答第6题");
              else if(this.form.radio7 === 0) this.$dialog("请作答第7题");
              else if(this.form.radio8 === 0) this.$dialog("请作答第8题");
              else if(this.form.radio9 === 0) this.$dialog("请作答第9题");

              // 提交 1-9 ajax请求
            }else{
              // 提交 1-2 ajax请求
            }
              this.$dialog(["提交完成", "true"]);
              this.cls = "subBtn grayBg"
              this.isSubmitted = false
        }
      },

      showOther(){
        if(this.form.radio2 === 22 || this.form.radio2 === 23 || this.form.radio2 === 24){
          this.isShow = true
        }else {
          this.isShow = false
        }
      }

    }
  }
</script>
