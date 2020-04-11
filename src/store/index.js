import Vue from 'vue'
import Vuex from 'vuex'
import classify from "./module/classifymodule"
import city from "./module/citymodule"
Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    classify,
    city   //城市模块
  }
})
