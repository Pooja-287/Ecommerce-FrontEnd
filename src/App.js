import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import HomePage from './common/HomePage'; // Home Page
import ProductList from './components/ProductList'; // Product List Page
import OrderList from './components/OrderList'; // Order List Page

import Orders from './components/Orders'; // Order Details Page
import ProductDetails from './components/ProductDetails';
import Login from './common/Login'; // Header component
import OurStory from './common/OurStory'; // Our Story Page
import ContactUs from './common/ContactUs'; // Contact Us Page
import CartPage from './common/CartPage'; // Card Page
import CheckoutPage from './common/CheckOut'; // Checkout Page
import OrderConfirmationPage from './components/OrderConfirmationPage';
import Profile from './common/Profile';
import Head from './components/Head';

function App() {
  
  return (
    <div className="app-container">
        <Login />
      <h1>ORGANIC DOG TREATS</h1>
      <Head /> 
     

  
      {/* Routes for various pages */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
      
        <Route path="/products" element={<ProductList />} /> {/* Product List Route */}
        <Route path="/cart" element={<CartPage />} /> {/* Card Page Route */}
        <Route path="/checkout" element={<CheckoutPage />} /> 
        <Route path="/order-confirmation" component={<OrderConfirmationPage/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path="/our-story" element={<OurStory />} /> {/* Our Story Route */}
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/orders" element={<OrderList />} /> 
        <Route path="/order/:id" element={<Orders />} /> 
        <Route path="/product/:productId" component={<ProductDetails/>} /> {/* Product Detail Route */}
        
        

     
      </Routes>
    </div>
  );
}

export default App;
