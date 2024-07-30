import { Account } from "~/pages/account";
import Home from "~/pages/home/home";
import Product from "~/pages/product/product";
import { HeaderOnly } from "~/layouts";
import Login from "~/pages/login/login";
import SignIn from "~/pages/SignIn";



const { default: routerConfigs } = require("~/config/routerConfig");

const publicRoutes = [
    {
       path: routerConfigs.home,
       component: Home,
    },
    {
        path: routerConfigs.login,
        component: Login,
        layout: null,
    },
    {
        path: routerConfigs.account,
        component: Account,
    },

    {
        path: routerConfigs.product,
        component: Product,
        layout: HeaderOnly,
    },
    {
        path: routerConfigs.signin,
        component: SignIn,
        layout: null,
     },
    

]
const privateRoutes = []

export {privateRoutes, publicRoutes}