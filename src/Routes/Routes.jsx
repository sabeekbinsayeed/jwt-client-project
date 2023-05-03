import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../layout/Main";
import Login from "../Components/Login/Login";
import Signup from "../Components/Login/Signup";
import Checkout from "../Components/Checkout/Checkout";
import Orders from "../Components/Orders/Orders";

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
                path: '/orders/:id',
                element: <Orders></Orders>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

        ]
    }
]);

export default router;
