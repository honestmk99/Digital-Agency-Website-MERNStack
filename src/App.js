import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import MainLayout from './components/layout/MainLayout';
import Store from './pages/Store';
import Details from './pages/other/Details';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';

function App() {
  return (
    <div className='bg-primary relative overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="details" element={<Details />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter >
      {/* <div className='absolute'>
        <div className='h-[20rem]'></div>
        <div className='bg-third opacity-60'>AAAA</div>
      </div> */}
    </div>
  );
}

export default App;
