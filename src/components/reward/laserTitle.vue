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
            push: "/loan/laserList"
          },
          {
            name: "利弊",
            push: "/loan/laserList/laserTwo"
          },
          {
            name: "流程",
            push: "/loan/laserList/laserThree"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
