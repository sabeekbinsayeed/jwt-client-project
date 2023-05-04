import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../layout/Main";
import Login from "../Components/Login/Login";
import Signup from "../Components/Login/Signup";
import Checkout from "../Components/Checkout/Checkout";
import Orders from "../Components/Orders/Orders";
import Private from "./Private";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/orders',
                element: <Private><Orders></Orders></Private>
            },
            {
                path: '/checkout/:id',
                element: <Private><Checkout></Checkout></Private>,
                loader: ({ params }) => fetch(`https://complete-project-mechanics-server-sabeekbinsayeed.vercel.app/services/${params.id}`)
            },

        ]
    }
]);

export default router;
