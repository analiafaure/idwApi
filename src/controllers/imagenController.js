const dbConnection = require('../config/dbConfig');

// Obtener todas las imágenes
exports.getAllImagenes = async (req, res) => {
  try {
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM imagenes');
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las imágenes' });
  }
};

// Obtener una imagen por su ID
exports.getImagenById = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM imagenes WHERE idImagen = ?', [id]);
    connection.release();
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la imagen' });
  }
};

// Crear una nueva imagen
exports.createImagen = async (req, res) => {
  try {
    const nuevaImagen = req.body;
    const connection = await dbConnection.getConnection();
    const [results] = await connection.query('INSERT INTO imagenes SET ?', nuevaImagen);
    connection.release();
    res.json({ message: 'Imagen creada correctamente', id: results.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la imagen' });
  }
};

// Actualizar una imagen existente
exports.updateImagen = async (req, res) => {
  try {
    const { id } = req.params;
    const datosAActualizar = req.body;
    const connection = await dbConnection.getConnection();
    await connection.query('UPDATE imagenes SET ? WHERE idImagen = ?', [datosAActualizar, id]);
    connection.release();
    res.json({ message: 'Imagen actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la imagen' });
  }
};

// Eliminar una imagen por su ID
exports.deleteImagen = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    await connection.query('DELETE FROM imagenes WHERE idImagen = ?', [id]);
    connection.release();
    res.json({ message: 'Imagen eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la imagen' });
  }
};
