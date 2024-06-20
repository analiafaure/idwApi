# API de Alojamientos

Esta API permite gestionar alojamientos, como casas, apartamentos, hoteles, etc.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias usando npm:

```bash
npm install
```
## Uso

Para utilizar esta API, sigue estos pasos:

1. Inicia el servidor ejecutando el siguiente comando:

```bash
npm run dev
```

2. Envía solicitudes HTTP a los endpoints correspondientes para realizar operaciones CRUD en los tipos de alojamiento.

## Endpoints

## TIPOS DE ALOJAMIENTOS

- `POST /tiposAlojamiento/createTipoAlojamiento`: Crea un nuevo tipo de alojamiento.
  - Parámetros de la solicitud: `{ "Descripcion": "casa" }`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: `{ "id": 1, "Descripcion": "casa" }`

- `GET /tiposAlojamiento/getTipoAlojamiento/:id`: Obtiene un tipo de alojamiento por su ID.
  - Parámetros de la solicitud: `ID del tipo de alojamiento`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: `{ "id": 1, "Descripcion": "casa" }`

- `GET /tiposAlojamiento/getTipoAlojamiento`: Obtiene todos los tipos de alojamientos.
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: `{ "id": 1, "Descripcion": "casa",  "id": 2, "Descripcion": "hotel" }`
 
- `PUT /tiposAlojamiento/putTipoAlojamiento/:id`: Actualiza un tipo de alojamiento existente.
  - Parámetros de la solicitud: `ID del tipo de alojamiento`, datos a actualizar
  - Respuesta exitosa: `200 OK`
  - Ejemplo de solicitud: `PUT /tiposAlojamiento/updateTipoAlojamiento/1` con cuerpo `{ "Descripcion": "casa" }`

- `DELETE /tiposAlojamiento/deleteTipoAlojamiento/:id`: Elimina un tipo de alojamiento existente.
  - Parámetros de la solicitud: `ID del tipo de alojamiento`
  - Respuesta exitosa: `200 No Content`

## ALOJAMIENTOS

 Envía solicitudes HTTP a los endpoints correspondientes para realizar operaciones CRUD en los alojamientos.

- `POST /alojamiento/createAlojamiento`: Crea un nuevo alojamiento.
  - Parámetros de la solicitud: 
    ```json
    {
        "Titulo": "Ejemplo de alojamiento",
        "Descripción": "Descripción del alojamiento",
        "TipoAlojamiento": 1,
        "Latitud": 123.456,
        "Longitud": -78.901,
        "PrecioPorDia": 100,
        "CantidadDormitorios": 3,
        "CantidadBanios": 2,
        "Estado": "Disponible"
     }
    ```
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    {
        "idAlojamiento": 1,
        "Titulo": "Ejemplo de alojamiento",
        "Descripción": "Descripción del alojamiento",
        "TipoAlojamiento": 1,
        "Latitud": 123.456,
        "Longitud": -78.901,
        "PrecioPorDia": 100,
        "CantidadDormitorios": 3,
        "CantidadBanios": 2,
        "Estado": "Disponible"
    }
    ```

- `GET /alojamiento/getAlojamiento/:id`: Obtiene un alojamiento por su ID.
  - Parámetros de la solicitud: `ID del alojamiento`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    {
        "idAlojamiento": 1,
        "Titulo": "Ejemplo de alojamiento",
        "Descripción": "Descripción del alojamiento",
        "TipoAlojamiento": 1,
        "Latitud": 123.456,
        "Longitud": -78.901,
        "PrecioPorDia": 100,
        "CantidadDormitorios": 3,
        "CantidadBanios": 2,
        "Estado": "Disponible"
    }
    ```
- `GET /alojamiento/getAlojamientos`: Obtiene todos los alojamientos.
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    {
        "idAlojamiento": 1,
        "Titulo": "Ejemplo de alojamiento",
        "Descripción": "Descripción del alojamiento",
        "TipoAlojamiento": 1,
        "Latitud": 123.456,
        "Longitud": -78.901,
        "PrecioPorDia": 100,
        "CantidadDormitorios": 3,
        "CantidadBanios": 2,
        "Estado": "Disponible"
    },
    {
        "idAlojamiento": 2,
        "Titulo": "Ejemplo de alojamiento",
        "Descripción": "Descripción del alojamiento",
        "TipoAlojamiento": 1,
        "Latitud": 123.456,
        "Longitud": -78.901,
        "PrecioPorDia": 100,
        "CantidadDormitorios": 3,
        "CantidadBanios": 2,
        "Estado": "Disponible"
    }
    ```
    
- `PUT /alojamiento/putAlojamiento/:id`: Actualiza un alojamiento existente.
  - Parámetros de la solicitud: `ID del alojamiento`, datos a actualizar
  - Respuesta exitosa: `200 OK`
  - Ejemplo de solicitud: `PUT /alojamientos/updateAlojamiento/1` con cuerpo:
    ```json
    {
        "Titulo": "Nuevo título",
        "PrecioPorDia": 120,
        "Estado": "Reservado"
    }
    ```

- `DELETE /alojamiento/deleteAlojamiento/:id`: Elimina un alojamiento existente.
  - Parámetros de la solicitud: `ID del alojamiento`
  - Respuesta exitosa: `200 No Content`

## SERVICIOS

- **Crea un nuevo servicio:**
  - Método: `POST`
  - Ruta: `/servicio/createServicio`
  - Parámetros de la solicitud: `{ "Nombre": "wifi" }`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: `{ "idServicio": 1, "Nombre": "wifi" }`

- **Obtiene un servicio por su ID:**
  - Método: `GET`
  - Ruta: `/servicio/getServicio/:id`
  - Parámetros de la solicitud: `ID del servicio`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: `{ "idServicio": 1, "Nombre": "wifi" }`

- **Obtiene todos los servicios:**
  - Método: `GET`
  - Ruta: `/servicio/getAllServicios`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: `{ "idServicio": 1, "Nombre": "wifi",  "idServicio": 2, "Nombre": "piscina" }`
 
- **Actualiza un servicio existente:**
  - Método: `PUT`
  - Ruta: `/servicio/updateServicio/:id`
  - Parámetros de la solicitud: `ID del servicio`, datos a actualizar
  - Respuesta exitosa: `200 OK`
  - Ejemplo de solicitud: `PUT /servicio/updateServicio/1` con cuerpo `{ "Nombre": "wifi" }`

- **Elimina un servicio existente:**
  - Método: `DELETE`
  - Ruta: `/servicio/deleteServicio/:id`
  - Parámetros de la solicitud: `ID del servicio`
  - Respuesta exitosa: `200 No Content`
 
## ALOJAMIENTOS Y SERVICIOS

- **Obtiene todos los alojamientos con sus servicios asociados:**
  - Método: `GET`
  - Ruta: `/alojamientosServicios/getAllAlojamientoServicios`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    [
        {
            "idAlojamientoServicio": 1,
            "idAlojamiento": 1,
            "idServicio": 1
        },
        {
            "idAlojamientoServicio": 2,
            "idAlojamiento": 2,
            "idServicio": 2
        }
    ]
    ``` 
  - **Obtiene todos los alojamientos cuyo idAlojamiento coincida con el parámetro del mismo nombre:**
  - Método: `GET`
  - Ruta: `/alojamientosServicios//getAlojamientoServicios/:idAlojamiento`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    [
        {
            "idAlojamientoServicio": 1,
            "idAlojamiento": 1,
            "idServicio": 1
        },
        {
            "idAlojamientoServicio": 2,
            "idAlojamiento": 1,
            "idServicio": 2
        }
    ]
    ```   

- **Obtiene un alojamiento con sus servicios asociados por su ID:**
  - Método: `GET`
  - Ruta: `/alojamientosServicios/getAlojamientoServicio/:id`
  - Parámetros de la solicitud: `ID del alojamiento`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    {
        "idAlojamientoServicio": 1,
        "idAlojamiento": 1,
        "idServicio": 1
    }
    ```

- **Crea una nueva relación entre alojamiento y servicio:**
  - Método: `POST`
  - Ruta: `/alojamientosServicios/createAlojamientoServicio`
  - Parámetros de la solicitud: 
    ```json
    {
        "idAlojamiento": 1,
        "idServicio": 1
    }
    ```
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    {
        "idAlojamientoServicio": 1,
        "idAlojamiento": 1,
        "idServicio": 1
    }
    ```

- **Actualiza una relación entre alojamiento y servicio existente por su ID:**
  - Método: `PUT`
  - Ruta: `/alojamientosServicios/updateAlojamientoServicio/:id`
  - Parámetros de la solicitud: `ID de la relación`, datos a actualizar
  - Respuesta exitosa: `200 OK`
  - Ejemplo de solicitud: `PUT /alojamientoServicios/updateAlojamientoServicio/1` con cuerpo: 
    ```json
    {
        "idAlojamiento": 2,
        "idServicio": 1
    }
    ```

- **Elimina una relación entre alojamiento y servicio por su ID:**
  - Método: `DELETE`
  - Ruta: `/alojamientosServicios/deleteAlojamientoServicio/:id`
  - Parámetros de la solicitud: `ID de la relación`
  - Respuesta exitosa: `200 No Content`

## IMAGENES

- **Obtiene todas las imágenes:**
  - Método: `GET`
  - Ruta: `/imagen/getAllImagenes`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    [
        {
            "idImagen": 1,
            "idAlojamiento": 1,
            "RutaArchivo": "/ruta/archivo1.jpg"
        },
        {
            "idImagen": 2,
            "idAlojamiento": 1,
            "RutaArchivo": "/ruta/archivo2.jpg"
        }
    ]
    ```

- **Obtiene una imagen por su ID:**
  - Método: `GET`
  - Ruta: `/imagen/getImagen/:id`
  - Parámetros de la solicitud: `ID de la imagen`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    {
        "idImagen": 1,
        "idAlojamiento": 1,
        "RutaArchivo": "/ruta/archivo1.jpg"
    }
    ```

- **Crea una nueva imagen:**
  - Método: `POST`
  - Ruta: `/imagen/createImagen`
  - Parámetros de la solicitud: 
    ```json
    {
        "idAlojamiento": 1,
        "RutaArchivo": "/ruta/archivo3.jpg"
    }
    ```
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    {
        "idImagen": 3,
        "idAlojamiento": 1,
        "RutaArchivo": "/ruta/archivo3.jpg"
    }
    ```

- **Actualiza una imagen existente por su ID:**
  - Método: `PUT`
  - Ruta: `/imagen/updateImagen/:id`
  - Parámetros de la solicitud: `ID de la imagen`, datos a actualizar
  - Respuesta exitosa: `200 OK`
  - Ejemplo de solicitud: `PUT /imagen/updateImagen/1` con cuerpo: 
    ```json
    {
        "idAlojamiento": 2,
        "RutaArchivo": "/ruta/archivo1_actualizado.jpg"
    }
    ```

- **Elimina una imagen por su ID:**
  - Método: `DELETE`
  - Ruta: `/imagen/deleteImagen/:id`
  - Parámetros de la solicitud: `ID de la imagen`
  - Respuesta exitosa: `200 No Content`

 
## Errores

- `400 Bad Request`: La solicitud contiene datos incorrectos o incompletos.
- `404 Not Found`: El recurso solicitado no se encuentra.
- `500 Internal Server Error`: Error interno del servidor.

