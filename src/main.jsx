import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Categories from './Components/Categories/Categories'
import Cart from './Components/Cart/Cart'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import CategoryDetail from './Components/CategoryDetail/CategoryDetail'
import ProductDetails from './Components/ProductDetails/ProductDetails'

const router = createBrowserRouter([
  {
    path: ('/'),
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: ('/'),
        element: <Home></Home>
      },
      {
        path: ('/categories'),
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php') ,
        element: <Categories></Categories>
      },
      {
        path: ('/cart'),
        element: <Cart></Cart>
      },
      {
        path: ('/login'),
        element: <Login></Login>
      },
      {
        path: "/categories/:categoryName",
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`),
        element: <CategoryDetail></CategoryDetail>
      },
      {
        path: "/categories/product/:productId",
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productId}`),
        element: <ProductDetails></ProductDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
