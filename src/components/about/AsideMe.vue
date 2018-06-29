<template>
  <div class="aside-item">
    <h2 class="aside-hd">{{ name }}</h2>
    <div class="aside-bd">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:"关于我",
      img:'../../assets/img.jpg',
      cont:'<div class="img-cont"><img src="../../assets/img.jpg" alt="">杨青，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。</div>'
    }
  }
}
</script>


<style scoped>
  /* 公共样式 */
  .aside-item{
    background: rgba(255,255,255,0.5);
    margin-bottom: 20px;
    overflow: hidden;
    text-align: initial;
  }
  .aside-item h2{
    color: #333;
    font-size: 14px;
    line-height: 30px;
    padding-left: 20px;
    background: #fff;
    margin-bottom: 0;
  }
  .aside-bd{
    padding: 10px;
    font-size: 14px;
    line-height: 24px;
  }


  /* 图文混排样式 */
  .img-cont img{
    width: 100px;
    float: left;
    margin-right: 10px;
  }

  /*  */
</style>
