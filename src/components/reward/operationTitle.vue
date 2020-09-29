<template>
  <ul class="tabTitle">
    <li v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "介绍",
            push: "/loan/operationList"
          },
          {
            name: "方式比较",
            push: "/loan/operationList/operationTwo"
          },
        ]
      }
    },
    props: ['idx']
  }
</script>
