"use strict";

//-------SE EMPIEZA CON LA EXPLICACIÓN DEL INDEXEDDB

//Significa Indexed Data Base, por lo que es una base de datos no SQL
//o no es una base de datos relacional

/*
-------------CARACTERÍSTICAS DEL INDEXEDDB

--Almacena la información en el navegador de forma similar al localStorage

--Es orientada a objetos

--Es Asincrona

--Trabaja con eventos del DOM

*/

//El CRUD significa Create Read Update Eliminate
//Es una interfaz donde se manejan los datos

//Para poder crear esta base de datos se debe de hacer de la siguiente manera

//Con este metodo se abre una base de datos o si no existe la crea
//Dentro de las comillas del open se debe de poner el nombre de la base de datos
//que se desea abrir o crear
//En este caso se va a crear una base de datos con nombre "database"

//Como segundo parametro se debe de ubicar la versión de la base de datos
//En este caso será la versión 1
const IDBRequest = indexedDB.open("database",1);

console.log(IDBRequest);

//4:19:01