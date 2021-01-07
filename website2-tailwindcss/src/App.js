import Header from './components/Header';
import Carousel from './components/Carousel';
import Nosotros from './components/Nosotros';
import Buscamos from './components/Buscamos';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-100">
      <Header/>
      <Carousel/>
      <Nosotros/>
      <Buscamos/>
      <Footer/>
    </div>
  );
}

export default App;
