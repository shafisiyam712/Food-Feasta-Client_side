import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
       
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children:[
                  
                ]
            },
           
        ] 
    }
])
export {routes}