import {createBrowserRouter} from "react-router-dom";
import Root, {loader as rootLoader} from "./routes/root";
import ErrorPage from "./error/error-page";
import Contact from "./contact/contact";
import Products from "./products/products";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        children: [{
            path: 'contact',
            element: <Contact/>
        }, {
            path: 'products',
            element: <Products/>,
        }]
    }
])

export default router;