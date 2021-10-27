# Lista-de-animales

Descripción
La clínica veterinaria Pet-XYZ requiere de un sistema en línea para que los médicos
veterinarios y asistentes puedan guardar la información de tres tipo de animales en
específico, como es el caso de Perros, Gatos y Conejos, debido a que son la mayor demanda
por cantidad de casos al día por los momentos. Esto se realizará mediante la utilización de
un formulario para identificar el tipo y datos del animal, en conjunto con los datos del dueño.

Por lo tanto, el desafío consiste en llevar a un archivo JavaScript un modelo de Herencia
(diagrama de clases) en específico, como se muestra en la primera imagen, implementado
la nomenclatura de ES6, para así facilitar a los usuarios de la aplicación (clínica veterinaria)
identificar a los animales y a sus dueños. Es importante recalcar, que cada dueño tiene una
mascota y se pueden seleccionar solo tres tipos de mascotas: perros, gatos o conejos,
igualmente se debe ingresar el motivo de la consulta o enfermedad con el nombre del
animal y los datos del dueño (nombre, dirección y número telefónico).


Requerimientos
1. Crear las clases en ES6 respetando la Herencia indicada en el diagrama de clases.
2. Crear los métodos get y set para la clase de mascota.
3. Crear un método get para la clase Animal de la propiedad tipo para retornar el
mensaje “El tipo de animal es un: ${this.tipo}”.
4. Crear el método “datosPropietario” en la clase correspondiente y que pueda ser
accedido desde las clases inferiores.
5. Captar los elementos del formulario con JavaScript e identificar el tipo de animal
para realizar la instancia dependiendo del tipo de animal seleccionado. Es decir, si el
usuario selecciona Gato, la instancia a crear para la clase Mascota debe tener el
nombre de “Gato”, si selecciona Perro, la instancia de Mascota deberá llamarse
“Perro”.
6. Mostrar a modo de lista los mensajes resultantes para el método “datosPropietario”
cuando el usuario haga un clic sobre el botón Agregar, accediendo a los métodos get
de las clases Animal y Mascota, concatenando todo en un solo mensaje
