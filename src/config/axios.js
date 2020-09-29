import axios from 'axios'

// 配置默认的host,假如你的API host是：http://api.htmlx.club
//dev环境下此行需要注释
axios.defaults.baseURL = 'http://127.0.0.1:8081'
// 添加请求拦截器
  axios.interceptors.request.use(
    config => {
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem('Authorization');
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    });



  // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   　　// 对响应数据做点什么
//   　　return response
//   }, function (error) {
//   　　// 对响应错误做点什么
//   　　return Promise.reject(error)
//   });
