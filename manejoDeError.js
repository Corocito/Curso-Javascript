/*LAS SENTENCIAS DE CONTROL DE FLUJO SON COMO EL IF, ELSE ENTRE OTROS (LOS CONDICIONALES) YA QUE
A MENOS DE QUE SE CUMPLA LA CONDICIÓN, EL CODIGO SE VA A EJECUTAR O NO */

//EN CASO DE QUE OCURRA UN ERROR, SE USAN LAS SENTENCIAS DE MANEJO DE EXCEPCIONES

//--------------SENTENCIA SWITCH--------------------


//Esta es la estructura para la sentencia switch
//Dentro del switch se debe de poner una expresion para cumplir alguno de los casos y que se ejecute

let caso= 1; //En este caso se ejecutaria el primer caso

switch(caso){
    case 1: 
        console.log("Este es el caso 1");
        break; //Despues de cada expresion se debe de poner un break para que deje de ejecutar los demas casos
    case 2: 
        console.log("Este es el caso 2");
        break;
    case 3: 
        console.log("Este es el caso 3");
        break;
    default: //El default se usa en caso de que no se cumpla ninguna de las condiciones
        console.log("No es ninguna")
        break;
}

//A pesar de todo, es mas eficiente usar el if y else if, pero el switch se usa en casos especificos


//---------------------SE EMPIEZA CON LAS SENTENCIAS PARA EL MANEJO DE ERRORES

/*Existen 3 tipos de excepsiones, las ECMAScript que son excepsiones basadsas en la especificacion del
lenguaje de JavaScript, mientras que el DOMException y DOMError son excepsiones que se basan en el DOM */


//Para poder controlar las sentencias de codigo se usa el try y catch

try{
    throw{ //El throw funciona para lanzar errores
        //El throw puede lanzar cualquier dato, incluso listas
        error:"Nombre del Error",
        info:"Información del Error"
    } 
}
catch(error){ //EXISTEN DOS TIPOS DE CATCH, CONDICIONAL E INCONDICIONAL, EL CONDICIONAL ES EL CATCH QUE CONTIENE DENTRO DE SU BLOQUE UN CODIGO CON UNA CONDICION PARA CUMPLIR
    
    //En este caso el catch es incondicional
    console.log(error) //Error es un objeto 
}
//Usando el try y el catch nos permite manejar los errores
finally{//El finally siempre se retorna, sin importar la condicion
    console.log("Este es el finally")
}

