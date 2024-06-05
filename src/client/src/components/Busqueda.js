import React from 'react'

const Busqueda = () => {
  return (
    <section className="search-form">
        <h1 className='text-center'>Buscar Alojamiento</h1>
        <form action="resultados.html" method="get">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">País:</label>
                    <input type="text" class="form-control" id="pais" name='pais'/>
                </div>
                <div class="form-group col-md-6">
                    <label for="provincia">Provincia:</label>
                    <input type="text" class="form-control" id="provincia" name='provincia'/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="localidad">Localidad:</label>
                    <input type="text" class="form-control" id="localidad" name='localidad'/>
                </div>
                <div class="form-group col-md-6">
                    <label for="fecha">Fecha de Estadia:</label>
                    <input type="date" class="form-control" id="fecha" name='fecha'/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="huespedes">Cantidad de Huespedes:</label>
                    <input type="number" class="form-control" id="huespedes" name='huespedes'/>
                </div>
                <div class="form-group col-md-6 align-self-end">
                    <button type="submit" class="form-control">Buscar</button>
                </div>
            </div>
        </form>
    </section>
  )
}

export default Busqueda