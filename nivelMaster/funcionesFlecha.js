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


//SE PRESENTA OTRO EJEMPLO DE LAS CLAUSURAS EXPLICANDO LOS PARAMETROS POR DEFECTO

const sumar = (a,b)=>{
    console.log(a+b);
}

//En este caso saltaria en pantalla un parametro Nan ya que no se pasó el segundo valor para sumar
//Para poder manejar este error se puede hacer de las siguientes maneras
sumar(10)

//Se pone de ejemplo un metodo que va a sumar dos valores y en caso de que no
//se pasen los valores pedidos se puede solucionar el error de las siguientes maneras


//Esta es la primera manera, sin embargo no es la mas recomendada
const sumar1= (a,b)=>{
    b = typeof b !== 'undefined'? b:0; 
    console.log(a+b);
}


//Esta es la segunda manera de manejar el Nan
const sumar2 = (a,b)=>{
    b=b||0; //En este caso se asignaria el valor de b como b o 0 en caso de que no haya otro valor
    console.log(a+b);
}


//La tercera manera es dandole valores por defecto a las variables
const sumar3 = (a=0,b=0)=>{
    console.log(a+b);//Así en caso de que no se de un valor a b tomará en valor por defecto
}


//----------------EXPLICACION DEL PARAMETRO REST-------------------
//Este parametro funciona como un argumento 

//El parametro rest son los tres puntos antes del num, lo cual convierte a cualquier valor
//en un array, por lo que se pueden sumar los valores del array sin importar cuantos
//valores se den

//En caso de que se deseen agregar otros valores se deben de hacer antes del rest
const sumaRest = (frase, ...num)=>{
    //Se define la variable con la cual se va a trabajar para almacenar el resultado
    let resultado = 0;

    //Se crea el ciclo for para poder realizar la suma entre los valores del array
    for (let i = 0; i < num.length; i++) {
        resultado = num[i];
    }
    //Se muestra el resultado en pantalla
    console.log(resultado);
    console.log(`${frase} ${resultado}`)
}
//Se le dan los valores con los que trabajar al metodo
sumaRest(12,25,66)


//-----------------EXPLICACIÓN DEL OPERADOR TERNARIO O CONDICIONAL

//Se pone como ejemplo una funcion para validar una edad

let edad = 20;

//Esta es otra manera de validar sin usar el if o el else

//Usando el ? se pasa a decir lo que se hace en caso de que sea true
//En caso de que se desee ejecutar mas de una linea de codigo se debe de encerrar en parentesis
(edad>18) ? (console.log("Es mayor de edad"),
            console.log("Puede pasar"))
          : console.log("Es menor de edad");
          //Usando los : se dice lo que se hace si es false

//El operador ternario consume menos recursos de los que se consume con un if o else


//------------EXPLICACION DEL OPERADOR SPREAD-------


//El operador rest (...) funciona ademas para poder desestructurar los array

let arr = ["valor1", "valor2", "valor3"];

//Usando el rest lo que se hace es mostrar el array como un texto cada uno de los valores
//Muestra los valores como un string y no como un array
console.log(arr)
console.log(...arr);


//Otro uso del parametro rest (...) es usandolo para poder unir dos arrays

let array1 = ["valor1", "valor2", "valor3"];
let array2 = ["valor4", "valor5", "valor6"];

//Usando el rest como parametro junto con el array que se desea juntar lo estariamos agregando cada uno 
//Como un string por lo que se agregan todos los valores
array1.push(...array2);

console.log(array1);

//En caso de que se desee concatenar la informacion de dos array en uno nuevo se hace lo siguiente

//Se crea un nuevo array y se pasa la informacion de los dos array restantes con los parametros rest
let array3= [...array1,...array2];
console.log(array3);

//El parametro REST se encarga de descomponer los parametros de los array para poder trabajar 
//con cada uno de los valores de manera individual por lo que se pueden hace sumas continuas con los valores
//de los array o tambien se pueden hacer funciones que junten los array en uno solo ya que al descomponer los valores
//de los array se puede trabajar agregando cada uno de manera individual