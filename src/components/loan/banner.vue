<template>
  <div class="indexBanner" id='banner' ref='banner'>
    <ul ref='ul' style="margin-left: 0;">
      <li v-for='data of lists'><img :src="data.img" :alert='data.tit'/></li>
    </ul>
    <div class="tag" id="bannerTag">
      <template v-for='(data,index) of lists'>
        <span :class="{on:data.isOn}">{{index + 1}}</span>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
       lists: [
          {
            tit: '',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582466546617&di=1cbc1f967787640897af47ad3b06b676&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180710%2F2060aa43837f4e809f78a6332daa6eeb.jpeg',
            isOn: false,
            href: 'http://www.baidu.com'
          },
          {
            tit: '',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582466546615&di=db5514970d45b06bcbcf60375a16f72a&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn18%2F160%2Fw635h325%2F20180721%2F86f9-hfqtahi4220784.jpg',
            isOn: false,
            href: 'http://www.baidu.com'
          }
          // {
          //   tit: '',
          //   img: 'http://bashny.net/uploads/images/00/00/13/2013/05/08/07d35eea8f.jpg',
          //   isOn: false,
          //   href: 'http://www.baidu.com'
          // }
          // {
          //   tit: '',
          //   img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582469955917&di=36fda548213a87a653a5d7f0643cb6b4&imgtype=0&src=http%3A%2F%2Fs1.1zoom.me%2Fprev2%2F502%2F501653.jpg',
          //   isOn: false,
          //   href: 'http://www.baidu.com'
          // }
        ],

        hasTouch: 'ontouchstart' in window,     // 接下来三个都是根据手势开始事件是否存在来自定义事件名称
        goTouchStart: 'ontouchstart' in window ? 'touchstart' : 'mousedown',
        goTouchMove: 'ontouchstart' in window ? 'touchmove' : 'mousemove',
        goTouchEnd: 'ontouchstart' in window ? 'touchend' : 'mouseup',

        eachLeft: {},    //元素的索引与left值组成的对象
        index: 0,        //当前索引
        flag: false,     //开关--是否监听鼠标移动与离开事件
        $width: 0,       //元素宽度
        $length: 0,      //元素个数
        $start: 0,       //手势或鼠标开始位置
        $end: 0,         //手势或鼠标结束位置
      }
    },
    methods: {
      tStart(e) {
        e.preventDefault();    // 阻止默认动作
        this.flag = true;      // 监听开关打开
        this.$start = this.hasTouch ? e.changedTouches[0].screenX : e.screenX; // 获取开始位置
      },
      tMove(e) {
        if (this.flag) {
          this.$end = this.hasTouch ? e.changedTouches[0].screenX : e.screenX; // 获取移动位置
          if ((this.$end - this.$start > 0 && this.index !== 0) || (this.$end - this.$start < 0 && this.index !== this.$length - 1)) {
            // 限止在第一张的时候不能向右拖，在最后一张的时候不能向左拖
            this.$refs['ul'].style.marginLeft = (this.eachLeft[this.index] + this.$end - this.$start) + 'px'
          }
        }
      },
      tEnd(e) {
        if (this.flag === true) {
          this.flag = false;  // 监听开关关闭
          this.$end = this.hasTouch ? e.changedTouches[0].screenX : e.screenX; // 获取结束位置

          if (this.$end - this.$start > 20) {
            // 如果开始位置小于结束位置-- 即鼠标是向右滑
            if (this.index !== 0) {
              this.lists[this.index].isOn = false;
              this.index--;
              this.lists[this.index].isOn = true;
            }
            this.goAnimate(parseInt(this.$refs['ul'].style.marginLeft), this.eachLeft[this.index]) //向右
          } else if (this.$start - this.$end > 20) {
            // 如果开始位置大于结束位置-- 即鼠标是向左滑
            if (this.index !== this.$length - 1) {
              this.lists[this.index].isOn = false;
              this.index++;
              this.lists[this.index].isOn = true;
            }
            this.goAnimate(parseInt(this.$refs['ul'].style.marginLeft), this.eachLeft[this.index]) //向左
          } else {
            //其它情况--点击url
            // console.log('效果测试用的新窗口打开，【实际需要router/本窗口打开其它链接】');
            // window.open(this.lists[this.index].href, '_blank');
            // this.goAnimate(parseInt(this.$refs['ul'].style.marginLeft), this.eachLeft[this.index]) //归位
          }
        }
      },
      goAnimate(start, end) {
        let px = end - start, // 需要走的路
          time = 200,         // 共花费的时间
          b = 0,              // 初始化路程
          m = 10;             // 间隔计算时间
        let step = px / time * m;
        // step为间隔时间走的路程
        let gopo = setInterval(() => {
          b += m;                 // 时间堆积
          if (b === time) {
            clearInterval(gopo);  // 如果时间到了就清除定时器
            this.$refs['ul'].style.marginLeft = end + 'px'
          } else {
            start = start + step; // 路程堆积
            this.$refs['ul'].style.marginLeft = start + 'px'
          }
        }, m);
      }
    },
    mounted() {
      this.$width = this.$refs['banner'].clientWidth;     // 获取元素宽度
      this.$length = this.$refs['ul'].childElementCount;  // 获取元素个数
      this.lists[this.index].isOn = true;                 // 初始化isOn值[根据当前索引]
      for (let i = 0; i < this.$length; i++) {
        this.eachLeft[i] = -this.$width * i               // 为eachLeft添加相应的值
      }

      this.$refs['banner'].children[0].children[0].style.width = this.$width + 'px';
      let that = this; //that赋值,等同于this

      //获取DOM元素节点-[banner]-[span]+s
      let spans = document.getElementById('bannerTag').getElementsByTagName('span');
      let banner = document.getElementById('banner');

      //为span-[小圆点]绑定事件
      for (let i = 0; i < spans.length; i++) {
        spans[i].idx = i; //初始化span自身索引值
        spans[i].addEventListener(this.goTouchStart, function (event) {
          event.stopPropagation(); //阻止冒泡-[不与banner冲突]
          if (that.index !== this.idx) {
            that.lists[that.index].isOn = false;
            that.index = this.idx;
            that.lists[that.index].isOn = true;
            that.goAnimate(parseInt(that.$refs['ul'].style.marginLeft), that.eachLeft[that.index]);
          }
        })
      }
      // 监听鼠标按上元素[banner]
      banner.addEventListener(this.goTouchStart, this.tStart);
      // 监听鼠标移动中
      document.addEventListener(this.goTouchMove, this.tMove);
      // 监听鼠标移开
      document.addEventListener(this.goTouchEnd, this.tEnd)
    },
    beforeDestroy: function () {
      // 监听鼠标移动中
      document.removeEventListener(this.goTouchMove, this.tMove);
      // 监听鼠标移开
      document.removeEventListener(this.goTouchEnd, this.tEnd)
    }
  }
</script>
