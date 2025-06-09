import { Suspense, lazy } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Router from './routes/Router';
import LoadingSpinner from './component/LoadingSpinner'; // Create this component

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Router />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
