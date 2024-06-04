import React from 'react'
import correo from '../assets/img/correo.png'
import telefono from '../assets/img/telefono.png'
import instagram from '../assets/img/instagram.png'
import facebook from '../assets/img/facebook.png'
import x from '../assets/img/x.png'
const Contacto = () => {
  return (
    <section class="contacto">
        <div class="contacto">
            <h1> ¡Contactanos!</h1>
            <h3>Seguinos en nuestras diferentes redes sociales para recibir las ultimas novedades.</h3>
            <ul>
                <li>
                    <a href="tel:+54111111111111">
                        <img src={telefono} alt="telefono" height="20" class="socialIcon"/>
                    </a> Telefono: +54 11 111 1111111
                </li>
                <li>
                    <a href="mailto:contacto@alojar.com">
                        <img src={correo} alt="correo" height="20" class="socialIcon"/>
                    </a> Correo electronico: contacto@alojar.com
                </li>
                <li>
                    <a href="https://www.instagram.com/alojar">
                        <img src={instagram} alt="instagram" height="20" class="socialIcon"/>
                    </a> Instagram: @alojar
                </li>
                <li>
                    <a href="https://twitter.com/alojar">
                        <img src={x} alt="x" height="20" class="socialIcon"/>
                    </a>Twitter: @alojar 
                </li>
                <li>
                    <a href="https://www.facebook.com/alojar">
                        <img src={facebook} alt="facebook" height="20" class="socialIcon"/>
                    </a> Facebook: @alojar 
                </li>
            </ul>
        </div>
    </section>  
  )
}

export default Contacto