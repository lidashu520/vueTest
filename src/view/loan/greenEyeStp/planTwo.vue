<template>
  <div class="rewardWarp">
    <planTitle :idx='1'></planTitle>
        <div class=" partThree">
        <div style="margin-top: 8.4rem">
          <div class="partThreeSelect">
            <dl>
              <dd class="threeBackground"><p><b>青光眼手术（传统）VS 青光眼手术（微创）</b></p></dd>
              <dl>
                <dd class="threeBackground">
                    <p> &nbsp;&nbsp;  <b>1. 降眼压效果: </b></p>
                </dd>
                <dd>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;   <b>1.1. 青光眼手术（传统）<u>降眼压效果</u>: </b></p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.1.1 效果最显著，眼压降得最低。</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;  <b>1.2. 青光眼手术（微创）<u>降眼压效果</u>: </b></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.2.1 效果不俗但因人而异。</p>
                </dd>
              </dl>

                <dl>
                  <dd class="threeBackground">
                      <p> &nbsp;&nbsp;  <b>2. 过程: </b></p>
                  </dd>
                  <dd>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;   <b>2.1. 青光眼手术（传统）<u>过程</u>: </b></p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.1.1 手术大概半至一小时。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.1.2 复原需时较长。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.1.3 较大机会減少对药水的依赖，減少麻烦。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.1.4 必须在手术室进行。</p>

                      <p>&nbsp;&nbsp;&nbsp;&nbsp;  <b>2.2. 青光眼手术（微创）<u>过程</u>: </b></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2.1 大概半至一小时。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2.2 复原期快。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2.3 有机会減少对药水的依赖，減少麻烦。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2.4 必须在手术室进行。</p>
                  </dd>
                </dl>

                <dl>
                  <dd class="threeBackground">
                      <p> &nbsp;&nbsp;  <b>3. 好处: </b></p>
                  </dd>
                  <dd>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;   <b>3.1. 青光眼手术（传统）<u>好处</u>: </b></p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.1 降眼压的效果较显著 。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.2 方便，減少对药水的依赖。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.3 整体眼压控制较好。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.4 眼压波动较少。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.5 传统手术治疗，较多学术文献支持。<p>

                      <p>&nbsp;&nbsp;&nbsp;&nbsp;  <b>3.2. 青光眼手术（微创）<u>好处</u>: </b></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.2.1 较传统手术安全，并发症相对较少。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.2.2 方便，減少对药水的依赖。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.2.3 整体眼压控制较好，眼压波动较少。</p>
                  </dd>
                </dl>

                <dl>
                  <dd class="threeBackground">
                      <p> &nbsp;&nbsp;  <b>4. 弊端: </b></p>
                  </dd>
                  <dd>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;   <b>4.1. 青光眼手术（传统）<u>弊端</u>: </b></p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.1 手术复原时间较长，視力及眼压在术后可能波幅</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.2 术后护理比较繁复，有可能需要用激光。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.3 拆线、结膜下注射特效药、重做手术等以令效果稳定。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.4 并发症较常见，有致盲的风险（见
                        <el-button type="primary" round plain size='mini' @click="centerDialogVisible = true">表四</el-button>）。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;  <b>4.2. 青光眼手术（微创）<u>弊端</u>: </b></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2.1 眼压下降幅度较小梁切除术少。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2.2 技术较新，长远成功率不祥。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2.3 严重手术风险较传统手术少，但存在。</p>
                  </dd>
                </dl>
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
    <greenEyeFooter :idx='4'></greenEyeFooter>
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
