<template>
  <ul    class="tabTitle">
    <li v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "疗法",
            push: "/loan/yellowStpTwoList"
          },
          {
            name: "搭配进食",
            push: "/loan/yellowStpTwoList/stpTwo"
          },
          {
            name: "其它",
            push: "/loan/yellowStpTwoList/stpThree"
          },
          {
            name: "最终选择",
            push: "/loan/yellowStpTwoList/stpFour"
          },
        ]
      }
    },
    props: ['idx']
  }
</script>
