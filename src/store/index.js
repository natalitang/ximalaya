import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import tuijian from "./tuijian"
import tabBar from "./tabBar"

export default new Vuex.Store({
    modules:{
        tuijian,
        tabBar
    }
})