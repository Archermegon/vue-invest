import Router from "vue-router"
import Vue from "vue";

Vue.use(Router)

import Home from './components/Home'
import Project from './components/Project'
import Platform from "./components/Platform";
import Mine from "./components/Mine";
import ProDetail from './components/ProDetail'


const router = new Router({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path:'/pro',
      component:Project
    }, {
      path: '/my',
      component:Mine
    }, {
      path: '/plat',
      component: Platform
    },{
      path: '/detail/:id',
      component: ProDetail
    }
  ],
  mode:'history'
})

export default router;