import React from 'react';
import { Link } from 'react-router-dom';

function ItemList(props) {
  return (
    <section className="flex flex-col items-center mt-16 mb-16">
      {props.data.length === 0 ? (
        <p className="text-4xl font-bold tracking-tight text-black sm:text-3xl">
          Cargando...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {props.data.map((item) => (
            <article
              key={item.id ? item.id : item.title}
              className="card shadow-md p-4 rounded-xl duration-300 transition transform hover:scale-110 mb-16 mt-16 flex flex-col justify-center items-center"
            >
              <Link to={`/product/${item.id}`} className="block">
                <img className="w-full h-40 object-cover mb-4" src={item.img} alt={item.title} />
                <div className="text-center">
                  <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                  <p className="text-md mb-2">${item.price}</p>
                </div>
              </Link>
              <button className="bg-orange-900 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
                <Link to={`/product/${item.id}`}>Ver Detalle</Link>
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ItemList;
