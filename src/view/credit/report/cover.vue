<template>
  <div class="container">
    <topComponent title='自我报告详情'></topComponent>
    <div class="reportCoverTit">报告编号：2015070703000178126968<br>报告时间：2015.07.07
      <p><b>700</b>得分</p>
    </div>
    <dl class="reportCoverDl">
      <dt @click='goDetail(1)'>焦虑评估量表</dt>
      <!-- <dd class="icon01"><i>账户数</i><b>4</b></dd>
      <dd class="icon02"><i>未结清/未销户</i><b class="gray">0</b></dd>
      <dd class="icon03"><i>逾期数</i><b>1</b></dd>
      <dd class="icon09"><i>逾期90天以上</i><b>2</b></dd>
      <dd class="icon10"><i>担保数</i><b>3</b></dd> -->
    </dl>
    <dl class="reportCoverDl">
      <dt @click='goDetail(1)'>其他症状</dt>
      <!-- <dd class="icon01"><i>账户数</i><b>4</b></dd>
      <dd class="icon02"><i>未结清/未销户</i><b class="gray">0</b></dd>
      <dd class="icon03"><i>逾期数</i><b>1</b></dd>
      <dd class="icon04"><i>逾期90天以上</i><b>2</b></dd>
      <dd class="icon05"><i>担保数</i><b>3</b></dd> -->
    </dl>
    <dl class="reportCoverDl">
      <!-- <dt @click='goDetail(1)'>其他贷款记录</dt>
      <dd class="icon01"><i>账户数</i><b>4</b></dd>
      <dd class="icon02"><i>未结清/未销户</i><b class="gray">0</b></dd>
      <dd class="icon03"><i>逾期数</i><b>1</b></dd>
      <dd class="icon04"><i>逾期90天以上</i><b>2</b></dd>
      <dd class="icon05"><i>担保数</i><b>3</b></dd> -->
    </dl>
    <dl class="reportCoverDl">
      <dt @click='goDetail(1)'>视力评估</dt>
      <!-- <dd class="icon01"><i>账户数</i><b>4</b></dd>
      <dd class="icon02"><i>未结清/未销户</i><b class="gray">0</b></dd>
      <dd class="icon03"><i>逾期数</i><b>1</b></dd>
      <dd class="icon06"><i>逾期90天以上</i><b>2</b></dd>
      <dd class="icon07"><i>担保数</i><b>3</b></dd> -->
    </dl>

    <dl class="reportCoverDl">
      <dt @click='goDetail(1)'>水肿评估表</dt>
    </dl>

    <dl class="reportCoverDl">
      <dt @click='goDetail(1)'>睡眠障碍</dt>
    </dl>

    <dl class="reportCoverDl long">
      <dt @click='goList(1)'>疼痛评估表<i class="blue">2条</i></dt>
      <dt @click='goList(1)'>抑郁评估表<i class="blue">1条</i></dt>
      <dt @click='goList(1)'>照顾者压力和负担评估<i class="col9">无记录</i></dt>
    </dl>
  </div>
</template>
<script>
  export default {
    methods: {
      goList(param) {
        this.$router.push('list')
        //实际跟参数来
      },
      goDetail(param) {
        this.$router.push('detail')
        //实际跟参数来
      }
    }
  }
</script>
