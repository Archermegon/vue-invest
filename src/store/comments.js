import axios from "axios";

const comments = {
  state: {
    comments: []
  },
  mutations: {
    getComments(state, comments) {
      state.comments = comments;
    },
    addComment(state, com) {
      state.comments = [...state.comments.push(com)];
    },
    delComment(state, id) {
      state.comments = [...state.comments.filter(ele => ele.id !== id)];
    }
  },
  actions: {
    getComments({ commit }, id) {
      axios.get(`http://localhost:2019/comments?proId=${id}`).then(res => {
        // console.log(res.data);
        commit("getComments", res.data);
      });
    },
    addComment({ commit }, com) {
      commit("addComment", com);
    },
    delComment({ commit }, id) {
      commit("delComment", id);
    }
  }
};

export default comments;
