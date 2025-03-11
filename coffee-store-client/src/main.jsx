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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
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
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
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
       <RouterProvider router={router} />

  </StrictMode>,
)
