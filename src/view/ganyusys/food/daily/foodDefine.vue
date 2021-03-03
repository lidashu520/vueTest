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
        count: 1,
        unit: '',
        leaf_kj: 0,
        vc_kj: 0,
        ve_kj: 0,
        zno_kj: 0,
        cuo_kj: 0,
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
        // this.$router.push({ path: '/ganyusys/ganyu/daily/define', query:{value:this.$route.query.value, defineFood:{}}})
        this.$router.back()
      },
      confirm(){
        this.paramsData.name = this.name
        this.paramsData.count = this.count
        this.paramsData.unit = this.unit
        this.paramsData.leaf_kj = this.leaf_kj
        this.paramsData.vc_kj = this.vc_kj
        this.paramsData.ve_kj = this.ve_kj
        this.paramsData.zno_kj = this.zno_kj
        this.paramsData.cuo_kj = this.cuo_kj
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
          // this.$router.push({ path: '/ganyusys/ganyu/daily/define', query:{value:this.$route.query.value, defineFood:this.paramsData}})
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
