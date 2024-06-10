const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { join, dirname } = require('path'); 
const fileUrlToPath = require('url');
const bodyParser = require('body-parser');

const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:3000', // Permite solicitudes desde este origen
}));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Rutas
const routerAlojamiento = require('./routes/alojamientos');
const routerTiposAlojamiento = require('./routes/tiposAlojamiento');
const routerAlojamientosServicios = require('./routes/alojamientosServicios');
const routerServicio = require('./routes/servicios');
const routerImagen = require('./routes/imagenes');

app.use('/alojamiento', routerAlojamiento);
app.use('/tiposAlojamiento', routerTiposAlojamiento);
app.use('/alojamientosServicios', routerAlojamientosServicios);
app.use('/servicio', routerServicio);
app.use('/imagen', routerImagen); 

app.use(express.static(join(__dirname, 'public')));

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error en el servidor');
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});