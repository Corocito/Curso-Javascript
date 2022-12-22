//Se empieza con la codificacion del problema #9 de Cofla

//Se crea un array con objetos entre las {} que representan cada uno de los alumnos
let alumnos=[{
    nombre: "Samuel ",
    email: "s@gmail.com",
    materia: "Fisica"
},{
    nombre: "Pepe",
    email: "p@gmail.com",
    materia: "Quimica"
},{
    nombre: "Bob ",
    email: "b@gmail.com",
    materia: "Calculo"
},{
    nombre: "Estefani ",
    email: "e@gmail.com",
    materia: "Literatura"
},{
    nombre: "Nino ",
    email: "n@gmail.com",
    materia: "Calculo"
},{
    nombre: "Cristian ",
    email: "c@gmail.com",
    materia: "Fisica"
}]

//Se crea la constante para manejar el boton
const boton = document.querySelector(".btnConfirmar");
const contenedor = document.querySelector(".gridContainer");
//Se crea un ciclo para poder recorrer cada uno de los objetos del array
for(i in alumnos){
    //console.log(alumnos[i]);
    //Se crea un ciclo que va a recorrer cada uno de los elementos
    //de los objetos del array
    /*
    for(x in alumnos[i]){
        console.log(alumnos[i][x])
    }*/
    //Se crea la funcion con la cual se va a almacenar en variables la informacion de los objetos del array
    let datos= alumnos[i];
    let nombre= datos["nombre"];
    let email= datos["email"];
    let materia= datos["materia"];
    
    //Se crea el codigo de HTML que se va a generar con la informacion
    let htmlCode= `<div class="gridItem Nombre">${nombre}</div>
    <div class="gridItem Email">${email}</div>
    <div class="gridItem Materia">${materia}</div>
    <div class="gridItem semana">
        <!--El select funciona para poder crear una selector de opciones-->
        <select class="semanaElegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`

    contenedor.innerHTML+=htmlCode;
}

//Se crea el evento que le dara la funcion al botón
boton.addEventListener("click",()=>{
    let confirmar = confirm("¿Estas seguro que deseas confirmar?");
    if(confirmar){
        
        let elementos= document.querySelectorAll(".semana");
        let semanaElegida = document.querySelectorAll(".semanaElegida");
        for(i in elementos){
         semana = elementos[i];
            semana.innerHTML=semanaElegida[i].value;
        }
    }
})
