<template>
<div class="progress-bar">
  <div class="progress"></div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
          cls: "loan",
          name: "问卷",
          push: "/loan"
        },
        {
          cls: "credit",
          name: "信用",
          push: "/credit"
        },
        {
          cls: "user",
          name: "个人中心",
          push: "/user"
        }
        ]
      }
    },
    props: ['idx']
  }
</script>
