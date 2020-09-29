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
          name: "第一部分",
          push: "/idpic/survival"
        },
        {
          cls: "stpTwo",
          name: "第二部分",
          push: "/idpic/survival/stpTwo"
        },
         {
          cls: "stpThree",
          name: "第三部分",
          push: "/idpic/survival/stpThree"
        },
        {
          cls: "stpFour",
          name: "第四部分",
          push: "/idpic/survival/stpFour"
        }
        ]
      }
    },
    props: ['idx']
  }
</script>
