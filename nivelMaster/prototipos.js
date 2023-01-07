//SE INICIA CON LA EXPLIACIÓN DE LOS PROTOTIPOS EN JAVASCRIPT

/* 
Los prototipos son caracteristicas unicas de los objetos.
En JavaScript todas las variables son objetos, por lo tanto todas tienen prototipos
Para poder acceder al prototipo de cualquier variable se debe de acceder con .__proto__
*/


//Esta variable es un string, incluso siendo un string tambien tiene prototipo debido a que en javascript todas las variables son objetos
let variable1 = "Gallina";
console.log(variable1.__proto__);
console.log(variable1)


//Esta variable se un número pero tambien tiene prototipo
let variable2 = 4;
console.log(variable2.__proto__);

//Al ser un array tambien cuenta con prototipo
let variable3 = [];
console.log(variable3.__proto__);


//Al ser una array relacional o un Json, tambien cuenta con prototipo
let variable4 = {
    "nombre":"Blanca",
    "raza": "Ponedora"
}
console.log(variable4.__proto__)
console.log(variable4)


//Al ser una función un objeto, tambien cuenta con prototipo
let variable5 = function(){}
//Si se quiere acceder a un prototipo heredado se debe de hacer con .__proto__
//Para acceder a un 
console.log(variable5.__proto__);
//el metodo prototype funciona para acceder a los prototipos que nosotros creamos
console.log(variable5.prototype);



/*---------------------------CARACTERISTICAS DE LOS PROTOTIPOS
--Un prototipo en su codigo fuente es mutable

--Es en sí mismo un objeto, así como los otros

--Tiene una existencia física en la memoria

--Un prototipo puede ser llamado y modificado

--Puede ser visto como un modelo ejemplar de una familia objeto

--Un objeto hereda propiedades (valores y metodos) de su prototipo
*/

//Para poder modificar los prototipos de los objetos se muestra un ejemplo

//Se crea una clase de ejemplo y se le da la funcion de hablar
class gallina {
    constructor(nombre, raza){
        this.nombre=nombre;
        this.raza=raza;
    }

    hablar(){
        console.log("Hola buenas tardes");
    }
}

const gallina1 = new gallina();

//De esta manera se estaria modificando el prototipo de la funcion de habalr por fuera de la clase
gallina1.__proto__.hablar =()=>{
    console.log("*cacaraqueo*");
}


//Se crea un array de ejemplo
let array =[];

//De esta manera se le estaria asignando al array creado el prototipo hablar de la clase gallina
//Por lo tanto ahora tendrá esa funcion dentro de su prototipo
array.__proto__ = gallina1;


//-----------------EXPLICACIÓN MODO ESTRICTO-------------------------

//El modo estricto convierte todos los errores de JavaScript en excepciones

//Mejora la optimización de los errores y consigue mejores tiempos de ejecución

//Evita sintaxis usadas en posteriores a ES6 (EmaScript6)

//No permite que el programador realice una "mala sintaxis"

//Para poder acceder al metodo estricto de manera global se debe de usar la variable "use strict";

//Con el uso de esta variable accedemos al metodo estricto
//"use strict";

//TODOS LOS POSIBLES ERRORES LOS CONVIERTE EN EXCEPCIONES QUE PARAN LA EJECUCIÓN DEL PROGRAMA

//Se define un objeto 
const objt = {};

//Esta es otra manera de definir las propiedades de un objeto
Object.defineProperty(objt, 'nombre', {value: "Alas", writable: false});

//Se intentaria cambiar el valor de la propiedad nombre del objeto
objt.nombre="Blanca";

/*En caso de que se esté usando el modo estricto saltaría un a excepción que detendria la ejecución
del programa debido que se en la propiedad del objeto se definió que no se puede cambiar
, sin usar el modo estricto solamente se mostraría la variable sin ningun cambio  */
console.log(obj.nombre);

//Esta linea evita que se agreguen mas propiedades a un objeto creado
Object.preventExtensions(objt);

//SEGÚN EL METODO STRICT NO SE PUEDEN DEFINIR DOS VARIABLES CON EL MISMO NOMBRE A UNA FUNCIÓN

//EL DELETE EN OBJETOS O VARIABLES NO ES POSIBLE EN EL MODO STRICT
//El delete se usa para borrar propiedades de los objetos

//LAS PALABRAS RESERVADAS NO PUEDEN SER USADAS COMO VARIABLES

//PARA PODER TRABAJAR CON LOS NUMEROS OCTALES SE DEBE DE PONER UNA O AL INICIO DEL NUMERO

//PARA QUE EL MODO STRICT FUNCIONE SE DEBE DE PONER LA LINEA DE CODIGO AL INICIO DEL PROGRAMA O AL INICO DE UNA FUNCION
//DE LO CONTRARIO NO VA A FUNCIONAR

