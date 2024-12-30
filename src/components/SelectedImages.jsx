import React from 'react';

const SelectedImages = ({ images }) => {
  return (
    <div className="selected-images">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Selected ${index + 1}`}
          className="selected-image"
        />
      ))}
    </div>
  );
};

export default SelectedImages;
