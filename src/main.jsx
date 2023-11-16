import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Routers from './Routes/Routers/Routers.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Shard/AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
        <HelmetProvider>
          <RouterProvider router={Routers} />
        </HelmetProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
