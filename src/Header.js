import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import CartWidget from './components/CartWidget';
import { CartContext } from './Context/CartContext';

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header id="header" className="header bg-gradient-to-r from-orange-900 to-yellow-900 py-4 px-2 text-white ">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/"> 
          <div className="flex items-center">
            <img src={process.env.PUBLIC_URL + '/img/Logo Equilatero.PNG'} alt="Equilatero Percusión Logo" className="w-12 h-12 mr-2" />
            <h1 className="font-playfair">Equilatero Percusión</h1>
          </div>
        </Link>
        <Navbar />
        <CartWidget cartItems={cart} /> 
      </div>
    </header>
  );
}

export default Header;
