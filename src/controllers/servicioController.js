const dbConnection = require('../config/dbConfig');

// Obtener todos los servicios
exports.getAllServicios = async (req, res) => {
  try {
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM servicios');
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los servicios' });
  }
};

// Obtener un servicio por ID
exports.getServicioById = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM servicios WHERE idServicio = ?', [id]);
    connection.release();
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el servicio' });
  }
};

// Crear un nuevo servicio
exports.createServicio = async (req, res) => {
  try {
    const nuevoServicio = req.body;
    const connection = await dbConnection.getConnection();
    const [results] = await connection.query('INSERT INTO servicios SET ?', nuevoServicio);
    connection.release();
    res.json({ message: 'Servicio creado correctamente', id: results.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el servicio' });
  }
};

// Actualizar un servicio existente
exports.updateServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const datosAActualizar = req.body;
    const connection = await dbConnection.getConnection();
    await connection.query('UPDATE servicios SET ? WHERE idServicio = ?', [datosAActualizar, id]);
    connection.release();
    res.json({ message: 'Servicio actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el servicio' });
  }
};

// Eliminar un servicio por ID
exports.deleteServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    await connection.query('DELETE FROM servicios WHERE idServicio = ?', [id]);
    connection.release();
    res.json({ message: 'Servicio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el servicio' });
  }
};
