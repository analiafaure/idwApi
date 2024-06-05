import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 const AddTipoAlojamiento = () => {
    const [descripcion, setDescripcion] = useState("");
    const [tiposAlojamiento, setTiposAlojamiento] = useState([])
    const [showTable, setShowTable] = useState(false)
    const [typeToEdit, setTypeToEdit] = useState({})
    const [showEditModal, setShowEditModal] = useState(false);

    const handleClose = () => setShowEditModal(false);
    const handleShow = () => setShowEditModal(true);

    // ALERTAS
    const showAlert = (type, targetId, message) => {
        const target = document.getElementById(targetId);
        const alertHTML = `<div class="alert alert-${type} mt-3" role="alert">${message}</div>`;
        target.insertAdjacentHTML('afterend', alertHTML);
        setTimeout(() => {
            const alert = target.nextElementSibling;;
            if (alert) {
                alert.remove();
            }
        }, 2000);
    }

    const crearTipo = async (e) => {
        e.preventDefault();
        if (!descripcion.trim()) {
            showAlert("danger", "createBtn", "Debe ingresar un tipo de alojamiento");
            return;
        }
        const json = {
            Descripcion: descripcion
        };
        try{
            const response = await fetch("http://localhost:3001/tiposAlojamiento/createTipoAlojamiento", {
                method: "POST",
                headers: {
                    "Content-type": "application/json", 
                },
                body: JSON.stringify(json)
            });
            if(response.ok){
                alert("Se creo correctamente el tipo de alojamiento")
                window.location.reload();
            }else{
                showAlert("danger", "createBtn", "Error al crear el tipo de alojamiento");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error no se pudo establecer el servicio.");
        }
    }
    
    const mostrarTipos = async () => {
        setShowTable(prevShowTable => !prevShowTable)
        try{
            const response = await fetch("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento", {
                method: "GET",
                headers: {
                    "Content-type": "application/json", 
                },
            });

            if(response.ok){
                const data = await response.json()
                setTiposAlojamiento(data)
            }else{
                alert("Error al crear el tipo de alojamiento.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error no se pudo establecer el servicio.");
        }
    }

    const editarTipo = async (id) => {
        const json = {
            Descripcion: descripcion
        };
        try{
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json", 
                },
                body: JSON.stringify(json)
            });
            if(response.ok){
                alert("Se edito correctamente el tipo de alojamiento.");
                window.location.reload();
            }else{
                alert("Error al editar el tipo de alojamiento.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error no se pudo establecer el servicio.");
        }
        handleClose()
    }

    const eliminarTipo = async (id) => {
        try{
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json", 
                },
            });
            if(response.ok){
                alert("Se elimino correctamente el tipo de alojamiento.");
                window.location.reload();
            }else{
                alert("Error al eliminar el tipo de alojamiento.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error no se pudo establecer el servicio.");
        }
    }

    return(
        <div className="AddTipoAlojamientoForm">
            <h1 className="my-5">Agregar tipo de alojamiento</h1>
            <form onSubmit={crearTipo} style={{minWidth:'310px'}}>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="mr-2">Descripcion:</label>
                    <input type="text" id="descripcion" value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)} className="form-control"/>
                </div>
                <button type="submit" className='btn btn-primary mt-2' style={{width:'100%'}} id="createBtn">Crear</button>
                <button type="button" onClick={()=>mostrarTipos()} className='btn btn-secondary mt-3' style={{width:'100%'}}>{showTable ? 'Ocultar tipos de alojamiento' : 'Ver tipos de alojamiento'}</button>
            </form>
            {showTable && !tiposAlojamiento.length ? 
                <p className="text-danger m-3">No hay tipos de alojamiento cargados</p>
            :
                <table className="table table-bordered my-4" style={{display: showTable ? 'inline' : 'none', width: '300px'}}>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" width='50px'>Id</th>
                            <th scope="col" width='180px'>Descripción</th>
                            <th scope="col" width='70px'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tiposAlojamiento.map((tipo) => (
                            <tr key={tipo.idTipoAlojamiento} >
                                <th scope="row">{tipo.idTipoAlojamiento}</th>
                                <td>{tipo.Descripcion}</td>
                                <td>
                                    <button type='button' onClick={() => eliminarTipo(tipo.idTipoAlojamiento)} className="btn btn-light p-0 mr-2" ><FaTrashAlt/></button>
                                    <button type='button' className="btn btn-light p-0 " onClick={() => { handleShow(); setTypeToEdit(tipo)}}>
                                        <MdEdit/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            
            <Modal show={showEditModal} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Editar tipo de Alojamiento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="descripcion" className="mr-2"><b>Valor actual:</b> "{typeToEdit.Descripcion}"</label>
                    <input type="text" id="descripcion" value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)} 
                    className="form-control" placeholder={'Descripcion'}/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={() => editarTipo(typeToEdit.idTipoAlojamiento)}>
                    Guardar
                </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
};

export default AddTipoAlojamiento;