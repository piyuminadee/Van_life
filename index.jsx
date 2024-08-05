import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans';
import './server'
import VanDetails from './pages/VanDetails';
import Layers from './component/Layers';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostLayout from './component/HostLayout';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layers />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About/>} />

        <Route path="vans">
        <Route index  element={<Vans />} />
        <Route path=":id" element={<VanDetails />} />
        </Route>
        
        

        <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="income" element={<Income />} />
        
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);