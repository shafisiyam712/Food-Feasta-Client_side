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
import PrivateRoute from "../Components/PrivateRoute";

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
                element:<PrivateRoute><AddFood></AddFood></PrivateRoute> ,
               
            },
          
            {
                path: '/manageFoods',
                element:<PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>,
            },
            {
                path: '/foodRequest',
                element:<PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>,
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