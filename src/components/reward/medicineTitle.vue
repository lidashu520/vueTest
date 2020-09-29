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
            push: "/loan/medicineList"
          },
          {
            name: "利弊",
            push: "/loan/medicineList/medicineTwo"
          },
          {
            name: "眼药水方法",
            push: "/loan/medicineList/medicineThree"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
