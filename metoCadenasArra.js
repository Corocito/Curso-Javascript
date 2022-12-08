//SE INICIA CON LA EXPLICACIÓN DE LOS METODOS DE CADENAS   
//-------------------------------------------------------------------------------------------------
let cadena = "Gallinotas";
let cadena2= "cadena";


//CONCAT SE ENCARGA DE JUNTAR DOS CADENAS DE TEXTO Y RETORNAR UNA NUEVA
let resultado=cadena.concat(" Hermosas");
document.write(resultado);

//STARSWITH: SI UNA CADENA COMIENZA CON LOS CARACTERES DE OTRA CADENA
//DEVUELVE TRUE, SINO DEVUELVE FALSE

let resultadoStar= cadena.startsWith(cadena2);
document.write(resultadoStar);

//ENDSWITH: SI LA CADENA TERMINA CON LOS CARACTERES DE OTRA CADEA
//DEVUELVE TRUE, SINO DEVUELVE FALSE

//INCLUDE: SI UNA CADENA SE ENCUENTRA DENTRO DE OTRA CADENA
//DEVUELVE TRUE, SINO DEVUELVE FALSE

let resultadoInclude= cadena.includes(cadena2);
document.write(resultadoInclude);
//-------------------------------------------------------------------------------------------------
//INDEXOF: FUNCIONA IGUAL QUE EL INCLUDE SOLO QUE DEVUELVE EL INDICE DONDE SE
//ENCUENTRA LA PALABRA REPETIDA

//-------------------------------------------------------------------------------------------------
//LASTINDEXOF: FUNCIONA PARECIDO AL INDEXOF SOLO QUE DEVUELVE LA ULTIMA PALABRA
//QUE SE REPITE EN CASO DE QUE HAYA VARIAS PALABRAS REPETIDAS

//-------------------------------------------------------------------------------------------------

/*PADSTART: RELLENA LA CADENA SELECCIONADA CON LOS CARACTERES DESEADOS */
//SE ENCARGA DE LLENAR DE ESE CARACTER HASTA QUE CUMPLA CON LA CANTIDAD DE
//ESPACIOS QUE SE ESPECIFIQUE
let resultadoPad= cadena.padStart(20,"a");
document.write(resultadoPad);

//PADEND: RELLENA LA CADENA SELECCIONADA CON LOS CARACTERES DESEADOS


//REPEAT: DEVUELVE LA MISMA CADENA PERO REPETIDA LA CANTIDAD DE VECES QUE
//SE ESPECIFIQUE

let resultadoRep= cadena.repeat(3)
//-------------------------------------------------------------------------------------------------

//SPLIT: DIVIDE LA CADENA COMO SE LO PIDAMOS
let cadena3 = "Hola, buenas , tardes";
let resuSplit= cadena3.split(",");
//LA CADENA SE COMVIERTE EN UN ARRAY SEPARANDO LOS VALORES EN LAS ,


//SUBSTRING: DEVUELVE UNA PARTE DE LA CADENA SELECCIONADA
let resulsubString= cadena3.substring(0,2);
//DEVOLVERÁ LOS VALORES QUE SE ENCUENTREN ENTRE EL PRIMER NUMERO Y EL SEGUNDO
//EN ESTE CASO DEVOLVERIA EL ho, YA QUE SE ENCUENTRA ENTRE EL 0 Y EL 2


//TOLOWERCASE: CONVIERTE LA CADENA EN MINUSCULA
//LOUPPERCASE: CONVIERTE LA CADENA EN MAYUSCULA

//TOSTRING: METODO QUE DEVUELVE UNA CADENA QUE REPRESENTA EL OBJETO
//EN CASO DE QUE LA CADENA SEAN NUMEROS, LOS CONVIERTE DE INT A STRING

//TRIM: ELIMINA LOS ESPACIOS EN BLANCO AL PRINCIPIO Y AL FINAL DE LA CADENA
//TRIMEND: ELIMINA LOS ESPACIOS EN BLANCO AL FINAL DE LA CADENA
//TRIMSTART: ELIMINA LOS ESPACIOS EN BLANCO AL INICIO DE LA CADENA
//VALUE: RETORNA EL VALOR PRIMITIVO DE UN OBJETO STRING





//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//SE INICIA CON LA EXPLICACIÓN DE LOS METODOS DE LOS ARRAY

let gallinas=["Grande", "Alas", "Cafesota", "Pardo"];

//------METODOS TRANSFORMADORES
//------------


//POP(): SE ENCARGA DE ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY Y LO MUESTRA
let resultadoPop = gallinas.pop();
document.write(resultadoPop + "<br>");
//en este caso se borraria el elemento pardo y se mostraria en el documen.write
//SHIFT(): ELIMINA EL PRIMER ELEMENTO DEL ARRAY Y LO MUESTRA


//PUSH(): AGREGA UN ELEMENTO AL ARRAY AL FINAL DE LA LISTA
//Y MUESTRA EL LA CANTIDAD DE ELEMENTOS QUE HAY EN EL ARRAY
let resultadoPush= gallinas.push("Blanca");


//REVERSE(): INVIERTE EL ORDEN DE LOS ELEMENTOS DEL ARRAY

let resultadorReverse = gallinas.reverse();


//UNSHIFT(): AGREGA UNO O MAS ELEMENTOS AL INICIO DEL ARRAY Y DEVUELVE LA NUEVA 
//LONGITUD DEL ARRAY

gallinas.unshift("Sarca");


//SORT(): ORDENA LOS ELEMENTOS DEL ARRAY LOCALMENTE Y DEVUELVE EL ARRAY ORDENADO
//ORGANIZARIA LOS NUMEROS DE MENOR A MAYOR
let numeros=[2,5,1,8,9,23,1];
numeros.sort();


//SPLICE(): CAMBIA EL CONTENIDO DE UN ARRAY ELIMINANDO ELEMENTOS EXISTENTES Y/O
//AGREGANDO NUEVOS ELEMENTOS

//EN ESTE CASO BORRARIA LOS ELEMENTOS ENTRE EL INDICE 1 AL 2 (SE BORRARIAN LOS ELEMENTOS 5 Y 1 DEL ARRAY)
//Y AGREGARIA EL VALOR 9999
numeros.splice(1,2,9999);

//SI SOLO SE DESEA AGREGAR VALORES, EN EL PRIMER NUMERO SE INDICA DONDE SE DESEA AGREGAR Y DESPUES SE PONE UN 0
//Y SE DICEN CUALES ELEMENTOS AGREGAR

numeros.splice(-1,0,8981923898) //EL -1 ES PARA AGREGARLOS AL FINAL DEL ARRAY

//-----METODOS ACCESORES


//JOIN(): UNE TODOS LOS ELEMENTOS DE UNA MATRIZ Y LOS CONVIERTE EN UN STRING

let resultadoJoin = numeros.join(" --- "); //ENTRE CADA VALOR MOSTRARIA EL ---


// SLICE(): DEVUELVE UNA PARTE DEL ARRAY DESDE EL INICIO HASTA EL FIN

//funciona para mostrar secciones de array basandose en los indices del array

//usando el -1 se mostrarian todos los elementos del array
let resultadoSlice = numeros.slice(0,-1);


//-------METODOS DE REPETICIÓN

//FILTER(): CREA UN NUEVO ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLAN UNA CONDICION

//se pueden crear arrays nuevos con los elementos que cumplan con la condicion
//del filter
let resultadoFilter= numeros.filter(n =>document.write(numeros+ "<br>"));



//FOREACH(): EJECUTA UNA FUNCION UNA VEZ POR CADA ELEMENTO

//funciona parecido al filter solo que no es tan completo
let resultadoForEach= gallinas.forEach(n=>gallinas.length >2);

document.write(resultadoForEach);

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

//SE INICIA CON LA EXPLICACIÓN DEL OBJETO MATH


 //----------METODOS-------------//
 
 //SQRT(): DEVUELVE LA RAIZ CUADRADA POSITIVA DE UN NUMERO

 let n=Math.sqrt(25); //devuelve la raiz cuadrada de 25

 //CBRT(): DEVUELVE LA RAIZ CÚBICA DE UN NUMERO

 let n2=Math.cbrt(27); //devuelve la raiz cubica de 27

 //MAX(): DEVUELVE EL MAYOR DE CERO O MAS NUMEROS

 let n3= Math.max(1,2,3,4,1,2,5,6,4,5,7,4,2333,23,999999999999);

 //MIN(): DEVUELVE EL MENOR DE CERO O MAS NUMEROS

 let n4=Math.min(92931,9,9318,0.1,1);

 //RANDOM(): DEVUELVE UN NUMERO PSEUDO-ALEATORIO ENTRE 0 Y 1

 let nRandom= Math.random();

 //ROUND(): DEVUELVE EL VALOR DE UN NUMERO REDONDEADO AL NUMERO ENTERO MAS CERCANO

 let nRandom2= Math.random()*100; // de esta manera se devuelve un numero aleatorio entre 0 y 100
 let nRound = Math.round(nRandom2);

 //FROUND(): DEVUELVE LA REPRESENTACION FLOTANTE DE PRECISION SIMPLE MAS CERCANO
let nfround= Math.fround(99.99999999999999999999999999);
//en este caso mostraria un 100
 
//FLOOR(): DEVUELVE EL MAYOR ENTERO MENOR O IGUAL A UN NÚMERO
//siempre redondea para el numero menor

let nFloor= Math.floor(nRandom2)

//TRUNC(): DEVUELVE LA PARTE ENTERA DEL NUMERO X, LA ELIMINACION DE LOS DIGITOS FRACCIONARIOS
//funciona parecido al round solo que no redondea, solo elimina las fracciones


//-------------------PROPIEDADES-----------------------//

//PI - RADIO DE LA CIRCUNFERENCIA
// SQRT1_2: RAIZ CUADRADA DE 1/2
//SQRT2: RAIZ CUADRADA DE 2
//E: CONSTANTE DE EULER
//LN2: LOGARITMO NATURAL DE 2
//LN10: LOGARITMO NATURAL DE 1O
//LOG2E: LOGARITMO DE E CON BASE 2
//LOG10E: LOGARITMO DE E CON BASE 10


//-------------------------------------------------------------------------------------------------

//SE CREA LA CLASE CALCULADORA PARA PODER MANEJAR LAS OPERACIONES
class calculadora{
    constructor(){
    }
//Se define cada una de las operaciones que se van a usar
    sumar(n1,n2){
        return parseInt(n1)+ parseInt(n2);
    }
    restar(n1,n2){
        return parseInt(n1) - parseInt(n2);
    }
    multi(n1,n2){
        return parseInt(n1)*parseInt(n2);
    }
    div(n1,n2){
        return parseInt(n1)/parseInt(n2);    
    }

    potenciar(n1, exp){
        return n1**exp; //de esta manera se realizan las potencias
    }

    raizCuadrada(n1){
        const result= Math.sqrt(n1);
        return result;
    }

    raizCubica(n1){
        const result= Math.cbrt(n1);
        return result;
    }
}


//Se instancia la clase calculadora creando el objeto
const calcu= new calculadora();

//Se le pregunta al usuario que operacion desea realizar

alert("¿Que operacion deseas realizar?");
oper= prompt("1:Suma, 2:Resta, 3:Multiplicación, 4:División, 5:Potenciación, 6:Raiz Cuadrada, 7:Raiz Cubica");

//Se realizan las operaciones if para cada caso de operaciones
if(oper=="1"){
    let num1= prompt("Ingrese el primer número: ");
    let num2= prompt("Ingrese el segundo número: ");
    resultado= calcu.sumar(num1,num2);
    alert(`El resultado de la suma es ${resultado}`);
}
else if(oper=="2"){
    let num1= prompt("Ingrese el primer número: ");
    let num2= prompt("Ingrese el segundo número: ");
    resultado= caclu.restar(num1, num2);
    alert(`El resultado de la resta es ${resultado}`);
}
else if(oper=="3"){
    let num1= prompt("Ingrese el primer número: ");
    let num2= prompt("Ingrese el segundo número: ");
    resultado= calcu.multi(num1, num2);
    alert(`El resultado de la multiplicación es ${resultado}`);
}
else if(oper=="4"){
    let num1= prompt("Ingrese el primer número: ");
    let num2= prompt("Ingrese el segundo número: ");
    resultado=calcu.div(num1,num2);
    alert(`El resultado de la división es ${resultado}`);
}
//SE AGREGAN LAS NUEVAS OPERACIONES
else if(oper=="5"){
    let num1= prompt("Ingrese el primer número: ");
    let num2= prompt("Ingrese el exponente: ");
    resultado=calcu.potenciar(num1,num2);
    alert(`El resultado de la potenciación es ${resultado}`);
}
else if(oper=="6"){
    let num1= prompt("Ingrese el número para su raiz: ");   
    resultado=calcu.raizCuadrada(num1);
    alert(`El resultado de la radicación es ${resultado}`);
}
else if(oper=="7"){
    let num1= prompt("Ingrese el número para su raiz cubica: ");
    resultado=calcu.raizCubica(num1);
    alert(`El resultado de la radicación es ${resultado}`);
}
else{
    alert("El número seleccionado no esta disponible");
}


//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------

/*SE SOLUCIONA PROBLEMA DE COFLA DE INSCRIBIR ALUMNOS A LOS DISTINTOS CURSOS*/

let materias={
    fisica:["Yo","Grande", "Alas" ,"Blanca"],
    programacion:["Yo","Grande", "Alas", "Cafesota", "Blanca"],
    calculo:["Yo","Grande", "Cafesota", "Blanca"],
    quimica:["Yo","Grande", "Alas", "Cafesota",]
}


//se crea la funcion para inscribir alumnos
const inscribir= (alumno, materia)=>{
    persona= materias[materia];
    persona.shift();
    alummos = persona;
    
    if(alumno.lenght >=20){
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas`);
    }
    else{
        alummos.push(alumno);
        if(materia=="fisica"){
            materias={
                fisica:alummos,
                programacion:materias['programacion'],
                logica:materias['logica'],
                quimica:materias['quimica']
            }
        }
        else if(materia=="programacion"){
            materias={
                fisica:materias['fisica'],
                programacion:alumnos,
                logica:materias['logica'],
                quimica:materias['quimica']
            }
        }
        else if(materia=="logica"){
            materias={
                fisica:materias['fisica'],
                programacion:materias['programacion'],
                logica:alumnos,
                quimica:materias['quimica']
            }
        }
        else if(materia=="quimica"){
            materias={
                fisica:materias['fisica'],
                programacion:materias['programacion'],
                logica:materias['logica'],
                quimica:alumnos
            }
        }
        document.write(`Felicidades ${alumno} te has inscribido al curso de ${materia}`);
    }
}

document.write(materias['fisica'] + "<br>");
inscribir("pardo", "fisica");
document.write(materias['fisica']+ "<br>" );


