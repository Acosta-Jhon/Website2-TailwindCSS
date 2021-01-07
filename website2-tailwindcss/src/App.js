import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Nosotros from './components/Nosotros';
import Buscamos from './components/Buscamos';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 bg-gray-100 transiti duration-500 font-mono">
      <Header />
      <Carousel />
      <Nosotros />
      <Buscamos />
      <Footer />
    </div>
  );
}

export default App;
