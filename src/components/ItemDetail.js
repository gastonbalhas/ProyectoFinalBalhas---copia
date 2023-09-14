import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../db/Firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import CartCounter from './CartCounter';
import { CartContext } from '../Context/CartContext';

function ItemDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0); // Contador local
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const getProductFromFirebase = async () => {
      try {
        const productDocRef = doc(db, 'productos', productId);
        console.log('Buscando producto con productId:', productId);
        const productDoc = await getDoc(productDocRef);

        if (productDoc.exists()) {
          const productData = productDoc.data();
          setProduct(productData);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          console.error('No se encontró el producto con el ID proporcionado.');
        }
      } catch (error) {
        setIsLoading(false);
        console.error('Error al obtener los detalles del producto:', error);
      }
    };

    getProductFromFirebase();
  }, [productId]);

  const handleAddToCart = () => {
    if (count > 0) {
      addItem(product, count);
      setCount(0);
    }
  };

  if (isLoading) {
    return <div className='flex items-center justify-center h-screen text-lg'>Cargando...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex">
        <div className="w-1/2">
          <img src={product.img} alt={product.title} className="w-full" />
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
          <p className="text-lg mb-4">${product.price}</p>
          <p className="text-md mb-4">{product.description}</p>
          <div className="mb-4">
            <CartCounter count={count} onIncrement={setCount} />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
