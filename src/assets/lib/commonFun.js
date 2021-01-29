var commonFun={
  validateToken:function(){
    this.$ajax({
      method: 'get',
      url: '/validate',
      }).then(res => {
        if(res.success){
          return
        }
      }).catch(error => {
        this.$dialog("请求超时或网络异常!")
        this.$router.push('/login');
      });
  }

}
export default commonFun;


