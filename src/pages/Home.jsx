import React, { useState } from 'react';

// Dynamically generate image URLs
const images = Array.from({ length: 20 }, (_, i) =>
  new URL(`../assets/img${i + 1}.png`, import.meta.url).href
);

const ImageGrid = ({ images, onImageClick, selected }) => {
  return (
    <div className="image-grid" style={{ overflowY: 'scroll', display: 'flex', gap: '10px' }}>
      {images.map((image, index) => (
        <div key={index} onClick={() => onImageClick(image)} style={{ cursor: 'pointer' }}>
          <img
            src={image}
            alt={`img-${index + 1}`}
            style={{
              width: '100px',
              height: '100px',
              border: selected.includes(image) ? '2px solid blue' : '2px solid transparent',
            }}
          />
        </div>
      ))}
    </div>
  );
};

const SelectedImages = ({ images }) => {
  return (
    <div className="selected-images" style={{ display: 'flex', gap: '10px' }}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`selected-${index + 1}`} style={{ width: '100px', height: '100px' }} />
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  // Handle image selection
  const handleSelection = (image) => {
    setSelectedImages((prev) =>
      prev.includes(image) ? prev.filter((img) => img !== image) : [...prev, image]
    );
  };

  // Handle Done button click
  const handleDone = () => {
    setShowSelected(true);
  };

  // Handle Reset button click
  const handleReset = () => {
    setShowSelected(false);
    setSelectedImages([]);
  };

  // Handle Download button click
  const handleDownload = () => {
    selectedImages.forEach((image) => {
      const link = document.createElement('a');
      link.href = image;
      link.download = image.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* 70% Image Grid Section */}
      <div className="image-section" style={{ flex: 7, padding: '20px' }}>
        <h1>Select Your Images</h1>
        {!showSelected ? (
          <div className="image-grid">
            <ImageGrid images={images} onImageClick={handleSelection} selected={selectedImages} />
          </div>
        ) : (
          <SelectedImages images={selectedImages} />
        )}
      </div>

      {/* 30% Bottom Section for Buttons */}
      <div className="button-section" style={{ flex: 3, display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
        {!showSelected ? (
          <button onClick={handleDone} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Done
          </button>
        ) : (
          <>
            <button onClick={handleReset} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
              Reset
            </button>
            <button onClick={handleDownload} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
              Download
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
