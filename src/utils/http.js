import Vue  from "vue"
import axios from "axios"

const instance1 =  axios.create({
    baseURL:"https://b2capigateway.yiguo.com",
    timeout:3000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "appName": "3000025"
      }
})
const instance =  axios.create({
    baseURL:"https://b2capigateway.yiguo.com",
    timeout:6000,

})

export {instance,instance1}
