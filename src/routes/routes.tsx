import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Index from "../pages/index";
import Product from "../pages/product/product";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Index />
            },
            {
                path: 'product',
                element: <Product />
            },
        ]
    },
    {
        path: '*',
        element: <>No page found!</>
    },
])