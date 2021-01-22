<template>
  <div>
  <topComponent title='营养素排行榜'>
    <span class="back" @click="$router.push('/ganyusys/ganyu/')" slot="left">返回</span>
  </topComponent>
   <router-view></router-view>
  </div>
</template>

