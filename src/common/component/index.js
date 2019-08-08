//存放公共组件
import Classify from "components/classify";
import Album from "components/albumList";
import Swiper from "components/swiper"
import Vue from "vue"

// import Top from "common/top"
Vue.component(Classify.name,Classify)
Vue.component(Album.name,Album);
Vue.component(Swiper.name,Swiper)
