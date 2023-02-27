/* eslint-disable array-callback-return */
import './App.css';
import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import MainLayout from './components/layout/MainLayout';
import Store from './pages/Store';
import Details from './pages/other/Details';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';
import { Payment } from './pages/Payment';
import { supabase } from './connectSupabase';

export const ProductContext = createContext();
export const ProductListContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const projects = JSON.parse(window.localStorage.getItem('project'));
    if (projects) {
      console.log(projects)
      let amount = 0;
      projects.map((item) => {
        amount += item[1];
      })
      setCount(amount);
    }

    supabase.from('products').select().then((res) => {
      let list = [];
      if (res.data[0] !== undefined) {
        let product = [];
        res.data.map((item) => {
          product = [];
          product.push(item.id)
          product.push(item.prod_name)
          product.push(item.first_price)
          product.push(item.current_price)
          product.push(item.description)
          list.push(product);
        })
        setProductList(list);
      }
    })
  }, [])
  return (
    <div className='bg-primary relative overflow-hidden'>
      <ProductListContext.Provider value={{ productList, ProductListContext }}>
        <ProductContext.Provider value={{ products, setProducts }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout count={count} />}>
                <Route index path="/" element={<Home setCount={setCount} />} />
                <Route path="store" element={<Store />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="details" element={<Details />} />
                <Route path="cart" element={<Cart />} />
                <Route path="product" element={<Products />} />
                <Route path="payment" element={<Payment />} />
              </Route>
            </Routes>
          </BrowserRouter >
        </ProductContext.Provider>
      </ProductListContext.Provider>
      {/* <div className='absolute'>
        <div className='h-[20rem]'></div>
        <div className='bg-third opacity-60'>AAAA</div>
      </div> */}
    </div>
  );
}

export default App;
