import Vue from 'vue'
import Vuex from 'vuex'
import projects from './projects'
import selected from './selected'
import user from './user';

Vue.use(Vuex)

const store = new Vuex.Store({
   modules:{
     projects,
     selected,
     user
   }
})

export default store