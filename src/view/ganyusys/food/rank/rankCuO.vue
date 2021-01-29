<template>
<div>
  <nutriRankTitle :idx='4' />
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
            name: "荞麦",
            mg: "14.05",
            src:"./static/CuRank1.png",
            rank: 1
          },
          {
            name: "生蚝",
            mg: "11.50",
            src:"./static/CuRank2.png",
            rank: 2
          },
          {
            name: "牡蛎(海蛎子)",
            mg: "8.13",
            src:"./static/CuRank3.png",
            rank: 3
          },
          {
            name: "蕨菜",
            mg: "5.63",
            src:"./static/CuRank4.png",
            rank: 4
          },
          {
            name: "虾仁",
            mg: "2.33",
            src:"./static/CuRank5.png",
            rank: 5
          },
          {
            name: "猕猴桃",
            mg: "1.87",
            src:"./static/CuRank6.png",
            rank: 6
          },
          {
            name: "小麦胚粉",
            mg: "0.83",
            src:"./static/CuRank7.png",
            rank: 7
          },
          {
            name: "小米",
            mg: "0.54",
            src:"./static/CuRank8.png",
            rank: 8
          },
          {
            name: "扇贝",
            mg: "0.48",
            src:"./static/CuRank9.png",
            rank: 9
          },
          {
            name: "燕麦片",
            mg: "0.45",
            src:"./static/CuRank10.png",
            rank: 10
          },
        ]
      }
    },
  }
</script>
