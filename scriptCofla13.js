//Se trabaja sin la oagina inicial debido a que se necesita un servidor para poder manejar las solicitudes
//pero se deja el codigo como ejemplo de como se solucionaria el problema

const getInfo = async()=>{
    //Se define dentro de la funcion los querySelector para poder manejar los label donde se muestra la definicion
    let aprobados = document.querySelector(".numAprobados");
    let reprobados = document.querySelector(".numReprobados");
    try{
        //Se define el archivo de donde se va a sacar la información
        resultado = await axios ("Empleados.json");
        aprobados.innerHTML = resultado.data.aprobados;
        reprobados.innerHTML = resultado.data.reprobados;
    }
    catch(e){ //Se define el catch para manejar un error en caso de que suceda
        aprobados.innerHTML = "La API falló";
        reprobados.innerHTML = "La API falló";
    }
}

//Se vincula la funcion creada con el boton de la pagina para darle funcionalidad
document.getElementById("getInfo").addEventListener("click",getInfo);
