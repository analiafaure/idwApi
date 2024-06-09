
import React, { useState, useEffect } from 'react';
import './../style.css';

const ListaAlojamientos = () => {
  const [alojamientos, setAlojamientos] = useState([]);

  useEffect(() => {
    const fetchAlojamientos = async () => {
      try {
        const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
        if (response.ok) {
          const data = await response.json();
          setAlojamientos(data);
        } else {
          console.error('Error al obtener los alojamientos.');
        }
      } catch (error) {
        console.error('Error al conectarse con la API:', error);
      }
    };

    fetchAlojamientos();
  }, []);

  return (
    <div className="lista-alojamientos">
      <h2>Lista de Alojamientos</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Tipo de Alojamiento</th>
            <th>Latitud</th>
            <th>Longitud</th>
            <th>Precio por Día</th>
            <th>Cantidad de Dormitorios</th>
            <th>Cantidad de Baños</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {alojamientos.map((alojamiento) => (
            <tr key={alojamiento.id}>
              <td>{alojamiento.Titulo}</td>
              <td>{alojamiento.Descripcion}</td>
              <td>{alojamiento.TipoAlojamiento}</td>
              <td>{alojamiento.Latitud}</td>
              <td>{alojamiento.Longitud}</td>
              <td>{alojamiento.PrecioPorDia}</td>
              <td>{alojamiento.CantidadDormitorios}</td>
              <td>{alojamiento.CantidadBanios}</td>
              <td>{alojamiento.Estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaAlojamientos;