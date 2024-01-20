import React from "react";
import { Routes ,Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import Checkout from "../pages/Checkout";
import Login from "../page/Login";
import Signup from "../pages/Signup";
const Router = () => {
  return (
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="shop/:id" element={<ProductDetail/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
    </Routes>
  )
};

export default Router;
