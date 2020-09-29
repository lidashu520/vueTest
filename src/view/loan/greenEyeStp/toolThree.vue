<template>
  <div class="rewardWarp">
    <toolTitle :idx='2'></toolTitle>
      <div class="container">
        <div class="questions" style="margin-top: 7.0rem">
        <dl>
          <dt style="padding-top: 0.325rem"><span>1、进行激光治疗会给你带来不安吗？ </span></dt>
            <el-radio-group v-model="form.radio1">
              <dd class="floatW25">
                <el-radio :label="11"><span class="questionsWord">A.没有</span></el-radio>
              </dd>
              <dd class="floatW25">
                <el-radio :label="12"><span class="questionsWord">B.轻微</span></el-radio>
              </dd>
              <dd class="floatW35">
                <el-radio :label="13"><span class="questionsWord">C.非常不安</span></el-radio>
              </dd>
            </el-radio-group>
        </dl>
        <!---2---->
        <dl>
          <dt style="padding-top: 0.325rem"><span>2、如果进行了激光，但对你眼压控制无效，你有多</span></dt>
          <dt style="padding-top: 0.325rem"><span>接受？</span></dt>
            <el-radio-group v-model="form.radio2">
              <dd class="floatW25">
                <el-radio :label="21"><span class="questionsWord">A.接受</span></el-radio>
              </dd>
              <dd class="floatW40">
                <el-radio :label="22"><span class="questionsWord">B.轻微失望/失望</span></el-radio>
              </dd>
              <dd class="floatW33_13">
                <el-radio :label="23"><span class="questionsWord">C.非常失望</span></el-radio>
              </dd>
            </el-radio-group>
        </dl>
        <!---3---->
        <dl>
          <dt style="padding-top: 0.325rem"><span>3、如果激光成功，从而减低对眼药水的依赖，这对</span></dt>
          <dt style="padding-top: 0.325rem"><span>你重要吗？</span></dt>
            <el-radio-group v-model="form.radio3">
              <dd class="floatW28">
                <el-radio :label="31"><span class="questionsWord">A.不太重要</span></el-radio>
              </dd>
              <dd class="floatW28">
                <el-radio :label="32"><span class="questionsWord">B.有点重要</span></el-radio>
              </dd>
              <dd class="floatW28">
                <el-radio :label="33"><span class="questionsWord">C.非常重要</span></el-radio>
              </dd>
            </el-radio-group>
        </dl>
        <!---4---->
        <dl>
          <dt style="padding-top: 0.325rem"><span>4、如果进行了激光，但眼压控制随时间失效需要重</span></dt>
          <dt style="padding-top: 0.325rem"><span>做，这你能接受吗？</span></dt>
            <el-radio-group v-model="form.radio4">
              <dd class="floatW25">
                <el-radio :label="41"><span class="questionsWord">A.接受</span></el-radio>
              </dd>
              <dd class="floatW40">
                <el-radio :label="42"><span class="questionsWord">B.轻微抗拒/抗拒</span></el-radio>
              </dd>
              <dd class="floatW33_13">
                <el-radio :label="43"><span class="questionsWord">C.非常抗拒</span></el-radio>
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
          label="你对激光的接受程度为:">
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
          radio4: 0
        },
        tableData: [{
          num: '1',
            A: '5',
            B: '3',
            C: '1'
        }, {
          num: '2',
            A: '5',
            B: '3',
            C: '1'
        }, {
          num: '3',
            A: '1',
            B: '3',
            C: '5'
        }, {
          num: '4',
            A: '5',
            B: '3',
            C: '1'
        }],
        tableData2: [{
          analyze: '4-11 你对激光的接受程度颇低',
        }, {
          analyze: '12-20 你对激光的接受程度良好',
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
          else if(this.form.radio4 === 0) this.$dialog("请作答第4题");
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
