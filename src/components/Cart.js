import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cart, clear } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  const totalPrecio = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 object-cover mr-2"
                />
                <span className="font-semibold">{item.title}</span>
                <span className="text-gray-600 ml-2">
                  Cantidad: {item.quantity}
                </span>
              </div>
              <div>
                <span className="font-semibold">
                  ${item.price * item.quantity}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold mt-4">
        Total a Pagar: ${totalPrecio}
      </p>
      <Link to="/cart/checkout">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-4">
          Comprar Carrito
        </button>
      </Link>
      <button
        onClick={clear}
        className="bg-gray-300 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded mt-4"
      >
        Vaciar Carrito
      </button>
    </div>
  );
}

export default Cart;
