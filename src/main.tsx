import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Purchase from './pages/Purchase.tsx'
import Home from './pages/Home/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>   
          <Route path='/' element={<Home />} />
          <Route path='/purchase' element={<Purchase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
