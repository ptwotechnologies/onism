import React from 'react';
import globeImage from '../assets/images.png';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <img
        src={globeImage}
        alt="Loading globe"
        style={{
          width: '4rem',
          height: '4rem',
          animation: 'spin 2s linear infinite',
        }}
      />
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
