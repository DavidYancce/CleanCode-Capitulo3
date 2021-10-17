//Tercer ejemplo : No tener efectos secundarios

//Primer ejemplo
const frase = "Mas tarde es igual a nunca";

//Mal
function separarPalabras(){
    frase= frase.split(" ");
}
//Mejor
function separarPalabras2(frase){
    return frase.split(" ");
}

//Segundo ejemplo
function validarContrasenia(nombreUsuario, contrasenia){
    //...
    if(respuestaBD=contrasenia.hash()){
        session.initialize()//Error
        return true;
    }
}
