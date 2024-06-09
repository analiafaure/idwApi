import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import hotelImage from './assets/img/hotel.png';
import AddHotelForm from './form/addAlojamientoForm';
import './style.css';
import Footer from './Footer';
import AddTipoAlojamiento from './form/addTipoAlojamiento';
import Alojamientos from './list/alojamientos';

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Encuentra tu alojamiento en este sitio</h1>
        <p>Esto es un párrafo para agregar información a nuestra portada de sitio de alojamiento</p>
      </section>
      <section className="container featured-hotels">
        <div className="hotel">
          <img src={hotelImage} alt="hotel" />
          <a href="https://www.hotelkilton.com.ar/">Hotel 1</a>
        </div>
        <div className="hotel">
          <img src={hotelImage} alt="hotel" />
          <a href="https://www.hotelkilton.com.ar/">Hotel 2</a>
        </div>
        <div className="hotel">
          <img src={hotelImage} alt="hotel" />
          <a href="https://www.hotelkilton.com.ar/">Hotel 3</a>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="header-content">
            <a href="https://www.airbnb.com.ar/"><img src={logo} alt="IDW alojamiento" height="40" /></a>
            <h2>IDW alojamiento</h2>
          </div>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/hotels">Alojamientos</Link></li>
            <li><Link to="/img">Imagenes</Link></li>
            <li><Link to="/tipoAlojamiento">tipo alojamiento</Link></li>
            <li><Link to="/alojamientos">Lista alojamientos</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<AddHotelForm />} />
            <Route path='/tipoAlojamiento' element={<AddTipoAlojamiento />} />
            <Route path='/alojamientos' element={<Alojamientos />} />
          </Routes>
        </main>
       <Footer/>
      </div>
    </Router>
  );
}

export default App;

