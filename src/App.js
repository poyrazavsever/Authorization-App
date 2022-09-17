import { Route, Routes, NavLink, Navigate  } from "react-router-dom"
import { routes } from "./routes"
import {useSelector} from "react-redux"
import React from "react";


function App() {

  const { user } = useSelector(state => state.auth)

  return (

    <div>

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
        
      </nav>


      <Routes>

        {routes.map((route) => {

          return (
            <Route key={route.path} exact={route.exact} path={route.path}
            element={route.auth && !user ? <Navigate to="/login" /> : <route.component/> } />
          )
            
        })}
        
      </Routes>
      

    </div>
  );
}

export default App;
