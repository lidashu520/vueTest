<template>
  <div class="container">
    <p style="position: fixed;" class="headBanner"><span class="look" >青光眼激光治疗</span></p>
    <topComponent title='青光眼辅助工具'>
      <span class="back" @click="$router.push('/loan')" slot="left">返回</span>
    </topComponent>
    <router-view></router-view>
  </div>
</template>

