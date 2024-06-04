const express = require('express');
const router = express.Router();
const alojamientoController = require('../controllers/alojamientoController');

// Ruta para obtener todos los alojamientos
router.get('/getAlojamientos', alojamientoController.getAllAlojamientos);

// Ruta para obtener un alojamiento por ID
router.get('/getAlojamiento/:id', alojamientoController.getAlojamientoById);

// Ruta para crear un nuevo alojamiento
router.post('/createAlojamiento', alojamientoController.createAlojamiento);

// Ruta para actualizar un alojamiento existente
router.put('/putAlojamiento/:id', alojamientoController.updateAlojamiento);

// Ruta para eliminar un alojamiento por ID
router.delete('/deleteAlojamiento/:id', alojamientoController.deleteAlojamiento);

module.exports = router;