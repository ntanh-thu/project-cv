import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CvForm from './pages/CvForm';
import Home from './pages/Home/home.jsx';
import Template2 from './pages/Template/Template2';

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/form',
            element: <CvForm />
        },
        {
            path: '/template',
            element: <Template2 />
        }
    ]);
    return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
