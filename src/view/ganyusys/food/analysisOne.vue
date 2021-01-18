<template>
	<div class="container">
		<topComponent title='常见食物的营养含量'></topComponent>
     <div style="font-size: 0.875rem;
  height: 6.75rem;
  position: fixed;
  top: 2.10rem;
  z-index: 0;
  width: 100%;">
        <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        height="550"
        border
        style="width: 100%;">
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
        },{
          leibie: '蔬菜',
          food: '红椒',
          weight: '2两',
          yehuangsu: '-',
          vC: '130mg',
          vE: '0.41mg',
          ZnO: '0.19mg',
          CuO: '0.09mg',
        },{
          leibie: '蔬菜',
          food: '青椒',
          weight: '2两',
          yehuangsu: '-',
          vC: '59mg',
          vE: '0.38mg',
          ZnO: '0.21mg',
          CuO: '0.05mg',
        },
        {
          leibie: '蔬菜',
          food: '白菜',
          weight: '2两',
          yehuangsu: '-',
          vC: '31mg',
          vE: '0.76mg',
          ZnO: '0.38mg',
          CuO: '0.05mg',
        },
        {
          leibie: '蔬菜',
          food: '西红柿',
          weight: '2两',
          yehuangsu: '-',
          vC: '14mg',
          vE: '0.42mg',
          ZnO: '0.12mg',
          CuO: '0.04mg',
        },
        {
          leibie: '蔬菜',
          food: '西芹',
          weight: '2两',
          yehuangsu: '-',
          vC: '4mg',
          vE: '0.32mg',
          ZnO: '0.10mg',
          CuO: '0.02mg',
        },
        {
          leibie: '蔬菜',
          food: '黄瓜',
          weight: '2两',
          yehuangsu: '-',
          vC: '9mg',
          vE: '0.49mg',
          ZnO: '0.18mg',
          CuO: '0.05mg',
        },
        {
          leibie: '蔬菜',
          food: '南瓜',
          weight: '2两',
          yehuangsu: '-',
          vC: '8mg',
          vE: '0.36mg',
          ZnO: '0.14mg',
          CuO: '0.03mg',
        },
        {
          leibie: '蔬菜',
          food: '胡萝卜',
          weight: '2两',
          yehuangsu: '-',
          vC: '16mg',
          vE: '-',
          ZnO: '0.14mg',
          CuO: '0.03mg',
        },
        {
          leibie: '蔬菜',
          food: '红薯',
          weight: '2两',
          yehuangsu: '-',
          vC: '26mg',
          vE: '0.28mg',
          ZnO: '0.15mg',
          CuO: '0.18mg',
        },
        {
          leibie: '蔬菜',
          food: '菜心',
          weight: '2两',
          yehuangsu: '-',
          vC: '44mg',
          vE: '0.52mg',
          ZnO: '0.87mg',
          CuO: '0.18mg',
        },
        {
          leibie: '蔬菜',
          food: '茄子( 紫,长 )',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '7mg',
          ZnO: '2mg',
          CuO: '0.04mg',
        },
        {
          leibie: '蔬菜',
          food: '花菜',
          weight: '2两',
          yehuangsu: '-',
          vC: '61mg',
          vE: '0.43mg',
          ZnO: '0.38mg',
          CuO: '0.05mg',
        },
        {
          leibie: '蔬菜',
          food: '羽衣甘蓝(熟食)',
          weight: '2两',
          yehuangsu: '20.5mg',
          vC: '63mg',
          vE: '1.12mg',
          ZnO: '0.56mg',
          CuO: '0.06mg',
        },
        {
          leibie: '蔬菜',
          food: '西兰花',
          weight: '2两',
          yehuangsu: '4mg',
          vC: '51mg',
          vE: '0.91mg',
          ZnO: '0.78mg',
          CuO: '0.03mg',
        },
        {
          leibie: '蔬菜',
          food: '菠菜(熟食)',
          weight: '2两',
          yehuangsu: '12.6mg',
          vC: '32mg',
          vE: '1.74mg',
          ZnO: '0.85mg',
          CuO: '0.10mg',
        },
        {
          leibie: '蔬菜',
          food: '蕨菜',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '-',
          ZnO: '1.62mg',
          CuO: '5.63mg',
        },
        {
          leibie: '油脂类',
          food: '胡麻油',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '389.9mg',
          ZnO: '0.30mg',
          CuO: '0.02mg',
        },
        {
          leibie: '油脂类',
          food: '豆油',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '93.08mg',
          ZnO: '1.09mg',
          CuO: '0.16mg',
        },
        {
          leibie: '油脂类',
          food: '葵花籽油',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '54.60mg',
          ZnO: '0.11mg',
          CuO: '-',
        },
        {
          leibie: '油脂类',
          food: '芝麻油',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '68.53mg',
          ZnO: '0.17mg',
          CuO: '0.05mg',
        },
        {
          leibie: '油脂类',
          food: '豆油',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '60.89mg',
          ZnO: '0.54mg',
          CuO: '0.18mg',
        },
        {
          leibie: '肉类',
          food: ' 猪肉(瘦肉)',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '0.34mg',
          ZnO: '2.99mg',
          CuO: '0.11mg',
        },
        {
          leibie: '肉类',
          food: '牛肉(瘦肉)',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '0.35mg',
          ZnO: '3.71mg',
          CuO: '0.16mg',
        },
        {
          leibie: '肉类',
          food: '羊肉(瘦肉)',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '0.31mg',
          ZnO: '6.06mg',
          CuO: '0.12mg',
        },
        {
          leibie: '肉类',
          food: '鸡肉(均值)',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '14.58mg',
          ZnO: '0.58mg',
          CuO: '0.07mg',
        },
        {
          leibie: '肉类',
          food: '鸭肉(均值)',
          weight: '2两',
          yehuangsu: '-',
          vC: '-',
          vE: '0.27mg',
          ZnO: '1.33mg',
          CuO: '0.21mg',
        },
        ]
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
