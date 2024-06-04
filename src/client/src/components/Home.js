import React from 'react'

const Home = () => {
  return (
    <div>
        <section className="info">
            <div className="info">
                <h2>Sentite como en casa en cualquier parte del mundo</h2>
                <h4>Encontrá tu alojamiento al mejor precio.</h4>
            </div>
        </section>

        <section class="contenedor">
            <div class="img">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/511545115.jpg?k=422b9400a302d6a16cec9d2c15bcb4497c943fb58e8eefce47a32cd834467670&o="  alt="hoteles" class="img-normalizada" />
                <h2>Hoteles</h2>
                <button> Buscar!</button>
            </div>
            
        
            <div class="img">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/f6/76/db/cabanas-cumelen.jpg?w=700&h=-1&s=1" alt="cabañas" class="img-normalizada"/>
                    <h2>Cabañas</h2>
                    <button> Buscar!</button>
            </div>
        
            <div class="img">
                <img src="https://casa-web.com.ar/wp-content/uploads/2013/09/decoracion-tonos-claros-para-departamento-chico.jpg"  alt="departamentos" class="img-normalizada" />
                <h2>Departamentos</h2> 
                <button> Buscar!</button>
            </div>
    
            <div class="img">
                <img src="https://domosgeodesicos.files.wordpress.com/2021/07/img_5365-edited.jpg?w=1024" alt="domos" class="img-normalizada" />
                <h2>Domos</h2>
                <button> Buscar!</button>
            </div>
        </section>
    </div>
  )
}

export default Home