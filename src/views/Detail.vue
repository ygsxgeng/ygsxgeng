<template>
    <div class="detail"
        v-if="detail"
    >   
        <van-icon 
            class="back" 
            name="arrow-left" 
            size="35"
            @click="back()"
        />
        <van-swipe 
            class="my-swipe" 
            :autoplay="3000" 
            indicator-color="white"
            >
                <van-swipe-item
                    v-for="item in detail.Pictures"
                    :key="item"
                    
                >
                <img :src="item" alt="">
                </van-swipe-item>
        </van-swipe>
            <div class="info">
                <div class="info-t">
                    <p class="title">{{detail.CommodityName}}</p>
                    <p class="subhead">{{detail.SubTitle}}</p>
                        <div class="info-p">
                            <span class="pre">￥{{detail.OriginalPrice}}</span>
                            <p class="fr">产地：{{detail.PlaceOfOrigin}}</p>
                        </div>
                </div>
                <div class="info-b">
                    <p> <van-icon name="info-o" /> {{detail.CanNoReasonToReturnText}}</p>
                </div>
            </div>
            <div class="pr">
                <div class="pr-t">
                    规格：<van-button class="btn" plain type="primary">{{detail.Spec}}</van-button>
                </div>
            </div>
            <div class="pr-b clear">
                <P class="fl">数量：</P> <van-stepper class="fl" v-model="value" />
            </div>
            <div class="address clear">
                <p class="fl">送至 </p><p class="ino fl"> <van-icon name="location"  color="#01B27A"  />{{detail.ShippingAddress}}</p>
                <p class="infor"><span>有货</span>{{detail.DeliveryTips}}</p>
            </div>
            <div class="tab">
                <ul class="tab-b">
                    <li @click="tomian('/')"><p>首页</p><van-icon name="shop-o" size="20" /></li>
                    <li @click="tomian('/shopping')"><p>购物车</p><van-icon name="shopping-cart-o"  size="20"/></li>
                    <li>加入购物车</li>
                </ul>
            </div>
    </div>
</template>

<script>
import Vue from 'vue';
import {mapMutations} from "vuex"
import { Swipe, SwipeItem,Icon,Button,Stepper } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem).use(Icon).use(Button).use(Stepper);
import { instance } from "@/utils/http"
export default {
    data(){
        return{
            detail:null,
            value:1
        }
    },
    props:["id"],
    methods:{
        ...mapMutations("tab",["hide","show"]),
        back(){
            this.$router.back()
        },
        tomian(path){
            this.$router.push(path)
        }
    },
    created(){
        instance.post("/api/commodityapi/Commodity/GetCommodityInfo?appName=3000025",{
            ...{
                    Head:{
                        CityCode: "1",
                        CityId: "312d0556-0671-4f2e-8bac-7b8873b5a03a",
                        DistrictId: "ab1cfb9d-e721-4861-9415-ba8940e8c087",
                        DeviceId: "9fc12613b859c8899b96c360373e76d4",
                        LoginToken: "",
                        MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                        Token: ""
                    },
                    Body:{
                        CommodityCode: this.$route.params.id,
                        CategoryId: ""
                    }
                }
        }).then(res=>{
                this.detail = res.data.Data.CommodityInfo
            })
    },
    mounted(){
        
        this.hide()
    },
    destroyed(){

        this.show()
    }
}
</script>

<style lang="scss" scoped>
.back{
    background: transparent;
    position:fixed;
    z-index:11;
    top: 0.1rem;
    left: 0.15rem;
}
.detail{
    background: #f4f4f4;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #ffffff;
    img{
        width: 3.75rem;
        height: 3.75rem;
    }
}
.info{
    background: #FFF;
    padding-top: 0.13rem;
    .info-t{
        border-bottom: 1px solid #f4f4f4;
        .info-p{
            padding:0.12rem 0.16rem 0.11rem;
            .fr{
                font-size: 0.12rem;
                margin-top: 0.06rem;
            }
        }
        .title{
            font-size: 0.16rem;
            padding-left: 0.16rem;
        }
        .subhead{
            padding-top: 0.075rem;
            font-size: 0.13rem;
            color: #666666;
            padding-left: 0.16rem;
        }
        .pre{
            color: red;
            font-size: 0.19rem;;
        }
    }
    margin-bottom: 0.09rem;
    .info-b{
        padding: 0 0.16rem;
        line-height: 0.5rem;
        color: #aaaaaa
    }
}
.pr{
    position: relative;
    color: #999999;
    >::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #f4f4f4;
        transform: scaleY(0.5);
    .pr-t{
        color: #999999;
        
    }
    }
    
    background: #fff;
    padding: .17rem .20rem;
    .btn{
        border-radius: 0.17rem 0.17rem 0.17rem 0.17rem;
        height: 0.34rem;
        width: 0.89rem;
        line-height: 0.34rem;
    }
}
    .pr-b{
        color: #999999;
        background: #fff;
        padding: .17rem .20rem;
        margin-bottom: 0.09rem;
    }
    .address{
        padding: 0.13rem 0.16rem;
        background: #fff;
        .ino{
            padding: 0 0 .12rem .12rem;
        }
        .infor{
            clear: both;
            span{
                color: #01B27A;
                padding-right: .06rem;
            }
        }
        margin-bottom: 0.09rem;
    }
    .tab{
        background: #FFF;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.48rem;
    }
    .tab-b{
    text-align: center;
    display: flex;
    z-index: 13;
    width: 100%;
    padding-left:0.096rem;
    :nth-child(1){
        width: 25%;
        display: flex;
        flex-direction:column-reverse;
        Justify-content:center;
        align-items:center;
        >p{
            width: 0.28rem;
            font-size: 0.09rem;
            
        }
    }
    :nth-child(2){
        width: 25%;
        display: flex;
        flex-direction:column-reverse;
        Justify-content:center;
        align-items:center;
        >p{
            width: 0.40rem;
            font-size: 0.09rem;
        }
    }
    :nth-child(3){
        width: 50%;
        color: #FFF;
        line-height: 0.48rem;
        background: red;
    }
    }
</style>