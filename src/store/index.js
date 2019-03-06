import Vue from "vue";
import Vuex from "vuex";
import projects from "./projects";
import selected from "./selected";
import user from "./user";
import comments from "./comments";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    projects,
    selected,
    user,
    comments
  }
});

export default store;
