export default {
    path:"/ting",
    component:()=>import("views/ting"),
    name:"ting",
    meta:{
        tabBar:true,
        top:true,
        auth:true
    },
    children:[
        {
            path:"reman",
            component:()=>import("components/reman"),
            name:"reman",
            meta:{
                tabBar:true,
                auth:true
            },
            
        },
        
    ]
}
