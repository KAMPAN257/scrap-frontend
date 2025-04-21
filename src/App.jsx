//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./assets/css/adminlte.css"
import "./assets/css/adminlte.min.css"
//import "./assets/landing/LandingPage.css"
//import "./assets/addProduct.css"
import axios from "axios"
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Route, Routes} from "react-router-dom"
import Login from "./components/common/login";
import LandingPage from "./assets/landing/LandingPage";
import Signup from "./components/common/Signup";
import Product from "./components/user/Product";
import PrivateRoutes from "./hooks/PrivateRoutes";
import AboutUs from "./components/pages/AboutUs";
import ProductDetails from "./components/user/ProductDetails";
import { SelectRole } from "./components/common/SelectRole";
import { SelectLoginRole } from "./components/common/SelectLoginRole";
import SellerSignup from "./components/common/SellerSignup";
import SellerLogin from "./components/common/SellerLogin";
import Cart from "./components/common/Cart";
import SellerAddProduct from "./components/seller/SellerAddProduct";
import SellerSidebar from "./components/seller/SellerSidebar";
import { BuyerList } from "./components/admin/BuyerList";
import { AdminSidebar } from "./components/admin/AdminSidebar";
import { SellerList } from "./components/admin/SellerList";
import { ProductList } from "./components/admin/ProductList";
import { ProductDetailList } from "./components/admin/ProductDetailsList";
import { CartList } from "./components/admin/CartList";
import { RoleList } from "./components/admin/RoleList";
import { SellerProductList } from "./components/seller/SellerProductList";
//import SellerAddProductDetails from "./components/seller/SellerAddProductDetails";
//import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  axios.defaults.baseURL = "http://localhost:3001";

  // const location = useLocation();

  //  useEffect(() => {
  //    if (location.pathname === "/user/login" || location.pathname === "/user/signup") {
  //      document.body.className = ""; // Remove the unwanted class for login and signup
  //    } else {
  //      document.body.className =
  //        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
  //    }
  //  }, [location.pathname]);

  
  return (
    <div class="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded">
      <div class="app-wrapper">
          <Routes>
            <Route path="/selectrole" element = {<SelectRole/>}></Route>
            <Route path="/selectloginrole" element = {<SelectLoginRole/>}></Route>
            <Route path="/" element = {<LandingPage/>}></Route>
            <Route path="" element = {<PrivateRoutes/>}>
              <Route path="/login" element = {<Login/>}></Route>
              <Route path="/signup" element ={<Signup/>}></Route>
              <Route path="/sellersignup" element ={<SellerSignup/>}></Route>
              <Route path="/sellerlogin" element = {<SellerLogin/>}></Route>
              
              <Route path="/about" element = {<AboutUs/>}></Route>
             </Route>
             <Route path="/product" element = {<Product/>}> </Route>
              <Route path="/products/:id" element = {<ProductDetails/>}></Route> 
               <Route path="/cart" element = {<Cart/>}></Route> 
               
                 <Route path="/sellersidebar" element = {<SellerSidebar/>}></Route> 
                 <Route path="/selleraddproduct" element = {<SellerAddProduct/>}></Route>
                 {/* <Route path="/selleraddproductdetails" element = {<SellerAddProductDetails/>}></Route> */}
                 <Route path="/sellerproductlist" element = {<SellerProductList/>}></Route>
                 
                

               <Route path="/admin" element = {<AdminSidebar/>}>
                  <Route path="buyerlist" element = {<BuyerList/>}></Route>
                  <Route path="sellerlist" element = {<SellerList/>}></Route>
                  <Route path="productlist" element = {<ProductList/>}></Route>
                  <Route path="productdetaillist" element = {<ProductDetailList/>}></Route>
                  <Route path="cartlist" element = {<CartList/>}></Route>
                  <Route path="rolelist" element = {<RoleList/>}></Route>
                </Route>
          </Routes>
      </div>
    </div>
  )
}

export default App
