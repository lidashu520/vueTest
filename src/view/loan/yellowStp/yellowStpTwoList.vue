<template>
  <div class="container">
    <topComponent title='老年黄斑辅助工具'>
      <span class="back" @click="$router.push('/loan')" slot="left">返回</span>
    </topComponent>
    <p class="headBanner"><span class="look" >第二部分<span style="margin-left: 0.5rem">价值观匹配与干预选择</span></span></p>
    <router-view></router-view>
  </div>
</template>
