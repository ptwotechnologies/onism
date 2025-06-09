import React from 'react';
import globeImage from '../assets/images.png';

const LoadingSpinner = ({ fullScreen = false, minHeight = '50vh' }) => {
  const containerStyle = fullScreen
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: minHeight,
        width: '100%',
      };

  return (
    <div style={containerStyle}>
      <div className="flex flex-col items-center space-y-4">
        <img
          src={globeImage}
          alt="Loading"
          className="w-12 h-12 animate-spin"
          style={{
            animation: 'spin 1.5s linear infinite',
          }}
        />
        <p className="text-sm text-gray-600 animate-pulse">Loading...</p>
      </div>
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
