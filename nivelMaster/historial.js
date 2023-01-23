"use strict";

//-------------SE EMPIEZA CON LA EXPLICACIÓN DEL HISTORIAL

//Con este objeto se muestra el historial de la página web

/*
-back(): Vuelve atras

-forward(): Va hacia adelante

-tamaño del historial

-go(): Va al sitio indicado con un número relativo

-pushState(): Modifica la URL y conserva la info

-Propiedad satate y evento popstate

-replaceState: Modifica la URL y no la conserva
*/

//Conociendo estos metodos vamos a poder administrar nuestro navegador
//siendo capaces de viajar entre las páginas de internet

//Con este codigo se estaria modificando la URL y guardandola
//Se agregaria la información con el nombre de Blanca y se agregaria a la URL la
//información GallinaBlanca

//El primer parametro que se pasa es el estado de la pagina
history.pushState({nombre: "Blanca"},"","GallinaBlanca")
//Con este metodo se crean ademas entradas al historial


//Con el popState se puede saber cuando cambia el estado de la página
//La página original no tiene estado porque no cambia
addEventListener("popstate",(e)=>{
    console.log(e.state);
})