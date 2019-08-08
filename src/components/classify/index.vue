<template>
    <div class="classify" >
        <div class="classify-main" >
            <router-link v-for="(item,index) in classifyList" :key="index" tag="div" :to="item.link">
                <img :src="item.img" alt="" />
                <span>{{item.name}}</span>
            </router-link>
        </div>
        <img src="../../../public/img/adv.png" alt="" class="adv">
    </div>
</template>
<script>

    export default {
        name: "Classify",
        props: ["classifyList"],
    }
</script>
<style>
    .classify {
        width: 100%;
    }

    .classify-main {
        width: 3.08rem;
        height: .54rem;
        position: relative;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-around;


    }

    .classify-main>div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: .3rem
    }

    .classify-main>div>img {
        width: .34rem;
        height: .34rem;
        border-radius: .34rem;
    }

    .adv {
        margin-top: .18rem;
        width: 100%;
        height: .812rem;
        ;
        margin-bottom: 8px;
    }

    
</style>