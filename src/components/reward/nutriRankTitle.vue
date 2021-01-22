<template>
  <ul class="tabsRankTitle">
    <li  v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "叶黄素",
            push: "/ganyusys/ganyu/rank/"
          },
          {
            name: "维生素C",
            push: "/ganyusys/ganyu/rank/vc"
          },
          {
            name: "维生素E",
            push: "/ganyusys/ganyu/rank/ve"
          },
          {
            name: "氧化锌",
            push: "/ganyusys/ganyu/rank/zno"
          },
          {
            name: "氧化铜",
            push: "/ganyusys/ganyu/rank/cuo"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
