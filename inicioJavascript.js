/*Como se usa esto*/

 //let n=2, n1=3, n2=4


/*LOS ALERT FUNCIONAN PARA MOSTRAR UN MENSAJE EN LA PANTALLA DEL NAVEGADOR*/
 //alert(n)
 //alert(n1)
// alert(n2)


/*EL PROMPT FUNCIONA PARA MOSTRAR UN MENSAJE EN PANTALLA PERO ADEMAS MOSTRAR UNA CASILLA
DONDE SE INGRESAR UN VALOR*/

//let nombre = prompt("Introduzca su nombre")
//alert(nombre)

/**EL DOCUMENT.WRITE FUNCIONA PARA PODER ESCRIBIR EN LA PAGINA, LO QUE SE ESCRIBA APARECERÁ 
 EN LA PAGINA WEB
 */

 /*
 ASIGNACIÓN  X=Y

 ASIGNACIÓN DE ADICIÓN  X+=Y

 ASIGNACIÓN DE SUSTRACIÓN X-=Y

 ASIGNACIÓN DE MULTIPLICACIÓN X*=Y
 
 ASIGNACIÓN DE DIVISIÓN X/=Y

 ASIGNACIÓN DE RESTO  X%=Y

 ASIGNACIÓN DE EXPONENCIACIÓN  X**=Y

 LA CONCATENACIÓN ES UNIR DOS PARTES DE CODIGO EN UNO SOLO, UN EJEMPLO DE ESTO ES EL JUNTAR
 DOS STRING DE SALUDOS EN UNO SOLO PARA FORMAR UN SALUDO COMPLETO
 
 */

 numero1= 5;
 numero2=4;
//AGREGANDO "" A UNA CADENA, TODO SE VUELVE UN STRING, SE FUERZA EL STRING
 frase = "" + numero1 + numero2;
//TAMBIEN SE PUEDE USAR UN CONCAT, PERO SE DEBE DE TENER UNA VARIABLE COMO STRING,
//DE LO CONTRARIO SALTA UNA ERROR
 //document.write(frase);

 //OTRA MANERA DE CONCATENAR ES USANDO EL SIMBOLO ${}, PERO SE DEBE DE ENCERRAR CON ``
 //PARA QUE FUNCIONE

 nombre = "Samuel";
 frase2= `soy ${nombre} y estoy caminando`;
 //document.write(frase2);

/*EL CAMELCASE ES UN MANERA DE TRABAJAR CON LA DEFINICION DE VARIABLES, SIENDO LA PRIMERA
EN MINUSCULA Y LUEGO EL RESTO DE LAS PALABRAS DEBE DE EMPEZAR EN MAYUSCULA*/

gallinaPonedoraGrande="Hermosa";

//LOS BLOQUES SON LAS {} DE LOS CONDICIONALES, LO QUE SE ENCUANTRE DENTRO ES UN BLOQUE
/*
if(numero1>numero2){
    document.write("Hola buenas tardes")
}
*/
//PARA CONTINUAR CON EL BUQLE IF, SE PUEDE HACER CON ELSE IF, Y PARA FINALIZAR EL ELSE

//HISTORIAS DE COFLA 1

let plataRober= prompt("Introduzca la cantidad de plata de Roberto");
let plataPedro= prompt("Introduzca la cantidad de plata de Pedro");
let plataCofla= prompt("Introduzca la cantidad de plata de Cofla");

if(plataCofla>=0.6 && plataCofla <1){
    alert("Cofla puede comprar el helado de agua")
}
else if(plataCofla>=1 &&plataCofla<1.6){
    alert("Cofla puede comprar el helado de crema")
}
else if(plataCofla>1.6 && plataCofla<1.7){
    alert("Cofla puede comprar el helado marca heladix")
}
else if(plataCofla>=1.7 && plataCofla<1.8){
    alert("Cofla puede comprar el helado maarca heladovich")
}
else if(plataCofla>=1.8 && plataCofla<2.9){
    alert("Cofla puede comprar el helado marca helardo")
}
else if(plataCofla >= 2.9){
    alert("Cofla puede comprar el helado con confites o el pote de 1/4 kg de helado")
}





