//路由的配置

import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import yousheng from "./yousheng";
import xiangsheng from "./xiangsheng";
import ting from "./ting"
import top from "./top"
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        home,
        yousheng,
        xiangsheng,
        ting,
        top
    ]
})