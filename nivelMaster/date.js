"use strict";

//SE EMPIEZA CON LA EXPLICACIÓN DE LOS API'S Y COMO SE USAN

//Una API es una interfaz de programación de aplicaciones, cualquier funcionalidad de los
//lenguajes es una API, es el procesamiento de los resultados, cada lenguaje de programación
//Es una API ya que desconocemos el proceso interno para poder llegar al resultado esperado



//-------EXPLICACIÓN DEL OBJETO DATE

//Date es un constructor o una función por lo que se debe de poner entre parentesis para poder llamar a la funcion correctamente

//Se debe de crear como new para poder trabajar con sus metodos
//La funcion date se puede trabajar con un valor que se desee, solo se debe de agregar al parametro Date
//Siendo primero el año despues el mes y el dia al final, tambien se pueden agregar mas haciendo referencia a las horas, minutos y segundos
const fechaEjemplo = new Date(2020,4,12);

console.log(fechaEjemplo);

//El objeto Date al ser una funcion tambien cuenta con sus propios metodos

//--getDate(): Devuelve la fecha exacta

console.log(fechaEjemplo.getDate());

//--getDay(): Devuelve el Dia en el que estamos
/*Los dias los devuelve como un arreglo con numeros para cada uno de los dias
Domingo -> 0
Lunes -> 1
Martes -> 2
Miercoles -> 3
Jueves -> 4
Viernes -> 5
Sabado -> 6
*/
console.log(fechaEjemplo.getDay());

//--getYear(): Devuelve el año en el que estamos
//En vz ez de devolver la fecha exacta del año, devuelve un numero basado en una resta entre el año actual y menos 1900
//Esto se puede solucionar parcialmente sumandole a la variable el 1900
console.log(fechaEjemplo.getFullYear()+1900);

//--getMonth(): Devuelve el mes en el qu
/*Pasa lo mismo con el Month, devuelve un numero correspondiente al mes */
console.log(fechaEjemplo.getMonth());

//--getHours(): Devuelve la hora exacta

console.log(fechaEjemplo.getHours());

//--getMinutes(): Devuelve los minutos exactos

console.log(fechaEjemplo.getMinutes());

//--getSeconds(): Devuelve los segundos exactos

console.log(fechaEjemplo.getSeconds());

//Tambien se puede trabajar con el date.now, esto va a devolver una cantidad de numeros que representan la fecha actual

console.log(Date.now())



 