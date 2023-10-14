import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar1 from "./components/NavBar1";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./Context/CartContext";
import {Checkout} from '../src/components/checkout/Checkout';
import Cart from "./components/cart/Cart";
function App() {
  return (
  <div>
  <BrowserRouter>
  <CartProvider>
  <NavBar1/>
  <Routes>
   <Route path={"/"} element={<ItemListContainer/>} />
   <Route path={"/category/:id"} element={<ItemListContainer/>}/>
   <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
   <Route path={"/cart"} element={<Cart/>} />
   <Route path={"/checkout"} element={<Checkout/>} />
  </Routes>
  </CartProvider>
 </BrowserRouter>
  
  </div>
  );
}

export default App;
