<template>
  <div class="rewardWarp">
  <foodTitle :idx='1'/>
      <div style="margin-top:0rem" class="container goodFood">
        <p class="headGood"><span class="look" >老年黄斑变性患者饮食指导</span></p>
        <dl>
          <dt style="
          margin: 0.625rem 8rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">老年黄斑变性是什么？</dt>
          <dd>
          <p><span>年龄相关性黄斑变性（Age related macular degeneration, AMD）是因视网膜中心黄斑部受损而引起退行性病变；</span></p>
          </dd>
          <dd>
          <p><span>黄斑受损将会引起中心视力丧失，而中心视力是正常人做一些“直视活动”所必须得，如阅读、做饭和驾车之类的活动。</span></p>
          </dd>
        </dl>

        <dl>
          <dt style="
          margin: 0.625rem 3.5rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">老年黄斑变性的主要症状是什么？</dt>
          <dd>
            <p><span>AMD主要引起视力改变（中心暗点、视物模糊、视物变形和对比敏感度下降等）</span>
               <img src="../../../../assets/img/zhengzhuang22.png"/>
            </p>
          </dd>
        </dl>

        <dl>
          <dt style="
          margin: 0.625rem 5.5rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">老年黄斑变性与饮食的关系</dt>
          <dd>
          <p><span>研究显示AMD危险因素较多，包括年龄、种族、吸烟、高血压、心血管疾病、阿司匹林、饮食和遗传因素等；</span></p>
          </dd>
          <dd>
          <p><span>黄斑色素由叶黄素、玉米黄质和内消旋玉米黄质(meso-zeaxanthin)组成，并且这些黄斑色素共同保护黄斑免受氧化和蓝光的伤害（氧化和蓝光均造成AMD病情的发展）；</span></p>
          </dd>
          <dd>
          <p><span>黄斑色素只能从饮食中获得的；</span></p>
          </dd>
          <dd>
          <p><span>饮食中维生素C、维生素E和脂肪等也是AMD发病影响因素</span></p>
          </dd>
        </dl>

        <dl>
          <dt style="
          margin: 0.625rem 5.5rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">老年黄斑变性与饮食的关系</dt>
          <dd>
          <p><span>研究显示AMD危险因素较多，包括年龄、种族、吸烟、高血压、心血管疾病、阿司匹林、饮食和遗传因素等；</span></p>
          </dd>
          <dd>
          <p><span>黄斑色素由叶黄素、玉米黄质和内消旋玉米黄质(meso-zeaxanthin)组成，并且这些黄斑色素共同保护黄斑免受氧化和蓝光的伤害（氧化和蓝光均造成AMD病情的发展）；</span></p>
          </dd>
          <dd>
          <p><span>黄斑色素只能从饮食中获得的；</span></p>
          </dd>
          <dd>
          <p><span>饮食中维生素C、维生素E和脂肪等也是AMD发病影响因素</span></p>
          </dd>
        </dl>

        <dl>
          <dt style="
          margin: 0.625rem 0rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">老年黄斑变性患者每日营养补充量的最佳</dt>
          <dt style="
          margin: 0.625rem 13rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">指南建议</dt>

          <el-table
          :data="tableData1"
          class="table"
          stripe
          border
          style="margin: 0.225rem"
          :header-cell-style="{
            'background-color': '#F8B50F',
            'color': '#fff',
            'font-weight': '400'
        }"
        >
          <el-table-column
            prop="buchong"
            label="补充物"
            min-width="50%">
          </el-table-column>
          <el-table-column
              prop="weight"
              label="每日用量"
              min-width="50%">
          </el-table-column>
        </el-table>
        </dl>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        data: {},
        tableData1: [
          {
            buchong: '叶黄素/玉米黄素',
            weight: '10mg/2mg'
          },
          {
            buchong: '维生素C',
            weight: '500mg'
          },
          {
            buchong: '维生素E',
            weight: '267mg'
          },
          {
            buchong: '氧化锌',
            weight: '80mg或25mg'
          },
          {
            buchong: '氧化铜',
            weight: '2mg'
          }
        ]
      };
    },
  };
</script>

