import Routelist from './router'
import App_content from './App_content'
import Listcon_detail from './Listcon_detail'
import ListView from './ListView'
import Content1 from './Contetn_one'
import Homelogin from "./Homelogin"
import ErrorPage from "./Errorpage"

var routes =[
    {
        path:'/',
        component:Content1,
        auth:true,
        exact:true
    },
    {
        path:'/home',
        component:Content1,
        auth:true,
    },
    {
        path:'/homelogin',
        component:Homelogin,
    },{
        path:'/404',
        component:ErrorPage,
    },{
        path:'/listview',
        component:ListView,
        auth:true
    },{
        path:'/listcon_detail',
        component:Listcon_detail,
        auth:true
    }
];

// auth 是否需要登录
export default routes