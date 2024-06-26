import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import UpdateProfile from './Components/UpdateProfile.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import { HelmetProvider } from 'react-helmet-async';
import CardDetails from './Components/CardDetails.jsx';
import HideRouter from './HideRouter/HideRouter.jsx';
import DashBoard from './Components/DashBoard.jsx';
import ContactUs from './Components/ContactUs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/updateProfile",
        element: <HideRouter><UpdateProfile></UpdateProfile></HideRouter>
      },
      {
        path: "/card/:id",
        element: <HideRouter><CardDetails></CardDetails></HideRouter>,
        loader: () => fetch('../data.json')
      },
      {
        path: "/dashboard",
        element: <HideRouter><DashBoard></DashBoard></HideRouter>
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
