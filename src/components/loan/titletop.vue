<template>
  <div class="titleBanner">
    <p><span class="tit">{{tit}}</span>{{des}}</p>
    <slot name='banner'></slot>
  </div>
</template>
<script>
  export default {
    props: ['tit', 'des']
  }
</script>
