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
            name: "知多点",
            push: "/loan/greenEyeHomeList"
          },
          {
            name: "分类",
            push: "/loan/greenEyeHomeList/homeTwo"
          },
          {
            name: "治疗方法",
            push: "/loan/greenEyeHomeList/homeThree"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
