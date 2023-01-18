"use strict";

//Se crea una función para poder trabajar agregando los ceros en caso de que la hora no sea
//de dos cifras y no se cambie el diseño del reloj
const addZeros = n =>{
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}


//Se crea la función encargada de manejar los metodos para el tiempo del reloj
//Los metodos de las horas se deben de agregar como parametro para la funcion de addZeros creada anteriormente
//para que se concatene el cero en caso de que se cumpla la condición
const actualizarHora = () =>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}

//Se llama la función para que la hora se vea desde que se carga la pagina
actualizarHora()

//Se crea un intervalo de tiempo en el que la funcion se va a ejecutar siendo cada segundo
setInterval(actualizarHora, 1000);