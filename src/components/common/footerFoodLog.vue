<template>
  <div class="footerFoodLog">
    <ul>
      <li v-for='(item,index) of items' :class='[{on:index === idx} ]' @click="$router.push(item.push)">
       <dl>
          <dt><i :class="item.cls"></i></dt>
          <dt>{{item.name}}</dt>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
          cls: "el-icon-food",
          name: "早餐",
          push: "/ganyusys/ganyu/daily/search"
        },
        {
          cls: "el-icon-tableware",
          name: "午餐",
          push: "/ganyusys/ganyu/daily/search"
        },
        {
          cls: "el-icon-dish-1",
          name: "晚餐",
          push: "/ganyusys/ganyu/daily/search"
        },
         {
          cls: "el-icon-chicken",
          name: "加餐",
          push: "/ganyusys/ganyu/daily/search"
        },
        ]
      }
    },
    props: ['idx']
  }
</script>
