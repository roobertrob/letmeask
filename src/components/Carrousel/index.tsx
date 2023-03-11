import { useState, useEffect } from 'react';
import './index.scss';

const Carousel = ({ images = [''] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex}`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Carousel;
