import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NavBar from './Components/NavBar'
import './styles/global.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
 ]) 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
