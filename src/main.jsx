import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Routers from './Routes/Routers/Routers.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Shard/AuthProvider/AuthProvider.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto'>
          <HelmetProvider>
            <RouterProvider router={Routers} />
          </HelmetProvider>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
