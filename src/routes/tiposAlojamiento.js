const express = require('express');
const router = express.Router();
const tipoAlojamientoController = require('../controllers/tipoAlojamientoController');

// Ruta para obtener todos los tipos de alojamiento
router.get('/getTiposAlojamiento', tipoAlojamientoController.getAllTiposAlojamiento);

// Ruta para obtener un tipo de alojamiento por ID
router.get('/getTipoAlojamiento/:id', tipoAlojamientoController.getTipoAlojamientoById);

// Ruta para crear un nuevo tipo de alojamiento
router.post('/createTipoAlojamiento', tipoAlojamientoController.createTipoAlojamiento);

// Ruta para actualizar un tipo de alojamiento existente
router.put('/putTipoAlojamiento/:id', tipoAlojamientoController.updateTipoAlojamiento);

// Ruta para eliminar un tipo de alojamiento por ID
router.delete('/deleteTipoAlojamiento/:id', tipoAlojamientoController.deleteTipoAlojamiento);

module.exports = router;
