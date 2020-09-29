<template>
  <div class="container">
    <topComponent title='青光眼辅助工具'>
      <span class="back" @click="$router.push('/loan')" slot="left">返回</span>
    </topComponent>
    <div style="position: fixed;" class="headBanner">
        <p><span class="look" >青光眼工具</span></p>
    </div>
    <router-view></router-view>
  </div>
</template>

