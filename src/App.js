import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"


function App() {

  return (
    <div>
      <Routes>

        {routes.map((route) => {

          return (
            <Route key= {route.path} exact ={route.exact} path={route.path} element = {<route.component />}></Route>
          )
            
        })}
        
      </Routes>
      

    </div>
  );
}

export default App;
