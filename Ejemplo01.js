//Primer ejemplo : Pasar objetos como argumento
class Persona {
	constructor(nombre, apellido, edad){
  	this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
  }
}
let nombre="david";
let apellido="yanccehuallpa";
let edad=12;

//Mal
function insertarPersona(nombre, apellido, edad) 
//Mejor
const persona= new Persona(nombre, apellido, edad)
function insertarPersona2(persona)

