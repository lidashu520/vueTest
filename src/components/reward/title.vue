<template>
  <ul class="tabTitle" style="top: 2.75rem;">
    <li v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "老年黄斑",
            push: "/loan/yellowHomeList"
          },
          {
            name: "营养补充",
            push: "/loan/yellowHomeList/homeTwo"
          },
          {
            name: "工具作用",
            push: "/loan/yellowHomeList/homeThree"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
