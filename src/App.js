import { Route, Routes, Navigate  } from "react-router-dom"
import { routes } from "./routes"
import {useSelector} from "react-redux"
import React from "react";
import Navbar from "./components/Navbar";


function App() {

  const { user } = useSelector(state => state.auth)

  return (

    <div>

      <Navbar />

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
