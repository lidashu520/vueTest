
<template>
<body style="background-color: #fff;">
<div>
    <form action="" name="calculator" method="get">
        <ul class="buttonTitle" >
          <li @click="emitToParent(false)" style="float: left;"><b style="color:#00ACC2;">取消</b></li>
          <li @click="emitToParent(true)" style="float: right;"><b style="color:#00ACC2;">确认</b></li>
        </ul>
        <ul style="border-bottom: 1px solid #E4E4E4;">
            <li class="food-item">
              <div class="icon">
                <img width="57" height="57" :src="listData.src">
              </div>
                <div class="content">
                  <h6 style="font-size: 0.6525rem;" class="name">{{listData.name}}</h6>
                  <p class="desc"><span style="color:red; font-size: 0.6525rem;">{{listData.mg}}</span> <span style="color:gray; font-size: 0.6525rem;">/100克</span></p>
                </div>
            </li>
        </ul>
         <table style="
            width: 100%;
            color:gray;
            font-size: 0.7525rem;
            margin: 5px 5px 5px 1rem;">
          <tr>
              <td style="color:#00ACC2" v-show="isShow_leaf">{{listData.leafName}} : {{leaf_kj}}mg</td>
              <td style="color:#00ACC2" v-show="isShow_vc">{{listData.vcName}} : {{vc_kj}}mg</td>
              <td style="color:#00ACC2" v-show="isShow_ve">{{listData.veName}} : {{ve_kj}}mg</td>
          </tr>
          <tr>
              <td style="color:#00ACC2" v-show="isShow_zno">{{listData.znoName}} : {{zno_kj}}mg</td>
              <td style="color:#00ACC2" v-show="isShow_cuo">{{listData.cuoName}} : {{cuo_kj}}mg</td>
          </tr>
         </table>
        <ul class="centerTitle" style="margin-bottom:1rem">
          <li v-for='(item,index) of items'  :class='{on : index === 0}' >{{result}}<span style="font-size: 0.5rem;padding:0 0 0 0.5rem">{{listOfName}}</span></li>
          <!-- <li style="float: left;"><span style="color:gray; font-size: 0.5525rem;">{{kj}}千卡</span></li> -->
          <li style="float: right;"><span style="color:gray; font-size: 0.7525rem;">{{g}}克</span></li>
        </ul>
        <ul class="choiceTitle">
          <li v-for='(item,index) of list' :class='{on : index === idx}' @click="choiceUnit(index)">{{item.name}}</li>
        </ul>
        <div class="calc-btn" id="calc-btn">
            <table  class="table201031001201">
                <tr>
                    <td @click="command(7)">7</td>
                    <td @click="command(8)">8</td>
                    <td @click="command(9)">9</td>
                </tr>
                <tr>
                    <td @click="command(4)">4</td>
                    <td @click="command(5)">5</td>
                    <td @click="command(6)">6</td>
                </tr>
                <tr>
                    <td @click="command(1)">1</td>
                    <td @click="command(2)">2</td>
                    <td @click="command(3)">3</td>
                </tr>
                <tr style="bottom: 0;">
                    <td @click="command('.')">.</td>
                    <td @click="command(0)">0</td>
                    <td class="del bc" @click="del"></td>
                </tr>
            </table>
        </div>
    </form>
</div>
</body>
</template>

<script>
  export default {
    props:['listData'],
    data() {
      return {
        result: '0.0',
        isShow_leaf: false,
        isShow_vc: false,
        isShow_ve: false,
        isShow_cuo: false,
        isShow_zno: false,
        g: 0,
        leaf_kj: 0,
        vc_kj: 0,
        ve_kj: 0,
        zno_kj: 0,
        cuo_kj: 0,
        listOfName:'',
        isPoint: false,
        idx: 1,
        items: [
          {
            name: "0.0",
          },
        ],
        selectData:{},
        list: [],
        isFirstInput: true
      }

    },
    methods: {
      goBack() {
        this.$router.back()
      },
       del() {
        let  temp = this.result.split(".")
        let  left = temp[0]
        let  right = temp[1]
         if(parseInt(right)===0){
           if(left.length>1){
             left = left.substring(0, left.length -1)
           }else if(left.length===1){
             left = 0
           }
         }else{
           right = 0
         }
        this.isPoint = false
        this.result = left + "." + right
        this.g = this.list[this.idx].g * parseFloat(this.result)
        this.setKj()
      },
      command(str) {
        if(this.isFirstInput && str!="."){
          this.result = str + ".0"
        }
        let  temp = this.result.split(".")
        let  left = temp[0]
        let  right = temp[1]
        if(parseInt(right)===0 && parseInt(left)<999){
          if(this.isPoint && str!="."){
            right = str;
          }else {
            if(parseInt(left)!=0){
            if(str!="."){
              if(this.isFirstInput===false){
                left = left + str
              }
              if(left.length>3){
                left = 999
              }
            }else {
                this.isPoint = true
            }
          }else if (parseInt(left)==0 && str!="."){
              left = str;
          }
          }
        }
        this.result = left + "." + right
        this.g = this.list[this.idx].g * parseFloat(this.result)
        this.setKj()
        this.isFirstInput=false
      },
    choiceUnit(index){
      if(this.idx === index){
          return;
      }else{
        this.idx = index
        this.listOfName = this.list[index].name
        this.result = this.list[index].val
        this.g = this.list[index].g
        this.setKj()
        this.isFirstInput = true
      }

    },
    emitToParent(data){
        if(data){
          if(parseInt(this.result)===0){
            this.$dialog("输入不能为0");
          }else {
            this.selectData.name = this.listData.name
            this.selectData.eatTime = this.listData.eatTime
            this.selectData.src = this.listData.src
            this.selectData.leaf_kj = this.leaf_kj
            this.selectData.vc_kj = this.vc_kj
            this.selectData.ve_kj = this.ve_kj
            this.selectData.cuo_kj = this.cuo_kj
            this.selectData.zno_kj = this.zno_kj
            this.selectData.g = this.g
            this.selectData.result = this.result
            this.selectData.listOfName = this.listOfName
            this.$emit('child-event', this.selectData)
          }
        }else {
          this.$emit('child-event')
        }
    },

    setKj(){
      if(this.listData.leafName!='') {
        this.leaf_kj = this.commonFun.mul(this.listData.leaf_unit, this.g)
      }
      if(this.listData.vcName!='') {
        this.vc_kj = this.commonFun.mul(this.listData.vc_unit, this.g)
      }
      if(this.listData.veName!='') {
        this.ve_kj = this.commonFun.mul(this.listData.ve_unit, this.g)
      }
      if(this.listData.znoName!='') {
        this.zno_kj = this.commonFun.mul(this.listData.zno_unit, this.g)
      }
      if(this.listData.cuoName!='') {
        this.cuo_kj = this.commonFun.mul(this.listData.cuo_unit, this.g)
      }
    },
    },
    mounted() {
      // 根据传入的uid来，拉取该页面数据
      this.list = this.listData.listChoice
      let index = Math.floor(this.list.length/2)
      this.idx = index;
      this.listOfName = this.list[index].name
      this.result = this.list[index].val
      this.g = this.list[index].g
      if(this.listData.leafName!='') {
        this.isShow_leaf = true
        this.leaf_kj = this.commonFun.mul(this.listData.leaf_unit, this.g)
      }
      if(this.listData.vcName!='') {
        this.isShow_vc = true
        this.vc_kj = this.commonFun.mul(this.listData.vc_unit, this.g)
      }
      if(this.listData.veName!='') {
        this.isShow_ve = true
        this.ve_kj = this.commonFun.mul(this.listData.ve_unit, this.g)
      }
      if(this.listData.znoName!='') {
        this.isShow_zno = true
        this.zno_kj = this.commonFun.mul(this.listData.zno_unit, this.g)
      }
      if(this.listData.cuoName!='') {
        this.isShow_cuo = true
        this.cuo_kj = this.commonFun.mul(this.listData.cuo_unit, this.g)
      }
    }
  }
</script>
