//Se define el boton para poder trabajar con él y darle funcion
const botonEnviar = document.getElementById(`enviarNota`);

//Se crea el evento para el boton
botonEnviar.addEventListener("click",()=>{
    let resultado,mensaje;
    try{
        //prevRes: Resultado Previo
        prevRes = parseInt(document.getElementById(`notaAlumno`).value);
        if(isNaN(prevRes)){
            throw "Chistoso";
        }
        resultado = verificarAprobacion(8,4,mensaje);
        mensaje=definirMensaje(resultado[1]);
    }
    catch(e){
        resultado="Gracioso";
        mensaje="No";
    }
    abrirModal(resultado[0], mensaje);
})

//Se define el switch con el que se manejarán los mensajes que manda la pagina
const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado ="Malisimo";  
            break;
        case 2: resultado="Mal";
            break;
        case 4: resultado="Regular";
            break;
        case 5: resultado="Mas o menos";
            break;
        case 6: resultado="Nah";
            break;
        case 7: resultado="Bien";
            break;
        case 8: resultado="Muy bien";
            break;
        case 9: resultado="Excelente";
            break;
        case 10: resultado="Exquisito";
            break;
        default: resultado= null;
    }
    return resultado;
}

//Se crea para poder verificar que el promedio sea suficiente para poder aprobar
const verificarAprobacion=(n1,n2,prevRes)=>{
    let promedio = (n1+n2+prevRes)/3;
    if(promedio>=7){
        return["<span class= 'green'> APROBADO </span>"]
    }
    return["<span class= 'red'> DESAPROBADO </span>"]
}

//Se crea la funcion para poder mostrar el modal
const abrirModal=(res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modalBack");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}