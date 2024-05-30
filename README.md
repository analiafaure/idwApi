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
  - Respuesta exitosa: `204 No Content`

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
        "Precio por día": 100,
        "Cantidad de dormitorios": 3,
        "Cantidad de baños": 2,
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
        "Precio por día": 100,
        "Cantidad de dormitorios": 3,
        "Cantidad de baños": 2,
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
        "Precio por día": 100,
        "Cantidad de dormitorios": 3,
        "Cantidad de baños": 2,
        "Estado": "Disponible"
    }
    ```
- `GET /alojamiento/getAlojamiento`: Obtiene todos los alojamientos.
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
        "Precio por día": 100,
        "Cantidad de dormitorios": 3,
        "Cantidad de baños": 2,
        "Estado": "Disponible"
    },
    {
        "idAlojamiento": 2,
        "Titulo": "Ejemplo de alojamiento",
        "Descripción": "Descripción del alojamiento",
        "TipoAlojamiento": 2,
        "Latitud": 123.456,
        "Longitud": -78.901,
        "Precio por día": 100,
        "Cantidad de dormitorios": 3,
        "Cantidad de baños": 2,
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
        "Precio por día": 120,
        "Estado": "Reservado"
    }
    ```

- `DELETE /alojamiento/deleteAlojamiento/:id`: Elimina un alojamiento existente.
  - Parámetros de la solicitud: `ID del alojamiento`
  - Respuesta exitosa: `204 No Content`



## Errores

- `400 Bad Request`: La solicitud contiene datos incorrectos o incompletos.
- `404 Not Found`: El recurso solicitado no se encuentra.
- `500 Internal Server Error`: Error interno del servidor.

