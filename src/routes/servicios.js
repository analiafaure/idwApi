const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/servicioController');

// Ruta para obtener todos los servicios
router.get('/getAllServicios', serviciosController.getAllServicios);

// Ruta para obtener un servicio por ID
router.get('/getServicio/:id', serviciosController.getServicioById);

// Ruta para crear un nuevo servicio
router.post('/createServicio', serviciosController.createServicio);

// Ruta para actualizar un servicio existente
router.put('/updateServicio/:id', serviciosController.updateServicio);

// Ruta para eliminar un servicio por ID
router.delete('/deleteServicio/:id', serviciosController.deleteServicio);

module.exports = router;
