import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Purchase from './pages/NewPurchase/NewPurchase.tsx'
import Home from './pages/Home/Home.tsx'
import PurchaseItems from './pages/PurchaseItems/PurchaseItems.tsx'
import NewItem from './pages/NewItem/NewItem.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>   
          <Route path='/' element={<Home />} />
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/purchase/:id' element={<PurchaseItems />} />
          <Route path='/purchase/:id/new-item' element={<NewItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
