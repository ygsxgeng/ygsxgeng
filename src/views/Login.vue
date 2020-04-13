<template>
  <div class="login">
    <div class="contentWarp">
      <div class="content">
        <ul>
          <!-- <li>
            <h4>
              <button class="btn" @click="reg">请先注册</button>
            </h4>
          </li> -->
          <li class="li">
            <!-- <strong>用户名</strong> -->
            <input
              placeholder="请输入账号"
              v-model="name"
              clearable
              class="ipt"
            />
          </li>
          <li class="li">
            <!-- <strong>密码</strong> -->
            <input
              placeholder="请输入密码"
              v-model="password"
              show-password
              class="ipt"
            />
          </li>
          <li>
            <input
              @click="loginHandle(name, password)"
              type="button"
              class="btn"
              value="登录"
            />
          </li>
          <li>
            <h4>
              <button class="btn" @click="reg">如没账号请先注册</button>
            </h4>
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
    reg() {
      this.$router.push({
        name: "reg"
      });
    },
    loginHandle(name, password) {
      if (this.name && this.password) {
        axios
          .post("http://localhost:3009/api/v1/auth/login", {
            password: this.password,
            userName: this.name
          })
          .then(res => {
            console.log(res);
            if (res.data.code == "error") {
              alert("用户名密码错误！");
            } else {
              this.$router.push({
                name: "main"
              });
              localStorage.setItem("token", res.data.token);
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
