import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from '../src/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CvForm from './pages/CvForm';
import Home from './pages/Home/home.jsx';
import ListTemplate from './pages/Template';
import Template1 from './pages/Template/Template1';
import Template2 from './pages/Template/Template2';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'home', element: <Home /> },
            {
                path: 'form',
                element: <CvForm />
            },
            {
                path: 'template',
                element: <ListTemplate />
            },
            { path: 'template1', element: <Template1 /> },
            { path: 'template2', element: <Template2 /> }
        ]
    }
]);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
