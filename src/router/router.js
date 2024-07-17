import Account from "~/pages/account/account";
import Home from "~/pages/home/home";
import Login from "~/pages/login/login";

const { default: routerConfigs } = require("~/config/routerConfig");

const publicRoutes = [
    {
       path: routerConfigs.home,
       component: Home,
    },
    {
        path: routerConfigs.login,
        component: Login,
    },
    {
        path: routerConfigs.account,
        component: Account,
    
    },
    

]
const privateRoutes = []

export {privateRoutes, publicRoutes}