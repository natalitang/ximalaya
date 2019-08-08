import axios from "axios";

//axios的配置
const server = axios.create({
    timeout:5000,
    withCredentials:true
})

//判断是get请求还是post请求，拦截器的配置
server.interceptors.request.use((config)=>{
    if(config.method.toUpperCase() == "GET"){
        // config.params = {...config.data}
     }else if(config.method.toUpperCase() == "POST"){
         config.headers["content-type"] = "appliaction/x-www-form-urlencoded";
         //config.data = qs.stringify(config.data)
     }
     return config
},(err)=>{
    Promise.reject(err)
})

server.interceptors.response.use((res)=>{
    if(res.statusText=="OK"){
        return res.data
    }
},(err)=>{
    Promise.reject(err)
}
)


//导出，判断请求方式get,post,然后返回数据
export default (method,url,data={})=>{
    if(method.toUpperCase() == "GET"){
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase() == "POST"){
        return server.post(url,data);
    }
}