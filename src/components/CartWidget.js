import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'; 

function CartWidget() {
  const { cartTotal } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <i className="material-icons">shopping_cart</i>
      </Link>
      <span>{cartTotal()}</span>
    </div>
  );
}

export default CartWidget;

