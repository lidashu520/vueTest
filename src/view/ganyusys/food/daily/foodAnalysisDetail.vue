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
      <li style="color:#696969; width:33%;font-size: 0.7525rem;padding-top:0.5rem;margin-left:-1rem"><i style="color:#EA7F21" class="el-icon-top"></i>偏高</li>
      <li style="color:#696969; width:33%; font-size: 0.7525rem;padding-top:0.5rem;margin-left:-1rem"><i style="color:#FFD700" class="el-icon-bottom"></i>偏低</li>
      <li style="color:#696969; width:33%; font-size: 0.7525rem;padding-top:0.5rem;margin-left:-1rem"><i style="color:#73BD4C" class="el-icon-check"></i>满足</li>
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
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%"><i :style="leafStyle" :class="leafCls"></i>{{leafValue}}</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">10~40</li>
    </ul>
    <ul class="footer">
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">维生素C</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%"><i :style="vcStyle" :class="vcCls"></i>{{vcValue}}</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">500~2000</li>
    </ul>
    <ul class="footer">
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">维生素E</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%"><i :style="veStyle" :class="veCls"></i>{{veValue}}</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">267~468</li>
    </ul>
    <ul class="footer">
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">氧化锌</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%"><i :style="znoStyle" :class="znoCls"></i>{{znoValue}}</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">80~2000</li>
    </ul>
    <ul class="footer">
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">氧化铜</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%"><i :style="cuoStyle" :class="cuoCls"></i>{{cuoValue}}</li>
      <li style="color:#000; font-size: 0.7525rem;padding-top:0.5rem;width:33.3333%">2~8</li>
    </ul>
  </div>



</div>
</template>

<script>
  export default {
    data () {
      return {
        leafStyle: 'color:#73BD4C',
        leafCls: 'el-icon-check',
        vcStyle: 'color:#73BD4C',
        vcCls: 'el-icon-check',
        veStyle: 'color:#73BD4C',
        veCls: 'el-icon-check',
        znoStyle: 'color:#73BD4C',
        znoCls: 'el-icon-check',
        cuoStyle: 'color:#73BD4C',
        cuoCls: 'el-icon-check',
        leafValue: 0,
        vcValue: 0,
        veValue: 0,
        znoValue: 0,
        cuoValue: 0,
        foodData:[]
      }
    },
     mounted() {
       //color:#EA7F21 ----red      color:#FFD700 ----yellow    color:#73BD4C ----green
       //el-icon-top    ----偏高     el-icon-bottom ----偏低      el-icon-check ----满足
      this.foodData = this.$route.query
      this.leafValue = this.foodData[0].value
      this.vcValue = this.foodData[1].value
      this.veValue = this.foodData[2].value
      this.znoValue = this.foodData[3].value
      this.cuoValue = this.foodData[4].value
      if(this.foodData[0].value<10){
        this.leafStyle = 'color:#FFD700'
        this.leafCls= 'el-icon-bottom'
      }else if(this.foodData[0].value>40){
        this.leafStyle = 'color:#EA7F21'
        this.leafCls= 'el-icon-top'
      }else if(this.foodData[0].value>=10 && this.foodData[0].value<=40){
        this.leafStyle = 'color:#73BD4C'
        this.leafCls= 'el-icon-check'
      }
      if(this.foodData[1].value<500){
        this.vcStyle = 'color:#FFD700'
        this.vcCls= 'el-icon-bottom'
      }else if(this.foodData[1].value>2000){
        this.vcStyle = 'color:#EA7F21'
        this.vcCls= 'el-icon-top'
      }else if(this.foodData[1].value>=500 && this.foodData[0].value<=2000){
        this.vcStyle = 'color:#73BD4C'
        this.vcCls= 'el-icon-check'
      }
      if(this.foodData[2].value<267){
        this.veStyle = 'color:#FFD700'
        this.veCls= 'el-icon-bottom'
      }else if(this.foodData[2].value>468){
        this.veStyle = 'color:#EA7F21'
        this.veCls= 'el-icon-top'
      }else if(this.foodData[2].value>=267 && this.foodData[0].value<=468){
        this.veStyle = 'color:#73BD4C'
        this.veCls= 'el-icon-check'
      }
      if(this.foodData[3].value<80){
        this.znoStyle = 'color:#FFD700'
        this.znoCls= 'el-icon-bottom'
      }else if(this.foodData[3].value>2000){
        this.znoStyle = 'color:#EA7F21'
        this.znoCls= 'el-icon-top'
      }else if(this.foodData[3].value>=80 && this.foodData[0].value<=2000){
        this.znoStyle = 'color:#73BD4C'
        this.znoCls= 'el-icon-check'
      }
      if(this.foodData[4].value<2){
        this.cuoStyle = 'color:#FFD700'
        this.cuoCls= 'el-icon-bottom'
      }else if(this.foodData[4].value>8){
        this.cuoStyle = 'color:#EA7F21'
        this.cuoCls= 'el-icon-top'
      }else if(this.foodData[4].value>=2 && this.foodData[0].value<=8){
        this.cuoStyle = 'color:#73BD4C'
        this.cuoCls= 'el-icon-check'
      }
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
                value: this.foodData[0].value,
                name: '叶黄素'
              },
              {
                value: this.foodData[1].value,
                name: '维生素C'
              },
              {
                value: this.foodData[2].value,
                name: '维生素E'
              },
              {
                value: this.foodData[3].value,
                name: '氧化锌'
              },
              {
                value: this.foodData[4].value,
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
