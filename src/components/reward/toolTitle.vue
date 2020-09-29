<template>
  <ul class="tabTitle">
    <li style="padding: 0; margin: 0 1.2625rem 0 1.2625rem; " v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "眼压",
            push: "/loan/toolList"
          },
          {
            name: "眼药水",
            push: "/loan/toolList/toolTwo"
          },
          {
            name: "激光",
            push: "/loan/toolList/toolThree"
          },
          {
            name: "手术",
            push: "/loan/toolList/toolFour"
          },
        ]
      }
    },
    props: ['idx']
  }
</script>
