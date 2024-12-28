import React, { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const navigate = useNavigate();

  // Dynamically import images using ES Modules
  const images = Array.from({ length: 20 }, (_, i) =>
    new URL(`../assets/img${i + 1}.png`, import.meta.url).href
  );

  const handleSelection = (image) => {
    setSelectedImages((prev) =>
      prev.includes(image) ? prev.filter((img) => img !== image) : [...prev, image]
    );
  };

  const handleDone = () => {
    navigate('/selected', { state: { selectedImages } });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Select Your Images</h1>
      <div>
      <ImageGrid images={images} onImageClick={handleSelection} selected={selectedImages} />
      </div>
      <button
        onClick={handleDone}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Done
      </button>
    </div>
  );
};

export default Home;
