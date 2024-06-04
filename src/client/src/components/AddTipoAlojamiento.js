import React, { useState } from "react";

 const AddTipoAlojamiento = () => {
    const [descripcion, setDescripcion] = useState("");

    const enviar = async (e) => {
        e.preventDefault();
        const json = {
            Descripcion: descripcion
        };

        // conexion con api
        try{
            const respose = await fetch("http://localhost:3001/tiposAlojamiento/createTipoAlojamiento", {
                method: "POST",
                headers: {
                    "Content-type": "application/json", 
                },
                body: JSON.stringify(json)
            });
            if(respose.ok){
                alert("Se creo correctamente el tipo de alojamiento.");
            }else{
                alert("Error al crear el tipo de alojamiento.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error no se pudo establecer el servicio.");
        }
    }

    return(
        <div>
            <h1>Alta tipo formulario</h1>
            <form onSubmit={enviar}>
                <div>
                    <label htmlFor="Descripcion">Descripcion</label>
                    <input type="text" id="Descripcion" value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
};

export default AddTipoAlojamiento;