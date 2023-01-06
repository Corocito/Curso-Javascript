//Se inicia con el codigo JavaScript para la solucion del problema de Cofla

//Se define la variable para obtener la información de los objetos de las materias
const materiasHTML = document.querySelector(".materias");

//Se defina la lista de las notas (Suponiendo que es una base de datos)
const materias = [
    {
        nombre:"Fisica",
        nota:4
    },{
        nombre:"Calculo",
        nota:5
    },{
        nombre:"Bases de Datos",
        nota:4
    },{
        nombre:"Matematicas",
        nota:3
    },{
        nombre:"Programación",
        nota:4
    }
];


//Se define el promise con el cual se va a trabajar
const obtenerMateria = (id)=>{
    
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if(materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*400);
        //else {resolve(materia)}
    })
}


const devolverMaterias = async()=>{
    let materia=[];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria[i];
        let newHTMLCode = `<div class="materia">
        <div class="nombre">${materia[i].nombre}</div>
        <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

obtenerMateria()
