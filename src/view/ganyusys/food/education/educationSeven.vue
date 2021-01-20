<template>
  <div>
  <foodMatchTitle :idx='6' />
    <div style="margin:0rem 0.5rem 0rem 15%" class="container goodFood">
        <p class="headGood"><span class="look" >食物搭配建议</span></p>
        <div align="center"><img src="../../../../assets/img/educationSeven.png"/></div>
        <dl>
          <dt class="goodFoodSpecial" style="  margin: 0.625rem 8rem 0 0.25rem;">第七天食物搭配</dt>
          <el-table
          :data="tableData"
          class="table"
          stripe
          border
          style="margin: 0.25rem;"
          :header-cell-style="{
            'background-color': '#811CF0',
            'color': '#fff',
            'font-weight': '400'
        }"
        >
            <el-table-column
                min-width="25%"
                label="早餐"
                prop="breakfast">
            </el-table-column>
            <el-table-column
                min-width="25%"
                label="午餐"
                prop="lunch">
            </el-table-column>
            <el-table-column
                min-width="25%"
                label="晚餐"
                prop="dinner">
            </el-table-column>
            <el-table-column
                min-width="25%"
                label="补充"
                prop="add">
            </el-table-column>
        </el-table>
      </dl>
      <p style="margin-top: 1rem; color:red;">
        <span style="text-align：center">备注：如有全身疾病（如糖尿病、高血压等），请在医生和营养师的指导下进行饮食。</span>
      </p>
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
            breakfast: '猪肝菠菜粥（一碗）、玉米馒头、煮鸡蛋一个、泡菜',
            lunch:'肉末茄子、胡萝卜炒青椒、宫爆鸡丁、红薯稀饭（一碗）',
            dinner:'芹菜猪肉饺子（麦胚面）',
            add:'酸枣（两个）、草莓若干'
          },
        ]
      };
    },
  };
</script>
