import React from 'react';

const ImageCard = ({ img, onClick, isSelected }) => (
  <div
    onClick={onClick}
    style={{
      border: isSelected ? '3px solid #007BFF' : '1px solid #ccc',
      padding: '5px',
      cursor: 'pointer',
      borderRadius: '10px',
      transition: 'transform 0.2s, border 0.2s',
      transform: isSelected ? 'scale(1.1)' : 'scale(1)',
    }}
  >
    <img
      src={img}
      alt="thumbnail"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '5px',
      }}
    />
  </div>
);

export default ImageCard;
