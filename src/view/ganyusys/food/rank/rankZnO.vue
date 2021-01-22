<template>
<div>
  <nutriRankTitle :idx='3' />
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
            name: "生蚝",
            mg: "71.2",
            src:"../../../../static/CuRank2.png",
            rank: 1
          },
          {
            name: "小麦胚粉",
            mg: "23.2",
            src:"../../../../static/CuRank7.png",
            rank: 2
          },
          {
            name: "扇贝",
            mg: "11.69",
            src:"../../../../static/CuRank9.png",
            rank: 3
          },
          {
            name: "牡蛎(海蛎子)",
            mg: "9.39",
            src:"../../../../static/CuRank3.png",
            rank: 4
          },
          {
            name: "羊肉(瘦)",
            mg: "6.06",
            src:"../../../../static/ZnRank5.png",
            rank: 5
          },
          {
            name: "虾仁",
            mg: "3.82",
            src:"../../../../static/CuRank5.png",
            rank: 6
          },
          {
            name: "牛肉(瘦)",
            mg: "3.71",
            src:"../../../../static/ZnRank7.png",
            rank: 7
          },
          {
            name: "猪肉(瘦)",
            mg: "2.99",
            src:"../../../../static/ZnRank8.png",
            rank: 8
          },
          {
            name: "荞麦",
            mg: "2.90",
            src:"../../../../static/CuRank1.png",
            rank: 9
          },
          {
            name: "燕麦片",
            mg: "2.59",
            src:"../../../../static/CuRank10.png",
            rank: 10
          },
        ]
      }
    },
  }
</script>
