import { Suspense } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Router from './routes/Router';
import LoadingSpinner from './component/LoadingSpinner';

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
