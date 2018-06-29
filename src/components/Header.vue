<template>
  <nav class="navbar navbar-expand-md navbar-light fixed-top bg-transition">
      <a class="navbar-brand" href="#"><img class="logo-img" src="../assets/logo.png" alt="">&nbsp;oocoder</a>
      <button @click="changeShow" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div  @click="changeShow" class="collapse navbar-collapse" v-bind:class="{show:showstatus}" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">主页<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Tips">日志</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Photo">相册</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Message">留言</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/AboutMe">关于我</router-link>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="搜索内容" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
        </form>
      </div>
    </nav>
</template>

<script>
export default {
  data(){
    return{
      showstatus:false
    }
  },
  methods:{
    changeShow(){
      this.showstatus = !this.showstatus
    }
  }
}
</script>

<style scoped>
  .navbar{
    border-bottom: 1px solid #eee;
  }
  .bg-transition{
    background: rgba(255, 255, 255, .8)
  }
  .logo-img{
    width: 2.2rem;
    height: 2.2rem;
  }
  .nav-link.router-link-exact-active{
    color: #41b883!important;
    border-bottom: 2px solid #41b883;
  }
</style>
