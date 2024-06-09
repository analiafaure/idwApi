import React, { useState, useEffect } from 'react';
import './../style.css';

const ListaAlojamientos = () => {
  const [alojamientos, setAlojamientos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alojamientosResponse = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
        
        if (alojamientosResponse.ok) {
          const data = await alojamientosResponse.json();
          const alojamientosWithTipoDescripcion = await Promise.all(
            data.map(async alojamiento => {
              const tipoResponse = await fetch(`http://localhost:3001/tiposAlojamiento/getTipoAlojamiento/${alojamiento.idTipoAlojamiento}`);
              if (tipoResponse.ok) {
                const tipoData = await tipoResponse.json();
                return { ...alojamiento, tipoAlojamientoDescripcion: tipoData.Descripcion };
              } else {
                console.error('Error al obtener la descripción del tipo de alojamiento.');
                return alojamiento;
              }
            })
          );
          setAlojamientos(alojamientosWithTipoDescripcion);
        } else {
          console.error('Error al obtener los alojamientos.');
        }
      } catch (error) {
        console.error('Error al conectarse con la API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lista-alojamientos container">
      <h2>Lista de Alojamientos</h2>
      <table className="table">
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
            <tr key={alojamiento.id} className="table-row">
              <td>{alojamiento.Titulo}</td>
              <td>{alojamiento.Descripcion}</td>
              <td>{alojamiento.tipoAlojamientoDescripcion}</td>
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
