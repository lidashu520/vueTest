<template>
  <div class="container">
    <topComponent title='患者基本信息'>
      <span class="save" @click='saveInfo' slot='right'>保存</span>
    </topComponent>
    <ul class="formCom">
      <li>
        <label>
          <span>电话号码</span>
          <input type="text" placeholder="请输入电话号码" v-model.trim='data.tel'>
        </label>
      </li>
      <li>
        <label>
          <span>微信</span>
          <input type="text" placeholder="请输入微信号" v-model.trim='data.weixin'>
        </label>
      </li>
      <li>
        <label>
          <span>姓名</span>
          <input type="text" placeholder="请输入真实姓名" v-model.trim='data.name'>
        </label>
      </li>
      <li>
        <label>
          <span>身份证号</span>
          <input type="text" placeholder="请输入本人身份证号" v-model.trim='data.id'>
        </label>
      </li>
      <li class="icon-arrow">
        <span>性别</span>
        <p class="gray" :class='{col6: data.selectSex !== defVal }'>{{ data.selectSex }}</p>
        <select v-model='data.selectSex'>
          <option v-for='(option,index) in optionSex' :key='index' :value='option.txt'>{{option.txt}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>学历</span>
        <p class="gray" :class='{col6: data.selectEdu !== defVal }'>{{ data.selectEdu }}</p>
        <select v-model='data.selectEdu'>
          <option v-for='(option,index) in optionEdu' :key='index' :value='option.txt'>{{option.txt}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>婚姻状况</span>
        <p class="gray" :class='{col6: data.selectMar !== defVal }'>{{ data.selectMar }}</p>
        <select v-model='data.selectMar'>
          <option v-for='(option,index) in optionMar' :key='index' :value='option.txt'>{{option.txt}}</option>
        </select>
      </li>

      <li class="icon-arrow">
        <span>职业</span>
        <p class="gray" :class='{col6: data.type !== defVal }'>{{data.type}}</p>
        <select v-model='data.type'>
          <option v-for='(option,index) of optionType' :key="index" :value="option">{{option}}</option>
        </select>
      </li>
       <li class="icon-arrow">
        <span>医疗支付</span>
        <p class="gray" :class='{col6: data.selectPay !== defVal }'>{{ data.selectPay }}</p>
        <select v-model='data.selectPay'>
          <option v-for='(option,index) in optionPay' :key='index' :value='option.txt'>{{option.txt}}</option>
        </select>
      </li>
      <li>
        <label>
          <span>月均收入(元)</span>
          <input type="number" placeholder="填写数字如：3000" v-model.number='data.salary'>
        </label>
      </li>
      <li class="icon-calendar">
        <label>
          <span>出生日期</span>
          <input type="date" id="myData" v-model='data.checkTime'>
        </label>
      </li>

    </ul>
    <p class="listTop">联系地址</p>
    <ul class="formCom">
      <li class="icon-arrow">
        <span>省</span>
        <p class="gray" :class='{col6: data.selectProy !== defVal }'>{{data.selectProy | optionArrobj(optionProy)}}</p>
        <select v-model='data.selectProy'>
          <option v-for="(option,index) in optionProy" :key='index' :value="option.code">{{option.address}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>市</span>
        <p class="gray" :class='{col6: data.selectCity !== defVal }'>{{data.selectCity  | optionArrobj(optionCity) }}</p>
        <select v-model='data.selectCity'>
          <option v-for="(option,index) in optionCity" :key='index' :value="option.code">{{option.address}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>区</span>
        <p class="gray" :class='{col6: data.selectDist !== defVal }'>{{data.selectDist | optionArrobj(optionDist) }}</p>
        <select v-model='data.selectDist'>
          <option v-for="(option,index) in optionDist" :key='index' :value="option.code">{{option.address}}</option>
        </select>
      </li>
      <li>
        <label>
          <span>详细地址</span>
          <input type="text" placeholder="不必填写省市区" v-model.trim='data.addDetail'>
        </label>
      </li>
    </ul>
    <!-- <p class="listTop">专科情况</p>
      <ul class="formCom form-plus">
      <li>
        <label>
          <span>视力</span>
          <input type="text" v-model.trim='data.eye'>
        </label>
      </li>
      <li>
        <label>
          <span>诊断</span>
          <input type="text" v-model='data.zhenDuan'>
        </label>
      </li>
      <li>
        <label>
          <span>疾病类型</span>
          <input type="text" v-model='data.illType'>
        </label>
      </li>
       <li>
        <label>
          <span>相关情况</span>
          <input type="text" v-model='data.situation'>
        </label>
      </li>
      <li>
        <label>
          <span>患病时间</span>
          <input type="text" v-model='data.illTime'>
        </label>
      </li>
    </ul>

    <p class="listTop questionsWord ">二、营养状况调查</p>
     <div class="questions">
     <dl>
     <dt style="padding-top: 0.325rem"><span>1.  您认为你目前健康状况如何？  </span></dt>
      <el-radio-group v-model="data.radio1">
        <dd class="floatW25">
          <el-radio :label="11"><span class="questionsWord">A.非常好 </span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="12"><span class="questionsWord">B.好 </span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="13"><span class="questionsWord">C.一般 </span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="14"><span class="questionsWord">D.较差 </span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="15"><span class="questionsWord">E.非常差 </span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>2.  您认为你目前的视力状况如何？  </span></dt>
      <el-radio-group v-model="data.radio2">
        <dd class="floatW25">
          <el-radio :label="21"><span class="questionsWord">A.非常好 </span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="22"><span class="questionsWord">B.好 </span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="23"><span class="questionsWord">C.一般 </span></el-radio>
        </dd>
        <dd class="floatW20">
          <el-radio :label="24"><span class="questionsWord">D.较差 </span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="25"><span class="questionsWord">E.非常差 </span></el-radio>
        </dd>
      </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>3.  以下列举的食物哪些是您上周吃过的？(可多选)  </span></dt>
      <dd>
        <el-checkbox-group v-model="data.checkList">
            <dd class="floatW20">
              <el-checkbox label="胡萝卜"><span class="questionsWord">胡萝卜</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="豌豆"><span class="questionsWord">豌豆 </span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox  label="菠菜"><span class="questionsWord">菠菜 </span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="卷心菜"><span class="questionsWord">卷心菜 </span></el-checkbox>
            </dd>
            <dd class="floatW60">
              <el-checkbox label="紫色包包白"><span class="questionsWord">羽衣甘蓝(紫色包包白)</span></el-checkbox>
            </dd>
            <dd class="floatW20">
              <el-checkbox label="西兰花"><span class="questionsWord">西兰花 </span></el-checkbox>
            </dd>
        </el-checkbox-group>
      </dd>
     </dl>
     <br/>
     <br/>
     <br/>
     <br/>
     <dl>
       <dt style="padding-top: 0.325rem"><span>4. 您昨天具体吃了些什么？（具体食物和数量)  </span></dt>
        <el-radio-group>
        <dd>
          <span class="questionsWord">早餐：</span>
          <input class="questionsWord" type="text" placeholder="请填写具体食物和数量" v-model.trim='data.breakfast'>
        </dd>
        <dd>
          <span class="questionsWord">午餐：</span>
          <input class="questionsWord" type="text" placeholder="请填写具体食物和数量" v-model.trim='data.lunch'>
        </dd>
        <dd>
          <span class="questionsWord">晚餐：</span>
          <input class="questionsWord" type="text" placeholder="请填写具体食物和数量" v-model.trim='data.dinner'>
        </dd>
        </el-radio-group>
     </dl>

     <dl>
     <dt style="padding-top: 0.325rem"><span>5. 您昨天具体吃了些什么？（具体食物和数量)  </span></dt>
      <el-radio-group v-model="data.radio5" @change="showSix">
        <dd  class="floatW50">
          <el-radio  :label="51"><span class="questionsWord">A.是（继续回答6题） </span></el-radio>
        </dd>
        <dd  class="floatW50">
          <el-radio  :label="52"><span class="questionsWord">B.否（结束测评） </span></el-radio>
        </dd>
      </el-radio-group>

        <dd>
          <span class="questionsWord">您服用的是什么牌子的营养补充剂呢？</span>
        </dd>
        <dd>
          <input class="questionsWord" type="text" placeholder="请填写营养补充牌子" v-model.trim='data.sign'>
        </dd>

        <dd>
          <span class="questionsWord">您的营养补充剂具体成分是什么呢？</span>
        </dd>
        <dd>
          <input class="questionsWord" type="text" placeholder="请填写营养成分" v-model.trim='data.composition'>
        </dd>
     </dl>

    <dl v-show="isShow">
     <dt  style="padding-top: 0.325rem"><span>6. 您多久服用一次营养补充剂呢？  </span></dt>
      <el-radio-group v-model="data.radio6" @change="showOther">
        <dd class="floatW30">
          <el-radio :label="61"><span class="questionsWord">A.2/日以上 </span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="62"><span class="questionsWord">B.2/日 </span></el-radio>
        </dd>
        <dd class="floatW25">
          <el-radio :label="63"><span class="questionsWord">C.1/日 </span></el-radio>
        </dd>
        <dd class="floatW26">
          <el-radio :label="64"><span class="questionsWord">D.2-3/周 </span></el-radio>
        </dd>
        <dd class="floatW30">
          <el-radio :label="65"><span class="questionsWord">E.1/周 </span></el-radio>
        </dd>
        <dd class="floatW50">
          <el-radio :label="66"><span class="questionsWord">F.其他 </span></el-radio>
          <input v-show="is_Show"  class="questionsWord floatW50" type="text" placeholder="具体多久一次" v-model.trim='data.dinner'>
        </dd>
      </el-radio-group>
     </dl> -->
    <!-- <div class="agreeMent mt20 bold" :class='{ no : !checked }' @click='checked = !checked'>
      我已阅读并同意<span class="blue" @click.stop="goAgreem('/agreement')">《个人信息收集授权协议》</span>
      <input type="checkbox" v-model="checked">
    </div> -->
    </div>
  </div>
</template>
<script>
  //引用json数据
  import cityData from '../../data/city.json'

  export default {
    data() {
      return {
        data: {
          tel:'',
          weixin:'',
          name: '',
          id: '',
          proy: '',
          city: '',
          dist: '',
          selectSex: '请选择',
          selectEdu: '请选择',
          selectMar: '请选择',
          selectPay: '请选择',
          salary: '',
          type: '请选择',
          selectProy: '请选择',
          selectCity: '请选择',
          selectDist: '请选择',
          addDetail: '',
          checkTime: '',
          // radio1: 0,
          // radio2: 0,
          // checkList: [],
          // radio5: 0,
          // radio6: 0,
        },
        tempData: {
          selectProy: '',
          selectCity: '',
          selectDist: ''
        },                // 暂存数据
        // checked: true,   // 是否同意协议
        optionSex: [{
          val: '1',
          txt: '男'
        },
          {
            val: '2',
            txt: '女'
          }
        ],
        optionEdu: [{
          val: '1',
          txt: '高中及以下'
        },
          {
            val: '2',
            txt: '专科'
          },
          {
            val: '3',
            txt: '本科'
          },
          {
            val: '4',
            txt: '硕士及以上'
          }
        ],

        optionMar: [{
          val: '1',
          txt: '未婚'
        },
          {
            val: '2',
            txt: '已婚'
          },
          {
            val: '3',
            txt: '离异'
          }
        ],
        optionPay: [{
          txt: '医保'
        },
          {
            txt: '新城合'
          },
          {
            txt: '新农合'
          }
        ],
        defVal: '请选择',
        optionProy: [],
        optionCity: [],
        optionDist: [],
        optionType: ['国家机关', '公共事业单位', '学校', '医院', '银行', '全球500强', '上市公司', '国企', '非营利性公益组织', '民营企业', '自由职业者', '个体户','其它'],
        isShow: false,
        is_Show: false
      }
    },
    methods: {
      saveInfo() {
        let checkName = /^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/,
          checkId = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,
          checkAdd = /[\u4E00-\u9FA5]{2,}/,
          checkTel = /^[1][345678][0-9]{9}$/;
        //保存信息
        // if (this.checked === false) this.$dialog("请阅读并同意协议");
        if (checkTel.test(this.data.tel) === false) this.$dialog("电话格式错误");
        else if (checkName.test(this.data.name) === false) this.$dialog("姓名格式错误");
        else if (checkId.test(this.data.id) === false) this.$dialog("身份证格式错误");
        else if (this.data.selectSex === this.defVal) this.$dialog("请选择您的性别");
        else if (this.data.selectEdu === this.defVal) this.$dialog("请选择您的学历");
        else if (this.data.selectMar === this.defVal) this.$dialog("请选择婚姻状况");
        else if (this.data.type === this.defVal) this.$dialog("请选择职业类型");
        else if (this.data.selectPay === this.defVal) this.$dialog("请选择医疗支付类型");
        else if (this.data.salary === '') this.$dialog("月薪不能为空");
        else if (this.data.selectProy === this.defVal) this.$dialog("请选择目前所在省");
        else if (this.data.selectCity === this.defVal || this.data.selectCity === undefined) this.$dialog("请选择目前所在市");
        else if (this.data.selectDist === this.defVal || this.data.selectDist === undefined) this.$dialog("请选择目前所在区");
        else if (checkAdd.test(this.data.addDetail) === false) this.$dialog("详细地址格式错误");
        else if (this.data.checkTime === '') this.$dialog("请选择出生日期");
        else {
          // this.data.checkList = [];
          // this.data.checkList = this.checkList;
          this.$store.commit('uploadCreditStatu', {
            name: 'userInfo',
            val: true
          });
          this.$store.commit('uploadCreditData', {
            name: 'userInfo',
            val: JSON.stringify(this.data)
          });
          this.$dialog(["保存成功", "true"]);
          setTimeout(() => {
            this.$router.back()
          }, 2000)
        }
      },
      setCityList() {
        //当选择“省”后，开始组织数据到城市
        this.optionCity = this.replyData(this.data.selectProy);
        if (this.data.selectProy !== this.tempData.selectProy) {
          this.data.selectCity = '';
          this.data.selectDist = '';
          this.optionDist = []
        }
      },
      setDistList() {
        //当选择“市”后，开始组织数据到县/区 (如果遇到空的情况就返回无)
        this.optionDist = this.replyData(this.data.selectCity).length === 0 ? [{
          "code": "无",
          "address": "无"
        }] : this.replyData(this.data.selectCity);
        if (this.data.selectCity !== this.tempData.selectCity) {
          this.data.selectDist = ''
        }
      },
      replyData(name) {
        // 组织数据 --> [{"code":"xxx","address":"xxx"},{..}...]
        let data = cityData[name];
        let newArr = [];
        for (let arr in data) {
          let obj = {};
          obj['code'] = arr;
          obj['address'] = data[arr];
          newArr.push(obj)
        }
        return newArr
      },

      // showSix() {
      //   console.log('data',this.data.radio5)
      //   if(this.data.radio5 === 52) this.isShow = false
      //   if(this.data.radio5 === 51) this.isShow = true
      // },

      // showOther() {
      //   console.log('data',this.data.radio6)
      //   if(this.data.radio6 === 66) {
      //     this.is_Show = true
      //   }else{
      //     this.is_Show = false
      //   }
      // }

    },
    filters: {
      optionArrobj: function (value, obj) {
        let newObj = {};
        if (value === '请选择' || value === '') return value;
        else {
          for (let i = 0; i < obj.length; i++) newObj[obj[i].code] = obj[i].address;
          return newObj[value]
        }
      }
    },
    watch: {
      "data.selectProy": "setCityList",
      "data.selectCity": "setDistList"
    },

    mounted() {
      //页面加载时
      if (this.$store.state.creditStatus['userInfo'] === true) {
        if (this.$store.state.creditDatas['userInfo'] !== undefined) {
          this.data = JSON.parse(this.$store.state.creditDatas['userInfo'])
        } else {
          // 如果vuex中未存储数据则发送ajax
          console.log('发送ajax')
        }
      }
      this.optionProy = cityData["86"]

      if(this.data.selectProy !== '' && this.data.selectProy !== '请选择'){
        this.tempData.selectProy = this.data.selectProy
        this.optionCity = this.replyData(this.data.selectProy);
      }
     if(this.data.selectCity !== '' && this.data.selectCity !== '请选择'){
       this.tempData.selectCity = this.data.selectCity
      this.optionDist = this.replyData(this.data.selectCity);
      }
    }
  }
</script>
