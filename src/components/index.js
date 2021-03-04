// 引入组件
import topComponent from "./common/top";		  // top
import footComponent from "./common/footer";	// footer
import listComponent from "./common/list";		// list
import pageError from "./common/pageError";		// pageError(页面报错)
import noMore from "./common/noMore";			    // noMore(没有更多)
import sendSMS from "./common/sendSMS";			  // sms
import canvasCode from './common/canvasCode';	// 仿图片验证码

import alertKnow from "./popup/alertKnow";		// alert-know(弹出知识)
import alertCheck from "./popup/alertCheck";	// alertCheck(弹出提示-带验证)
import alertTip from "./popup/alertTips";		  // alertCheck(弹出提示-无验证)
import delayTime from "./popup/delay";			  // delay(黑底转圈)

import rewardTitle from './reward/title';		  // reward-title
import rewardList from './reward/list';			  // reward-list

import loanBanner from './loan/top';			   // loan-top
import loanDetail from './loan/detail';			 // loan-detail
import supFooter from './common/supFooter';			 // supFooter
import greenEyeFooter from './common/greenEyeFooter';			 // greenEyeFooter
import survivalFooter from './common/survivalFooter';			 // survivalFooter
import foodFooter from './common/foodFooter';			 // foodFooter
import progressBar from './common/progressBar';      // progressBar


import foodDetail from './loan/food';			 // food-detail
import choiceOne from './loan/choiceone';			 // choice-one
import choiceTwo from './loan/choicetwo';			 // choice-two
import partTwo from './loan/parttwo';         // part-two
import partThree from './loan/partthree';
import yellowStpOneTitle from './reward/yellowStpOneTitle';			  // yellowStpOneTitle
import yellowStpTwoTitle from './reward/yellowStpTwoTitle';			  // yellowStpTwoTitle
import greenEyeTitle from './reward/greenEyeTitle';		  //greenEyeTitle
import medicineTitle from './reward/medicineTitle';		  //medicineTitle
import laserTitle from './reward/laserTitle';		  //laserTitle
import operationTitle from './reward/operationTitle';		  //operationTitle
import planTitle from './reward/planTitle';		  //planTitle
import toolTitle from './reward/toolTitle';		  //toolTitle
import foodTitle from './reward/foodTitle';		  //foodTitle
import foodMatchTitle from './reward/foodMatchTitle';		  //foodMatchTitle
import supBanner from './loan/supTop';			   // sup-top
import hint from './common/hint';			   // hint
import calculate from './common/calculate';			   // calculate
import calculateDefine from './common/calculateDefine';			   // calculateDefine
import footerFoodLog from './common/footerFoodLog';			   // footerFoodLog
import nutriRankTitle from './reward/nutriRankTitle';		  //nutriRankTitle
// import CPdf from './common/CPdf';			   // CPdf


export default {
  topComponent,
  footComponent,
  listComponent,
  pageError,
  noMore,
  sendSMS,
  canvasCode,

  alertKnow,
  alertCheck,
  alertTip,
  delayTime,

  rewardTitle,
  rewardList,

  loanBanner,
  loanDetail,
  supFooter,
  greenEyeFooter,
  survivalFooter,
  foodFooter,
  progressBar,

  //西南医院新增的页面
  foodDetail,
  choiceOne,
  choiceTwo,
  partTwo,
  partThree,
  yellowStpOneTitle,
  yellowStpTwoTitle,
  greenEyeTitle,
  medicineTitle,
  laserTitle,
  operationTitle,
  planTitle,
  toolTitle,
  foodTitle,
  foodMatchTitle,
  supBanner,
  hint,
  calculate,
  footerFoodLog,
  nutriRankTitle
  // CPdf
}
