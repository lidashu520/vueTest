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
            name: "比拼1",
            push: "/loan/planList"
          },
          {
            name: "比拼2",
            push: "/loan/planList/planTwo"
          },
          {
            name: "方案选择",
            push: "/loan/planList/planThree"
          },
        ]
      }
    },
    props: ['idx']
  }
</script>
