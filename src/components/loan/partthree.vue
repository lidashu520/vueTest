<template>
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
       <el-radio-group v-model="radio11">
          <el-radio :label="1"><span class="partWord">是</span></el-radio>
          <el-radio :label="2"><span class="partWord">否</span></el-radio>
          <el-radio :label="3"><span class="partWord">不知道</span></el-radio>
       </el-radio-group>
       </dd>
       <dd>
          <p>2. 营养补充可以阻止晚期AMD视力下降？</p>
      </dd>
       <dd>
       <el-radio-group v-model="radio12">
          <el-radio :label="1"><span class="partWord">是</span></el-radio>
          <el-radio :label="2"><span class="partWord">否</span></el-radio>
          <el-radio :label="3"><span class="partWord">不知道</span></el-radio>
       </el-radio-group>
       </dd>
       <dd>
          <p>3. 营养补充对早期AMD有用吗？</p>
      </dd>
      <dd>
       <el-radio-group v-model="radio13">
          <el-radio :label="1"><span class="partWord">是</span></el-radio>
          <el-radio :label="2"><span class="partWord">否</span></el-radio>
          <el-radio :label="3"><span class="partWord">不知道</span></el-radio>
          </el-radio-group>
       </dd>
       <dd>
          <p>4. 高剂量服用营养补充会增加死亡危险率？</p>
      </dd>
       <dd>
       <el-radio-group v-model="radio14">
            <el-radio :label="1"><span class="partWord">是</span></el-radio>
            <el-radio :label="2"><span class="partWord">否</span></el-radio>
            <el-radio :label="3"><span class="partWord">不知道</span></el-radio>
          </el-radio-group>
       </dd>
    </dl>




    <dl>
       <dd class="threeBackground"><p><b>了解你做决策时的舒适度</b></p></dd>
      <dd>
          <p>你清楚了解每个选择的好处和坏处吗？ </p>
      </dd>
       <dd>
       <el-radio-group v-model="radio21">
          <el-radio :label="1"><span class="partWord">是</span></el-radio>
          <el-radio :label="2"><span class="partWord">否</span></el-radio>
       </el-radio-group>
       </dd>
       <dd>
          <p>你清楚知道哪些好处和坏处对你最重要吗？</p>
      </dd>
       <dd>
       <el-radio-group v-model="radio22">
          <el-radio :label="1"><span class="partWord">是</span></el-radio>
          <el-radio :label="2"><span class="partWord">否</span></el-radio>
       </el-radio-group>
       </dd>
       <dd>
          <p>当你做决策时，你获得足够的支持和建议吗？</p>
      </dd>
      <dd>
       <el-radio-group v-model="radio23">
          <el-radio :label="1"><span class="partWord">是</span></el-radio>
          <el-radio :label="2"><span class="partWord">否</span></el-radio>
          </el-radio-group>
       </dd>
       <dd>
          <p>你能确定哪个选择是最好的决策吗？</p>
      </dd>
       <dd>
       <el-radio-group v-model="radio24">
            <el-radio :label="1"><span class="partWord">是</span></el-radio>
            <el-radio :label="2"><span class="partWord">否</span></el-radio>
           </el-radio-group>
       </dd>
       <dd>如果以上四题您有任一回答为<b style="color:red">“否”</b>，请咨询经管医务人员</dd>
    </dl>

     <dl>
     <dt style="padding-top: 0.625rem"><span class="yellowColor">第四部分：</span><span class="partGreenColor">现在，您的选择是？请选择一项  </span></dt>

      <el-radio-group v-model="radio3">
        <dd>
          <el-radio :label="1"><span class="partWord">我决定采用营养补充</span></el-radio>
        </dd>

        <dd>
          <el-radio :label="2"><span class="partWord">我决定不采用营养补充</span></el-radio>
        </dd>

        <dd>
          <el-radio :label="3"><span class="partWord">我还无法决定，需要了解更多信息</span></el-radio>
        </dd>

        <dd>
          <el-radio :label="4"><span class="partWord">我还无法决定，需要与主治医生或家庭成员</span>
          <p class="partWord" style="margin-left:1rem">(或其他人)商量</p>
          </el-radio>
        </dd>
      </el-radio-group>
     </dl>

  </div>
</div>
</template>
<script>
  // 引入data
   //import detailData from "../../data/old_yellow_detail.json"
     import detailData from "../../data/loan_detail.json"

  export default {
    data() {
      return {
        data: {},
        showFeatrue: false,
        showTips: false,
        hasHot: false,
        radio11: 0,
        radio12: 0,
        radio13: 0,
        radio14: 0,
        radio21: 0,
        radio22: 0,
        radio23: 0,
        radio24: 0,
        radio3: 0
      }
    }
  }
</script>
