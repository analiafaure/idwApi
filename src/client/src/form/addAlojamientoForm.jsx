import React, { useState, useEffect } from 'react';
import './../style.css';

const AddHotelForm = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipoAlojamiento, setTipoAlojamiento] = useState('');//agregar
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]); // Nuevo estado para almacenar los tipos de alojamiento
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [precioPorDia, setPrecioPorDia] = useState('');
  const [cantidadDormitorios, setCantidadDormitorios] = useState('');
  const [cantidadBanios, setCantidadBanios] = useState('');
  const [estado, setEstado] = useState('Disponible'); 
  useEffect(() => {
    const fetchTiposAlojamiento = async () => {
      try {
        const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
        if (response.ok) {
          const data = await response.json();
          setTiposAlojamiento(data);
        } else {
          console.error('Error al obtener los tipos de alojamiento.');
        }
      } catch (error) {
        console.error('Error al conectarse con la API:', error);
      }
    };

    fetchTiposAlojamiento();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Titulo: titulo,
      Descripcion: descripcion,
      TipoAlojamiento: tipoAlojamiento,
      Latitud: parseFloat(latitud),
      Longitud: parseFloat(longitud),
      PrecioPorDia: parseFloat(precioPorDia),
      CantidadDormitorios: parseInt(cantidadDormitorios, 10),
      CantidadBanios: parseInt(cantidadBanios, 10),
      Estado: estado,
    };

    try {
      const response = await fetch('http://localhost:3001/alojamiento/createAlojamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Alojamiento creado exitosamente.');
      } else {
        console.error('Error al crear el alojamiento.');
        alert('Error al crear el alojamiento.');
      }
    } catch (error) {
      console.error('Error al conectarse con la API:', error);
      alert('Error al conectarse con la API.');
    }
  };

  return (
    <div className="form-container">
      <h1>Nuevo alojamiento</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div>//AGREGAR
          <label htmlFor="tipoAlojamiento">Tipo de Alojamiento:</label>
          <select
            id="tipoAlojamiento"
            value={tipoAlojamiento}
            onChange={(e) => setTipoAlojamiento(e.target.value)}
          >
            <option value="">Seleccione un tipo de alojamiento</option>
            {tiposAlojamiento.map((tipo) => (
              <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
                {tipo.Descripcion}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="latitud">Latitud:</label>
          <input
            type="text"
            id="latitud"
            value={latitud}
            onChange={(e) => setLatitud(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="longitud">Longitud:</label>
          <input
            type="text"
            id="longitud"
            value={longitud}
            onChange={(e) => setLongitud(e.target.value)}
          />
        </div>
        <div>//AGREGAR
          <label htmlFor="precioPorDia">Precio por Día:</label>
          <input
            type="text"
            id="precioPorDia"
            value={precioPorDia}
            onChange={(e) => setPrecioPorDia(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cantidadDormitorios">Cantidad de Dormitorios:</label>
          <input
            type="number"
            id="cantidadDormitorios"
            value={cantidadDormitorios}
            onChange={(e) => setCantidadDormitorios(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cantidadBanios">Cantidad de Baños:</label>
          <input
            type="number"
            id="cantidadBanios"
            value={cantidadBanios}
            onChange={(e) => setCantidadBanios(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="estado">Estado:</label>
          <select
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="Disponible">Disponible</option>
            <option value="Reservado">Reservado</option>
          </select>
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
