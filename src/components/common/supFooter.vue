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
          cls: "supHome",
          name: "简介",
          push: "/loan/yellowHomeList"
        },
        {
          cls: "supOneStp",
          name: "第一部分",
          push: "/loan/yellowStpOneList"
        },
        {
          cls: "supTwoStp",
          name: "第二部分",
          push: "/loan/yellowStpTwoList"
        },
         {
          cls: "supThreeStp",
          name: "第三部分",
          push: "/loan/yellowStpThreeList"
        },
        {
          cls: "supFourStp",
          name: "第四部分",
          push: "/loan/yellowStpFourList"
        }
        ]
      }
    },
    props: ['idx']
  }
</script>
