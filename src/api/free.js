import http from "utils/http.js"
//推荐，不需要传入数据
export const free_api = ()=>http("get","/m-revision/page/rank/queryRankClusterDetail");
// export const city_api = ()=>http("get","/api/cityList")