# Challenge 02

Develop a CRUD (Create, Read, Update and Delete) of users.

#### Requirements

- Use localStorage to persist data.
- Bootstrap or tailwind.
- VueJS
- Propose the design

**User data structure:**

```json
{
  "id": 1,
  "name": "Jeff",
  "lastname": "musk",
  "age": 24,
  "created_at": "2021-10-22 12:43:02"
}
```

#### index.html

- empieza con un div que tiene un conteiner y un id app para que sea vinculado con vue
- tiene un h3 que es cargado con vue
- tiene inputs para llenar el crud del usuario con la directiva v-model se ingresa los value a vue
- un boton con un evento click para agregar un usuario nuevo
- tiene una tabla cargada dinamicamente con la directiva v-for para llenar los td y unos botones para eliminar y editar, pero tiene un bug que no llena el id al localStorage

#### style.css

- use el framework de boostrap y lo traje con cdn para los estilos
  -adicional use css normal para ingresar un fondo

#### app.js / vueJS

- traje el CDN de vue - version para development, no production
- inicie vue con new vue
- en data, puse usuarios para llenar los datos ahi dentro con un objeto
- en methods, tiene agregar usuarios con una function esta tomando usuarios de data para llenar con push nombre, apellido, edad, y la fecha de creacion
- en editUser cuando le das click al boton editar se llena los datos de cada usuario por su index pero tiene un bug que cuando le das guardar lo actualiza guardando uno nuevo
- y en deleteUser borra cada index osea cada usuario
- en created pregunta si getItem esta vacio le pone un array vacio y si esta lleno pinta los datos del localStorage que esta en un array de objetos, y lo crea en agregar, editar y borrar.
