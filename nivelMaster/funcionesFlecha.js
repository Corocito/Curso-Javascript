//------------------SE INICIA CON LA EXPLICACION DE LAS FUNCIONES FLECHA
 
//Las funciones flecha surgieron como una manera simplificar y facilitar
//el uso de las funciones normales

//Se presenta un ejemplo de como simplificar una funcion con el uso de las funciones flecha

const saludar = function() {return nombre = "Alas"};
const saludar1 = ()=> nombre = "Blanca";

//AMBAS FUNCIONES HACEN LO MISMO, DEVOLVER UN STRING CON UN NOMBRE, PERO ES MAS
//FACIL HACIENDO USO DE LAS FUNCIONES FLECHA
 
//En las funciones flecha se pueden eliminar los parentesis si la funcion solo cuenta con un parametro
//Se muestra un ejemplo


//Se define una funcion que devuelve un nombre y como solo es un parametro 
const hola = nomb => respuesta = nomb;


//LAS FUNCIONES FLECHA NO SON RECOMENDADAS PARA USARSE COMO METODOS NI COMO CONSTRUCTORES

const objetoGallina = {
    nombre: "Alas", //Se crea una función que devuelve un mensaje con el nombre que se le de a la variable
    //Esta funcion solo funciona debido a que no es una funcion flecha
    saludar : function(){console.log(`Hola a la gallinota ${this.nombre}`)}

    //Esta funcion no podria funcionar debido a que es una funcion flecha
    //No es recomendable debido a que el this no encuentra el objeto para hacer la referencia
    //saludar : ()=>{console.log(`Hola a la gallinota ${this.nombre}`)}
}
objetoGallina.saludar();

//LAS FUNCIONES FLECHA TAMPOCO SE PUEDEN USAR COMO CONSTRUCTORES DEBIDO A QUE NO FUNCIONAN

//Esta es una funcion constructora normal por lo que funciona
function construcotGallina(nombre, raza){
    this.nombre = nombre;
    this.raza = raza;
}

//Lo que se muestra a continuacion es un constructor basado en una funcion flecha
const constructorGalli = (nombre, raza)=>{
    this.nombre = nombre;
    this.raza = raza;
}



//-----------EXPLICACIÓN DE LOS THIS------------------------------

/*Es recomendable que los this funcionen dentro de los bloques donde se necesitan,
las funciones flecha no pueden hacer un uso correcto de los this debido a que hacen referencia al
objeto WINDOW, y ese objeto no existe en el modo strict, por lo que siempre es recomendable usar 
los this dentro del contexto donde se necesiten*/




//---------EXPLICACIÓN DE LA RECURSIVIDAD-------------
/*La recursividad es cuando una función se llama a si misma */

//ESTE ES UN EJEMPLO DE UNA FUNCION QUE SE LLAMA A SI MISMA

function saludarS(){
    saludarS()
    //ESTO ES UNA FUNCION QUE SE LLAMA A SI MISMA, SIN EMBARGO HAY QUE TENER CUIDADO
    //DEBIDO A QUE SE PUEDE CONVERTIR EN UN CICLO INFINITO Y ARRUINAR EL SISTEMA
}


//SE MUESTRA UN EJEMPLO DE UNA FUNCION RECURSIVA FUNCIONAL

const validarEdad = (msg)=>{
    let edad;
    try{
        if(msg) edad = prompt(msg);
        else edad = prompt("Introduce tu edad");
        edad=parseInt(edad);
        if(isNaN(edad)) throw "Introduce un numero para la edad";
        if(edad >18) console.log("Eres mayor de edad");
        else console.log("Eres menor de edad");
    }
    catch(e){
        validarEdad(e) //En este punto la funcion se llama a si misma
        //Hasta que se cumpla correctamente la validacion, sino entra al catch
        //repitiendo la funcion siempre
    }
}



//-----------EXPLICACIÓN DE LAS CLAUSURAS-------------

//En este ejemplo se muestra una funcion que se va a usasr para poder cambiar el tamaño de la fuente de un texto
const cambiarTamañoTexto = tamaño =>{
    document.querySelector(".texto").style.fontSize = `${tamaño}px`;
}

//Se llamaria individualmente para la funcionalidad de cada uno de los botones
document.querySelector(".t12").addEventListener("click", ()=>cambiarTamañoTexto(12));
document.querySelector(".t14").addEventListener("click", ()=>cambiarTamañoTexto(14));
document.querySelector(".t16").addEventListener("click", ()=>cambiarTamañoTexto(16));


//AHORA SE VA A VER COMO HACEER LO MISMO PERO APLICANDO LAS CLOSURES

//Se define la funcion igual que lo anterior pero con un return
const cambiarTamaño = tamaño =>{
    return ()=>{
        document.querySelector(".texto").style.fontSize = `${tamaño}px`;
    }
}

//Se llama la funcion en cada una de las categorias
px12 =cambiarTamaño(12);
px14 = cambiarTamaño(14);
px16 = cambiarTamaño(16);

document.querySelector(".t12").addEventListener("click",px12);
document.querySelector(".t14").addEventListener("click",px14);
document.querySelector(".t16").addEventListener("click",px16);

