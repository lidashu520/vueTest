<template>
  <div class="rewardWarp">
    <planTitle :idx='0'></planTitle>
      <div class="partThree">
        <div style="margin-top: 8.4rem">
          <div class="partThreeSelect">
            <dl>
              <dd class="threeBackground"><p><b>药物治疗（眼药水）VS 激光治疗（SLT）</b></p></dd>
              <dl>
                <dd class="threeBackground">
                    <p> &nbsp;&nbsp;  <b>1. 降眼压效果: </b></p>
                </dd>
                <dd>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;   <b>1.1. 药物治疗（眼药水）<u>降眼压效果</u>: </b></p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.1.1 效果不俗但因人而异。</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.1.2 可调节药水的种类(最多可用三至四种)。</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;  <b>1.2. 激光治疗（SLT）<u>降眼压效果</u>: </b></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.2.1 效果不俗但因人而异（大概一半人有效，一半无效)。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.2.2 效果大致相等于一至两种药水。</p>
                </dd>
              </dl>

                <dl>
                  <dd class="threeBackground">
                      <p> &nbsp;&nbsp;  <b>2. 过程: </b></p>
                  </dd>
                  <dd>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;   <b>2.1. 药物治疗（眼药水）<u>过程</u>: </b></p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.1.1 每天按时用药。</p>

                      <p>&nbsp;&nbsp;&nbsp;&nbsp;  <b>2.2. 激光治疗（SLT）<u>过程</u>: </b></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2.1 激光过程大概10-15分钟。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2.2 复原期非常快。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2.3 有机会減少对药水的依赖，減少麻烦。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2.4 可在门诊进行，较方便。</p>
                  </dd>
                </dl>

                <dl>
                  <dd class="threeBackground">
                      <p> &nbsp;&nbsp;  <b>3. 好处: </b></p>
                  </dd>
                  <dd>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;   <b>3.1. 药物治疗（眼药水）<u>好处</u>: </b></p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.1 见效快。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.2 提供弹性选择。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.3 副作用一般较轻微。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.4 严重损害视力的副作用近乎无。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.5 长远而不可逆转的副作用较少。</p>

                      <p>&nbsp;&nbsp;&nbsp;&nbsp;  <b>3.2. 激光治疗（SLT）<u>好处</u>: </b></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.2.1 过程快捷、无痛、毋须住院。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.2.2 安全，副作用少而且大都轻微，严重影响视力的副作用近乎无。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.2.3 方便，減少对药水的依赖，整体眼压控制较好，眼压波幅较少。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.2.4 费用比起药物相对低廉。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.2.5 可重复再做激光。</p>
                  </dd>
                </dl>

                <dl>
                  <dd class="threeBackground">
                      <p> &nbsp;&nbsp;  <b>4. 弊端: </b></p>
                  </dd>
                  <dd>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;   <b>4.1. 药物治疗（眼药水）<u>弊端</u>: </b></p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.1 潜在副作用颇常见（见<el-button type="primary" round plain size='mini'
                    @click="centerDialogVisible1 = true">表一</el-button>和
                   <el-button type="primary" round plain size='mini'
                    @click="centerDialogVisible2 = true">表二
                  </el-button>）。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.2 用药依从性或不定时问题常见，影响眼压控制或波幅。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.3 长期使用可对药水产生过敏。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.4 长期使用药水可影响或減低将來青光眼手术的成功率。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.5 药水使用不便。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.6 每个病人对个別眼药水反应不一，试药水需时间。</p>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1.7 跟传统手术比较，较少能把眼压控制得很低。</p>

                      <p>&nbsp;&nbsp;&nbsp;&nbsp;  <b>4.2. 激光治疗（SLT）<u>弊端</u>: </b></p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2.1 在一半病人身上无效。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2.2 降眼压不是即时生效，生效大概需4至6个星期。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2.3 激光仍存在风险（见<el-button type="primary" round plain size='mini'
                    @click="centerDialogVisible3 = true">表三</el-button>）。</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2.4 跟传统手术比较，较少能把眼压控制得很低。</p>
                  </dd>
                </dl>
            </dl>
          </div>
        </div>
      </div>

     <!----- dialog1  start ----->
    <el-dialog
      title=" 表一:    青光眼药水潜在副作用"
      :visible.sync="centerDialogVisible1"
      width="95%"
      center>
    <div style="margin-top: -2rem">
       <div class="tableList">
            <dl>
              <dd class="threeBackground"><p><b>对眼睛潜在的副作用</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  1. 当使用药水时，眼睛周边以及
内部感到痛楚 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  2. 感到灼热或刺痛</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  3. 红眼症 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  4. 瞳孔大小出现变化</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  5. 眼干导致敏感，当灯光照射</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  6. 眼睛時会增加眼睛敏感程度</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  7. 使用后喉咙出现苦涩感觉</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  8. 虹膜和眼皮的顏色加深，睫毛出现变化(增加长度、厚度，睫毛的颜色或数目会改变)</p>
              </dd>
            </dl>

            <dl>
              <dd class="threeBackground"><p><b>对全身潜在的副作用</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  1. 对全身潜在的副作用 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  2. 头痛 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  3. 副作用一般较轻微，严重损害视力的副作用几乎没有 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  4. 长远不可逆转的副作用较少</p>
              </dd>
            </dl>
       </div>
    </div>
    </el-dialog>
    <!----- dialog1  end ----->

    <!----- dialog2  start ----->
     <el-dialog
      title=" 表二:    青光眼药丸潜在副作用"
      :visible.sync="centerDialogVisible2"
      width="95%"
      center>
    <div style="margin-top: -2rem">
       <div class="tableList">
            <dl>
              <dd class="threeBackground"><p><b>普遍的副作用</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  1. 手指或脚趾感觉刺痛或异常</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  2. 感觉疲倦</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  3. 食欲不振 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  4. 尿频</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  5. 耳鸣</p>
              </dd>
            </dl>

            <dl>
              <dd class="threeBackground"><p><b>罕见的并发症</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  1. 产生肾结石 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  2. 电解质紊乱 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  3. 骨髓抑制 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  4. 轻微敏感(例如红疹) ，甚至出现严重过敏性反应(假如病人病症中出现对磺胺类药物的敏感反应 </p>
              </dd>
            </dl>
       </div>
    </div>
    </el-dialog>
    <!----- dialog2  end ----->

    <!----- dialog3  start ----->
    <el-dialog
      title=" 表三:    SLT弊端"
      :visible.sync="centerDialogVisible3"
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
    <!----- dialog3  end ----->
    <greenEyeFooter :idx='4'></greenEyeFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        centerDialogVisible1: false,
        centerDialogVisible2: false,
        centerDialogVisible3: false
      };
    }
  };
</script>
