import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from '../../Main/Root/Root';
import Home from '../../Pages/Home/Home/Home';

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

export default Routers;