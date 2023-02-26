import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CvForm from './pages/CvForm';
import Home from './pages/Home/home.jsx';
import ListTemplate from './pages/Template';
import Template1 from './pages/Template/Template1';
import Template2 from './pages/Template/Template2';

function Router({ element }) {
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
            element: <ListTemplate />
        },
        {
            path: '/template1',
            element: <Template1 />
        },
        {
            path: '/template2',
            element: <Template2 />
        }
    ]);
    return <RouterProvider router={router}>{element}</RouterProvider>;
}

export default Router;
