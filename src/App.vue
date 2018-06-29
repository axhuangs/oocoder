<template>
  <div id="app">
    <oo-header></oo-header>
    <router-view/>
    <oo-footer></oo-footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    "oo-header": Header,
    "oo-footer": Footer
  }
}
</script>

<style>
body{
  background: #efefef;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ctpt-20{
  padding-top: 20px;
}
</style>
