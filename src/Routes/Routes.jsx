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
import Foods from "../Components/Foods";
import FoodDetails from "../Pages/FoodDetails";
import UpdateFood from "../Pages/UpdateFood";

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
                    {
                        path: '/',
                        element: <Foods></Foods>,
                        loader: ()=>fetch('https://mileston-11-server-side.vercel.app/foods/top'),
                      },
                ]
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>,
                loader: ()=>fetch('https://mileston-11-server-side.vercel.app/foods'),
            },
            
            {
                path: '/addFood',
                element:<PrivateRoute><AddFood></AddFood></PrivateRoute> ,
               
            },
            {
                path: '/foods/:id',
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
              
                loader: ({ params }) => fetch(`https://mileston-11-server-side.vercel.app/foods/${params.id}`)
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
                path: '/update/user/:id',
                element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://mileston-11-server-side.vercel.app/foods/user/${params.id}`)
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