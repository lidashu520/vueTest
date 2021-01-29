export const state = {
	creditStatus: {
		userInfo: false,
		userContacts: false,
		userScan: false,
		userPhone: false,
		userWork: false,
		userIdpic: false,
		userFund: false,
		userSB: false,
		userChuxu: false,
		userZhima: false,
		userBank: false,
		userCredit: false,
		userAlipay: false,
		userOhter: false
	},
	ohterPicStatus: {
		otherFile: false,
		salaryFile: false,
		personCreditFile: false,
		socialSecurityFile: false,
		creditCardFile: false,
		workFile: false,
		marriageFile: false,
		businessLicenseFile: false,
		loanAgreementFile: false
	},
	creditDatas: {}, //保存信用中心数据的
	ohterPicDatas: {}, //保存其它资料

	borrowDetail: {}, //记录borrow数据
	borrowArry: [], //模拟borrow指针(真实为被加载进来的数据)

	tempDesCont: '', //借款描述暂存
	tempApplyOpt: '', //借款申请选择暂存

	loanIcons: { //贷款详情页里面的小图标
		micro: false,
		small: false,
		large: false
  },

  // 存储token
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  phone: localStorage.getItem('phone') ? localStorage.getItem('phone') : '',
  // 存储token和phone
  // token: { //贷款详情页里面的小图标
	// 	token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
	// 	phone: localStorage.getItem('phone') ? localStorage.getItem('phone') : ''
  // },
  themecolor:'73BD4C'//默认为20a0ff
}
