const selected = {
  state:{
    selected:"home"
  },
  mutations:{
    changeSelected(state,mode){
        state.selected=mode
    }
  },
  actions:{
    changeSelected({commit},mode){
      commit("changeSelected",mode)
    }
  }
}

export default selected;