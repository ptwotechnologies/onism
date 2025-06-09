import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from '../component/LoadingSpinner';

// Lazy load page components
const Home = lazy(() => import('../pages/Home'));
const LadakhAndSpiti = lazy(() => import('../pages/LadakhAndSpiti'));
const Kashmir = lazy(() => import('../pages/Kashmir'));

const Router = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ladakh-and-spiti-trips" element={<LadakhAndSpiti />} />
        <Route path="/kashmir-trips" element={<Kashmir />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
