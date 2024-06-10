const express = require('express');
const router = express.Router();
const alojamientoServicioController = require('../controllers/alojamientosServiciosController');

// Ruta para obtener todos los alojamientoservicios
router.get('/getAllAlojamientoServicios', alojamientoServicioController.getAllAlojamientoServicios);

// Ruta para obtener un alojamientoservicio por ID
router.get('/getAlojamientoServicio/:id', alojamientoServicioController.getAlojamientoServicioById);

// Ruta para crear un nuevo alojamientoservicio
router.post('/createAlojamientoServicio', alojamientoServicioController.createAlojamientoServicio);

// Ruta para actualizar un alojamientoservicio existente
router.put('/updateAlojamientoServicio/:id', alojamientoServicioController.updateAlojamientoServicio);

// Ruta para eliminar un alojamientoservicio por ID
router.delete('/deleteAlojamientoServicio/:id', alojamientoServicioController.deleteAlojamientoServicio);

module.exports = router;
