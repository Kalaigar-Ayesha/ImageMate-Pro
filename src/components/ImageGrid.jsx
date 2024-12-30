import React from 'react';

const ImageGrid = ({ images, onImageClick, selected }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-card ${selected.includes(image) ? 'selected' : ''}`}
          onClick={() => onImageClick(image)}
        >
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
