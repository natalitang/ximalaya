<template>
    <div id = "yousheng">
        <div class = "yousheng-bottom">
            <Swiper :swiperImgList = "youshengSwiperImgList"/>
            <Classify :classifyList="youshengClassifyList"/>
            <Albums :moduleRankDatas="youshengModuleRankDatas"/>
        </div>
    </div>
</template>
<script>
     import Classify from "components/classify";
    import Albums from "components/albumList"
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.css";
    import {yosheng_api} from "api/yousheng"
    export default{
        name:"YouSheng",
        //必须要是再能获取到真实的DOM节点，才能用轮播
        components:{
            Classify,
            Albums
        },
        data(){
            return {
                youshengSwiperImgList:{},
                youshengClassifyList:[],
                youshengModuleRankDatas:[],
            }
        },
        //获取异步数据
        async created() {
            if(!sessionStorage.getItem("youshengSwiperImgList")){
                let data = await yosheng_api(); //异步获取数据
                this.youshengSwiperImgList = data.data.moduleContent.focusImages;
                sessionStorage.setItem("youshengSwiperImgList",JSON.stringify( data.data.moduleContent.focusImages))
            }
            else{
                this.youshengSwiperImgList =JSON.parse(sessionStorage.getItem("youshengSwiperImgList")) 
            }
            if(!sessionStorage.getItem("youshengClassifyList")){
                let data = await yosheng_api(); //异步获取数据
                this.youshengClassifyList= data.data.moduleContent.tomatoes;
                sessionStorage.setItem("youshengClassifyList",JSON.stringify(data.data.moduleContent.tomatoes))
            }
            else{
                this.youshengClassifyList =JSON.parse(sessionStorage.getItem("youshengClassifyList")) 
            }
            if(!sessionStorage.getItem("youshengModuleRankDatas")){
                let data = await yosheng_api(); //异步获取数据
                this.youshengModuleRankDatas = data.data.moduleContent.moduleRankDatas;
                sessionStorage.setItem("youshengModuleRankDatas",JSON.stringify(data.data.moduleContent.moduleRankDatas))
            }
            else{
                // sessionStorage.getItem("youshengModuleRankDatas")
                this.youshengModuleRankDatas =JSON.parse(sessionStorage.getItem("youshengModuleRankDatas")) 
            }
          
        },
        mounted(){
            var mySwiper = new Swiper(this.$refs.swiperContainer, {
                speed: 500,
                spaceBetween: 10,
                loop: true, // 循环模式选项
                autoplay: {
                    disableOnInteraction: false
                },
                slidesPerView: "auto",
                centeredSlides:true,
            });
        }
    }
</script>
<style>

#yousheng{
    font-size: .12rem;
    padding-top: .2rem;
}
.swiper-container{
    width: 3.75rem;
    height: 1.26rem;
}
.swiper-wrapper{
    width: 3.75rem;
    height: 1.26rem;
    text-align: center;
    line-height: 1.26rem;
}
.swiper-wrapper .swiper-slide{
    width:80%;
    height: 100%;
    line-height: 1.26rem;
}
.swiper-wrapper .swiper-slide img{
    width:100%;
    height: 100%;
    border-radius: .2rem;
}

.yousheng-bottom{
    width: 100%
}
</style>