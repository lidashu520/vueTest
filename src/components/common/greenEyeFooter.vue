<template>
  <div class="greenEyeFooter">
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
          cls: "knowledge",
          name: "青光眼",
          push: "/loan/greenEyeHomeList"
        },
        {
          cls: "medicine",
          name: "药物治疗",
          push: "/loan/medicineList"
        },
        {
          cls: "laser",
          name: "激光治疗",
          push: "/loan/laserList"
        },
         {
          cls: "operation",
          name: "手术治疗",
          push: "/loan/operationList"
        },
        {
          cls: "plan",
          name: "方案比拼",
          push: "/loan/planList"
        },
        {
          cls: "tool",
          name: "工具",
          push: "/loan/toolList"
        }
        ]
      }
    },
    props: ['idx']
  }
</script>
