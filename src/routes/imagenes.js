const express = require('express');
const router = express.Router();
const imagenesController = require('../controllers/imagenController');

// Ruta para obtener todas las imágenes
router.get('/getAllImagenes', imagenesController.getAllImagenes);

// Ruta para obtener una imagen por ID
router.get('/getImagen/:id', imagenesController.getImagenById);

// Ruta para crear una nueva imagen
router.post('/createImagen', imagenesController.createImagen);

// Ruta para actualizar una imagen existente
router.put('/updateImagen/:id', imagenesController.updateImagen);

// Ruta para eliminar una imagen por ID
router.delete('/deleteImagen/:id', imagenesController.deleteImagen);

module.exports = router;
