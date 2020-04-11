import Vue  from "vue"
import axios from "axios"

const instance =  axios.create({
    baseURL:"https://b2capigateway.yiguo.com",
    timeout:3000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "appName": "3000025"
      }
})
const instance2 = axios.create({
    baseURL: '/info',
  
})

export {instance,instance2}