<template>
  <div class="rewardWarp">
    <toolTitle :idx='0'></toolTitle>
    <div lass="container">
    <div class="questions" style="margin-top: 8.4rem">
    <div class="story"
         style= "background: #fff;">
     <dl>
     <dt style="padding-top: 0.325rem; border-radius: 0.2rem; border: 0.1rem solid #73BD4C;" class='storySpecial'><span >眼压控制情况:</span></dt>
     </dl>
    </div>
    <dl>
      <dt style="padding-top: 0.325rem"><span>1、你有准时每天用药吗？？ </span></dt>
        <el-radio-group v-model="form.radio1">
          <dd class="floatW20">
            <el-radio :label="11"><span class="questionsWord">A.好</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="12"><span class="questionsWord">B.尚可</span></el-radio>
          </dd>
          <dd class="floatW32">
            <el-radio :label="13"><span class="questionsWord">C.不理想</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
        <!---2---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>2、医生说你的青光眼在加深吗？</span></dt>
        <el-radio-group v-model="form.radio2">
           <dd class="floatW20">
            <el-radio :label="21"><span class="questionsWord">A.有</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="22"><span class="questionsWord">B.没有</span></el-radio>
          </dd>
          <dd class="floatW41">
            <el-radio :label="23"><span class="questionsWord">C.怀疑在加深</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
        <!---3---->
     <dl>
     <dt style="padding-top: 0.325rem"><span>3、医生说你的青光眼严重吗？  </span></dt>
        <el-radio-group v-model="form.radio3">
          <dd class="floatW25">
            <el-radio :label="31"><span class="questionsWord">A.轻微</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="32"><span class="questionsWord">B.中度</span></el-radio>
          </dd>
          <dd class="floatW25">
            <el-radio :label="33"><span class="questionsWord">C.严重</span></el-radio>
          </dd>
        </el-radio-group>
     </dl>
    </div>

      <div style="margin: 0.5rem 1rem 3rem 1rem" >
        <el-button type="primary" round plain size='mini' class="fl" @click="centerDialogVisible1 = true">计分表</el-button>
        <el-button type="primary" round plain size='mini' class="fr" @click="centerDialogVisible2 = true">分析</el-button>
      </div>
    <div class="btnWarp">
        <span :class="this.cls" @click='logIn'>提交</span>
    </div>
    </div>

     <!----- dialog1  start ----->
    <el-dialog
      title=" 计分表"
      :visible.sync="centerDialogVisible1"
      width="95%"
      center>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="num"
          label="题号"
          width="49">
        </el-table-column>
        <el-table-column
          prop="A"
          label="A">
        </el-table-column>
        <el-table-column
          prop="B"
          label="B">
        </el-table-column>
        <el-table-column
          prop="C"
          label="C">
        </el-table-column>
      </el-table>
    </div>
    </el-dialog>
    <!----- dialog1  end ----->

    <!----- dialog2  start ----->
    <el-dialog
      title=" 分析"
      :visible.sync="centerDialogVisible2"
      width="95%"
      center>
    <div>
      <el-table
        :data="tableData2"
        border
        style="width: 100%">
        <el-table-column
          prop="analyze"
          label="眼压控制需要严谨点吗？">
        </el-table-column>
      </el-table>
    </div>
    </el-dialog>
    <!----- dialog1  end ----->
    <greenEyeFooter :idx='5'></greenEyeFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        centerDialogVisible1: false,
        centerDialogVisible2: false,
        form:{
          radio1: 0,
          radio2: 0,
          radio3: 0,
        },
        tableData: [{
          num: '1',
            A: '1',
            B: '3',
            C: '5'
        }, {
          num: '2',
            A: '5',
            B: '1',
            C: '3'
        }, {
          num: '3',
            A: '1',
            B: '3',
            C: '5'
        }],
        tableData2: [{
          analyze: '3-6  现在眼压控制良好',
        }, {
          analyze: '7-11 现眼压控制尚可，但需要紧密复诊',
        }, {
          analyze: '12-15 现在眼压控制偏差，需要严谨点',
        }],
        cls: 'subBtn',
        isSubmitted: true
      }
    },
    methods: {
      logIn: function() {
        if(this.isSubmitted) {
          if(this.form.radio1 === 0)  this.$dialog("请作答第1题");
          else if(this.form.radio2 === 0) this.$dialog("请作答第2题");
          else if(this.form.radio3 === 0) this.$dialog("请作答第3题");
          else {
                this.$dialog("提交完成");
                this.cls = "subBtn grayBg"
                this.isSubmitted = false
          }
        }

      }
    }
  }
</script>
