//--------SE INICIA CON LA SECCIÓN DE LOS EVENTOS DE JAVASCRIPT


const button = document.querySelector(".button");

//El addEventListener funciona para poder darle la funcionalidad a los eventos
button.addEventListener("click",(e)=>{
    alert("Se presiona el botón");
    e.stopPropagation() //El stopPropagation funciona para que en caso
    //de tener eventos asociados, se detenga en este
},true); //El true funciona para que se ejecute primero en caso de haber varios div


const button2 = document.querySelector(".button2");
//los nombres de los eventos se deben de nombrar dentro del parentesis
button2.addEventListener("dbclick",(e)=>{
    alert("Se presiona el botón");
    e.stopPropagation() 
})


/*Eventos del Mouse
--click: Ocurre con un click

--dbclick: Ocurre con un doble click

--mouseover: Ocurre cuando el puntero se mueve sobre un elemento
 o sobre uno de sus hijos

 --mouseout: Ocurre cuando el puntero se mueve fuera de un elemento o sus
 elementos secundarios



 --------OTROS EVENTOS

 --contextmenu: Ocurre con un click sobre el boton derecho en un elemento
 para abrir un menu contextual

 --mouseenter: Ocurre cuando el puntero se mueve sobre un elemento

 --mouseleave: Ocurre cuando el puntero se mueve fuera de un elemento

 --mouseup: Ocurre cuando un usuario suelta un boton del mouse sobre un elemento

 --mousemove: Ocurre cuando el puntero se mueve mientras está sobre un elemento



 ---------EVENTOS DEL TECLADO

 --keypress: Ocurre cuando una tecla se presiona y se suelta

 --keydown: Ocurre cuando una tecla se presiona

 --keyup: Ocurre cuando se suelta una tecla

-----------EVENTOS DE LA INTERFAZ

--error: Ocurre cuando sucede un error durante la carga de un archivo multimedia

--load: Ocurre cuando un objeto se ha cargado

--beforeunload: Ocurre antes de que el documento este a punto de descargarse

--unload: Ocurre una vez se ha descargado la pagina

--resize: Ocurre cuando se cambia el tamaño de la vista del documento

--scroll: Ocurre cuando se deplaza la barra de desplazamiento de un elemento

--select: Ocurre despues de que el usuario selecciona algún texto
*/



//---------------------EXPLICACIÓN DE EVENTOS DE LA INTERFAZ---------------------------//

//En caso de que ocurra un error, se entrará al codigo y mostrará el error en el codigo
const imgPrueba= document.querySelector(".imgPrueba");
imgPrueba.addEventListener("error", ()=>{
    console.log("ha sucedido un error")
})

//Con este metodo se manda un mensaje a la consola cuando se termina de cargar la pagina
window.addEventListener("load",()=>{
    console.log("Ha cargado la ventana")
})


//Con este metodo se manda un mensaje a la consola antes de que se deje la pagina
//Este evento es bastante rapido al ejecutarse
//El evento unload funciona parecido solo que manda el mensaje cuando te sales
//del sitio Web
addEventListener("beforeunload",()=>{
    console.log("Vas a salir del sitio Web")
    alert("Te vas a ir del sitio")
})


//Con este metodo se manda un mensaje a la consola cada vez que se ajuste
//la resolucion del sitio Web
addEventListener("resize",()=>{
    console.log("Se ha cambiado la resolución del sitio Web")
})


//Scroll es mover la pagina hacia arriba o abajo
addEventListener("scroll", ()=>{
    console.log("Se ha scrolleado")
})

//Select es para cuando se selecciona una parte del texto
addEventListener("select",(e)=>{
    console.log("Se ha seleccionado una parte del texto");
    console.log(e);
})

//El keyup funciona para poder saber cual fue la ultima tecla presionada
addEventListener("keyup", (e)=>{
    let tecla= e.key;
    nuevoContenido=`La ultima tecla presionada fué: ${tecla}`;
    console.log(nuevoContenido);
})


//-------------------------EXPLICACIÓN DE LOS TIMERS--------------//

//ES UN TEMPORIZADOR, RECIBE COMO PRIMER PARAMETRO UNA FUNCION, Y DESPUES EL
//TIEMPO DONDE SE VA A EJECUTAR, SIEMPRE EN MILISEGUNDOS
const temporizador= setTimeout(()=>{
    document.write("hola")
},
2000);

//para hacer que el temporizador no se ejecute se usa el
clearTimeout(temporizador);


//LOS INTERVALOS FUNCIONAN COMO FUNCIONES QUE SE REPITEN PASADA UNA CANTIDAD DE TIEMPO DETERMINADA
//NUNCA VAN A TERMINAR A MENOS QUE SE LE PIDA AL PROGRAMA
const intervalo= setInterval(()=>{
    document.write("hola")
},
2000);

//de esta manera se eliminan los intervalos
clearInterval(intervalo);



//DE ESTA MANERA SE CREA UNA FUNCION QUE ESCRIBIRÁ EL TEXTP CADA 0.2 SEGUNDOS
const intervalo2= setInterval(() => {
    document.write("Vivan las gallinas");
}, 200);

//Y LA FUNCION PARA PODER FINALIZAR EL INTERVALO AL LLEGAR A LOS 10 SEGUNDOS
setTimeout(() => {
    clearInterval(intervalo2)
}, 10000);