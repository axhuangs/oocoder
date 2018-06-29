import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Tips from '../components/Tips'
import Photo from '../components/Photo'
import Message from '../components/Message'
import AboutMe from '../components/about/Aboutme.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Tips',
      name:'Tips',
      component: Tips
    },
    {
      path:'/Photo',
      name:'Photo',
      component: Photo
    },
    {
      path:'/Message',
      name:'Message',
      component: Message
    },
    {
      path:'/AboutMe',
      name:'AboutMe',
      component: AboutMe
    },
    {
      path:'*',
      redirect:"/"
    }
  ],
  mode:'history'
})
