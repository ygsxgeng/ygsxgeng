import Vue from 'vue'
import Vuex from 'vuex'
import classify from "./module/classifymodule"
import city from "./module/citymodule"
import tab from "./module/tabmodule"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    classify,
    city,   //城市模块
    tab
  }
})
