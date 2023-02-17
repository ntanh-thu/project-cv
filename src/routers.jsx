import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CvForm from './pages/CvForm';
import Home from './pages/Home';

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
            element: <div>template</div>
        }
    ]);
    return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
