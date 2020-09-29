<template>
  <div class="footer">
    <ul>
      <li v-for='(item,index) of items' :class='[ item.cls , {on:index === idx} ]' @click="$router.push(item.push)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
          cls: "system",
          name: "系统介绍",
          push: "/system"
        },
        {
          cls: "loan",
          name: "辅助工具",
          push: "/loan"
        },
        {
          cls: "idpic",
          name: "患者报告结局",
          push: "/idpic"
        },
         {
          cls: "ganyusys",
          name: "干预支持系统",
          push: "/ganyusys"
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
