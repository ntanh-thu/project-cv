import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CvForm from './pages/CvForm';

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <div>Home Page</div>
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
