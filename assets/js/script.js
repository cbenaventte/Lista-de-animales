// Definimos la clase propietario
class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    //creamos un metodo para mostar los datos del propietario
    datosPropietario() {
        return (`El nombre del propietario es: ${this.nombre}.
        El domicilio es: ${this.direccion}, y el numero telefonico de contacto es : ${this.telefono}`);
    }

}

//Definimos la clase animal
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
}

//Definimos la clase mascota y creamos los metodos get y set respectivos
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(nuevo_nombreMascota) {
        this._nombreMascota = nuevo_nombreMascota;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(nueva_enfermedad) {
        this._enfermedad =nueva_enfermedad;
    }

}


//Aqui captamos los elementos del formulario
let formulario = document.querySelector('form');

let consulta = (event) => {
    event.preventDefault();

    let propietario = document.getElementById('propietario').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let tipo = document.getElementById('tipo').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let resultado = document.querySelector('ul');

    if( tipo == 'perro'){
        let perro = new Mascota(propietario,direccion,telefono,tipo,nombreMascota,enfermedad);
        resultado.innerHTML = `<li>${perro.datosPropietario()}</li>
                                <li>El tipo de animal es un: ${perro.tipo}, mientras que el nombre de la mascota es: ${perro.nombreMascota} y la enfermedad es: ${perro.enfermedad}</li>`;
    } else if (tipo == 'gato'){
        let gato = new Mascota(propietario,direccion,telefono,tipo,nombreMascota,enfermedad);
        resultado.innerHTML = `<li>${gato.datosPropietario()}</li>
                                <li>El tipo de animal es un: ${gato.tipo}, mientras que el nombre de la mascota es: ${gato.nombreMascota} y la enfermedad es: ${gato.enfermedad}</li>`;
    } else if (tipo == 'conejo'){
        let conejo = new Mascota(propietario,direccion,telefono,tipo,nombreMascota,enfermedad);
        resultado.innerHTML = `<li>${conejo.datosPropietario()}</li>
                                <li>El tipo de animal es un: ${conejo.tipo}, mientras que el nombre de la mascota es: ${conejo.nombreMascota} y la enfermedad es: ${conejo.enfermedad}</li>`;
    }

    document.getElementById('propietario').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('nombreMascota').value = '';
    document.getElementById('tipo').value = 'perro';
    document.getElementById('enfermedad').value = '';
}

formulario.addEventListener('submit',consulta);