import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Section() {
  const [showImage, setShowImage] = useState(false);
  const location = useLocation();

  useEffect(() => {

    if (location.pathname === '/' || location.pathname.includes('/category/')) {
      const timeout = setTimeout(() => {
        setShowImage(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  return (
    <section>
      {showImage && (
        <img
          src={process.env.PUBLIC_URL + '/img/LoadingScreen01.PNG'}
          alt="banner"
          style={{
            width: '100%',
            maxHeight: '38vh',
            objectFit: 'cover',
          }}
        />
      )}
    </section>
  );
}

export default Section;
