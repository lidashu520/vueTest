<template>
  <div class="container">
    <topComponent title='老年黄斑辅助工具'>
      <span class="back" @click="$router.push('/loan')" slot="left">返回</span>
    </topComponent>
    <p  style="position:fixed"  class="headBanner"><span class="look" >第一部分<span style="margin-left: 0.5rem">权衡营养补充风险获益</span></span></p>
    <router-view></router-view>
  </div>
</template>
