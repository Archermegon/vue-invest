import axios from "axios";

const projects = {
  state:{
    projects:[],
    pro:null
  },
  mutations:{
     getProjects(state,projects){
         state.projects = projects
     },
     getPro(state,pro){
        state.pro=pro
     }
  },
  actions:{
    getProjects({commit}){
      axios.get("http://localhost:2019/projects").then(res=>{
        // console.log(res.data);
        commit("getProjects",res.data)
      });
    },
    getPro({commit},id){
      axios.get(`http://localhost:2019/projects/${id}`).then(res => {
        // console.log(res.data);
        commit("getPro", res.data)
      });
    }
  }
}

export default projects;