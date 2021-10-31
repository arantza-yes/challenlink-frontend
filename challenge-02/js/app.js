const app = new Vue({
  el: '#app',
  data: {
    titulo: 'User CRUD',
    usuarios: [],
    // index: this.user,
    newName: '',
    newApellido: '',
    newEdad: '',
  },

  methods: {
    agregarUsuario: function () {
      this.usuarios.push({
        nombre: this.newName,
        apellido: this.newApellido,
        edad: this.newEdad,
        created_at: new Date(),
      });
      console.log(this.usuarios);
      localStorage.setItem('usuariosDB', JSON.stringify(this.usuarios));
      this.newName = '';
      this.newApellido = '';
      this.newEdad = '';
    },

    editUser: function (index) {
      var user = this.usuarios[index];
      // this.id = index;
      this.newName = user.nombre;
      this.newApellido = user.apellido;
      this.newEdad = user.edad;
      // agregarUsuario(this.user);
    },
    deleteUser: function (index) {
      this.usuarios.splice(index, 1);
      localStorage.setItem('usuariosDB', JSON.stringify(this.usuarios));
    },
  },
  created: function () {
    let datosDB = JSON.parse(localStorage.getItem('usuariosDB'));
    if (datosDB === null) {
      this.usuarios = [];
    } else {
      this.usuarios = datosDB;
    }
  },
});
