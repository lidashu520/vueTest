<template>
  <div class="container">
    <topComponent title='老年黄斑辅助工具'>
      <span class="back" @click="$router.push('/loan')" slot="left">返回</span>
    </topComponent>
    <p class="headBanner"><span class="look" >第四部分<span style="margin-left: 0.5rem">做出决策</span></span></p>
    <!-- <router-view></router-view> -->
    <!-- <div class="rewardWarp"> -->
      <!-- <yellowStpThreeTitle :idx='0'></yellowStpThreeTitle> -->
      <div style="margin-top: 0.02rem">

        <div class="partThreeSelect">
            <dl>
            <dt style="padding-top: 0.625rem"><span class="yellowColor">第四部分：</span><span class="partGreenColor">现在，您的选择是？请选择一项  </span></dt>

              <el-radio-group v-model="form.radio1">
                <dd>
                  <el-radio :label="1"><span class="partWord">我决定采用营养补充</span></el-radio>
                </dd>

                <dd>
                  <el-radio :label="2"><span class="partWord">我决定不采用营养补充</span></el-radio>
                </dd>

                <dd>
                  <el-radio :label="3"><span class="partWord">我还无法决定，需要了解更多信息</span></el-radio>
                </dd>

                <dd>
                  <el-radio :label="4"><span class="partWord">我还无法决定，需要与主治医生或家庭成员</span>
                  <p class="partWord" style="margin-left:1rem">(或其他人)商量</p>
                  </el-radio>
                </dd>
              </el-radio-group>
            </dl>
        </div>
      </div>
      <div  class="btnWarp" >
        <span :class='this.cls'  @click='logIn'>提交</span>
      </div>
      <supFooter :idx='4'></supFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {},
        form:{
          radio1: 0
        },
        cls: 'subBtn',
        isSubmitted: true
      }
    },
    methods: {
      logIn: function() {
        if (this.isSubmitted) {
          if (this.form.radio1 === 0) this.$dialog("请作答题目");
          else {
            this.$dialog("提交完成");
            this.cls = "subBtn grayBg"
            this.isSubmitted = false
          }
        }
      }
    }

  }
</script>
