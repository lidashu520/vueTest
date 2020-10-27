<template>
  <div class="container">
    <topComponent title='老年黄斑辅助工具'>
      <span class="back" @click="$router.push('/loan')" slot="left">返回</span>
    </topComponent>
    <p class="headBanner"><span class="look" >第三部分<span style="margin-left: 0.5rem">确认患者用药理解把握</span></span></p>
    <!-- <router-view></router-view> -->
    <!-- <div class="rewardWarp"> -->
      <!-- <yellowStpThreeTitle :idx='0'></yellowStpThreeTitle> -->
      <div style="margin-top: 0.02rem">
        <div class="partThree">
          <dl>
            <dt style="padding-top: 0.625rem"><span class="yellowColor">第三部分：</span><span class="partGreenColor">确认您对以上信息的理解以及对用药选择的把握</span></dt>
          </dl>

          <div class="partThreeDd">
            <dl >
            <dd>为确认您是否正确理解了以上信息，请回答：</dd>
            </dl>
          </div>
        <div class="partThreeSelect">
            <dl>
              <dd class="threeBackground"><p><b>勾选出最佳答案</b></p></dd>
              <dd>
                  <p>1. 营养补充可以减缓中度AMD患者疾病进展？</p>
              </dd>
              <dd>
              <el-radio-group v-model="form.radio1_1">
                <dd class="floatW20">
                  <el-radio :label="1"><span class="partWord">是</span></el-radio>
                </dd>
                <dd class="floatW20">
                  <el-radio :label="2"><span class="partWord">否</span></el-radio>
                </dd>
                <dd class="floatW40">
                  <el-radio :label="3"><span class="partWord">不知道</span></el-radio>
                </dd>
              </el-radio-group>
              </dd>
              <dd>
                  <p>2. 营养补充可以阻止晚期AMD视力下降？</p>
              </dd>
              <dd>
              <el-radio-group v-model="form.radio1_2">
                <dd class="floatW20">
                  <el-radio :label="1"><span class="partWord">是</span></el-radio>
                </dd>
                 <dd class="floatW20">
                  <el-radio :label="2"><span class="partWord">否</span></el-radio>
                </dd>
                <dd class="floatW40">
                  <el-radio :label="3"><span class="partWord">不知道</span></el-radio>
                </dd>
              </el-radio-group>
              </dd>
              <dd>
                  <p>3. 营养补充对早期AMD有用吗？</p>
              </dd>
              <dd>
              <el-radio-group v-model="form.radio1_3">
                <dd class="floatW20">
                  <el-radio :label="1"><span class="partWord">是</span></el-radio>
                </dd>
                <dd class="floatW20">
                  <el-radio :label="2"><span class="partWord">否</span></el-radio>
                </dd>
                <dd class="floatW40">
                  <el-radio :label="3"><span class="partWord">不知道</span></el-radio>
                </dd>
                  </el-radio-group>
              </dd>
              <dd>
                  <p>4. 高剂量服用营养补充会增加死亡危险率？</p>
              </dd>
              <dd>
              <el-radio-group v-model="form.radio1_4">
                <dd class="floatW20">
                    <el-radio :label="1"><span class="partWord">是</span></el-radio>
                </dd>
                <dd class="floatW20">
                    <el-radio :label="2"><span class="partWord">否</span></el-radio>
                </dd>
                <dd class="floatW40">
                    <el-radio :label="3"><span class="partWord">不知道</span></el-radio>
                </dd>
                  </el-radio-group>
              </dd>
            </dl>




            <dl>
              <dd class="threeBackground"><p><b>了解你做决策时的舒适度</b></p></dd>
              <dd>
                  <p>1.你清楚了解每个选择的好处和坏处吗？ </p>
              </dd>
              <dd>
              <el-radio-group v-model="form.radio2_1">
                <dd class="floatW38">
                  <el-radio :label="1"><span class="partWord">是</span></el-radio>
                </dd>
                <dd class="floatW38">
                  <el-radio :label="2"><span class="partWord">否</span></el-radio>
                </dd>
              </el-radio-group>
              </dd>
              <dd>
                  <p>2.你清楚知道哪些好处和坏处对你最重要吗？</p>
              </dd>
              <dd>
              <el-radio-group v-model="form.radio2_2">
                <dd class="floatW38">
                  <el-radio :label="1"><span class="partWord">是</span></el-radio>
                </dd>
                <dd class="floatW38">
                  <el-radio :label="2"><span class="partWord">否</span></el-radio>
                </dd>
              </el-radio-group>
              </dd>
              <dd>
                  <p>3.当你做决策时，你获得足够的支持和建议吗？</p>
              </dd>
              <dd>
              <el-radio-group v-model="form.radio2_3">
                <dd class="floatW38">
                  <el-radio :label="1"><span class="partWord">是</span></el-radio>
                </dd>
                <dd class="floatW38">
                  <el-radio :label="2"><span class="partWord">否</span></el-radio>
                </dd>
                  </el-radio-group>
              </dd>
              <dd>
                  <p>4.你能确定哪个选择是最好的决策吗？</p>
              </dd>
              <dd>
              <el-radio-group v-model="form.radio2_4">
                <dd class="floatW38">
                    <el-radio :label="1"><span class="partWord">是</span></el-radio>
                </dd>
                <dd class="floatW38">
                    <el-radio :label="2"><span class="partWord">否</span></el-radio>
                </dd>
                  </el-radio-group>
              </dd>
              <dd>如果以上四题您有任一回答为<b style="color:red">“否”</b>，请咨询经管医务人员</dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="btnWarp">
        <span :class="this.cls" @click='saveInfo'>提交</span>
      </div>
      <supFooter :idx='3'></supFooter>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {},
        form:{
          radio1_1: 0,
          radio1_2: 0,
          radio1_3: 0,
          radio1_4: 0,
          radio2_1: 0,
          radio2_2: 0,
          radio2_3: 0,
          radio2_4: 0
        },
        cls: 'subBtn',
        isSubmitted: true
      }
    },
    methods: {
      saveInfo: function() {
        if (this.isSubmitted) {
          if (this.form.radio1_1 === 0) this.$dialog("请作答第一个方框的1题");
          else if (this.form.radio1_2 === 0) this.$dialog("请作答第一个方框的2题");
          else if (this.form.radio1_3 === 0) this.$dialog("请作答第一个方框的3题");
          else if (this.form.radio1_4 === 0) this.$dialog("请作答第一个方框的4题");
          else if (this.form.radio2_1 === 0) this.$dialog("请作答第二个方框的1题");
          else if (this.form.radio2_2 === 0) this.$dialog("请作答第二个方框的2题");
          else if (this.form.radio2_3 === 0) this.$dialog("请作答第二个方框的3题");
          else if (this.form.radio2_4 === 0) this.$dialog("请作答第二个方框的4题");
          else {
              this.$dialog(["提交完成", "true"]);
              this.cls = "subBtn grayBg"
              this.isSubmitted = false
          }
        }

      }
    }

  }
</script>
