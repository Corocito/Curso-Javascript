//-----------------SE EMPIEZA CON LA EXPLICACIÓN DE LAS PROMESAS

//Las Promise son objetos por lo que se deben de crear como uno, además de que
//cuenta con 2 callbacks, resolve y reject

let nombre ="Grande";
//Esta es la estructura de un Promise y recibe como parametro una función
const promesa = new Promise((resolve,reject)=>{
    if(nombre!== "Grande") reject("El nombre no es Grande")
    else resolve(nombre)
})

console.log(promesa);

//Los datos de las promesas no se pueden acceder ya que los datos estan encapsulados
//la manera para acceder a los datos de los Promise es con .then

//Se debe de poner el Promise con el .then y dentro de los parentesis se debe deagregar lo que se quiera mostrar
promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{ //Se agrega el catch para poder manejar el error, dentro del catch
    //se debe de agregar lo que se desee mostrar, en este caso se agrega una funcion flecha
    //que va a mostrar el mensaje definido anteriormente 
    console.log(e)
})

//Una de las ventajas de las promesas por sobre os callbacks es que las promesas 
//pueden manejar los errores en una parte en especifico, mientras que con los callbacks
//se debe de crear una excepcion para manejar un posible error en cada uno de los callbacks
//por lo que al final el codigo se vuelve dificil de leer 



//----------------SE EMPIEZA CON LA EXPLICACIÓN DE UN POSIBLE USO DE LOS PROMISE
class Gallina{
    constructor(nombre, raza){
        this.nombre=nombre;
        this.raza=raza;
    }
};

//Se crea un array relacional para el manejo de los datos de las gallinas
let dataGallina = [
    ["Grande", "Ponedora"],
    ["Alas", "Ponedora"],
    ["Blanca", "Criolla"],
    ["Confianza", "Criollo"],
];

//Se crea el array vacio donde se almacenará la información de las busquedas de las gallinas
const gallinasArray = [];


for (let i = 0; i < dataGallina.length; i++) {
    gallinasArray[i] = new Gallina(dataGallina[i][0], dataGallina[i][1]);
}

//Otra manera para poder definir los resolve y reject de los Promise es simplificandolos a res y rej
//Pero al definir la función se deben de nombrar de la misma manera, sino saltará un error
const obtenerGallina = (id)=>{
    return new Promise((res,rej)=>{
        if(gallinasArray[id] == undefined) rej("No se ha encontrado la Gallina")
        else {res(gallinasArray[id])}
    })
}


const obtenerRaza = (id) =>{
    return new Promise((resolve,reject)=>{
        if(gallinasArray[id].raza == undefined) reject("No se ha encontrado la raza de la gallina")
        else{resolve(gallinasArray[id].raza)}
    })
}


let id=2;
obtenerGallina(id).then((gallina)=>{
    console.log(gallina.nombre);
    return obtenerRaza(id);
}).then((raza)=>{
    console.log(raza)
}).catch((e)=>{
    console.log(e)
})
