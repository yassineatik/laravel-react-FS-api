import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, RouterProvider } from 'react-router-dom'
import App from './App'
import { ContextProvider } from './contexts/ContextProvider'
import './index.css'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
