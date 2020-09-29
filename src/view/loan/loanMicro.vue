<template>
  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <!-- <img src="../../assets/img/banner01.jpg" slot='banner'/> -->
      <img src="../../assets/img/banner01.jpg" slot='banner'/>
    </loanBanner>
    <loanDetail uid='micro'>
    </loanDetail>
     <div class="container food">
      <foodDetail uid='micro'>

      </foodDetail>
     </div>

     <div class="container choiceone">
      <choiceOne uid='micro'>

      </choiceOne>
    </div>

    <div class="container story">
      <choiceTwo uid='micro'>

      </choiceTwo>
    </div>

    <div class="container no-top">
      <partTwo uid='micro'>

      </partTwo>
    </div>

    <div class="partthree">
      <partThree uid='micro'>

      </partThree>
    </div>



  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: "",
        content: ""
      }
    },
    methods: {
      goFillData() {
        // 填资料时，根据情况，跳到普通的资料汇总页面或分步骤的资料页面
        // this.$router.push('/loan/dataComm')
        this.$router.push('/loan/dataMust')
      }
    }
  }
</script>
