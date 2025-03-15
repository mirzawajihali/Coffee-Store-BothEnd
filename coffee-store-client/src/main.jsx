import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Error404 from './components/Error404.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import PrivateRouter from './router/PrivateROuter.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-one-rho.vercel.app/coffee')
      },
      {
        path: "addCoffee",
        element: <PrivateRouter><AddCoffee></AddCoffee></PrivateRouter>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "users",
        element:<PrivateRouter> <Users></Users></PrivateRouter>,
        loader : () => fetch('https://coffee-store-server-one-rho.vercel.app/users')
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader : ({params}) => fetch(`https://coffee-store-server-one-rho.vercel.app/coffee/${params.id}`),
      },

      {
        path: "*",
        element: <Error404></Error404>
        
      },
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>

  </StrictMode>,
)
