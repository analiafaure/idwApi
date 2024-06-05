import React from 'react'
import logoCompleto from '../assets/img/logo_completo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className="logo">
            <a href="">
                <img src={logoCompleto} alt="alojAR logo" height="40"/>
            </a> 
        </div>
        <nav className="navbar">
            <ul>
                <li className="listItem"><Link to="/">Home</Link></li>
                <li className="listItem"><Link to="/tipoAlojamiento">Administrar tipos</Link></li>
                <li className="listItem"><Link to="/nosotros">Nosotros</Link></li>
                <li className="listItem"><Link to="/contacto">Contacto</Link></li>
                {/* <li className="listItem"><Link to="/nuevo-alojamiento">Nuevo alojamiento</Link></li> */}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar