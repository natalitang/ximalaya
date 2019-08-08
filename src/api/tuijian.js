import http from "utils/http.js"
//推荐，不需要传入数据
export const tuijian_api = ()=>http("get","/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian");
// export const city_api = ()=>http("get","/api/cityList")