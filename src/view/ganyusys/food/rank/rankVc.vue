<template>
<div>
  <nutriRankTitle :idx='1' />
  <div class="infinite-list-wrapper" style="margin:0rem 0.5rem 0rem 23%;overflow:auto;">
    <ul>
      <li class="food-item"  v-for='item in items' style="margin-top: 0px">
        <p style="width:11%;text-align: center;color:#EA7F21;font-size:0.8025rem">{{item.rank}}</p>
        <div class="icon" >
          <img width="80" height="80" :src='item.src' />
        </div>
        <div class="content">
          <h6 class="name">{{item.name}}</h6>
          <p class="desc"><span style="color:red; font-size: 0.5525rem;">{{item.mg}}</span> <span style="color:gray; font-size: 0.5525rem;">毫克/100克</span></p>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 10,
        items: [
          {
            name: "酸枣",
            mg: "900.00",
            src:"./static/VcRank1.png",
            rank: 1
          },
          {
            name: "红椒",
            mg: "130.00",
            src:"./static/VcRank2.png",
            rank: 2
          },
          {
            name: "羽衣甘蓝(熟)",
            mg: "63.00",
            src:"./static/VcRank3.png",
            rank: 3
          },
          {
            name: "猕猴桃",
            mg: "62.00",
            src:"./static/VcRank4.png",
            rank: 4
          },
          {
            name: "花菜",
            mg: "61.00",
            src:"./static/VcRank5.png",
            rank: 5
          },
          {
            name: "青椒",
            mg: "59.00",
            src:"./static/VcRank6.png",
            rank: 6
          },
          {
            name: "西兰花",
            mg: "51.00",
            src:"./static/VcRank7.png",
            rank: 7
          },
          {
            name: "草莓",
            mg: "47.00",
            src:"./static/VcRank8.png",
            rank: 8
          },
          {
            name: "菜心",
            mg: "44.00",
            src:"./static/VcRank9.png",
            rank: 9
          },
          {
            name: "菠菜(熟)",
            mg: "32.00",
            src:"./static/VcRank10.png",
            rank: 10
          },
        ]
      }
    },
  }
</script>
