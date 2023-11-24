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
import Dashboard from '../../Pages/Dashboard/Dashboard';
import MyCart from '../../Pages/Dashboard/MyCart/MyCart';
import AllUsers from '../../Pages/Dashboard/Admin/AllUsers/AllUsers';
import AddItems from '../../Pages/Dashboard/AddItems/AddItems';
import AdminRoute from '../../Shard/AdminRoute/AdminRoute';
import ManageItems from '../../Pages/Dashboard/ManageItems/ManageItems';
import Payments from '../../Pages/Dashboard/Payments/Payments';
import PaymentsHistory from '../../Pages/Dashboard/PaymentsHistory/PaymentsHistory';
import UserHome from '../../Pages/Dashboard/UserHome/UserHome';
import AdminHome from '../../Pages/Dashboard/AdminHome/AdminHome';

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
    {
      path: '/dashboard', 
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'payments',
          element: <Payments></Payments>
        },
        {
          path: 'paymentsHistory',
          element: <PaymentsHistory></PaymentsHistory>
        },
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'additems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageitems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
      ]
    }
  ]);

export default Routers;