<template>
<div>
  <nutriRankTitle :idx='2' />
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
            name: "胡麻油",
            mg: "389.9",
            src:"../../../../static/VeRank1.png",
            rank: 1
          },
          {
            name: "豆油",
            mg: "93.08",
            src:"../../../../static/VeRank2.png",
            rank: 2
          },
          {
            name: "芝麻油",
            mg: "68.53",
            src:"../../../../static/VeRank3.png",
            rank: 3
          },
          {
            name: "菜籽油",
            mg: "60.89",
            src:"../../../../static/VeRank4.png",
            rank: 4
          },
          {
            name: "葵花籽油",
            mg: "54.60",
            src:"../../../../static/VeRank5.png",
            rank: 5
          },
          {
            name: "小麦胚粉",
            mg: "23.20",
            src:"../../../../static/CuRank7.png",
            rank: 6
          },
          {
            name: "鸡肉(均值)",
            mg: "14.58",
            src:"../../../../static/VeRank7.png",
            rank: 7
          },
          {
            name: "茄子(紫,长)",
            mg: "7.00",
            src:"../../../../static/VeRank8.png",
            rank: 8
          },
          {
            name: "玉米(黄干)",
            mg: "3.89",
            src:"../../../../static/VeRank9.png",
            rank: 9
          },
          {
            name: "小米",
            mg: "3.63",
            src:"../../../../static/CuRank8.png",
            rank: 10
          },
        ]
      }
    },
  }
</script>
