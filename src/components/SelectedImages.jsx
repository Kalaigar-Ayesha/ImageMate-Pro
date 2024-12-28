import React from 'react';

const SelectedImages = ({ images }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Selected ${index + 1}`}
          style={{ width: '150px', height: '150px', margin: '10px' }}
        />
      ))}
    </div>
  );
};

export default SelectedImages;
