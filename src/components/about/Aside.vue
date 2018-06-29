<template>
  <div class="aside-item">
    <h2 class="aside-hd">{{ name }}</h2>
    <div class="aside-bd"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
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



  /*  */
</style>
