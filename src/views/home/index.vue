<template>
    <div id="home">
        <Swiper :swiperImgList = "tuijianSwiperImgList"/>
        <Classify :classifyList="tuijianClassifyList" />
        <Album :moduleRankDatas="tuijianModuleRankDatas" />
    </div>
</template>

<script>
    import {tuijian_api } from "api/tuijian"
    import Album from "components/albumList"
    export default {
        name: "Home",
        data() {
            return {
                tuijianClassifyList:[],
                tuijianModuleRankDatas:[],
                tuijianSwiperImgList:{},
            }
        },
        //异步获取数据，将数据传输到各个部分
        async created() {
            // let data = await tuijian_api(); 
            // this.tuijianSwiperImgList.info = data.data.moduleContent.focusImages;
            // this.tuijianClassifyList = data.data.moduleContent.tomatoes;
            // this.tuijianModuleRankDatas = data.data.moduleContent.moduleRankDatas;
            // if(this.tuijianSwiperImgList.info.length == 0)
            // {
            //     this.tuijianSwiperImgList.bool = false
            // }
            // else{
            //     this.tuijianSwiperImgList.bool = true
            // }
            if(!sessionStorage.getItem("tuijianSwiperImgList")){
                let data = await tuijian_api(); //异步获取数据
                this.tuijianSwiperImgList = data.data.moduleContent.focusImages;
                sessionStorage.setItem("tuijianSwiperImgList",JSON.stringify( data.data.moduleContent.focusImages))
            }
            else{
                this.tuijianSwiperImgList =JSON.parse(sessionStorage.getItem("tuijianSwiperImgList")) 
            }
            if(!sessionStorage.getItem("tuijianClassifyList")){
                let data = await tuijian_api(); //异步获取数据
                this.tuijianClassifyList = data.data.moduleContent.tomatoes;
                sessionStorage.setItem("tuijianClassifyList",JSON.stringify( data.data.moduleContent.tomatoes))
            }
            else{
                this.tuijianClassifyList =JSON.parse(sessionStorage.getItem("tuijianClassifyList")) 
            }
            if(!sessionStorage.getItem("tuijianModuleRankDatas")){
                let data = await tuijian_api(); //异步获取数据
                this.tuijianModuleRankDatas = data.data.moduleContent.moduleRankDatas;
                sessionStorage.setItem("tuijianModuleRankDatas",JSON.stringify(data.data.moduleContent.moduleRankDatas))
            }
            else{
                // sessionStorage.getItem("moduleRankDatas")
                this.tuijianModuleRankDatas =JSON.parse(sessionStorage.getItem("tuijianModuleRankDatas")) 
            }
          
        },
    }
</script>
<style>
    #home {
        width: 100%;
        height: 100%;
    }
</style>