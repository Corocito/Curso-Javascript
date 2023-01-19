//--------SE INICIA CON LA EXPLICACIÓN DEL LOCAL STORAGE Y EL SESSION STORAGE


//El session storage es el almacenamiento que se guarda mientras la pagina este abierta, si se
//cierra la pestaña la información se va a perder-

//El local storage almacena la información de manera local, por lo que incluso cerrando la pagina
//la informacion seguiria ahi guardada


//De esta manera se estaria creando un valor en el local storage
localStorage.setItem("nombre", "Blanca");
//Asi se mostraria el local storage en la consola, pudiendo ver todos los valores almacenados
console.log(localStorage);
//Tambien se puede acceder al local storage desde la consola entrando a la ventana de aplicación

//Para poder acceder a un valor del local storage se debe de usar el metodo getItem
console.log(localStorage.getItem("nombre"));

//Los datos creados se almacenan no importa si se cierra la ventana


//Para poder agregar un valor al session storage se debe de hacer asi
sessionStorage.setItem("nombre2","Alas");

//Los datos creados para el session storage se borran si se cierra la ventana 


//PARA PODER BORRAR UN ITEM SE DEBE DE USAR EL METODO removeItem especificando el valor que se desea eliminar

//Con este codigo se diria al programa que borre el dato nombre2 almacenado despues de 2 segundos
setTimeout(() => {
    let nombre = sessionStorage.removeItem("nombre2");
}, 2000);


//CON EL METODO clear SE BORRAN TODOS LOS ELEMENTOS DE LOS STORAGE
setTimeout(() => {
    let nombre = localStorage.clear();
}, 5000);


