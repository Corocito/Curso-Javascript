//----------SE INICIA CON LA EXPLICACION DE FETCH

//El fecth hoy en dia reemplazó al XMLHTTPRequest

//Fecth trabaja con promesas, por lo que siempre devuelve una promesa encapsulada, por lo que no podemos acceder a los datos

//De esta manera se definen los fetch, dandole como parametro la direccion de la pagina que se va a usar
//Es la estructura con la cual se manejan los fetch, se ahorran varias lineas de codigo 
let peticion = fetch("https://regres.in/api/unknown/2");

//Para poder devolver los datos del fetch, se debe de usar el then ya que se esta trabajando con promesass
peticion.then(res=>res.text())
peticion.then(res=>console.log(res))


//--------------------------------LIBRERÍA AXIOS



//------------------------------------------------------------------
//ESTE ES EL SCRIPT NECESARIO PARA PODER TRABAJAR CON EL AXIOS YA QUE ES LA RUTA DE LA LIBRERIA

//<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

//De esta manera se estaria trabajando con el AXIOS
//El script de la libreria AXIOS se debe de poner primero en el codigo HTML de lo contrario no funcionaria
//Sigue trabajando con las promesas por lo que se deben de usar sus metodos para acceder a la informacion
//Se nombra la variable de la informacion que se va a usar
axios("Empleados.json").then(res=>console.log(res))


//Para trabajar con el metodo post se debe de especificar el metodo despues del axios
//Toda la informacion que se desee enviar se debe de ubicar como segundo parametro despues de la direccion http
//En este caso la informacion que se envió es el nombre de una gallina y su raza
axios.post("https://reqres.in/api/users",{
    "nombre":"Blanca",
    "raza":"Criolla"
}).then(res=>console.log(res))



//Se crea una funcion para obtener el nombre de los empleados
const getName = async ()=>{
    //El await no permite ejecutar el codigo hasta que toda la informacion este lista
    let peticionN = await fetch("Empleados.json");
    let resultado = await peticionN.json();
    let div = document.createElement("DIV");
    div.classList.add("nombre");
    div.innerHTML= resultado.nombreEmpleado;
    document.body.appendChild(div);

}


//Se crea la funcion para obtener la id del Empleado
const getID = async ()=>{
    //El await no permite ejecutar el codigo hasta que toda la informacion este lista
    let peticionN = await fetch("Empleados.json");
    let resultado = await peticionN.json();
    let div = document.createElement("DIV");
    div.classList.add("id");
    div.innerHTML= resultado.idEmpleado;
    document.body.appendChild(div);

}
