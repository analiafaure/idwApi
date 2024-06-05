import React from 'react'

const Nosotros = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <h1>Sobre nosotros...</h1>
        <p>Somos 3 amigos que nos encanta viajar y conocer nuevos lugares,</p>
        <p>pero siempre a donde vamos nos gusta sentirnos como en casa</p>
        <p>por eso creamos Alojar, para que </p>
        <p><i>aunque estés lejos...te sientas como en casa!</i></p>

        <h1>Nuestro equipo</h1>
        <div className="contenedor" style={{width:'700px'}}>
            <div className="empleado">
                <img src="https://i.pinimg.com/564x/64/70/74/647074f774e3d5719463a10c77095661.jpg" alt="empleado" height="100"/>
                <p>Nombre: Juan Perez</p>
                <p>Puesto: CEO </p>
            </div>

            <div className="empleado"> 
                <img src="https://i.pinimg.com/564x/a6/05/b8/a605b8145c79e5d2790f1859a604d758.jpg" alt="empleado" height="100"/>
                <p>Nombre: Jorge Martinez</p>
                <p>Puesto: Economista </p>
            </div>

            <div className="empleado"> 
                <img src="https://i.pinimg.com/564x/31/6e/8a/316e8af79c903c8f43244e9850239c8d.jpg" alt="empleado" height="100"/>
                <p>Nombre: José Rodriguez</p>
                <p>Puesto: Analista </p>
            </div>
        </div>
    </div>
  )
}

export default Nosotros