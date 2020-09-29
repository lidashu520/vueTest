<template>
  <div class="rewardWarp">
    <greenEyeTitle :idx='2'></greenEyeTitle>
  <div style="margin-top: 2.72rem" class="container partThree">
    <div style="margin-top: -2.4rem">
      <div class="partThreeSelect">
        <dl>
          <dd class="threeBackground"><p><b>青光眼的治疗方法</b></p></dd>
          <dd>
              <p> &nbsp;&nbsp; 1. 在众多导致青光眼的因素中，唯一证实并可控制的就只有眼压。</p>
          </dd>
          <dd>
              <p> &nbsp;&nbsp; 2. 统计学上的正常眼压值（均值±2个标准差）是11-21mmhg。整体来说，降低眼压可以舒缓视神经的压力，从而减慢青光眼的进展和伤害。</p>
          </dd>
          <dd>
              <p> &nbsp;&nbsp; 3. 可幸的是，原发性开角型青光眼一般病情发展缓慢，并可通过降低眼压来控制病情，以防视力进一步受损。</p>
          </dd>
        </dl>

        <dl>
          <dd class="threeBackground"><p><b>眼压要降低到多少才算好？谈谈目标眼压</b></p></dd>
          <dd>
              <p> &nbsp;&nbsp; 1. 眼压跟血压一样，都有一个理想的控制水平，而且都不是降得越低越好。</p>
          </dd>
          <dd>
              <p> &nbsp;&nbsp; 2. 不一样的地方是，理想的控制水平不是人人一样。每一位青光眼患者的理想眼压会因患者的年纪，病情的严重程度，病情的进展速度以及其他因素而有所不同。</p>
          </dd>
          <dd>
              <p> &nbsp;&nbsp; 3. 医生会先测量你的基础眼压（即在不接受治疗的影响下，病人本身的眼压），这是病人的“起跑线”。</p>
          </dd>
          <dd>
              <p> &nbsp;&nbsp; 4. 一般来说，理想目标眼压是把你的眼压从基础上降低20-30％。</p>
          </dd>
          <dd>
              <el-table
              :data="tableData"
              border
              style="width: 92%">
                <el-table-column
                  prop="basic"
                  label="基础眼压(mmhg)">
                </el-table-column>
                <el-table-column
                  prop="target"
                  label="目标眼压(mmhg)">
                </el-table-column>
              </el-table>
          </dd>
        </dl>

        <dl>
          <dd class="threeBackground"><p><b>减低眼压波动</b></p></dd>
          <dd>
              <p> &nbsp;&nbsp; 1. 我们的眼压不像身高体重，它不是一直维持不变的。眼压像血压心跳，24小时内会有高低起伏。</p>
          </dd>
          <dd>
              <p> &nbsp;&nbsp; 2. 减低眼压的波动对控制青光眼进展很有帮助。</p>
          </dd>
        </dl>
  </div>
</div>

    </div>
  <greenEyeFooter :idx='0'></greenEyeFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          basic: '25',
          target: '18-20'
        }, {
          basic: '21',
          target: '15-17'
        }, {
          basic: '30',
          target: '21-24'
        }]
      }
    }
  }
</script>

