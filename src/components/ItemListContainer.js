import React, { useEffect, useState } from 'react';
import ProductList from './ItemList.js';
import { useParams } from 'react-router-dom';
import { db } from '../db/Firebase.js'; 
import { collection, query, getDocs, where } from 'firebase/firestore';

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { prodCategory } = useParams();

  useEffect(() => {
    const getProductsFromFirebase = async () => {
      try {
        let q;
        if (prodCategory) {
          q = query(
            collection(db, 'productos'),
            where('category', '==', prodCategory) 
          );
        } else {
          q = query(
            collection(db, 'productos')
          );
        }

        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));

        setData(products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getProductsFromFirebase();
  }, [prodCategory]);

  if (isLoading) {
    return <div className='flex items-center justify-center h-screen text-lg font-semibold'>Cargando...</div>;
  }

  return <ProductList data={data} />;
}

export default ItemListContainer;
