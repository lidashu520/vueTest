<template>
  <div>
  <foodMatchTitle :idx='4' />
    <div style="margin:0rem 0.5rem 0rem 18%" class="container goodFood">
        <p class="headGood"><span class="look" >食物搭配建议</span></p>
        <div align="center"><img src="../../../../assets/img/educationFive.png"/></div>
        <dl>
          <dt class="goodFoodSpecial" style="  margin: 0.625rem 8rem 0 0.25rem;">第五天食物搭配</dt>
          <el-table
          :data="tableData"
          class="table"
          stripe
          border
          style="margin: 0.25rem;"
          :header-cell-style="{
            'background-color': '#F0E68C',
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
            breakfast: '纯牛奶一盒、紫薯包（两个）、鸡蛋饼（一个）',
            lunch:'清炒白菜、西兰花胡萝卜炒虾仁、香菇鸡汤、蛋炒饭（一碗）',
            dinner:'羊肉粉丝泡馍（二两）',
            add:'橙子（一个）、猕猴桃（一个）'
          },
        ]
      };
    },
  };
</script>
