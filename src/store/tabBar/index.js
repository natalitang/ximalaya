import Vue from "vue";
import Vuex  from "vuex";
Vue.use(Vuex);

const state = {
    navList:[
            {
                path: "./home",
                text: "推荐"
            },
            {
                path: "./yousheng",
                text: "有声书"
            },
            {
                path: "./xiangsheng",
                text: "相声"
            },
            {
                path: "./ting",
                text: "音乐"
            },
            {
                path: "./xiangsheng",
                text: "儿童"
            },
            {
                path: "./yousheng",
                text: "人文"
            },
            {
                path: "./xiangsheng",
                text: "情感"
            },
            {
                path: "./yousheng",
                text: "历史"
            },
            {
                path: "./xiangsheng",
                text: "科技"
            },
            {
                path: "./yousheng",
                text: "更多"
            }
    ]
}
const actions = {

}
const mutations={

}


export default new Vuex.Store({
    state,
    actions,
    mutations,
    namespaced:true
})