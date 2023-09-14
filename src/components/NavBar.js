import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul className='flex gap-4 p-500'>
        <li>
          <Link to="/category/Instrumentos">INSTRUMENTOS</Link>
        </li>
        <li>
          <Link to="/category/Muebles" className="mr-8">MUEBLES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
