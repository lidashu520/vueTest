<template>
  <div class="container">
    <topComponent title='老年黄斑辅助工具'>
      <span class="back" @click="$router.push('/loan')" slot="left">返回</span>
    </topComponent>
    <router-view></router-view>
  </div>
</template>
