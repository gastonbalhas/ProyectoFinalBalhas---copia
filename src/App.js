import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import ItemDetail from "./components/ItemDetail";
import ItemListContainer from "./components/ItemListContainer";
import CartContextProvider from "./Context/CartContext";
import Cart from "./components/Cart";
import Header from "./Header";
import Section from "./Section";
import Checkout from "./components/Checkout";
import "./index.scss";
import NotFound from "./components/NotFound";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Section />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:prodCategory"} element={<ItemListContainer />}/>
          <Route path={"/product/:productId"} element={<ItemDetail />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path="/cart/*" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
