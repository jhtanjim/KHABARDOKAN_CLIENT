import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Shared/Blogs/Blogs";
import NotFound from "../pages/Shared/NotFound/NotFound";
import ChefRecipes from "../pages/Shared/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'ChefRecipes/:ChefId',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://10-assignment-server-jhtanjim.vercel.app/data/${params.id}`)
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },

            {
                path: '*',
                element: <NotFound></NotFound>

            }
        ]
    }

])

export default router;