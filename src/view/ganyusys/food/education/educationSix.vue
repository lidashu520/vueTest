<template>
  <div>
  <foodMatchTitle :idx='5' />
    <div style="margin:0rem 0.5rem 0rem 15%" class="container goodFood">
        <p class="headGood"><span class="look" >食物搭配建议</span></p>
        <div align="center"><img src="../../../../assets/img/educationSix.png"/></div>
        <dl>
          <dt class="goodFoodSpecial" style="  margin: 0.625rem 8rem 0 0.25rem;">第六天食物搭配</dt>
          <el-table
          :data="tableData"
          class="table"
          stripe
          border
          style="margin: 0.25rem;"
          :header-cell-style="{
            'background-color': '#FF00FF',
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
            breakfast: '煎蛋一个、煮玉米（一根）、鲜豆浆（一杯）、油条（一根）',
            lunch:'蒜蓉蒸生蚝（两只）、蒜蓉粉丝蒸扇贝（五只）、青红椒牛肉、西红柿鸡蛋汤、玉米馒头（一个）',
            dinner:'清炒青南瓜丝、鱼香肉丝、紫甘蓝拌豆腐丝、青菜粥（一碗）',
            add:'水果沙拉'
          },
        ]
      };
    },
  };
</script>
