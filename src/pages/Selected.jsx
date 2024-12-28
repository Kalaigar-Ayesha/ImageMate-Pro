import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectedImages from '../components/SelectedImages';

const Selected = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedImages } = location.state || { selectedImages: [] };

  // Function to handle navigation to home page
  const handleBack = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        margin: 0,
        overflowX: 'hidden', // Prevent horizontal overflow
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>Your Selected Images</h1>
      
      {/* Image Grid for the selected images */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
          width: '100%',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {selectedImages.length === 0 ? (
          <p>No images selected.</p>
        ) : (
          selectedImages.map((image, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'hidden',
                padding: '10px',
              }}
            >
              <img
                src={image}
                alt={`Selected ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '200px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onClick={() => {}}
              />
            </div>
          ))
        )}
      </div>

      {/* Back Button to navigate to Home */}
      <button
        onClick={handleBack}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Selected;
