import { useState } from 'react'
import './App.css'
import './utility.scss'

import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import Landingpage from './components/landingpage/landingpage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/bn'} />
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
