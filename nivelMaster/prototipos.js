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


