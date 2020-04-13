<template>
  <div class="reg">
    <div class="contentWarp">
      <div class="content">
        <ul>
          <li class="li" style="margin-top:30px">
            <!-- <strong>用户名</strong> -->
            <input placeholder="请输入账号" v-model="name" class="ipt" />
          </li>
          <li class="li">
            <!-- <strong>密码</strong> -->
            <input placeholder="请输入密码" v-model="password" class="ipt" />
          </li>
          <li>
            <input
              @click="regHandle(name, password)"
              type="button"
              class="btn"
              value="注册"
            />

            <router-link :to="{ name: 'login' }" class="btn1">登录</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    regHandle(name, password) {
      if (this.name && this.password) {
        axios
          .post("http://47.105.103.74:3000/api/v1/auth/reg", {
            password: this.password,
            userName: this.name
          })
          .then(res => {
            console.log(res);
            if (res.data.code == "error") {
              alert("用户名已经存在！");
            } else {
              alert("注册成功");
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        alert("请输入账号密码");
      }
    }
  }
};
</script>

<style scoped>
.content ul .li{
  padding: 0.22rem 0.128rem;
  border-bottom: solid 1px #e6e6e6;;

}
.ipt{
  border: none;
  /* border-bottom: solid 1px #e6e6e6;; */
  line-height: 0.15rem;
  font-size: 0.15rem;
}
.btn1{
  background: linear-gradient(90deg,#a2edc7,#8cddc3);
    color: #d5f4e7;
    margin-top: 0.352rem;
    width: 3rem;
    height: 0.35rem;
    line-height: 0.352rem;
    font-size: 0.16rem;
    border-radius: .031rem;
    border: 0;
    display: block;
    text-align: center;
    margin-left: 0.55rem;
}
.btn{
    background: linear-gradient(90deg,#a2edc7,#8cddc3);
    color: #d5f4e7;
    margin-top: 0.352rem;
    width: 3rem;
    height: 0.35rem;
    line-height: 0.352rem;
    font-size: 0.16rem;
    border-radius: .031rem;
    border: 0;
    display: block;
    text-align: center;
    margin-left: 0.55rem;

}
</style>
