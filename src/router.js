import home from './components/home';

export default [{
  path: '/',
  component: home,
  children: [{
    path: '/',
    redirect: '/login'
  },
    {
      path: '/login',
      meta: {
        title: '登录'
      },
      component: resolve => require(['./view/other/login'], resolve)
    },
    {
      path: '/reg',
      meta: {
        title: '注册'
      },
      component: resolve => require(['./view/other/reg'], resolve)
    },
    {
      path: '/forget',
      meta: {
        title: '忘记密码'
      },
      component: resolve => require(['./view/other/forget'], resolve)
    },
    {
      path: 'user',
      component: home,
      children: [{
        path: '/',
        meta: {
          title: '个人中心'
        },
        component: resolve => require(['./view/user/index'], resolve)
      },
        {
          path: 'info',
          meta: {
            title: '个人信息'
          },
          component: resolve => require(['./view/user/info'], resolve)
        },
        {
          path: 'helpList',
          meta: {
            title: '帮助中心'
          },
          component: resolve => require(['./view/user/helpList'], resolve)
        },
        {
          path: 'helpDetail/:index',
          meta: {
            title: '疑问解答'
          },
          component: resolve => require(['./view/user/helpDetail'], resolve)
        },
        {
          path: 'feedback',
          meta: {
            title: '意见反馈'
          },
          component: resolve => require(['./view/user/feedback'], resolve)
        },
        {
          path: 'aboutUs',
          meta: {
            title: '关于我们'
          },
          component: resolve => require(['./view/user/aboutUs'], resolve)
        }
      ]
    },

    {
      path: 'loan',
      component: home,
      children: [{
        path: '/',
        meta: {
          title: '辅助工具'
        },
        component: resolve => require(['./view/loan/index'], resolve)
      },
        {
          path: 'micro',
          meta: {
            title: '老年黄斑变性'
          },
          component: resolve => require(['./view/loan/loanMicro'], resolve)
        },
        // {
        //   path: 'greenEye',
        //   meta: {
        //     title: '青光眼'
        //   },
        //   component: resolve => require(['./view/loan/loanGreenEye'], resolve)
        // },
        {
          path: 'large',
          meta: {
            title: '福利借款'
          },
          component: resolve => require(['./view/loan/loanLarge'], resolve)
        },
        {
          path: 'sureMsg',
          meta: {
            title: '确认信息'
          },
          component: resolve => require(['./view/loan/sureMsg'], resolve)
        },
        {
          path: 'sureMore',
          meta: {
            title: '借款详情'
          },
          component: resolve => require(['./view/loan/sureMore'], resolve)
        },
        //老年黄斑变性圆框
        {
          path: 'yellowHomeList',
          component: resolve => require(['./view/loan/yellowStp/toolYellowHomeList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '工具简介'
            },
            component: resolve => require(['./view/loan/yellowStp/toolYellowHomeOne'], resolve)
          },
            {
              // path: 'used',
              path: 'homeTwo',
              meta: {
                title: '关系'
              },
              component: resolve => require(['./view/loan/yellowStp/toolYellowHomeTwo'], resolve)
            },
            {
              // path: 'expired',
              path: 'homeThree',
              meta: {
                title: '营养补充'
              },
              component: resolve => require(['./view/loan/yellowStp/toolYellowHomeThree'], resolve)
            }
          ]
        },
        {
          path: 'yellowStpOneList',
          component: resolve => require(['./view/loan/yellowStp/yellowStpOneList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '包括'
            },
            component: resolve => require(['./view/loan/yellowStp/toolYellowStp1_One'], resolve)
          },
            {
              path: 'stpTwo',
              meta: {
                title: '益处'
              },
              component: resolve => require(['./view/loan/yellowStp/toolYellowStp1_Two'], resolve)
            },
            {
              path: 'stpThree',
              meta: {
                title: '风险'
              },
              component: resolve => require(['./view/loan/yellowStp/toolYellowStp1_Three'], resolve)
            },
            {
              path: 'stpFour',
              meta: {
                title: '患者故事'
              },
              component: resolve => require(['./view/loan/yellowStp/toolYellowStp1_Four'], resolve)
            }
          ]
        },
        {
          path: 'yellowStpTwoList',
          component: resolve => require(['./view/loan/yellowStp/yellowStpTwoList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '用药理解把握'
            },
            component: resolve => require(['./view/loan/yellowStp/toolYellowStp2_One'], resolve)
          }
          // {
          //   path: 'stpTwo',
          //   meta: {
          //     title: '选择2'
          //   },
          //   component: resolve => require(['./view/loan/yellowStp/toolYellowStp2_Two'], resolve)
          // },
          // {
          //   path: 'stpThree',
          //   meta: {
          //     title: '选择3'
          //   },
          //   component: resolve => require(['./view/loan/yellowStp/toolYellowStp2_Three'], resolve)
          // },
          //   {
          //     path: 'stpFour',
          //     meta: {
          //       title: '终选择'
          //     },
          //     component: resolve => require(['./view/loan/yellowStp/toolYellowStp2_Four'], resolve)
          //   }
          ]
        },
          // stp3
        {
          path: 'yellowStpThreeList',
          component: resolve => require(['./view/loan/yellowStp/yellowStpThreeList'], resolve)
        },
            // stp4
        {
          path: 'yellowStpFourList',
          component: resolve => require(['./view/loan/yellowStp/yellowStpFourList'], resolve)
        },

        //青光眼
        {
          path: 'greenEyeHomeList',
          component: resolve => require(['./view/loan/greenEyeStp/greenEyeHomeList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '青光眼知多点'
            },
            component: resolve => require(['./view/loan/greenEyeStp/greenEyeHomeOne'], resolve)
          },
            {
              path: 'homeTwo',
              meta: {
                title: '青光眼分类'
              },
              component: resolve => require(['./view/loan/greenEyeStp/greenEyeHomeTwo'], resolve)
            },
            {
              path: 'homeThree',
              meta: {
                title: '青光眼治疗方法'
              },
              component: resolve => require(['./view/loan/greenEyeStp/greenEyeHomeThree'], resolve)
            },
          ]
        },

        //青光眼药物治疗
        {
          path: 'medicineList',
          component: resolve => require(['./view/loan/greenEyeStp/medicineList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '药物治疗介绍'
            },
            component: resolve => require(['./view/loan/greenEyeStp/medicineOne'], resolve)
          },
            {
              path: 'medicineTwo',
              meta: {
                title: '药物治疗利弊'
              },
              component: resolve => require(['./view/loan/greenEyeStp/medicineTwo'], resolve)
            },
            {
              path: 'medicineThree',
              meta: {
                title: '眼药水方法'
              },
              component: resolve => require(['./view/loan/greenEyeStp/medicineThree'], resolve)
            },
          ]
        },

        //青光眼激光治疗
        {
          path: 'laserList',
          component: resolve => require(['./view/loan/greenEyeStp/laserList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '激光治疗介绍'
            },
            component: resolve => require(['./view/loan/greenEyeStp/laserOne'], resolve)
          },
            {
              path: 'laserTwo',
              meta: {
                title: '激光治疗利弊'
              },
              component: resolve => require(['./view/loan/greenEyeStp/laserTwo'], resolve)
            },
            {
              path: 'laserThree',
              meta: {
                title: '激光治疗流程'
              },
              component: resolve => require(['./view/loan/greenEyeStp/laserThree'], resolve)
            },
          ]
        },

        //青光眼手术治疗
        {
          path: 'operationList',
          component: resolve => require(['./view/loan/greenEyeStp/operationList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '手术治疗介绍'
            },
            component: resolve => require(['./view/loan/greenEyeStp/operationOne'], resolve)
          },
            {
              path: 'operationTwo',
              meta: {
                title: '手术方式比较'
              },
              component: resolve => require(['./view/loan/greenEyeStp/operationTwo'], resolve)
            },
          ]
        },

         //青光眼手术治疗方案比拼
         {
          path: 'planList',
          component: resolve => require(['./view/loan/greenEyeStp/planList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '手术方案比拼1'
            },
            component: resolve => require(['./view/loan/greenEyeStp/planOne'], resolve)
          },
            {
              path: 'planTwo',
              meta: {
                title: '手术方案比拼2'
              },
              component: resolve => require(['./view/loan/greenEyeStp/planTwo'], resolve)
            },
            {
              path: 'planThree',
              meta: {
                title: '手术方案选择'
              },
              component: resolve => require(['./view/loan/greenEyeStp/planThree'], resolve)
            },
          ]
        },

        //青光眼工具
        {
          path: 'toolList',
          component: resolve => require(['./view/loan/greenEyeStp/toolList'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '眼压'
            },
            component: resolve => require(['./view/loan/greenEyeStp/toolOne'], resolve)
          },
            {
              path: 'toolTwo',
              meta: {
                title: '眼药水'
              },
              component: resolve => require(['./view/loan/greenEyeStp/toolTwo'], resolve)
            },
            {
              path: 'toolThree',
              meta: {
                title: '激光'
              },
              component: resolve => require(['./view/loan/greenEyeStp/toolThree'], resolve)
            },
			{
              path: 'toolFour',
              meta: {
                title: '手术'
              },
              component: resolve => require(['./view/loan/greenEyeStp/toolFour'], resolve)
            },
          ]
        },

      ]
    },

    {
      path: 'credit',
      component: home,
      children: [
        {
          path: 'bankDetail',
          meta: {
            title: '银行卡详情'
          },
          component: resolve => require(['./view/credit/bankDetail'], resolve)
        },
        {
          path: 'mobile',
          meta: {
            title: '手机认证'
          },
          component: resolve => require(['./view/credit/mobile'], resolve)
        },
        {
          path: 'sbsqCity',
          meta: {
            title: '选择城市'
          },
          component: resolve => require(['./view/credit/sbsqCity'], resolve)
        },
        {
          path: 'otherData',
          meta: {
            title: '其它资料'
          },
          component: resolve => require(['./view/credit/dataOther'], resolve)
        },
        {
          path: 'uploadPic/:param',
          meta: {
            title: '上传图片'
          },
          component: resolve => require(['./view/credit/dataUpload'], resolve)
        }
      ]
    },

    {
      path: 'creditReport',
      component: home,
      children: [{
        path: '/',
        meta: {
          title: '简版个人征信报告'
        },
        component: resolve => require(['./view/credit/report/index'], resolve)
      },
        {
          path: 'answers',
          meta: {
            title: '身份验证'
          },
          component: resolve => require(['./view/credit/report/answers'], resolve)
        },
        // 有用到
        {
          path: 'cover',
          meta: {
            title: '征信报告封面'
          },
          component: resolve => require(['./view/credit/report/cover'], resolve)
        },
        {
          path: 'list',
          meta: {
            title: '征信报告列表'
          },
          component: resolve => require(['./view/credit/report/list'], resolve)
        },
//    有用到
        {
          path: 'detail',
          meta: {
            title: '征信报告详情'
          },
          component: resolve => require(['./view/credit/report/detail'], resolve)
        },
        {
          path: 'helps',
          meta: {
            title: '疑问解答'
          },
          component: resolve => require(['./view/credit/report/helps'], resolve)
        },
        {
          path: 'regHow',
          meta: {
            title: '如何注册账号'
          },
          component: resolve => require(['./view/credit/report/regHow'], resolve)
        },
        {
          path: 'regStep1',
          meta: {
            title: '填写信息'
          },
          component: resolve => require(['./view/credit/report/regStep1'], resolve)
        },
        {
          path: 'regStep2',
          meta: {
            title: '补充信息'
          },
          component: resolve => require(['./view/credit/report/regStep2'], resolve)
        }
      ]
    },

    {
      path: 'idpic',
      component: home,
      children: [
       {
        path: '/',
        meta: {
          title: '患者自我报告'
        },
        component: resolve => require(['./view/idpic/idpicIndex'], resolve)
      },
      {
        path: 'check',
        meta: {
          title: '症状测评'
        },
        component: resolve => require(['./view/idpic/check'], resolve)
      },
      {
        path: 'ceping',
        meta: {
          title: '生存质量测评'
        },
        component: resolve => require(['./view/idpic/ceping'], resolve),
      },
      {
        path: 'hint',
        meta: {
          title: '生存质量测评提示'
        },
        component: resolve => require(['./view/idpic/hint'], resolve),
      },
      {
        path: 'other',
        meta: {
          title: '其他症状'
        },
        component: resolve => require(['./view/idpic/ceping/other/index'], resolve),
      },
      {
        path: 'other1',
        meta: {
          title: '疼痛',
        },
        component: resolve => require(['./view/idpic/ceping/other/1'], resolve)
      },
      {
        path: 'other2',
        meta: {
          title: '恶心呕吐',
        },
        component: resolve => require(['./view/idpic/ceping/other/2'], resolve)
      },
      {
        path: 'other3',
        meta: {
          title: '头晕',
        },
        component: resolve => require(['./view/idpic/ceping/other/3'], resolve)
      },
      {
        path: 'other4',
        meta: {
          title: '抑郁',
        },
        component: resolve => require(['./view/idpic/ceping/other/4'], resolve)
      },
      {
        path: 'other5',
        meta: {
          title: '焦虑',
        },
        component: resolve => require(['./view/idpic/ceping/other/5'], resolve)
      },
      {
        path: 'other6',
        meta: {
          title: '匹兹堡睡眠质量',
        },
        component: resolve => require(['./view/idpic/ceping/other/6'], resolve)
      },
      {
        path: 'other7',
        meta: {
          title: '认知评估',
        },
        component: resolve => require(['./view/idpic/ceping/other/7'], resolve)
      },
      {
        path: 'other8',
        meta: {
          title: '照顾着压力和负担',
        },
        component: resolve => require(['./view/idpic/ceping/other/8'], resolve)
      },
      {
        path: 'other9',
        meta: {
          title: '其他',
        },
        component: resolve => require(['./view/idpic/ceping/other/9'], resolve)
      },
      // {
      //   path: 'otherj',
      //   meta: {
      //     title: 'J、角色表现',
      //   },
      //   component: resolve => require(['./view/idpic/ceping/other/j'], resolve)
      // },
      {
        path: 'survival',
        meta: {
          title: '生存质量测评'
        },
        component: resolve => require(['./view/idpic/survival/suivivalList'], resolve)
      },
      {
        path: 'stpOne',
        meta: {
          title: '视功能量表Pro'
        },
        component: resolve => require(['./view/idpic/survival/stpOne'], resolve)
      },
      {
        path: 'stpTwo',
        meta: {
          title: '视功能量表'
        },
        component: resolve => require(['./view/idpic/survival/stpTwo'], resolve)
      },
      // {
      //   path: 'survival',
      //   component: resolve => require(['./view/idpic/survival/index'], resolve),
      //   meta: {
      //     title: '其他症状'
      //   },
      // },
      ]
    },
    {
      path: '/ganyusys',
      component: home,
      children: [{
        path: '/',
        meta: {
          title: '干预支持系统'
        },
        component: resolve => require(['./view/ganyusys/ganyusysIndex'], resolve)
      },
      // {
      //   path: 'yingYang',
      //   meta: {
      //     title: '营养含量'
      //   },
      //   component: resolve => require(['./view/ganyusys/yingYang'], resolve)
      // },
      {
        path: 'pinggu',
        component: resolve => require(['./view/ganyusys/food/pingguIndex'], resolve),
        children: [{
          path: '/',
          meta: {
            title: '状况测评'
          },
          component: resolve => require(['./view/ganyusys/food/pingguList'], resolve)
        },
        {
          path: 'one',
          meta: {
            title: '态度和行为测评'
          },
          component: resolve => require(['./view/ganyusys/food/pingguOne'], resolve)
        },
        {
          path: 'two',
          meta: {
            title: '态度和行为测评'
          },
          component: resolve => require(['./view/ganyusys/food/pingguTwo'], resolve)
        },
          {
            path: 'three',
            meta: {
              title: '营养知识测评'
            },
            component: resolve => require(['./view/ganyusys/food/pingguThree'], resolve)
          },
          {
            path: 'four',
            meta: {
              title: '营养结果评估'
            },
            component: resolve => require(['./view/ganyusys/food/pingguFour'], resolve)
          }
        ]
      },
      {
        path: 'analysis',
        component: resolve => require(['./view/ganyusys/food/analysisIndex'], resolve),
        children: [{
          path: '/',
          meta: {
            title: '营养标准'
          },
          component: resolve => require(['./view/ganyusys/food/analysisOne'], resolve)
        },
        ]
      },
      {
        path: 'ganyu',
        component: resolve => require(['./view/ganyusys/food/ganyuIndex'], resolve),
        children: [{
          path: '/',
          meta: {
            title: '营养处方'
          },
          component: resolve => require(['./view/ganyusys/food/ganyuOne'], resolve)
        },
        {
          path: 'eduation',
          component: resolve => require(['./view/ganyusys/food/ganyuTwo'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '营养素'
            },
            component: resolve => require(['./view/ganyusys/food/education/One'], resolve)
          },
          {
            path: 'two',
            meta: {
              title: '饮食指导'
            },
            component: resolve => require(['./view/ganyusys/food/education/Two'], resolve)
          },
          {
            path: 'three',
            meta: {
              title: '营养参考'
            },
            component: resolve => require(['./view/ganyusys/food/education/Three'], resolve)
          },
          {
            path: 'four',
            meta: {
              title: '食物搭配'
            },
            component: resolve => require(['./view/ganyusys/food/education/Four'], resolve),
            children: [{
              path: '/',
              meta: {
                title: '第一天'
              },
              component: resolve => require(['./view/ganyusys/food/education/educationOne'], resolve)
            },
            {
              path: 'two',
              meta: {
                title: '第二天'
              },
              component: resolve => require(['./view/ganyusys/food/education/educationTwo'], resolve)
            },
            {
              path: 'three',
              meta: {
                title: '第三天'
              },
              component: resolve => require(['./view/ganyusys/food/education/educationThree'], resolve)
            },
            {
              path: 'four',
              meta: {
                title: '第四天'
              },
              component: resolve => require(['./view/ganyusys/food/education/educationFour'], resolve)
            },
            {
              path: 'five',
              meta: {
                title: '第五天'
              },
              component: resolve => require(['./view/ganyusys/food/education/educationFive'], resolve)
            },
            {
              path: 'six',
              meta: {
                title: '第六天'
              },
              component: resolve => require(['./view/ganyusys/food/education/educationSix'], resolve)
            },
            {
              path: 'seven',
              meta: {
                title: '第七天'
              },
              component: resolve => require(['./view/ganyusys/food/education/educationSeven'], resolve)
            }
            ]
          }
          ]
        },
        {
          path: 'notice',
          meta: {
            title: '复诊提醒'
          },
          component: resolve => require(['./view/ganyusys/food/ganyuThree'], resolve)
        },
        // {
        //   path: 'daily',
        //   meta: {
        //     title: '每日营养测评'
        //   },
        //   component: resolve => require(['./view/ganyusys/food/daily/foodList'], resolve)
        // },
        {
          path: 'daily',
          component: resolve => require(['./view/ganyusys/food/ganyuTwo'], resolve),
          children: [{
            path: '/',
            meta: {
              title: '每日营养记录'
            },
            component: resolve => require(['./view/ganyusys/food/daily/foodAnalysis'], resolve),
          },
          {
            path: 'search',
            meta: {
              title: '每日营养食物列表'
            },
            component: resolve => require(['./view/ganyusys/food/daily/foodList'], resolve),
          },
          {
            path: 'detail',
            meta: {
              title: '每日营养分析'
            },
            component: resolve => require(['./view/ganyusys/food/daily/foodAnalysisDetail'], resolve),
          },
          ]
        }
      ]
      },
      {
        path: 'manager',
        component: resolve => require(['./view/ganyusys/food/managerIndex'], resolve),
        children: [{
          path: '/',
          meta: {
            title: '历史查询与预警'
          },
          component: resolve => require(['./view/ganyusys/food/managerOne'], resolve)
        },
        ]
      },
    ]
    },

    {
      path: '/system',
      component: home,
      children: [{
        path: '/',
        meta: {
          title: '系统介绍'
        },
        component: resolve => require(['./view/system/systemIndex'], resolve)
      }]
    },

  ]
},

  {
    path: '*',
    meta: {
      title: '页面不存在'
    },
    component: resolve => require(['./view/other/error'], resolve)
  }
]
