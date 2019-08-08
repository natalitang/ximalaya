import http from "utils/http.js"
//推荐，不需要传入数据
export const yosheng_api = ()=>http("get","/m-revision/page/index/queryIndexTabContent?moduleKey=youshengshu");
// export const city_api = ()=>http("get","/api/cityList")