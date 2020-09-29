<template>
  <div>
  <foodMatchTitle :idx='1' />
    <div style="margin:0rem 0.5rem 0rem 15%" class="container goodFood">
        <p class="headGood"><span class="look" >食物搭配建议</span></p>
          <img style="transform:translate(25%)" src="../../../../assets/img/educationTwo.png"/>
        <dl>
          <dt class="goodFoodSpecial" style="  margin: 0.625rem 8rem 0 0.25rem;">第二天食物搭配</dt>
          <el-table
          :data="tableData"
          class="table"
          stripe
          border
          style="margin: 0.25rem;"
          :header-cell-style="{
            'background-color': '#92D050',
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
            breakfast: '鲜豆浆一杯、茶叶蛋一个、鲜肉包（小，5个）',
            lunch:'清炒菠菜、青红椒炒牛肉、时蔬大骨汤、红薯米饭（一碗）',
            dinner:'蒜蓉粉丝生蚝、黄瓜炒鸡蛋、干锅花菜、玉米饭（一碗）',
            add:'酸枣（两个）、草莓若干'
          },
        ]
      };
    },
  };
</script>
