import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Index from "../components/index";
import Product from "../components/product/product";

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