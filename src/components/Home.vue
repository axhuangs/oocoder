<template>
  <div class="container ctpt-20">
    <div class="row">
      <div class="col-md-3 aside">
        <side-item-me></side-item-me>
      </div>
      <div class="col-md-9 col-sm-12">
        Home content
        <div style="width:10px;height:1000px"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideMe from './about/AsideMe'
export default {
  data(){
    return{
      aside:[
        {title:'关于我',cont:'<div class="img-cont"><img src="../../assets/img.jpg" alt="">杨青，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。</div>'},
      ]
    }
  },
  components:{
    "side-item-me": AsideMe
  }
}
</script>


<style>
  @media (max-width: 768px){
    .aside{
      display: none;
    }
  }
</style>
