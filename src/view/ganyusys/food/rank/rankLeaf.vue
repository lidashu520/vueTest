<template>
<div>
  <nutriRankTitle :idx='0' />
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
            name: "羽衣甘蓝(熟)",
            mg: "20.50",
            src:"../../../../static/VcRank3.png",
            rank: 1
          },
          {
            name: "菠菜(熟)",
            mg: "12.60",
            src:"../../../../static/VcRank10.png",
            rank: 2
          },
          {
            name: "鸡蛋(均值)",
            mg: "6.00",
            src:"../../../../static/LeafRank.png",
            rank: 3
          },
          {
            name: "猕猴桃",
            mg: "5.00",
            src:"../../../../static/VcRank4.png",
            rank: 4
          },
          {
            name: "西兰花",
            mg: "4.00",
            src:"../../../../static/VcRank7.png",
            rank: 5
          },
          {
            name: "玉米(黄干)",
            mg: "2.20",
            src:"../../../../static/VeRank9.png",
            rank: 6
          }
        ]
      }
    },
  }
</script>
