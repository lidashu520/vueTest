<template>
  <ul class="tabsTitle">
    <li  v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "第一天",
            push: "/ganyusys/ganyu/eduation/four"
          },
          {
            name: "第二天",
            push: "/ganyusys/ganyu/eduation/four/two"
          },
          {
            name: "第三天",
            push: "/ganyusys/ganyu/eduation/four/three"
          },
          {
            name: "第四天",
            push: "/ganyusys/ganyu/eduation/four/four"
          },
          {
            name: "第五天",
            push: "/ganyusys/ganyu/eduation/four/five"
          },
          {
            name: "第六天",
            push: "/ganyusys/ganyu/eduation/four/six"
          },
          {
            name: "第七天",
            push: "/ganyusys/ganyu/eduation/four/seven"
          },
        ]
      }
    },
    props: ['idx']
  }
</script>
