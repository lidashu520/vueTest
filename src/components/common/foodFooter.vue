<template>
  <div class="survivalFooter">
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
        items: [
        {
          cls: "stpOne",
          name: "营养评估",
          push: "/ganyusys/pinggu"
        },
        {
          cls: "stpTwo",
          name: "数据分析",
          push: "/ganyusys/analysis"
        },
         {
          cls: "stpThree",
          name: "营养干预",
          push: "/ganyusys/ganyu"
        },
        {
          cls: "stpFour",
          name: "风险管理",
          push: "/ganyusys/manager"
        }
        ]
      }
    },
    props: ['idx']
  }
</script>
