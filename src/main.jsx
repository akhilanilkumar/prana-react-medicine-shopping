import {createBrowserRouter} from "react-router-dom";
import Root, {loader as rootLoader} from "./routes/root";
import ErrorPage from "./error/error-page";
import Contact from "./contact/contact";
import Products from "./products/products";
import Login from "./login/login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        children: [{
            path: 'login',
            element: <Login/>
        }, {
            path: 'contact',
            element: <Contact/>
        }, {
            path: 'products',
            element: <Products/>,
        }]
    }
])

export default router;
