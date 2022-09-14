import Home from "./views/Home"
import About from "./views/About"
import Login from "./views/Login"
import Register from "./views/Register"
import Profile from "./views/Profile"


export const routes = [
    {
        path: "/",
        exact : true,
        component: Home,
        auth:false
    },
    {
        path: "/about",
        exact : true,
        component: About,
        auth:false
    },
    {
        path: "/login",
        exact : true,
        component: Login,
        auth:false
    },
    {
        path: "/register",
        exact : true,
        component: Register,
        auth:false
    },
    {
        path: "/profile",
        exact : true,
        component: Profile,
        auth:true
    },
]