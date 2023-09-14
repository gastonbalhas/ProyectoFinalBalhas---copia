import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

function Checkout() {
  const { cart, clear } = useContext(CartContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const totalAPagar = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePurchase = () => {

    alert('¡Compra realizada con éxito! Detalles:\n' +
          `Nombre: ${formData.firstName} ${formData.lastName}\n` +
          `Email: ${formData.email}\n` +
          `Total a pagar: $${totalAPagar}`);

    clear();
  };

  return (
    <div className="container mx-auto mt-8 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Resumen de Compra</h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Detalle de la Compra</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-2">
              {item.title} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p className="text-lg font-semibold mt-4">Total a Pagar: ${totalAPagar}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Datos del Cliente</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-600">Nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              onClick={(e) => {
                e.preventDefault();
                handlePurchase();
              }}
            >
              Confirmar Compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
