import './App.css'
import './utility.scss'

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import ErrorElement from './components/macro/errorElement'
import Navbar from './components/navbar/navbar'
import AboutUs from './components/page_aboutUs/aboutUs'
import Landingpage from './components/page_landingpage/landingpage'
import Services from './components/page_services/services'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <>
      <Navbar/>
      <div className="contentContainer">
        <Outlet />
      </div>
    </>,
    errorElement: <ErrorElement/>,

    children: [
      {
        path: '/',
        element: <Landingpage/>
      },
      {
        path: 'about',
        element: <AboutUs/>
      },
      {
        path: 'services',
        element: <Services/>
      },
      {
        path: 'projects',
        element: <>Projects Page</>
      }
    ]
  }
  
]);

function App() {
  return (
    
      <RouterProvider router={router}/>
  )
}

export default App
