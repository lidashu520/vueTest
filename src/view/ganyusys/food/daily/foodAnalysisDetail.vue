<template>
<div>
  <topComponent title='营养分析详情'>
    <span class="back" @click="$router.push('/ganyusys/ganyu/daily')" slot="left">返回</span>
  </topComponent>
  <router-view></router-view>
  <div style="border-left:5px solid #8A2BE2; margin:1rem 0 0 1rem">
    <h4 style="color:#000;padding-left:0.5rem">五大营养素分析</h4>
  </div>
  <div style="margin:1rem 0 0 1.5rem">
    <h5 style="color:#000;padding-left:0.5rem">营养素比及摄入</h5>
    <p style="color:gray; font-size: 0.5525rem; padding:0.25rem 0 0 0.5rem">每种营养素摄入符号表示</p>
    <ul class="footer">
      <!-- <li style="color:#696969; font-size: 0.7525rem;padding-top:0.5rem;margin-left:-0.5rem"><i style="color:#EA7F21;" class="el-icon-top"></i>偏高</li> -->
      <li style="color:#696969; width:30%; font-size: 0.7525rem;padding-top:0.5rem;margin-left:-0.5rem"><i style="color:#FFD700" class="el-icon-bottom"></i>偏低</li>
      <li style="color:#696969; width:30%; font-size: 0.7525rem;padding-top:0.5rem;margin-left:-0.5rem"><i style="color:green" class="el-icon-check"></i>满足</li>
    </ul>
  </div>
        <div style="width:355px;height:280px" ref="chart"></div>
  <div class="foodAnalysisDetail">
    <ul class="footer">
      <li style="color:#8A2BE2; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">名称</li>
      <li style="color:#8A2BE2; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">摄入(毫克)</li>
      <li style="color:#8A2BE2; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">推荐(毫克)</li>
    </ul>
    <ul class="footer">
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">叶黄素</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%"><i style="color:green;" class="el-icon-check"></i>20.2</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">10</li>
    </ul>
    <ul class="footer">
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">维生素C</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%"><i style="color:#FFD700" class="el-icon-bottom"></i>350.7</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">500</li>
    </ul>
    <ul class="footer">
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">维生素D</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%"><i style="color:#FFD700" class="el-icon-bottom"></i>122.5</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">267</li>
    </ul>
    <ul class="footer">
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">氧化锌</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%"><i style="color:#FFD700" class="el-icon-bottom"></i>33.4</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">80</li>
    </ul>
    <ul class="footer">
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">氧化铜</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%"><i style="color:green" class="el-icon-check"></i>2.1</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">2</li>
    </ul>
  </div>



</div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
     mounted() {
	    this.initCharts();
	  },
    methods: {
      initCharts() {
        let myChart = this.$echarts.init(this.$refs.chart,"shine");
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [{
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [{
                value: 748,
                name: '叶黄素'
              },
              {
                value: 410,
                name: '维生素C'
              },
              {
                value: 234,
                name: '维生素D'
              },
              {
                value: 335,
                name: '氧化锌'
              },
              {
                value: 445,
                name: '氧化铜'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
            }
          }]
        });
      },
    }
  }
</script>
