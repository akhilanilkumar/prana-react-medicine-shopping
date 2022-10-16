import {createBrowserRouter} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error/error-page";
import Contact from "./contact/contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'contacts/:contactId',
                element: <Contact/>
            }
        ]
    }
])

export default router;