import logo from './logo.svg';
import './App.css';
import Header from './compontes/header.js'
import Navegador from './compontes/navegador.js';
import Carrucel from './compontes/carrucel.js';
import Tarjetas from './compontes/tarjetas';
import Redes from './compontes/redes';
import Footer from './compontes/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navegador/>
      <Carrucel/>
      <Tarjetas/>
      <Redes/>
      <Footer/>
      
 
    </div>
  );
}

export default App;
