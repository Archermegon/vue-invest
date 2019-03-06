import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

import Home from "./components/Home";
import Project from "./components/Project";
import Platform from "./components/Platform";
import Mine from "./components/Mine";
import ProDetail from "./components/ProDetail";
import AboutVip from "./components/AboutVip";
import Vip from "./components/Vip";
import Rule from "./components/Rule";
import PostList from "./components/PostList";
import PostCon from "./components//PostCon";
import AboutPlat from "./components/AboutPlat";
import Help from "./components/Help";

const router = new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/help",
      component: Help
    },
    {
      path: "/pro",
      component: Project
    },
    {
      path: "/my",
      component: Mine
    },
    {
      path: "/plat",
      component: Platform
    },
    {
      path: "/detail/:id",
      component: ProDetail
    },
    {
      path: "/detailvip",
      component: AboutVip
    },
    {
      path: "/vip",
      component: Vip
    },
    {
      path: "/rule",
      component: Rule
    },
    {
      path: "/aplat",
      component: AboutPlat
    },
    {
      path: "/postcon",
      component: PostCon
    },
    {
      path: "/post",
      component: PostList
    }
  ],
  mode: "history"
});

export default router;
