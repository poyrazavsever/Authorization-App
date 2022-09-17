import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { logout } from "../stores/auth"
import { NavLink, useNavigate } from "react-router-dom"
import { routes } from "../routes"

function Navbar() {

    const { user } = useSelector(state => state.auth)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <nav className="h-24 flex items-center justify-center bg-slate-900">
            
            {routes.filter((route) => {
            if(user && (route.path === "/login" || route.path === "/register")){
                return false  
            }else if(!user && (route.path === "/profile")){
                return false
            }else{
                return true
            }
            }).map((route) => {

            return (

                <NavLink end exact={route.exact.toString()} to={route.path} key={route.name} 
                className={({ isActive }) =>
                isActive ? "text-purple-300 pl-5" : "pl-5 text-white"
                }>
                {route.name}
                </NavLink>

            )
            
            })}

            {user && (
                <button className="text-white pl-5" onClick={handleLogout}>
                    Logout
                </button> 
            )}
            
            
        </nav>
    )
}

export default Navbar