import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Catagories from './Components/Catagories/Catagories'
import Cart from './Components/Cart/Cart'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'

const router = createBrowserRouter([
  {
    path: ('/'),
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: ('/home'),
        element: <Home></Home>
      },
      {
        path: ('/catagories'),
        element: <Catagories></Catagories>
      },
      {
        path: ('/cart'),
        element: <Cart></Cart>
      },
      {
        path: ('/login'),
        element: <Login></Login>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
