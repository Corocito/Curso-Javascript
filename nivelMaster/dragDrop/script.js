"use strict";

//---SE INICIA CON LA EXPLICACIÓN DEL DRAG Y EL DROP

//Se deben de seleccionar las figuras con las que se va a trabajar el drag y el drop
/*
const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");
//Los eventos de los objetos drag son:
/*
--dragstart
--drag
--dragend
*/
/*
//Cada vez que se empiece a mover el objeto en la consola se mostrará el número 1
circulo.addEventListener("dragstart",(e)=>{
    //De esta manera se selecciona el objeto desde donde se originará la información
    //Siempre se debe de poner en el dragStart
    e.dataTransfer.setData("clase",e.target.className)
    
});


/*

//Cuando se esté moviendo el objeto se va a marcar el 2 en la consola
circulo.addEventListener("drag",()=>console.log(2));
//Cuando se termine de mover el objeto se mostrará un 3 en la consola
circulo.addEventListener("dragend",()=>{
    console.log(3)Ñ
    alert("Se soltó el objeto")
});
*/

/*
//HAY OTRAS PROPIEDADES DE DRAG PARA LOS OBJETOS

//Se muestra cuando un objeto entra en la zona del objeto con esta propiedad
rectangulo.addEventListener("dragenter",()=>console.log(1));

//Se muestra cuando el objeto se mueva dentro de la zona con la propiedad dragover
rectangulo.addEventListener("dragover",(e)=>{
    //Se debe de agregar el preventDefault para que se elimine la propiedad y que se permita ejecutar el drop
    e.preventDefault();
    console.log(2);
});

//Se muestra cuando el objeto se suelta dentro de la zona con la propiedad drop
rectangulo.addEventListener("drop",(e)=>{
    //De esta manera se selecciona el objeto que recibirá la información
    //Siempre se debe de poner en el drop
    console.log(e.dataTransfer.getData("clase"))
});

//Se muestra cuando el objeto
rectangulo.addEventListener("dragleave",()=>console.log(4));


//PARA PODER TRANSMITIR LA INFORMACIÓN SE NECESARIO EL OBJETO DATATRANSFER
//Ya que ese es el objeto encargado de compartir la información entre los objetos Drag y Drop

*/


//------------SE EMPIEZA CON UN EJERCICIO PARA APLICAR EL DRAG Y EL DROP


const zona = document.querySelector(".zona");

zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("textura${n}.jpg")`
})

//Se realiza con un ciclo for para poder detectar la cantidad de texturas que hay
//usando el metodo children
for (let i = 1; i < document.querySelector(".texturas").children.length +1; i++) {
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>cambiarTextura(i,e));
}

const cambiarTextura = (n,e) =>{
    e.dataTransfer.setData("textura",n);
}
