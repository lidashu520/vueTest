<template>
  <div>
  <foodMatchTitle :idx='0' />
    <div style="margin:0rem 0.5rem 0rem 15%" class="container goodFood">
        <p class="headGood"><span class="look" >食物搭配建议</span></p>
          <img style="transform:translate(25%)" src="../../../../assets/img/educationOne.png"/>
        <dl>
          <dt class="goodFoodSpecial" style="  margin: 0.625rem 8rem 0 0.25rem;">第一天食物搭配</dt>
          <el-table
          :data="tableData"
          class="table"
          stripe
          border
          style="margin: 0.25rem;"
          :header-cell-style="{
            'background-color': '#C4BD97',
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
            breakfast: '纯牛奶一盒（250ml）、燕麦片（100g）、煮鸡蛋一个',
            lunch:'青菜豆腐汤、西红柿炒鸡蛋、玉米饭（一碗）、西兰花胡萝卜炒虾仁',
            dinner:'凉拌黄瓜（一根）、青红椒炒肉丝、清蒸老南瓜、香菇青菜玉米粥（一碗）',
            add:'猕猴桃（两个）'
          },
        ]
      };
    },
  };
</script>

