<template>
	<div class="container">
		<topComponent title='常见食物的营养含量'></topComponent>
    <div style="margin-top: 1rem">
        <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        height="470"
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="leibie"
          label="类别"
          min-width="12.5%">
        </el-table-column>
        <el-table-column
          prop="food"
          label="食物"
          min-width="12.5%">
        </el-table-column>
        <el-table-column
          prop="weight"
          label="分量"
          min-width="12.5%">
        </el-table-column>
        <el-table-column
          prop="yehuangsu"
          label="叶黄素"
          min-width="12.5%">
        </el-table-column>
        <el-table-column
          prop="vC"
          label="维生素C"
          min-width="12.5%">
        </el-table-column>
        <el-table-column
          prop="vE"
          label="维生素E"
          min-width="12.5%">
        </el-table-column>
        <el-table-column
          prop="ZnO"
          label="氧化锌"
          min-width="12.5%">
        </el-table-column>
        <el-table-column
          prop="CuO"
          label="氧化铜"
          min-width="12.5%">
        </el-table-column>
      </el-table>
    </div>
	</div>
</template>

<script>
  export default {
     methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex %2 === 0) {
          return 'warning-row';
        } else {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          leibie: '主食类',
          food: '米饭',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '-',
          ZnO: '0.92mg',
          CuO: '0.06mg',
        }, {
          leibie: '主食类',
          food: '小米',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '3.36',
          ZnO: '1.87mg',
          CuO: '0.54',
        }, {
          leibie: '主食类',
          food: '挂面(标准粉)',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '1.11mg',
          ZnO: '1.22mg',
          CuO: '0.44mg',
        }, {
          leibie: '主食类',
          food: '馒头',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '0.65mg',
          ZnO: '0.71mg',
          CuO: '0.1mg',
        }, {
          leibie: '主食类',
          food: '玉米(黄干)',
          weight: '2两',
          yehuangsu: '1.5mg',
          vC: '-',
          vE: '3.89mg',
          ZnO: '1.7mg',
          CuO: '0.25mg',
        }, {
          leibie: '主食类',
          food: '小麦胚粉',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '23.2mg',
          ZnO: '23.4mg',
          CuO: '0.83mg',
        }, {
          leibie: '主食类',
          food: '荞麦(带皮)',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '-',
          ZnO: '2.9mg',
          CuO: '14.05mg',
        }, {
          leibie: '主食类',
          food: '米饭',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '-',
          ZnO: '0.92mg',
          CuO: '0.06mg',
        }, {
           leibie: '主食类',
          food: '燕麦片',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '3.07',
          ZnO: '2.59mg',
          CuO: '0.45mg',
        }]
      };
    },

  };
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
