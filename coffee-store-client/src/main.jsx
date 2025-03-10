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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader : () => fetch('http://localhost:5000/coffee'),
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />

  </StrictMode>,
)
