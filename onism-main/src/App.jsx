import { Suspense } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Router from './routes/Router';
import LoadingSpinner from './component/LoadingSpinner';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <>
      <ModalProvider>
        <Header />
        <Router />
      </ModalProvider>
    </>
  );
}

export default App;
