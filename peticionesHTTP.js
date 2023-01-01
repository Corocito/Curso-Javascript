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

