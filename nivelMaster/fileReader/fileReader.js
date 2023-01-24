"use strict";
//--------SE EMPIEZA CON LA EXPLICACIÓN DEL FILE READER

//Proviene de la API File de JavaScript

const archivo = document.getElementById('archivo');

archivo.addEventListener("change",(e)=>{
    //Se debe de crear el archivo con los parametros de un array debido a que
    //la información se guarda como un array
    leerArchivo(archivo.files[0]);
})

//De esta manera se crea el objeto FileReader, se crea como un objeto
const leerArchivo = ar =>{
    const reader = new FileReader();
    reader.readAsText(ar);
    reader.addEventListener("load",(e)=>{
        console.log(e.currentTarget.result);
    });
}

//De esta manera se crea para que se puedan leer varios archivos
const leerVariosArchivos = ar =>{
    for (var i = 0; i < ar.length; i++) {
        const reader = new FileReader();
        reader.readAsText(ar);
        reader.addEventListener("load",(e)=>{
            console.log(e.currentTarget.result);
        });
        
    }
    
}
//Todos los atributos del objeto son null ya que se encarga de trabajar con los metodos

//El FileReader se diferencia de los fetch debido a que el FileReader se usa 
//para pedirle al usuario el documento que se desea leer, mientras que el fetch
//se usa para trabajar con documentos los cuales ya conocemos su origen y nombre

//Para poder recibir la informacion de los archivos los cuagitles se desea leer
//se debe de  pedir al ususario que la suministre, esto se hace mediante el archivo HTML
//el cual con un input va a recibir la información y el JavaScript la ejecutará



