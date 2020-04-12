import Vue from 'vue'
import Vuex from 'vuex'
import classify from "./module/classifymodule"
import tab from "./module/tabmodules"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    classify,
    tab
  }
})
