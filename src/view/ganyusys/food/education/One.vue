<template>
  <div class="rewardWarp">
    <foodTitle :idx='0'/>
      <div style="margin-top:0rem" class="container goodFood">
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
      };
    },
  };
</script>

