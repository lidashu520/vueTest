<template>
  <div class="rewardWarp">
    <laserTitle :idx='1'></laserTitle>
      <div class="partThree">
        <div style="margin-top: 8.4rem">
          <div class="partThreeSelect">
            <dl>
              <dd class="threeBackground"><p><b>好处</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  1. 激光过程快捷、无痛、毋须住院 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  2. 安全，副作用少而且大都轻微，严重影响视力的副作用近乎无</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  3. 方便。用药依性或不定时问题不存在，整体眼压控制较好，眼压波幅较少</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  4. 长远来说，费用比起药物相对低廉</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  5. 当激光效果隨时间減低时，可重复再做激光</p>
              </dd>
            </dl>

            <dl>
              <dd class="threeBackground"><p><b>弊端</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp; 1. 病人对激光的治疗反应效果不一，在一半病人身上无效。如果眼压回升，有机会需要重复做激光或考虑其他治疗方法</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp; 2. 激光仍存在风险见<el-button type="primary" round plain size='mini'
                    @click="centerDialogVisible = true">表三</el-button>
                  </p>
              </dd>
               <dd>
                  <p> &nbsp;&nbsp; 3. 跟传统手术比较，较少能把眼压控制得很低</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>

    <!----- dialog1  start ----->
    <el-dialog
      title=" 表三:    SLT弊端"
      :visible.sync="centerDialogVisible"
      width="95%"
      center>
    <div style="margin-top: -2rem">
       <div class="tableList">
            <dl>
              <dd class="threeBackground"><p><b>SLT副作用</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  1. 眼压短暂升高</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  2. 前房发炎</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  3. 眼睛发紅、不适 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  4. (副作用和不适大多在二十四小时内会減退)</p>
              </dd>
            </dl>
       </div>
    </div>
    </el-dialog>
    <!----- dialog1  end ----->
    <greenEyeFooter :idx='2'></greenEyeFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
