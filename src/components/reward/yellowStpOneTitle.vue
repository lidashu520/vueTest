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
            name: "包括",
            push: "/loan/yellowStpOneList"
          },
          {
            name: "益处",
            push: "/loan/yellowStpOneList/stpTwo"
          },
          {
            name: "风险",
            push: "/loan/yellowStpOneList/stpThree"
          },
          {
            name: "故事",
            push: "/loan/yellowStpOneList/stpFour"
          },
        ]
      }
    },
    props: ['idx']
  }
</script>
