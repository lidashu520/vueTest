<template>
  <div class="container">
    <topComponent title='添加自定义食物'>
    <span class="back" @click="goNext" slot="left">返回</span>
    <span class="save" @click="confirm" slot='right'>确定</span>
    </topComponent>
    <ul class="formCom form-reportReg" style="margin-top: -2rem">
      <li>
        <label><span>食物名称</span><input type="text" placeholder="如：水果沙拉" v-model.trim='name'/></label>
      </li>
      <li>
        <label><span>数量</span><input type="text" placeholder="固定值为1,不能更改" disabled/></label>
      </li>
      <li>
        <label><span>单位</span><input type="text" placeholder="如：盘、碟、克" v-model.trim='unit'/></label>
      </li>
      <li>
        <label><span>叶黄素</span><input type="text" placeholder="如：100" v-model.trim='leaf_kj'/><span class='word'>毫克</span></label>
      </li>
      <li>
        <label><span>维生素C</span><input type="text" placeholder="如：100" v-model.trim='vc_kj'/><span class='word'>毫克</span></label>
      </li>
      <li>
        <label><span>维生素E</span><input type="text" placeholder="如：100" v-model.trim='ve_kj'/><span class='word'>毫克</span></label>
      </li>
      <li>
        <label><span>氧化锌</span><input type="text" placeholder="如：100" v-model.trim='zno_kj'/><span class='word'>毫克</span></label>
      </li>
      <li style="border-bottom: 1px solid #e5e5e5;">
        <label><span>氧化铜</span><input type="text" placeholder="如：100" v-model.trim='cuo_kj'/><span class='word'>毫克</span></label>
      </li>
    </ul>
    <p style="
      margin:0.5rem;
      color:gray; font-size: 0.6525rem;">为了避免饮食记录数据混乱，自定义食物创建后不可以修改。
    </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //数据
        name: '',
        unit: '',
        leaf_kj: 0,
        vc_kj: 0,
        ve_kj: 0,
        zno_kj: 0,
        cuo_kj: 0,
        mg: '',
        paramsData: {},
        definefoodData: {},
        defineList: []
      }
    },
    mounted(){
      if (this.$store.state.creditStatus['userDefineFood'] === true) {
        if (this.$store.state.creditDatas['userDefineFood'] !== undefined) {
          this.definefoodData = JSON.parse(this.$store.state.creditDatas['userDefineFood'])
          this.defineList = this.definefoodData.defineList
        } else {
          //发送ajax 请求
        }
      }
    },
    methods: {
      goNext(){
        this.$router.back()
      },
      confirm(){
        let checkNum = /^[0-9]+(\.[0-9]{1,3})?$/
        let checkName = /^[\u4E00-\u9FA5]{1,8}(?:·[\u4E00-\u9FA5]{1,8})*$/
        if(typeof this.name === 'undefined' || this.name === null || this.name === ""){
          this.$dialog('食物名称不能为空');
          return
        }
        if(checkName.test(this.unit) === false){
          this.$dialog("单位格式必须为中文且不能为空");
          return
        }
        if(this.leaf_kj===0 && this.vc_kj===0 && this.ve_kj===0 && this.zno_kj===0 && this.cuo_kj===0){
          this.$dialog("营养素的含量不能全部为0");
          return
        }else{
          if(checkNum.test(this.leaf_kj) === false) {
            this.$dialog("叶黄素的含量数字格式有误(最多输入3位小数且最多到百位数)")
            return
          }
          if(checkNum.test(this.vc_kj) === false) {
            this.$dialog("维生素E的含量数字格式有误(最多输入3位小数且最多到百位数)")
            return
          }
          if(checkNum.test(this.ve_kj) === false) {
            this.$dialog("维生素C的含量数字格式有误(最多输入3位小数且最多到百位数)")
            return
          }
          if(checkNum.test(this.zno_kj) === false) {
            this.$dialog("氧化锌的含量数字格式有误(最多输入3位小数且最多到百位数)")
            return
          }
          if(checkNum.test(this.cuo_kj) === false) {
            this.$dialog("氧化铜的含量数字格式有误(最多输入3位小数且最多到百位数)")
            return
          }
        }
        this.paramsData.name = this.name
        this.paramsData.unit = this.unit
        this.paramsData.leaf_kj = this.leaf_kj
        this.paramsData.vc_kj = this.vc_kj
        this.paramsData.ve_kj = this.ve_kj
        this.paramsData.zno_kj = this.zno_kj
        this.paramsData.cuo_kj = this.cuo_kj
        if(this.paramsData.leaf_kj!=0){
          this.mg=this.mg + this.paramsData.leaf_kj + 'mg叶黄素 '
        }
        if(this.paramsData.vc_kj!=0){
          this.mg=this.mg + this.paramsData.vc_kj + 'mg维生素C '
        }
        if(this.paramsData.ve_kj!=0){
          this.mg=this.mg + this.paramsData.ve_kj + 'mg维生素E '
        }
        if(this.paramsData.zno_kj!=0){
          this.mg=this.mg + this.paramsData.zno_kj + 'mg氧化锌 '
        }
        if(this.paramsData.zno_kj!=0){
          this.mg=this.mg + this.paramsData.cuo_kj + 'mg氧化铜 '
        }
        this.paramsData.mg = this.mg
        this.defineList.push(this.paramsData)
        this.definefoodData.defineList = this.defineList
        this.$store.commit('uploadCreditStatu', {
            name: 'userDefineFood',
            val: true
          });
          this.$store.commit('uploadCreditData', {
            name: 'userDefineFood',
            val: JSON.stringify(this.definefoodData)
          });
          // 发送ajax 请求
          this.$router.back()

      }
    }
  }
</script>
<style >
  .word {
    color:gray;
    font-size: 0.6525rem;
    padding-right: 1rem;
    float: right;
  }
</style>
