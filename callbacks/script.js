//------------------------------CALLBACK
function prueba(callback){
    callback("Gallina");
}

function decirAnimal(animal){
    console.log(animal);
}

prueba(decirAnimal);

//Se da un ejemplo de la utilización de un callback

//Se crea la clase gallina
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
    ["Confianza", "Criollo"]
];

//Se crea el array vacio donde se almacenará la información de las busquedas de las gallinas
const gallinasArray = [];


//Se crea la función para poder recorrer el array relacional con la informacion de las gallinas y agregarla al array vacio
for (let i = 0; i < dataGallina.length; i++) {
    gallinasArray[i] = new Gallina(dataGallina[i][0], dataGallina[i][1]);
}

//Se crea la funcion para obtener los datos de las personas deseadas
//Esto es un callback para poder encontrar el nombre de la gallina, en caso de que
//no se encuentre la información, saltaá un error
const obtenerGallina = (nom, callback)=>{
    if(gallinasArray[nom]==undefined){
        callback("No se ha encontrado a la Gallina deseada");
    }
    else{
        callback(null,gallinasArray[nom]);
    }
}

//Se crea el callback para verificar la información de la raza
const obtenerRaza = (raza,callback)=>{
    if(gallinasArray[raza].raza == undefined){
        callback("No se ha encontrado la raza de la gallina");
    }
    else{
        callback(null,gallinasArray[raza].raza);
    }
}

//Se llena la funcion con la respectiva información necesaria para obtener los datos de las gallinas
obtenerGallina(0,(err, gallina)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(gallina.nombre);
        console.log(obtenerRaza(gallina,(err,raza)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(gallina.raza);
            }
        }));
    }
})


