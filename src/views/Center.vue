<template>
  <div class="center">
    <div class="header">
      <div class="headerImg" style>
        <span class="spanImg">
          <img
            src="//img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg"
            alt
            style="border-radius:50%;width:0.745rem;heigth:0.745rem;"
          />
        </span>
        <p class="logon">
          <router-link :to="{ name: 'login' }" style="font-size:0.16rem">登录</router-link>/
          <router-link :to="{ name: 'reg' }" style="font-size:0.16rem">注册</router-link>
        </p>
      </div>
      <i class="setting"></i>
      <div class="account">
        <p class="list">
          <span class="num">-</span>
          <span class="txt">卡包余额</span>
        </p>
        <p class="list">
          <span class="num">-</span>
          <span class="txt">悠币</span>
        </p>
      </div>
    </div>
    <div class="wait">
      <ul class="waitbtn">
        <li class="waitli">
          <a href="javascript:;">
            <i class="icon">
              <img src="https://img07.yiguoimg.com/d/web/180608/01261/105825/unpaid.png" alt />
            </i>
            待支付
          </a>
        </li>
        <li class="waitli">
          <a href="javascript:;">
            <i class="icon">
              <img src="https://img07.yiguoimg.com/d/web/180608/01261/105825/take.png" alt />
            </i>
            待收货
          </a>
        </li>
        <li class="waitli">
          <a href="javascript:;">
            <i class="icon">
              <img src="https://img05.yiguoimg.com/d/web/180608/01261/105825/evaluate.png" alt />
            </i>
            评价送悠币
          </a>
        </li>
        <li class="waitli">
          <a href="javascript:;">
            <i class="icon">
              <img src="https://img06.yiguoimg.com/d/web/180608/01261/105825/changing.png" alt />
            </i>
            在线退换货
          </a>
        </li>
        <li class="oneli">
          <span class="pointRight"></span>
          <a href="javascript:;">
            <i class="icon">
              <img src="//img07.yiguoimg.com/d/web/180315/01315/162344/allorder.png" alt />
            </i>
            全部订单
          </a>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="footerBtn">
        <a href="javascript:;">
          <img
            class="icn"
            src="https://img07.yiguoimg.com/d/web/181029/00591/155051/coupons.png"
            alt
          />
          优惠券
        </a>
      </div>
      <div class="footerBtn">
        <a href="javascript:;">
          <img
            class="icn"
            src="https://img06.yiguoimg.com/d/web/181029/00591/155051/yellowcard.png"
            alt
          />
          充值卡
        </a>
      </div>
      <div class="footerBtn">
        <a href="javascript:;">
          <img
            class="icn"
            src="https://img07.yiguoimg.com/d/web/181029/00591/155051/delivery.png"
            alt
          />
          礼品兑换券
        </a>
      </div>
      <div class="footerBtn">
        <a href="javascript:;">
          <img
            class="icn"
            src="https://img07.yiguoimg.com/d/web/181029/00591/155051/address.png"
            alt
          />
          收货地址
        </a>
      </div>
      <div class="footerBtn">
        <a href="javascript:;">
          <img class="icn" src="https://img06.yiguoimg.com/d/web/181029/00591/155051/help.png" alt />
        帮助中心
        </a>
        
      </div>
      <div class="footerBtn">
        <a href="javascript:;">
          <img
            class="icn"
            src="https://img02.yiguo.com/e/web/130101/app/icon/usercenter/box@3x.png"
            alt
          />
          我的团购
        </a>
      </div>
      <div class="footerBtn">
        <a href="javascript:;">
          <img
            class="icn"
            src="https://img06.yiguoimg.com/d/web/181121/00591/143839/account-icon.png"
            alt
          />
          账户余额
        </a>
      </div>
      <div class="footerBtn">
        <a href="javascript:;">
          <img
            class="icn"
            src="https://img07.yiguoimg.com/d/web/181029/00591/155051/service.png"
            alt
          />
          <span>在线客服</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  background: #2dd282
    url("//img06.yiguoimg.com/d/web/180517/01262/143351/bgimg.jpg") 100% 100%;
  width: 100%;
  height: 213px;
  padding: 0rem 0rem 0.28rem 0rem;
  position: relative;
  box-sizing: border-box;
}
button {
  border: 0px;
  // width: ;
}
.headerImg {
  position: relative;
  display: inline-block;
  height: 0.745rem;
  margin-top: 0.217rem;
  padding: 0 0.07rem 0 0.68rem;
  box-sizing: border-box;
}
.spanImg {
  display: inline-block;
  position: absolute;
  left: 0.125rem;
  top: 0;
  border: 0.03rem solid rgba(255, 255, 255, 0.5);
  width: 0.745rem;
  height: 0.745rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}
.logon {
  display: inline-block;
  text-align: left;
  color: #fff;
  font-size: 0.2rem;
  width: 2.415rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 0.41rem;
  padding: 11.251px 0 0 40.473px;
}
.setting {
  position: absolute;
  top: 11.88px;
  right: 16.5px;
  display: inline-block;
  width: 18.2px;
  height: 20.18px;
  background: url(//img07.yiguoimg.com/d/web/180508/01319/184003/setting.png)
    no-repeat;
  background-size: 100% 100%;
}
.account {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 58.74px;
  background: white;
  padding: 9.9px 9.9px;
  box-sizing: border-box;
}
.list {
  float: left;
  width: 50%;
  height: 100%;
  text-align: center;
}
.list span {
  display: block;
}
.wait {
  position: relative;
  width: 100%;
  background: #fff;
  height: 89px;
  margin: 9.9px 0;
}
.waitbtn {
  position: relative;
  width: 100%;
  height: 100%;
}
.waitli {
  position: relative;
  float: left;
  width: 20%;
  height: 100%;
}
.wait ul li a {
  display: inline-block;
  font-size: 11.88px;
  color: #333;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 57.09px;
  box-sizing: border-box;
}
.icon {
  width: 24.42px;
  height: auto;
  margin-left: -12.21px;
}
.icon img {
  width: 24.42px;
  display: block;
  border: none;
  margin-top: -50px;
  margin-left: 30px;
}
.oneli {
  position: relative;
  float: left;
  width: 20%;
  height: 100%;
}
.pointRight {
  position: absolute;
  top: 1.65px;
  left: 0;
  display: inline-block;
  width: 5.28px;
  height: 100%;
  background: url(//img07.yiguoimg.com/d/web/180313/01318/155922/xian.png)
    no-repeat;
  background-size: 100% 100%;
}
.iconone {
  width: 29.7px;
  height: 29.7px;
  background: url(//img07.yiguoimg.com/d/web/180315/01315/162344/allorder.png)
    no-repeat;
  margin-left: -14.85px;
  margin-top: -50px;
  background-size: 100% 100%;
}
.footerBtn{
      position: relative;
    float: left;
    width: 25%;
    height: .7rem;
}
.footerBtn a{
  position: relative;
    font-size: .13rem;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-top: 0.45rem;
    text-align: center;
    box-sizing: border-box;
    color: #333;
text-decoration: none;
}
.footerBtn a .icn{
width: 0.27rem;
    height: 0.27rem;
    margin-left: -.12rem;
    display: inline-block;
    position: absolute;
    top: 0.14rem;
    left: 50%;
    
}
</style>
