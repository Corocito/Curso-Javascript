const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const materia = document.getElementById("materia");
const boton = document.getElementById("btnEnviar");
const resultado = document.querySelector(".resuldato");

boton.addEventListener("click",(e)=>{
    //Con el preventDefault previene el comportamiento por defecto de
    //actualizar la pagina
    e.preventDefault()
    let error = validarCampos()

    if(error[0]){
        resultado.innerHTML=error(1);
        resultado.classList.add("red");
    }
    else{
        resultado.innerHTML="Solicitud enviada correctamente";
        resultado.classList.add("green");
    }
})

const validarCampos = ()=>{
    let error=[];
    if(nombre.value.length < 5){
        error[0]=true;
        error[1]= "El nombre no puede contener menos de 5 caracteres";
        return error;
    }
    else if(nombre.value.length > 40){
        error[0]= true;
        error[1]="El nombre no puede contener mas de 40 caracteres";
        return error;
    }
    error[0]=false;
    return error;
}