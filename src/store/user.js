import axios from "axios";

const user = {
  state: {
    user: null
  },
  mutations: {
    getUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    getUser({ commit }, id) {
      axios.get(`http://localhost:2019/user?proId=${id}`).then(res => {
        // console.log(res.data);
        commit("getUser", res.data);
      });
    }
  }
};

export default user;
