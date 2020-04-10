import Vue  from "vue"
import axios from "axios"

const instance =  axios.create({
    baseURL:"https://b2capigateway.yiguo.com",
    timeout:6000,

})

export { instance }