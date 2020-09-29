<template>
  <div class="rewardWarp">
    <operationTitle :idx='1'></operationTitle>
        <div class="partThree">
        <div style="margin-top: 8.4rem">
          <div class="partThreeSelect">
            <dl>
              <dd class="threeBackground"><p><b>小梁切除术/人工导管引流术</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  <b>1. 程序: </b></p>
              </dd>
               <dd>
                  <p> &nbsp;&nbsp;  <b>1.1. 小梁切除术<u>程序</u>: </b>&nbsp; 注: 近年有一种Express导管，可以用于小梁切除术中，成功率相等，可令手术效果更一致，在某些特別的情況下可能更有优势，但手术费用会因此增加。</p>
                  <p> &nbsp;&nbsp;  <b>1.2. 人工导管引流术<u>程序</u>: </b>&nbsp; 注: 和小梁切除术一样，将房水引流至结膜下腔但人造窗口则以胶导管代替。</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  <b>2. 效果：</b>&nbsp; 在药物、激光和各种青光眼手术中，传统引流手术降眼压的效果最显著，一般能把眼压降至10或甚至以下。注意眼压不一定越低越好，医生会视病人情況，在术后用各种方法把眼压调节到接近目标眼压。</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp; <b>3. 好处：</b></p>
              </dd>
               <dd>
                  <p> &nbsp;&nbsp; 1). 降眼压的效果较显著。</p>
                  <p> &nbsp;&nbsp; 2). 传统手术治疗，较多学术文献支持。</p>
                  <p> &nbsp;&nbsp; 3). 用药依从性或不定时问题不存在，整体眼压控制较好，眼压波幅较少。</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp; <b>4. 弊端：</b></p>
              </dd>
               <dd>
                  <p> &nbsp;&nbsp; 1). 手术复原时间较长，视力及眼压在术后可能出现波动。</p>
                  <p> &nbsp;&nbsp; 2). 术后护理较繁复，有可能需要用激光拆线、结膜下注射特效药、重做手术等以令效果稳定。</p>
                  <p> &nbsp;&nbsp; 3). 并发症较常见，有致盲的风险（见<el-button type="primary" round plain size='mini'
                    @click="centerDialogVisible = true">表四</el-button>）。</p>
                  <p> &nbsp;&nbsp; 4). 手术效果可能随时间減弱，甚至失效。</p>
              </dd>
            </dl>
            <dl>
              <dd class="threeBackground"><p><b>微创青光眼引流手术</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  <b>1. 原理: </b> &nbsp; 在对眼睛组织影响最小的情況下将房水引流致減低眼压的效果。</p>
              </dd>
               <dd>
                  <p> </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  <b>2. 程序：</b>&nbsp; 很多不同的手术方法，有些手术经前房把装置植入小梁，或把一部分小梁切除以达到引流的效果，另外有些引流装置则经眼球外的结膜植入。</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  <b>3. 效果：</b>&nbsp; 将眼压效果较传统手术少。</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  <b>4. 好处：</b>&nbsp; 较安全，并发症相对较少。</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp; <b>5. 弊端：</b></p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp; 1). 眼压下降幅度较小梁切除术少。</p>
                  <p> &nbsp;&nbsp; 2). 严重手术风险较传统手术少，但存在。</p>
                  <p> &nbsp;&nbsp; 3). 技术较新，长远成功率不祥。</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>

    <!----- dialog1  start ----->
    <el-dialog
      title=" 表四：传统引流术的并发症"
      :visible.sync="centerDialogVisible"
      width="95%"
      center>
    <div style="margin-top: -2rem">
       <div class="tableList">
            <dl>
              <dd class="threeBackground"><p><b>较常见及轻微</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  1. 眼压过高或过低</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  2. 需术后再调节</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  3. 伤口渗漏</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  4. 发炎</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  5. 增加患白內障风险</p>
              </dd>
            </dl>
            <dl>
              <dd class="threeBackground"><p><b>较罕见及严重</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  1. 严重感染、眼內炎</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  2. 严重出血(脉络上腔出血)</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  3. 脉络膜剥离</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  4. 低压性黄斑病变</p>
              </dd>
            </dl>
       </div>
    </div>
    <p style="margin-top: 1rem; color:red;">
      <b style="text-align：center">注: 人工导管引流手术另可有以下并发症:
        <p>重影、角膜水肿、导管外露移位</p>
      </b>
    </p>
    </el-dialog>
    <!----- dialog1  end ----->
    <greenEyeFooter :idx='3'></greenEyeFooter>
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
