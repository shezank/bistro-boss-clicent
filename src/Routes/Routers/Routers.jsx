import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from '../../Main/Root/Root';
import Home from '../../Pages/Home/Home/Home';
import OurMenu from '../../Pages/OurMenu/OurMenu/OurMenu';
import OurShop from '../../Pages/OurShop/OurShop';
import Loign from '../../Pages/Login/Loign';
import Register from '../../Pages/Register/Register';
import BuyNow from '../../Pages/BuyNow/BuyNow';
import PrivateRoute from '../../Shard/PrivateRoute/PrivateRoute';

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/ourmenu',
          element: <OurMenu></OurMenu>
        },
        {
          path: '/ourshop/:title',
          element: <OurShop></OurShop>
        },
        {
          path: '/login',
          element: <Loign/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/buynow',
          element: <PrivateRoute><BuyNow/></PrivateRoute>
        },
      ]
    },
  ]);

export default Routers;