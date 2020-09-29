<template>
  <div class="container">
    <topComponent title='青光眼辅助工具'>
      <span class="back" @click="$router.push('/loan')" slot="left">返回</span>
    </topComponent>
        <p  style="position: fixed;" class="headBanner"><span class="look" >青光眼治疗方案比拼</span></p>
    <router-view></router-view>
  </div>
</template>

