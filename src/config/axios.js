import axios from 'axios'
import {Message} from 'element-ui'
// 配置默认的host,假如你的API host是：http://api.htmlx.club
//dev环境下此行需要注释
axios.defaults.baseURL = 'http://192.168.43.118:8081'
// 添加请求拦截器  ajax
  // axios.interceptors.request.use(
  //   config => {
  //     if(localStorage.getItem('token') && localStorage.getItem('phone')) {
  //       config.headers.token = localStorage.getItem('token');
  //       config.headers.phone = localStorage.getItem('phone');
  //       console.log('拦截器。。。。')
  //     }
  //     return config;
  //   },
  //   error => {
  //     this.$dialog("请求超时!");
  //     return Promise.reject(error);
  //   });

//前端展示 不需要请求
axios.interceptors.response.use(function (response) {
  　　// 对响应数据做点什么
  　　return response
  }, function (error) {
  　　// 对响应错误做点什么
  　　return Promise.reject(error)
  });


// 添加响应拦截器
// axios.interceptors.response.use(data => {
//   if (data.status && data.status == 200 && data.data.status == 500) {
//     Message.error({message: data.data.msg});
//     return;
//   }
//   return data.data;
// }, err => {
//   if (err.response.status == 504 || err.response.status == 404) {
//     Message.error({message: '服务器被吃了⊙﹏⊙∥',
//       center: true,
//       offset: 200
//     });
//   } else if (err.response.status == 403) {
//     Message.error({
//       message: '权限不足,请联系管理员!',
//       center: true,
//       offset: 200
//     });
//   } else if (err.response.status == 401) {
//     Message.error({
//       message: err.response.data.msg,
//       center: true,
//       offset: 200
//     });
//   } else {
//     if (err.response.data.msg) {
//       Message.error({
//         message: err.response.data.msg,
//         center: true,
//         offset: 200
//       });
//     }else{
//       Message.error({
//         message:'未知错误!',
//         center: true,
//         offset: 200
//       });
//     }
//   }
// })


