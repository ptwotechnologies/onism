import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from '../component/LoadingSpinner';

// Lazy load page components
const Home = lazy(() => import('../pages/Home'));
const LadakhAndSpiti = lazy(() => import('../pages/LadakhAndSpiti'));
const Kashmir = lazy(() => import('../pages/Kashmir'));

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/ladakh-and-spiti-trips"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <LadakhAndSpiti />
          </Suspense>
        }
      />
      <Route
        path="/kashmir-trips"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Kashmir />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
