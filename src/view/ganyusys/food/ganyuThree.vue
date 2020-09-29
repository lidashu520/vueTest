<template>
<div>
  <topComponent title='老年黄斑变性膳食营养管理'>
    <span class="back" @click="$router.push('/ganyusys/ganyu')" slot="left">返回</span>
  </topComponent>
  <el-tabs v-model="activeName" tab-position="top" @tab-click="handleClick">
    <el-tab-pane   label="营养素"  name="first">
      <div class="container goodFood">
        <p class="headGood"><span class="look" >营养素</span></p>
        <dl>
          <dt style="
          margin: 0.625rem 11rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">营养素简介</dt>
          <dd>
          <p><span>目前已知，人体必需营养素有40余种，这些营养素均需从食物中获得，近年来，研究证据表明，除了营养素之外，天然存在于蔬菜、水果、坚果、全谷物等食物中的其他膳食成分，如膳食纤维、植物化学物对降低慢性病发病风险有着重要的作用。</span></p>
          </dd>
          <dd>
          <p><span>人体所需三大宏量营养素（蛋白质、脂肪、碳水化合物），在体内代谢中可产生能量，被称“产能营养素”。它们还是人体必需的营养素，具有重要的生理作用。良好的膳食模式可以提供人体充足的营养，保障膳食能量平衡、宏量营养素摄入水平合理性。</span></p>
          </dd>
        </dl>

        <dl>
          <dt class="goodFoodSpecial">人体必需的营养素及其他膳食成分</dt>
          <el-table
          :data="tableData"
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
          <el-table-column label="必需营养素">
            <el-table-column
              prop="large"
              label="宏量营养素"
              min-width="17%">
            </el-table-column>
            <el-table-column
              prop="const"
              label="常量营养素"
              min-width="17%">
            </el-table-column>
            <el-table-column
              prop="micro"
              label="微量营养素"
              min-width="17%">
            </el-table-column>
            <el-table-column
              prop="ven"
              label="维生素"
              min-width="25%">
            </el-table-column>
          </el-table-column>
          <el-table-column
              prop="other"
              label="其他膳食成分"
              min-width="25%">
          </el-table-column>
        </el-table>
      </dl>
      </div>
    </el-tab-pane>

    <el-tab-pane label="饮食指导" name="two">
      <div class="container goodFood">
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
               <img src="../../../assets/img/zhengzhuang22.png"/>
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
    </el-tab-pane>

    <el-tab-pane label="营养参考" name="third">
      <div class="container">
        <p class="headGood" style="margin-top:-2rem;"><span class="look" >部分食物营养素换算参考</span></p>
        <div class="partFood">
        <dl class="special">
          <dt style="
          margin: 0.625rem 4rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">富含叶黄素/玉米黄素的食物</dt>
          <dd>
          <p><span>食物排序按照营养素含量由高到低进行排序</span></p>
          </dd>
        </dl>
        <dl>
        <ul v-infinite-scroll="load" style="overflow:auto; height:420px; margin-bottom:1rem">
          <li style="padding:0.5rem;" class="infinite-list-item">
            <img class="fl" src="../../../assets/img/partFood1.png"/>
            <img src="../../../assets/img/partFood2.png"/>
            <img class="fl" src="../../../assets/img/partFood3.png"/>
            <img src="../../../assets/img/partFood4.png"/>
            <img class="fl" src="../../../assets/img/partFood5.png"/>
            <img src="../../../assets/img/partFood6.png"/>
          </li>
        </ul>
        </dl>
      </div>

      <div class="partFood">
        <dl class="special">
        <dt style="
          margin: 0.625rem 6rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">富含维生素C的食物</dt>
        </dl>
      <dl>
        <ul v-infinite-scroll="load" style="overflow:auto; height:420px; margin-bottom:1rem">
          <li style="padding:0.5rem;" class="infinite-list-item">
            <img class="fl" src="../../../assets/img/cFood1.png"/>
            <img src="../../../assets/img/cFood2.png"/>
            <img class="fl" src="../../../assets/img/cFood3.png"/>
            <img src="../../../assets/img/cFood4.png"/>
            <img class="fl" src="../../../assets/img/cFood5.png"/>
            <img src="../../../assets/img/cFood6.png"/>
            <img class="fl" src="../../../assets/img/cFood7.png"/>
            <img src="../../../assets/img/cFood8.png"/>
            <img src="../../../assets/img/cFood9.png"/>
          </li>
        </ul>
      </dl>
       </div>
      </div>

      <div class="partFood">
        <dl class="special">
        <dt style="
          margin: 0.625rem 6rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">富含维生素E的食物</dt>
        </dl>
        <dl>
          <ul v-infinite-scroll="load" style="overflow:auto; height:420px; margin-bottom:1rem">
            <li style="padding:0.5rem;" class="infinite-list-item">
              <img class="fl" src="../../../assets/img/eFood1.png"/>
              <img src="../../../assets/img/eFood2.png"/>
              <img class="fl" src="../../../assets/img/eFood3.png"/>
              <img src="../../../assets/img/eFood4.png"/>
              <img class="fl" src="../../../assets/img/eFood5.png"/>
              <img src="../../../assets/img/eFood6.png"/>
            </li>
          </ul>
        </dl>
       </div>

      <div class="partFood">
        <dl class="special">
        <dt style="
          margin: 0.625rem 6rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">富含氧化锌的食物</dt>
        </dl>
        <dl>
          <ul v-infinite-scroll="load" style="overflow:auto; height:420px; margin-bottom:1rem">
            <li style="padding:0.5rem;" class="infinite-list-item">
              <img class="fl" src="../../../assets/img/ZnFood1.png"/>
              <img src="../../../assets/img/ZnFood2.png"/>
              <img class="fl" src="../../../assets/img/ZnFood3.png"/>
              <img src="../../../assets/img/ZnFood4.png"/>
              <img class="fl" src="../../../assets/img/ZnFood5.png"/>
              <img src="../../../assets/img/ZnFood6.png"/>
            </li>
          </ul>
        </dl>
       </div>

      <div class="partFood">
        <dl class="special">
        <dt style="
          margin: 0.625rem 6rem 0 0.25rem;
          padding-left: -0.625rem;
          background : #F8B50F;">富含氧化铜的食物</dt>
        </dl>
        <dl>
          <ul v-infinite-scroll="load" style="overflow:auto; height:420px; margin-bottom:1rem">
            <li style="padding:0.5rem;" class="infinite-list-item">
              <img class="fl" src="../../../assets/img/CuFood1.png"/>
              <img src="../../../assets/img/CuFood2.png"/>
              <img class="fl" src="../../../assets/img/CuFood3.png"/>
              <img src="../../../assets/img/CuFood4.png"/>
              <img class="fl" src="../../../assets/img/CuFood5.png"/>
              <img src="../../../assets/img/CuFood6.png"/>
            </li>
          </ul>
        </dl>
       </div>
      </el-tab-pane>


    <el-tab-pane label="食物搭配" name="fourth" >
      <el-tabs tab-position="left">
        <el-tab-pane  label="用户管理">
          <div class="container goodFood" v-infinite-scroll="load" style="overflow:auto; margin-bottom:1rem">
              <dl>
                <dt class="goodFoodSpecial">人体必需的营养素及其他膳食成分</dt>
                <el-table
                :data="tableData"
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
                <el-table-column label="必需营养素">
                  <el-table-column
                    prop="large"
                    label="宏量营养素"
                    min-width="17%">
                  </el-table-column>
                  <el-table-column
                    prop="const"
                    label="常量营养素"
                    min-width="17%">
                  </el-table-column>
                  <el-table-column
                    prop="micro"
                    label="微量营养素"
                    min-width="17%">
                  </el-table-column>
                  <el-table-column
                    prop="ven"
                    label="维生素"
                    min-width="25%">
                  </el-table-column>
                </el-table-column>
                <el-table-column
                    prop="other"
                    label="其他膳食成分"
                    min-width="25%">
                </el-table-column>
              </el-table>
            </dl>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
   import detailData from "../../../data/old_yellow_detail.json"

  export default {
    data() {
      return {
        activeName: 'first',
        data: {},
        tableData: [
        {
          large: '蛋白质、脂肪、碳水化合物',
          const: '钙、磷、钾、钠、镁、硫、氯',
          micro: '铁、碘、硒、锌、铜、锰等',
          ven: '维生素A、维生素B1、维生素B2、维生素B6、维生素B12、维生素C、维生素D、维生素E、维生素K、叶酸、生物素、泛酸、烟酸、胆碱',
          other: '膳食纤维、番茄红素、植物甾醇、原花青素、姜黄素、大豆异黄酮、叶黄素、氨基葡萄糖等'
        }
        ],
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
            weight: '400mg'
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
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      load() {

      }
    },
    mounted() {
      // 根据传入的uid来，拉取该页面数据
      this.data = detailData['micro'];
    }
  };
</script>

<style scoped>
   .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .container-tab .el-tabs__content{
    flex-grow: 1;
    overflow-y: scroll;
  }
</style>
