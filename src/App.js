import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar1 from './components/NavBar1';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
  <div>
  <BrowserRouter>
  <NavBar1/>
  <Routes>
   <Route path={"/"} element={<ItemListContainer/>} />
   <Route path={"/category/:id"} element={<ItemListContainer/>}/>
   <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
  </Routes>
 </BrowserRouter>
  
  </div>
  );
}

export default App;
