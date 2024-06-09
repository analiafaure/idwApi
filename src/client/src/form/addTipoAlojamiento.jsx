import React, { useState } from 'react'
import './../style.css'

const AddTipoAlojamiento = () => {

    const [descripcion, setDescripcion] = useState('');
  
    const enviar = async (e) => {
        e.preventDefault();
        const json = {
            Descripcion: descripcion
        };

        if (descripcion === 'CASA'){
            alert ('casa ya fue creado');
        }
        
        //conexion con api
        try {
            const respose = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(json),
            });
            if (respose.ok) {
                alert('Se creo correctactamente el Alojamiento tipo');
            }else{
                alert('Error al crear el alojamiento tipo');
            }
        } catch (error){
            console.error('Error:',error);
            alert('Error no pudo establecer el servicio');
        }
    }

  return (
    <div className='form-container'>
      <h1>Alta tipo de alojamiento</h1>
      <form onSubmit={enviar}>
        <div>
            <label htmlFor='descripcion'>Descripcion:</label>
            <input 
                type='text' 
                id='descripcion' 
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)} 
            />
        </div>
       <button type='submit'>Enviar</button> 
      </form>
    </div>
  )
};
export default AddTipoAlojamiento;
