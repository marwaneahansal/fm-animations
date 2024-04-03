import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='min-h-screen min-w-screen px-4 py-8 bg-slate-950/95 text-gray-100'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </React.StrictMode>,
)
