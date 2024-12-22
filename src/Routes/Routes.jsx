import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import ManageFoods from "../Pages/ManageFoods";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import FoodRequest from "../Pages/FoodRequest";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children:[
                  
                ]
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>,
            },
            
            {
                path: '/addFood',
                element: <AddFood></AddFood>,
               
            },
          
            {
                path: '/manageFoods',
                element:<ManageFoods></ManageFoods>
            },
            {
                path: '/foodRequest',
                element: <FoodRequest></FoodRequest>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
           
        ] 
    }
])
export {routes}