import React from 'react';
import LazyImage from './LazyImage';

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="aspect-square">
          <LazyImage
            src={image.src}
            alt={image.alt}
            width="100%"
            height="100%"
            className="rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery; 