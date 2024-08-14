import { useState } from 'react'
import './App.css'
import './utility.scss'

import { createBrowserRouter, Link, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import Landingpage from './components/page_landingpage/landingpage'
import Services from './components/page_services/services'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/bn'} />,
    errorElement: <>URL Not Found.<Link to={'/'}>Go Home</Link> </>
  },
  {
    path: '/bn',
    element: 
    <>
      <Navbar/>
      <div className="contentContainer">
        <Outlet />
      </div>
    </>,

    children: [
      {
        path: '/bn',
        element: <Landingpage/>
      },
      {
        path: 'about',
        element: <>About Us</>
      },
      {
        path: 'services',
        element: <Services/>
      }
    ]
  },
  {
    path: '/en',
    element: 
    <>
      <Navbar/>
      <Outlet />
    </>,

    children: [

    ]
  }
  
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <RouterProvider router={router}/>
  )
}

export default App
