"use strict";


//Se crea la función para poder definir el idioma en el storage
const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma", "en");
        cerrarModal();
    })

    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma", "es");
        cerrarModal();
    })
}

const modal = document.querySelector(".modal-overlay");

const cerrarModal = ()=>{
    modal.getElementsByClassName.animation = "desaparecer 1s formwards";
    setTimeout(() => modal.style.display = "none",1000);
}

const idioma=localStorage.getItem("idioma");


if(idioma ===null)definirIdioma();
else{
    console.log(`Idioma: ${idioma}`);
    modal.style.display = "none";
}

