import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './HomeComponents/Home.jsx';
import AuthProvider from './HomeComponents/AuthProvider.jsx';
import Login from './HomeComponents/Login.jsx';
import Register from './HomeComponents/Register.jsx';
import Dashboard from './DashboardComponents/Dashboard.jsx';
import Profile from './DashboardComponents/Profile.jsx';
import Meals from './HomeComponents/Meals.jsx';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

import Upcoming from './HomeComponents/Upcoming.jsx';
import Payment from './HomeComponents/Payment.jsx';
import AllUsers from './DashboardComponents/AllUsers.jsx';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Meals",
        element: <Meals></Meals>,
      },
      {
        path: "/UpcomingMeals",
        element: <Upcoming></Upcoming>,
      },
      {
        path: "/Login",
        element: <Login></Login>,


      },
      {
        path: "/Register",
        element: <Register></Register>
      },
      {
        path: "/Payment",
        element: <Payment></Payment>
      },
    ],


  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/profile',
        element: <Profile></Profile>
      },
      {
        path: '/dashboard/ManageUser',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/AddMeals',
        element: <AllUsers></AllUsers>
      }
      ,
      {
        path: '/dashboard/UpcomingMeals',
        element: <AllUsers></AllUsers>
      }
      ,
      {
        path: '/dashboard/ServeMeals',
        element: <AllUsers></AllUsers>
      }
    ]
  }



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </AuthProvider>
  </React.StrictMode>,
)
