import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Inicio from './Components/Inicio'
import Trabajos from './Components/Trabajos'
import Servicios from './Components/Servicios'
import Contacto from './Components/Contacto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
  },
  {
    path: '/trabajos',
    element: <Trabajos/>
  },
  {
    path: '/servicios',
    element: <Servicios/>
  },
  {
    path: '/contacto',
    element: <Contacto/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
