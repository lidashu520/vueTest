
<template>
<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
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
                <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114">
              </div>
                <div class="content">
                  <h6 class="name">皮蛋瘦肉粥</h6>
                  <p class="desc"><span style="color:red; font-size: 0.1525rem;">{{unit}}</span> <span style="color:gray; font-size: 0.1525rem;">千卡/100克</span></p>
                </div>
            </li>
        </ul>
        <ul class="centerTitle" style="margin-bottom:1rem">
          <li v-for='(item,index) of items'  :class='{on : index === 0}' >{{result}}<span style="font-size: 0.1rem;padding:0 0 0 0.5rem">{{listOfName}}</span></li>
          <li style="float: left;"><span style="color:gray; font-size: 0.1525rem;">{{kj}}千卡</span></li>
          <li style="float: right;"><span style="color:gray; font-size: 0.1525rem;">{{value}}克</span></li>
        </ul>
        <ul class="choiceTitle" style="margin-bottom:1rem">
          <li v-for='(item,index) of list' :class='{on : index === idx}' @click="choiceUnit(index)">{{item.name}}</li>
        </ul>
        <div class="calc-btn" id="calc-btn">
            <table>
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



<!--<script>
    //兼容屏幕
    screenW = window.screen.width;//屏幕分辨率
    screenH = window.screen.height;//屏幕分辨率
    var calculator = document.getElementById("calculator");
    var calc_btn = document.getElementById("calc-btn").getElementsByTagName("td");
    console.log(document.body.clientWidth)
    if(document.body.clientWidth<600){
        calculator.style.width = screenW+"px";
        calculator.style.height = screenH+"px";
        calculator.style.border = "none";
        calculator.style.margin = "0";
        for(var i = 0;i<calc_btn.length;i++){
            calc_btn[i].style.width = screenW/3+"px";
            calc_btn[i].style.height = (screenH-80)/8 + "px";
        }
    }

    var calcIn = document.getElementById("calc-in");
    var calcOut = document.getElementById("calc-out");

    //输入数据函数
    function command(str) {
        calcIn.innerHTML = "" ? calcIn.innerHTML = str : calcIn.innerHTML =calcIn.innerHTML+str;
    }
    //计算数据函数
    function calc() {
        calcOut.innerHTML = eval(calcIn.innerHTML.replace(/×/g,"*").replace(/÷/g,"/").replace(/%/,"/100"));
        if(calcOut.innerHTML == "undefined"){
            calcOut.innerHTML = "";
        }
    }
    //清屏函数
    function clearScreen() {
        calcIn.innerHTML = "";
        calcOut.innerHTML = "";
    }
    //每次删除一位数据的函数
    function del() {
        calcIn.innerHTML = calcIn.innerHTML.substr(0,calcIn.innerHTML.length-1);
    }

</script>-->


<script>
  export default {
    data() {
      return {
        result: '0.0',
        value: 0,
        unit:1000,
        kj: 0,
        listOfName:'',
        isPoint: false,
        idx: 1,
        items: [
          // {
          //   name: "老年黄斑",
          //   push: "/loan/yellowHomeList"
          // },
          {
            name: "0.0",
          },
          // {
          //   name: "工具作用",
          //   push: "/loan/yellowHomeList/homeThree"
          // }
        ],
        list: [
          {
            name: "克",
            val: "100.0",
            unit: 10,
            value: 100
          },
          {
            name: "碗(中)",
            val: "1.0",
            unit: 10,
            value: 125
          },
          {
            name: "碗(大)",
            val: "1.0",
            unit: 10,
            value: 150
          }
        ]
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
        this.value = this.list[this.idx].value * parseInt(this.result)
        this.kj = this.list[this.idx].unit * this.value * parseInt(this.result)
      },
      command(str) {
        let  temp = this.result.split(".")
        let  left = temp[0]
        let  right = temp[1]
        if(parseInt(right)===0 && parseInt(left)<999){
          if(this.isPoint && str!="."){
            right = str;
          }else {
            if(parseInt(left)!=0){
            if(str!="."){
              left = left + str;
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
        this.value = this.list[this.idx].value * parseInt(this.result)
        this.kj = this.list[this.idx].unit * this.value * parseInt(this.result)
      },
    choiceUnit(index){
      if(this.idx === index){
          return;
      }else{
        this.idx = index
        this.listOfName = this.list[index].name
        this.result = this.list[index].val
        this.value = this.list[index].value
        this.kj = this.list[index].unit * this.value
      }

    },
    emitToParent(data){
        if(data){
          if(parseInt(this.result)===0){
            this.$dialog("输入不能为0");
          }else {
            this.$emit('child-event',{"data":100,"renliang": 471})
          }
        }else {
          this.$emit('child-event')
        }

    }

    },
    mounted() {
      // 根据传入的uid来，拉取该页面数据
      let index = Math.floor(this.list.length/2)
      this.idx = index;
      this.listOfName = this.list[index].name
      this.result = this.list[index].val
      this.value = this.list[index].value
      this.kj = this.list[index].unit * this.value
    }
  }
</script>
