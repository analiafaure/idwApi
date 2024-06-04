import React, { useState } from "react";

 const AddAlojamiento = () => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [tipoAlojamiento, setTipoAlojamiento] = useState("");
    const [latitud, setLatitud] = useState("");
    const [longitud, setLongitud] = useState("");
    const [precioPorDia, setPrecioPorDia] = useState("");
    const [cantidadDormitorios, setCantidadDormitorios] = useState("");
    const [cantidadBanios, setCantidadBanios] = useState("");
    const [estado, setEstado] = useState("Disponible");

    const enviar = async (e) => {
    e.preventDefault();
    const json = {
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
        // conexion con api
        try{
            const respose = await fetch("http://localhost:3001/alojamiento/createAlojamiento", {
                method: "POST",
                headers: {
                    "Content-type": "application/json", 
                },
                body: JSON.stringify(json)
            });
            if(respose.ok){
                alert("Se creo correctamente el alojamiento.");
            }else{
                alert("Error al crear el alojamiento.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error no se pudo establecer el servicio.");
        }
    }

    return(
        <div>
            <h1>Alta alojamiento formulario</h1>
            <form onSubmit={enviar}>
                <div>
                    <label htmlFor="Titulo">Titulo</label>
                    <input type="text" id="Titulo" value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Descripcion">Descripcion</label>
                    <input type="text" id="Descripcion" value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="TipoAlojamiento">Tipo alojamiento</label>
                    <input type="text" id="TipoAlojamiento" value={tipoAlojamiento}
                    onChange={(e) => setTipoAlojamiento(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Latitud">Latitud</label>
                    <input type="text" id="Latitud" value={latitud}
                    onChange={(e) => setLatitud(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Longitud">Longitud</label>
                    <input type="text" id="Longitud" value={longitud}
                    onChange={(e) => setLongitud(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="PrecioPorDia">Precio por dia</label>
                    <input type="text" id="PrecioPorDia" value={precioPorDia}
                    onChange={(e) => setPrecioPorDia(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="CantidadDormitorios">Cantidad dormitorios</label>
                    <input type="number" id="CantidadDormitorios" value={cantidadDormitorios}
                    onChange={(e) => setCantidadDormitorios(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="CantidadBanios">Cantidad banios</label>
                    <input type="number" id="Cantidad Banios" value={cantidadBanios}
                    onChange={(e) => setCantidadBanios(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Estado">Estado</label>
                    <div>
                    <label htmlFor="Estado">Disponible</label>   
                    <input type="radio" id="Disponible" name="Estado" value="Disponible" checked={estado === 'Disponible'}
                    onChange={(e) => setEstado(e.target.value)}/>
                    <label htmlFor="Estado">Reservado</label>   
                    <input type="radio" id="Reservado" name="Estado" value="Reservado" checked={estado === 'Reservado'}
                    onChange={(e) => setEstado(e.target.value)}/>
                    </div>
                    </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
};

export default AddAlojamiento;