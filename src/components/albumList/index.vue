<template>
    <div id="albums">
        <div class="albums-content center" v-for="(item,index) in moduleRankDatas" :key="index">
            <div class="title">
                <span class="classify-title">{{item.title}}</span>
                <a href="#" class="more">更多<span>></span></a>
            </div>
            <ul class="album-info" v-for="(child,nxt) in item.rankingContentInfoList.rankModuleInfoList" :key="nxt">
                <li>
                    <div>
                        <img :src="'http://fdfs.xmcdn.com/'+child.albumInfo.cover" alt="" class="album-info-img">
                    </div>
                    <div class="album-info-msg">
                        <p class="msgtitle">{{child.albumInfo.title}}</p>
                        <p class="msginfo">{{child.albumInfo.customTitle}}</p>
                        <p class="msgspan">
                            <span>
                                <i class="iconfont">&#xe617;</i>
                                &nbsp;&nbsp;{{child.anchorInfo.nickname}}
                            </span>
                            <span>
                                <i class="iconfont">&#xe606;</i>
                                &nbsp;{{child.statCountInfo.trackCount}}
                            </span>
                            <span>
                                <i class="iconfont">&#xe73a;</i>
                                &nbsp;
                                {{child.statCountInfo.playCount| FilterNum}}
                            </span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    import { tuijian_api } from "api/tuijian";
    import Vue from "vue";
    export default {
        name: "Album",
        props:["moduleRankDatas"]
      
    }
    Vue.filter('FilterNum', (num) => {
        var nm = unitConvert(num);
        return nm
    })
    function unitConvert(num) {
        var moneyUnits = [" ", "万", "亿", "万"]
        var dividend = 10000
        var curentNum = num //转换数字 
        var curentUnit = moneyUnits[0] //转换单位 
        for (var i = 0; i < 4; i++) {
            curentUnit = moneyUnits[i]
            if (strNumSize(curentNum) < 5) { break; }
            curentNum = curentNum / dividend
        }
        var m = { num: 0, unit: "" }
        m.num = curentNum.toFixed(2)
        m.unit = curentUnit
        return m.num + m.unit
    }
    function strNumSize(tempNum) {
        var stringNum = tempNum.toString()
        var index = stringNum.indexOf(".")
        var newNum = stringNum
        if (index != -1) { newNum = stringNum.substring(0, index) }
        return newNum.length
    }

</script>

<style>
    .albums-content .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .title .classify-title {
        font-size: .18rem;
        color: #333;
        font-weight: 700;
    }

    .title .more {
        font-size: .12rem;
    }

    .album-info li .album-info-img {
        width: .7rem;
        height: .7rem;
        border-radius: .05rem;
    }

    .album-info li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .15rem .1rem .15rem 0;
    }

    .album-info li .album-info-msg {
        height: .7rem;
        width: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around
    }

    .album-info-msg>p {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .album-info-msg .msgtitle {
        font-size: .16rem;
        color: rgb(51, 51, 51);

    }

    .album-info-msg .msginfo,
    .album-info-msg .msgspan {
        font-size: .13rem;
        color: #999;
    }

    .album-info-msg .msgspan span {
        margin-right: .08rem;
    }

    .album-info-msg .msgspan span .iconfont {
        font-size: 0.12rem !important;
    }
</style>