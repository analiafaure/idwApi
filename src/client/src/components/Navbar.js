import React from 'react'
import logoCompleto from '../assets/img/logo_completo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div class="logo">
            <a href="">
                <img src={logoCompleto} alt="alojAR logo" height="40"/>
            </a> 
        </div>
        <nav class="navbar">
            <ul>
                <li class="listItem"><Link to="/">Home</Link></li>
                <li class="listItem"><Link to="/nosotros">Nosotros</Link></li>
                <li class="listItem"><Link to="/contacto">Contacto</Link></li>
                <li class="listItem"><Link to="/tipoAlojamiento">Tipo Alojamiento</Link></li>
                <li class="listItem"><Link to="/alojamiento">Alojamiento</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar