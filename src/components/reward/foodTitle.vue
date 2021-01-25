<template>
  <ul class="tabTitle" style="top: 2.75rem;">
    <!-- <li style="padding: 0; margin: 0 0.7625rem 0 0.7625rem; " v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li> -->
    <li v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "营养素",
            push: "/ganyusys/ganyu/eduation"
          },
          {
            name: "饮食指导",
            push: "/ganyusys/ganyu/eduation/two"
          },
          // {
          //   name: "营养参考",
          //   push: "/ganyusys/ganyu/eduation/three"
          // },
          {
            name: "食物搭配",
            push: "/ganyusys/ganyu/eduation/four"
          },
        ]
      }
    },
    props: ['idx']
  }
</script>
