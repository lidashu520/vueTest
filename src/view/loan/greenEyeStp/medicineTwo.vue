<template>
  <div class="rewardWarp">
    <medicineTitle :idx='1'></medicineTitle>
    <div class="partThree">
        <div style="margin-top: 8.4rem">
          <div class="partThreeSelect">
            <dl>
              <dd class="threeBackground"><p><b>好处</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp;  1. 见效快 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  2. 提供弹性选择：可先试用药水，如试后不合适，可选择其他方案 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  3. 副作用一般较轻微，严重损害视力的副作用几乎没有 </p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp;  4. 长远不可逆转的副作用较少</p>
              </dd>
            </dl>

            <dl>
              <dd class="threeBackground"><p><b>弊端</b></p></dd>
              <dd>
                  <p> &nbsp;&nbsp; 1. 潜在副作用比较常见（见<el-button type="primary" round plain size='mini'
                    @click="centerDialogVisible1 = true">表一</el-button>和
                   <el-button type="primary" round plain size='mini'
                    @click="centerDialogVisible2 = true">表二
                  </el-button>）</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp; 2 .用药不依从或不定时用药的问题非常普遍，影响眼压控制或波动</p>
              </dd>
               <dd>
                  <p> &nbsp;&nbsp; 3 .长期使用可对眼药水产生过敏</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp; 4 .长期使用药水可影响或减低青光眼手术的成功率</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp; 5 .药水使用不便</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp; 6 .每个病人对个别眼药水反应不一，找适合自己的药水可能需要一段时间</p>
              </dd>
              <dd>
                  <p> &nbsp;&nbsp; 7 .跟传统手术比较，较少能把眼药控制得很低</p>
              </dd>
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
    <greenEyeFooter :idx='1'></greenEyeFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        centerDialogVisible1: false,
        centerDialogVisible2: false
      };
    }
  };
</script>

