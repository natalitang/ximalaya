<template>
    <div id="tabBar">
        <ul class="tab-container">
            <router-link v-for="(item,index) in navList" :key="index" :to="item.path" tag="li">
                <span>{{item.text}}</span><i></i>
            </router-link>
        </ul>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    export default {
        name: "TabBar",
        computed: {
            ...mapState({
                navList: state => state.tabBar.navList,

            })
        },

        mounted() {
            console.log(this.navList);
        }
    }
</script>

<style>
    #tabBar {
        margin-top: .45rem;
        height: .45rem;
        padding-top: .05rem;
        display: flex;
        align-items: center;
        width: 100%;
        cursor: pointer;
        border-bottom: .005rem solid #e8e8e8;
        overflow-x: scroll;
    }

    .tab-container {
        height: .395rem;
        white-space: nowrap;
        display: flex;
        align-items: center;
    }

    .tab-container>li {
        height: 100%;
    }

    .tab-container li span {
        padding: .07rem .125rem;
        font-size: .14rem;
        color: #72727b;
        height: 100%;
        text-decoration: none;
        display: flex;
        align-items: center;
    }
    #tabBar ul .router-link-active span{
        font-size: .18rem;
    }
    #tabBar ul .router-link-active {
        position: relative;
    }
    #tabBar ul li i{
        display: block;
        width:.2rem;
        height: 0.03rem;
        position: absolute;
        background-color: red;
        left:.2rem;
        bottom:0rem;
        z-index: 10
    }
    
</style>