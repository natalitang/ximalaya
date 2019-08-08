export default {
    path:"/top",
    component:()=>import("views/top"),
    name:"top",
    meta:{
        tabBar:false,
        top:false,
        auth:true
    },
    children:[
        {
            path:"free",
            component:()=>import("components/free"),//无页面
            name:"free",
            meta:{
                tabBar:false,
                auth:true
            },
            children:[
                {
                    path:"all",
                    component:()=>import("views/top/all"),
                    name:"all",
                    meta:{
                        tabBar:true,
                        top:true,
                        auth:true
                    },
                    
                },
                
            ]
            
        },
        // {
        //     path:"rise",
        //     component:()=>import("components/rise"),//无页面
        //     name:"all",
        //     meta:{
        //         tabBar:true,
        //         top:true,
        //         auth:true
        //     },
        //     children:[
        //         {
        //             path:"all1",
        //             component:()=>import("views/top/all1"),
        //             name:"all1",
        //             meta:{
        //                 tabBar:true,
        //                 top:true,
        //                 auth:true
        //             },
                    
        //         },
                
        //     ]
            
        // },
            
        
        
    ]
}