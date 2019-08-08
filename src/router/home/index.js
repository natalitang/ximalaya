export default{
    path:"/home",
    component:()=>import ("views/home"),
    name:"home",
    meta:{
        tabBar:true,
        top:true,
        auth:false
    }
}