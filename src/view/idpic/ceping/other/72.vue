<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
    <ul>
      <!-- <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li> -->
      <!-- <li>
        <pdf
        src="./static/MoCA.pdf"
        ></pdf>
      </li> -->
      <li>
           <dt style="padding-top: 0.325rem"><span> MoCA文档 </span></dt>
             {{currentPage}} / {{pageCount}}
            <button style="margin-top:-20px" @click="change1">上一页</button>
            <button style="margin-top:-20px" @click="change2">下一页</button>
          <pdf
              :src="src"
              :page="currentPage"
              @num-pages="pageCount = $event"
              @page-loaded="currentPage = $event"
              class="pdf-set"
          ></pdf>
          <!-- {{currentPage}} / {{pageCount}}
          <button style="margin-top:-20px" @click="change1">上一页</button>
          <button style="margin-top:-20px" @click="change2">下一页</button> -->
      </li>
    </ul>

  </div>
</template>

<script>
// import CPdf from "@/common/CPdf"
import pdf from 'vue-pdf';
export default {
  components: {
    pdf
  },
  name: 'HelloWorld',
  data () {
    return {
      src:'./static/MoCA.pdf',
      msg: 'Welcome to Your Vue.js App',
      currentPage: 1,
      pageCount: 1,
    }
  },
  methods:{
    change1(){
      if(this.currentPage>1){
        this.currentPage--
      }
    },
    change2(){
      if(this.currentPage < this.pageCount){
        this.currentPage++
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pdf-set{
  display: inline-block;
  height:800px;
  width:800px;
}
</style>
