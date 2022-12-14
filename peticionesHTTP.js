//Se inicia con la explicacion de las peticiones HTTP

/*
Las peticiones HTTP son peticiones que se le hacen a los servidores y estos
devuelven la información que se haya solicitado, todo es información

Las peticiones HTTP no guardan información, solo mandan y reciben la información
*/



//---------------SE EMPIEZA CON LA DEFINICIÓN DE LOS DATOS JSON

/*
JSON significa (JavaScript Object Notation)

La estructura de los archivos JSON es bastante parecida a los  array asociativos
solo que las variables se definen distinto

Los objetos de JSON pueden ser de dos tipos, SERIALIZADOS y DESERIALIZADOS

Cuando un JSON está serializado todas sus variables se encuentran entre comillas, lo cual afecta la manera en 
la que se lee la información

Es mejor enviar la información serializada por posibles problemas de compatibilidad
*/

//LA ESTRUCTURA DE UN ARCHIVO JSON ES ASÍ:
const json={"variable1" : "Grande",
            "variable2" : "Alas"};

//EN ESTE CASO EL ARCHIVO JSON ESTA SERIALIZADO YA QUE LA INFORMACIÓN SE ENCUENTRA ENTRE LAS COMILLAS
//PARA PODER SERIALIZAR LA INFORMACIÓN SE REALIZA EL SIGUIENTE PROCEDIMIENTO

//SE DEBE DE USAR EL JSON.STRINGIFY Y PASAR COMO ARGUMENTO EL ARCHIVO JSON PARA PODER SERIALIZARLO
const serializadoJSON = JSON.stringify(json);
console.log(typeof json); //CON EL TYPEOF SE AVERIGUA POR EL TIPO DE VARIABLE DE LOS OBJETOS


//EN CASO DE QUE SE QUIERA DESERIALIZAR LA INFORMACIÓN SE DEBE DE HACER EL SIGUENTE PROCEDIMIENTO
const json2=`{"variable1" : "Grande",
             "variable2" : "Alas"}`;

//CON LA VARIABLE JSON.PARSE SE
const deserializandoJSON = JSON.parse(json2);
console.log(typeof json2);


//-----------SE INICIA CON LA EXPLICACIÓN DE AJAX

//AJAX significa en resumido JavaScript Asincrono



//-------------XMLHTTPRequest
//La manera correcta para poder definir este concepto en programacios es de la sigueinte manera

//De esta manera se crea la peticion, se debe de crear como un objeto
const peticion = new XMLHttpRequest();
//Se crea un metodo para poder abrir la información de un archivo json
//Usando el metodo GET y dandole como segundo parametro la ubicacion del archivo de la informacion se puede tener una variable para
//la ruta de la información
peticion.open("GET","Empleados.json");

//-----------------------------------------------------------------------------------------------------------------------
//De esta manera usando el readystatechange se puede mostrar la información del 
//archivo que se pida, en este caso el archivo Json
peticion.addEventListener("readystatechange",()=>{
    console.log(peticion.readyState);
    console.log(peticion.response);
    //Se crea una condicion para que al momento de llegar al momento 4 se muestre la informacion en pantalla
    //El 200 representa la carga correcta de los recursos, si no está en 200, hay un error  
    if(peticion.readyState==4 && peticion.status == 200){
        console.log(JSON.parse(peticion.response));
    }
})
//-------------ESTA ES LA MANERA ANTIGUA DE MOSTRAR LA INFORMACIÓN, AHORA SE HACE DE UNA MANERA DISTINTA

//----------------------------------------------------------------------------------------------------------------------------
//---------------LA MANERA MAS CORRECTA DE CARGARLOS AHORA ES CON LOAD
//---------------SIN EMBARGO NO ES LA MANERA MAS EFICIENTE

peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status == 200) respuesta = peticion.response
    else respuesta = "No se ha encontrado el recurso"
    //De esta manera se va a poder convertir el archivo de estar serializado como string
    //a JSON para poder trabajarlo
    console.log(JSON.parse(respuesta));
})

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//EL AJAX NO ES SOPORTADO EN TODOS LOS NAVEGADORES POR LO QUE SE DEBE DE TRABAJAR CON UN OBJETO DISTINTO 
//EN CASO DE QUE SEA PARA OTROS NAVEGADORES
//Se debe de crear un if para verificar el navegador que se esté usando
if(window.XMLHttpRequest){
    peticion = new XMLHttpRequest();
} else{ //En caso de que el navegador no soporte el AJAX se pasa a el otro protocolo
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

//Con el SEND se llama la informacion y se envia a la pagina para que la pueda cargar con sus recursoss
peticion.send();


//---------------------COMIENZA EXPLICACIÓN DE LAS DIFERENCIAS ENTRE GET Y POST

/*--Con el metodo GET los datos de las URL son visibles pero no con el metodo POST
--Con el metodo GET los datos pueden permanecer en el historial del navegador
--Para enviar datos sensibles como contraseñas es preferible utilizar el POST, ya que este no guarda la informacion de ninguna manera, solo la envia
--El metodo POST no tiene ninguna restriccion con los tipos de datos que maneja
--Ambos metodos son suceptibles a intentos de hackeos pero es mas dificil con el metodo POST
*/

//PARA PODER ENVIAR UNA PETICION CON POST SE DEBE DE HACER LO SIGUENTE


//Se crea la peticion XML para trabajarla
let peticion2 = new XMLHttpRequest();

//Se le agrega el eventlistener para manejar los cambios que le ocurran a la peticion
peticion2.addEventListener("load",()=>{
    let respuesta;
    if(peticion2.status==200 || peticion2.status==201) respuesta= peticion2.response
    else respuesta = "No se ha encontrado el archivo";
    console.log(JSON.parse(respuesta))
})

//Se agrega el metodo post con la dirección html que estemos trabajando
//regres.in es una oagina educativa que muestra los distintos tipos de envio de datos que existen
//se usa su direccion html para que maneje todas las peticiones POST
peticion2.open("POST","https://reqres.in/api/users");

//Se debe de agregar esta linea de codigo para que se pueda manejar la informacion de una manera correcta
peticion2.setRequestHeader("Content-type","application/json;charset=UTF8")

//Se devuelven los datos que se envian
//Estos datos son los que se van a mostrar en pantalla
peticion2.send(JSON.stringify({
    "nombre": "Blanca",
    "raza": "Criolla"
}));


