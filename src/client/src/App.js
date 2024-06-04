import logoCompleto from './assets/img/logo_completo.png'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
