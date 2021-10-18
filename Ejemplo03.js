//Tercer ejemplo : No tener efectos secundarios

//Primer ejemplo
const frase = "Mas tarde es igual a nunca";

//Mal
function separarPalabras(){
    frase= frase.split(" ");
}
//Mejor
function separarPalabras2(frase,separador){
    return frase.split(separador);
}

//Segundo ejemplo
function autenticar(nombreUsuario, contraasenia){
    if(validarContrasenia((nombreUsuario, contraasenia)) {
        session.initialize();
    }
}
function validarContrasenia(nombreUsuario, contrasenia){
    if(respuestaBD == contrasenia.hash()){
        return true;
    }
}
