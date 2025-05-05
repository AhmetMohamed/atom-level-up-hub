
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './AppWrapper' // Use our wrapper instead of App directly
import './index.css'
import { Toaster } from './components/ui/sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWrapper />
    <Toaster position="top-right" />
  </React.StrictMode>,
)
