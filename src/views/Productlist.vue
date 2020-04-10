<template>
    <div class="productlist">
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
        

    </div>
</template>
<script>
import Vue from 'vue';
import { instance } from "@/utils/http"
import { Card,tag,Icon } from 'vant';
Vue.use(Card).use(Icon);
export default {
    data() {
        return {
            productlist:[]
        }
    },
    props:["id"],
    methods:{
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
        
    }
    
}
</script>


<style lang="scss" scoped>
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