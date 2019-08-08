<template>
    <div id="rankingList">
        <div class="rankingLeft">
            <ul class="rankingList-nav" v-for="(item,index) in rankingList" :key="index">
                <v-touch @tap = "clickHandler(index)" tag = "li" :class="activeIndex==index?'active':''">{{item.title}}</v-touch>
            </ul>
        </div>
        <div class="rankingRight">
            <ul class="ranking-info">
                <li>
                    <div class=ranking-info-numranking>
                        <span>1</span>
                    </div>
                    <div class="ranking-info-val">
                        <div class="ranking-info-img">
                            <img src="../../../../public/img/t1.jpg" />
                        </div>
                        <div class="ranking-info-msg">
                            <p class="msgtitle">摸金天师【紫襟演播】</p>
                            <p class="msginfo">三年寻龙，十年点穴</p>
                            <p class="msgspan">
                                <span>
                                    <i class="iconfont">&#xe617;</i>
                                    &nbsp;&nbsp;35.24亿
                                </span>
                                <span>
                                    <i class="iconfont">&#xe606;</i>
                                    &nbsp;1133
                                </span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {free_api} from "api/free";
    import {mapAction} from "vuex"
    export default {
        name: "RankingList",
        data() {
            return {
                rankingList: ["有声书", "相声评书", "儿童", "历史人文", "培训讲座", "教育机构", "社团机构", "外语", "综艺", "娱乐", "情感生活", "商业财经", "健康养生", "戏曲", "IT科技", "旅游", "时尚生活",
                    "汽车", "二次元", "电台", "美女主播", "咨讯"],
                activeIndex: 0,
                topList:[]
            }
        },
       
        methods: {
            clickHandler(index) {
                this.activeIndex = index;
            },
            
        },
        //异步获取数据
       async created(){
            let data = await free_api();
            this.rankingList = data.data[0].categoryInfos;
            //改数据
            
        }
    }
</script>

<style>
    #rankingList {
        height: 30rem;
        width: 100%;
        display: flex;

    }

    .rankingLeft {
        width: .73rem;
    }



    .rankingList-nav li {
        display: flex;
        height: .5rem;
        border-bottom: .01rem solid rgba(0, 0, 0, .05);
        background-color: rgba(0, 0, 0, .05);
        align-items: center;
        justify-content: center;
        font-size: .14rem;
        color: #72727b;
    }

    .rankingList-nav .active {
        border-left: .05rem solid red;
    background-color: white
    }

    .rankingRight {
        width: 3rem;

    }

    .rankingRight .ranking-info li {
        display: flex;
        width: 100%;
        height: 1rem;
        padding: .15rem .1rem .15rem
    }

    .ranking-info li .ranking-info-numranking {
        width: .34rem;
        height: .2rem;

    }

    .ranking-info li .ranking-info-numranking>span {
        display: block;
        width: .2rem;
        height: .2rem;
        background-color: red;
        position: relative;
        margin: auto;
        text-align: center
    }

    .ranking-info .ranking-info-val {
        width: 2.66rem;
        display: flex
    }

    .ranking-info .ranking-info-val .ranking-info-img {
        width: .7rem;
        height: .7rem;
        margin-right: .15rem;
    }

    .ranking-info-val .ranking-info-img img {
        width: .7rem;
        height: .7rem;
        border-radius: .1rem;
    }

    .ranking-info-val .ranking-info-msg {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between
    }

    .ranking-info-msg .msgtitle {
        color: rgb(64, 64, 76);
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: .16rem;
        line-height: .22rem;
    }
</style>