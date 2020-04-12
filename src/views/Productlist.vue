<template>
    <div class="productlist" >
        <van-tabs v-model="active" sticky>
            <van-tab title="销量" name="4">
                <ul>
                    <li 
                        v-for="item in productlist"
                        :key="item.CommodityId"
                        tag="li"
                    >       
                    <van-icon class="in" name="plus" />
                        <van-card
                            @click="hanldPage(item.CommodityCode)"
                            :price="item.OriginalPrice"
                            :desc="item.Spec"
                            :title="item.CommodityName"
                            :thumb="item.SmallPic"
                            class="list"
                        >
                        </van-card>
                    </li>
                </ul>
            </van-tab>
            <van-tab title="新品" name="5">
                <ul>
                    <li 
                        v-for="item in productlist"
                        :key="item.CommodityId"
                        tag="li"
                    >       
                    <van-icon class="in" name="plus" />
                        <van-card
                            @click="hanldPage(item.CommodityCode)"
                            :price="item.OriginalPrice"
                            :desc="item.Spec"
                            :title="item.CommodityName"
                            :thumb="item.SmallPic"
                            class="list"
                        >
                        </van-card>
                    </li>
                </ul>
            </van-tab>
            <van-tab title="价格" name="2">
                <ul>
                    <li 
                        v-for="item in productlist"
                        :key="item.CommodityId"
                        tag="li"
                    >       
                    <van-icon class="in" name="plus" />
                        <van-card
                            @click="hanldPage(item.CommodityCode)"
                            :price="item.OriginalPrice"
                            :desc="item.Spec"
                            :title="item.CommodityName"
                            :thumb="item.SmallPic"
                            class="list"
                        >
                        </van-card>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
        
    </div>
</template>
<script>
import Vue from 'vue';
import {mapMutations} from "vuex"
import { instance } from "@/utils/http"
import { Card,tag,Icon,PullRefresh,List,cell,Tab, Tabs } from 'vant';
Vue.use(Card).use(Icon).use(PullRefresh).use(List).use(cell).use(Tab).use(Tabs);
export default {
    data() {
        return {
            productlist:[],
            active: 0
        }
    },
    props:["id"],
    methods:{
        ...mapMutations("tab",["hide","show"]),
        hanldPage(data){
        this.$router.push({
                    name:"detail",
                    params:{
                        id:data
                    }
                })
        }
        
    },
    created(){
        instance.post("/api/commodityapi/Commodity/GetSearchList?appName=3000025",{
            ...{
                    Head:{
                        CityCode: "1",
                        CityId: "312d0556-0671-4f2e-8bac-7b8873b5a03a",
                        DistrictId: "ab1cfb9d-e721-4861-9415-ba8940e8c087",
                        DeviceId: "9fc12613b859c8899b96c360373e76d4",
                        LoginToken: "",
                        Token: ""
                    },
                    Body:{
                            CategoryCode: "",
                            CategoryId: this.$route.params.id,
                            Keyword: "",
                            PageIndex: 1,
                            Sort: 4
                        }
                }
        }).then(res=>{
                this.productlist  = res.data.Data.CommodityList
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
    .active{
        border-bottom: 0.02rem solid #11B57C
    }
    .top{
        display: flex;
        flex: 1;
        position: static;
        z-index: 12;
        li{
            width: 33.3%;
            text-align: center;
            padding: 0.1rem;
        }
    }
    .list{
        background:#fff;
        img{
            width: 100%;
            height: 100%;
        }
    }
    li{ 
        position: relative;
        .in{
        position:absolute;
        top: 0.5rem;
        right: 0.2rem;
        z-index: 10;
        font-size: 0.2rem;;
        }
    }
</style>