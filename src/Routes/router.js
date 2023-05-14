import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import KeyFeatures from '../Pages/KeyFeatures/KeyFeatures';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/keyFeatures",
                element: <KeyFeatures></KeyFeatures>
            }
        ]
    } 
])

export default router;