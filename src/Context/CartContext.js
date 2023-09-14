import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isProductInCart = (product) => {
    return cart.some((item) => item.id === product.id && item.title === product.title);
  };

  const addItem = (product, quantity) => {
    const updatedCart = [...cart];

    if (isProductInCart(product)) {
      updatedCart.forEach((item) => {
        if (item.id === product.id && item.title === product.title) {
          item.quantity += quantity;
        }
      });
    } else {
      updatedCart.push({ ...product, quantity });
    }

    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clear = () => {
    setCart([]);
  };

  const cartTotal = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const sumTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const increaseQuantity = (id) => {
    const updatedCart = [...cart];
    updatedCart.forEach((item) => {
      if (item.id === id) {
        item.quantity++;
      }
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = [...cart];
    updatedCart.forEach((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity--;
      }
    });
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, cartTotal, sumTotal, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
