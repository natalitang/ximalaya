<template>
    <div id="swiper" v-if="swiperImgList.length?true:false">
        <div class="swiper-container" ref="swiperContainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in swiperImgList">
                    <img :src="item.adFocusPictureDetail.cover"></img>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.css";
    export default {
        name: 'Swiper',
        props: ['swiperImgList'],
        mounted() {
            var mySwiper = new Swiper(this.$refs.swiperContainer, {
                speed: 500,
                spaceBetween: 10,
                loop: true, // 循环模式选项
                autoplay: {
                    disableOnInteraction: false
                },
                slidesPerView: "auto",
                centeredSlides: true,
            });

        },


    }

</script>

<style>
    #swiper {
        width: 100%
    }

    .swiper-container {
        width: 3.75rem;
        height: 1.26rem;
    }

    .swiper-wrapper {
        width: 3.75rem;
        height: 1.26rem;
        text-align: center;
        line-height: 1.26rem;
    }

    .swiper-wrapper .swiper-slide {
        width: 80%;
        height: 100%;
        line-height: 1.26rem;
    }

    .swiper-wrapper .swiper-slide img {
        width: 100%;
        height: 100%;
        border-radius: .2rem;
    }
</style>