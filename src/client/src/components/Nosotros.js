import React from 'react'
import persona from '../assets/img/persona.png'
const Nosotros = () => {
  return (
    <div>
        <h1>Sobre nosotros...</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tincidunt libero, vitae laoreet nibh. Pellentesque non fermentum est. Aliquam ultricies facilisis ante eu consequat. Nunc convallis nulla vitae augue mattis efficitur. Vivamus at malesuada diam. Quisque convallis magna vel lectus rhoncus auctor. Cras sed ante nec nulla rutrum varius.Nulla aliquet convallis bibendum. Morbi tristique scelerisque tempus. Fusce convallis nisi id risus aliquam, sed vulputate velit fermentum. Sed sit amet nisl a nulla volutpat rutrum id vitae arcu. Morbi aliquet posuere fermentum. Proin vel fermentum urna. Aenean a dolor ipsum. In a est tellus. Etiam eleifend diam vitae enim rutrum aliquet. Nullam id quam quis diam vehicula mollis. Donec viverra metus nec augue aliquam tristique. Suspendisse sed ligula malesuada mi porttitor dictum. Cras eros quam, tempus nec elementum nec, tristique congue mi. Fusce iaculis ex id odio feugiat, nec egestas diam mattis. Pellentesque hendrerit nulla vel vehicula lobortis.</p>
        
        <h1>Nuestro equipo</h1>
        <section class="contenedor">
            <div class="empleado">
                <img src={persona} alt="empleado" height="100"/>
                <p>Nombre: Juanito Perez</p>
                <p>Puesto: </p>
            </div>
            <div>
                <img src={persona} alt="empleado" height="100"/>
                <p>Nombre: Juanito Perez</p>
                <p>Puesto: </p>
            </div>
            <div>
                <img src={persona} alt="empleado" height="100"/>
                <p>Nombre: Juanito Perez</p>
                <p>Puesto: </p>
            </div>
        </section>
    </div>
  )
}

export default Nosotros