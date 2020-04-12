<template>
    <div class="main">
        <!-- 搜索框 -->
        <div class="header">
           <div class="left" @click="goCity">
               城市
           </div>
           <div class="right">
                <van-search
                  
                    v-model="searchval"
                    shape="round"
                    background="#4fc08d"
                    placeholder="请输入商品名称"
                    @focus="onFocus"
                >
                </van-search>
            </div>
        </div>
        <div class="content" :style="{height:scrollHeight,overflow:'hidden'}">
            <!-- banner轮播图 -->
            <div>
                <div class="banner">
                    <Swiper cName ='ban'>
                        <div 
                            class="swiper-slide"
                            v-for="(banner,index) in bannerList"
                            :key="banner.adPictureId"
                            v-swiper = "{
                                current:index,
                                length:bannerList.length,
                                swipe:'ban',
                                free:{
                                    autoplay:true,
                                    pagination:{
                                        el:'.swiper-pagination',
                                    }
                                }
                            
                            }"
                            >
                            <div>
                                <img  class="bannerImg" :src="banner.pictureUrl" :alt="banner.adName">
                            </div>
                        </div>
                    </Swiper>
                </div>
                <!-- 九宫格 -->
                <div class="grid">
                    <van-grid :column-num="4">
                        <van-grid-item
                        v-for="value in grids"
                        :key="value.navIndex"
                        :icon="value.pictureUrl"
                        :text="value.navName"
                        />
                    </van-grid>
                </div>
                <div class="first-screen-ad">
                    <img :src="imgt" alt="">
                </div>

                <div class="letter">
                    <div class="left">
                    </div>
                    <div class="right">
                        <Swiper cName="lett">
                            <div 
                                class="swiper-slide"
                                v-for="(data,index) in letters"
                                :key="data.fastReportId"
                                v-swiper = "{
                                    current:index,
                                    length:letters.length,
                                    swipe:'lett',
                                    free:{
                                        direction:'vertical',
                                        autoplay:true,
                                    }
                            
                                }"
                            >
                                <p>{{data.fastReportTitle}}</p>
                            </div>
                        </Swiper>
                    </div>
                </div>
                <div class="group-floor">
                    <img :src="imgc" alt="">
                </div>
                <div class="bannertwo">
                    <Swiper cName="two">
                        <div 
                            class="swiper-slide"
                            v-for="(dd,index) in bannersTwo"
                            :key="dd.commodityComponentId"
                            v-swiper = "{
                                current:index,
                                length:bannersTwo.length,
                                swipe:'two',
                                free:{
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                }                     
                            }"
                            >
                            <img :src="dd.pictureUrl" alt="">
                            <p>{{dd.commodityName}}</p>
                            <h4>{{dd.commodityPrice}}</h4>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
        
    
</template>

<script>


import Swiper from "@/components/Swiper"
import axios from "axios";
import Vue from 'vue';
/* 搜索 */
import { Search } from 'vant';
Vue.use(Search);
/* 宫格 */
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);

import BetterScroll from "better-scroll"

export default {
    components:{
        Swiper
    },
    data(){
        return{
            searchval:"",
            bannerList:[],
            grids:{},
            imgt:'',
            imgc:"",
            letters:[],
            bannersTwo:[],
            scrollHeight:0
        }
    },
    methods:{
        onFocus(){
            this.$router.push('/classify')
        },
        goCity(){
            this.$router.push("/city")
        }
    },
    created(){
       

        axios({
            url:"https://b2capigateway.yiguo.com/api/home/TemplateComponent/GetTemplateComponentInfo?appName=3000025",
            method:"post",
            data:{
                body:{
                    operationType: 0,
                    previewTime: ""
                },
                head:{
                    cityCode: "1",
                    cityId: "312d0556-0671-4f2e-8bac-7b8873b5a03a",
                    districtId: "825dbb3c-015a-4a19-a7be-a6bfe4aa0fe0",
                    loginToken: "",
                    token: "",
                    version: "h5"
                }
            }
            
        }).then(res=>{
            this.grids =res.data.Data.templateComponentList[0].navComponentList
            this.imgt =res.data.Data.templateComponentList[0].adPictures[0].pictureUrl
            this.letters =res.data.Data.templateComponentList[0].fastReportsList
            this.bannerList = res.data.Data.templateComponentList[0].carouselPictures
             this.imgc = res.data.Data.templateComponentList[1].adPictures[0].pictureUrl
              this.bannersTwo = res.data.Data.templateComponentList[1].commoditysComponentList
              console.log(this.bannersTwo)
        
        })
    
       
        
    },
    mounted(){
        this.scrollHeight = document.documentElement.clientHeight - 90 +"px"
        new BetterScroll(".content",{
            scrollbar:{
                fade:true
            },
            click:true
        })
    },
}
</script>


<style lang="scss" scoped>
    .header{
        height: 0.4rem;
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        display: flex;
        z-index: 999;
        .left{
            height: 0.4rem;
            width: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(79, 192, 141);
        };
        .right {
            height: 0.4rem;
            width: 85%;
             .van-search{
                height: 0.4rem;
            }
        }
    }
    .content{
        position: relative;
        top: 0.4rem;
    }
    .swiper-slide{
        img{
          width: 100%;
        }
    }
    .first-screen-ad,.group-floor {
        img{
            width: 100%;
        }
    }
    .letter{
        height: 0.4rem;
        width: 100%;
        border-top: 0.01rem solid #f4f4f4;
        display: flex;
        .left{
            width: 30%;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            font-size: 0.18rem;
        }
        .right{
            flex: 1;
            height: 0.4rem;
            line-height: 0.4rem;
            padding-left: 0.15rem;
            overflow: hidden;
        }
    }
</style>