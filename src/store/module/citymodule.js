import { instance } from "@/utils/http";

const module = {
  state: {
    city: {
      cityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
      districtId: "928de107-52e3-4016-9ce1-afc0fb1532ae",
      name: "上海",
      AreaCode: "2"
    }
  },
  getters: {
    
    getCity: state => state.city,
  },
  mutations: {
    setCity(state, data) {
      console.log(data);
      state.city.cityId = data.CityId
      state.city.districtId = data.AreaId
      state.city.name = data.name
      state.city.AreaCode = data.AreaCode
    },
    
  },
  actions: {
   
  },

  namespaced: true

};


export default module;