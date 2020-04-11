
const module = {
  namespaced: true,
  state: {
    isTab: true
  },
  mutations: {
    show (state) {
      state.isTab = true
    },
    hide (state) {
      state.isTab = false
    }
  }
}

export default module
