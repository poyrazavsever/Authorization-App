import Home from "./views/Home"
import About from "./views/About"
import Login from "./views/Login"
import Register from "./views/Register"
import Profile from "./views/Profile"


export const routes = [
    {
        path: "/",
        name: "Home",
        exact : true,
        component: Home,
        auth:false
    },
    {
        path: "/about",
        name: "About",
        exact : true,
        component: About,
        auth:false
    },
    {
        path: "/login",
        name: "Login",
        exact : true,
        component: Login,
        auth:false
    },
    {
        path: "/register",
        name: "Register",
        exact : true,
        component: Register,
        auth:false
    },
    {
        path: "/profile",
        name: "Profile",
        exact : true,
        component: Profile,
        auth:true
    },
]