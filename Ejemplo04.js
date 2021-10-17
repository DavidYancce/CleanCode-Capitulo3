function funcionConError(){
    //...
}

//Mal
if(funcionConError == true){
    //...
}
else{
    console.log("Hubo un error en la funcion")
}

//Parece mejor
try{
    funcionConError();
}
catch(e){
    console.log(e)
}
//Mejor
try{
    funcionConError();
}
catch (error) {
    mostrarMensaje(error);
    reportarError(error);
    //demas funciones que hagan algo con el error
}
//Nota: lo mismo con las promesas (.then y .catch)