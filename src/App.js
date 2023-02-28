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
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export const ProductContext = createContext();
export const ProductListContext = createContext();
export const TotalPrice = createContext();
export const SelectProduct = createContext();

const initialOptions = {
  "client-id": "ARRkhuCiYc6I8TY3xlHHebnMd6J4vw3nXohg2C3m_x2JzNpVux_46mOxcytyJB7JKhd_q8VvNC31upiu",
  currency: "EUR",
  intent: "capture",
};

function App() {
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productID, setProductID] = useState()

  useEffect(() => {
    let price = 0
    products.map((product) => {
      productList.map((item) => {
        if (product[0] === item[0]) {
          price += product[1] * item[3];
        }
      })
    })
    setTotalPrice(price.toFixed(2))
  }, [productList, products])

  useEffect(() => { console.log('Prodictid--p>', productID) }, [productID])

  useEffect(() => {
    const projects = JSON.parse(window.localStorage.getItem('project'));
    if (projects) {
      console.log(projects)
      let amount = 0;
      projects.map((item) => {
        amount += item[1];
      })
      setCount(amount);
      setProducts(projects);
    }

    const ID = window.localStorage.getItem('productId');
    console.log('ID', ID);
    setProductID(ID);

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
      <PayPalScriptProvider options={initialOptions}>
        <SelectProduct.Provider value={{ productID, setProductID }}>
          <TotalPrice.Provider value={{ totalPrice, setTotalPrice }}>
            <ProductListContext.Provider value={{ productList, setProductList }}>
              <ProductContext.Provider value={{ products, setProducts }}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<MainLayout count={count} />}>
                      <Route index path="/" element={<Home setCount={setCount} />} />
                      <Route path="store" element={<Store setCount={setCount} />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="about" element={<About />} />
                      <Route path="details" element={<Details />} />
                      <Route path="cart" element={<Cart setCount={setCount} />} />
                      <Route path="product" element={<Products setCount={setCount} />} />
                      <Route path="payment" element={<Payment />} />
                    </Route>
                  </Routes>
                </BrowserRouter >
              </ProductContext.Provider>
            </ProductListContext.Provider>
          </TotalPrice.Provider>
        </SelectProduct.Provider>
      </PayPalScriptProvider>
      {/* <div className='absolute'>
        <div className='h-[20rem]'></div>
        <div className='bg-third opacity-60'>AAAA</div>
      </div> */}
    </div >
  );
}

export default App;
