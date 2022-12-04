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

//SE COMBIERTEN LOS VALORES A NUMERO
plataCofla=parseInt(plataCofla);
plataRober=parseInt(plataRober);
plataPedro=parseInt(plataPedro);


//CONDICIONES DE COFLA
if(plataCofla>=0.6 && plataCofla <1){
    alert("Cofla puede comprar el helado de agua")
    alert("y sobran "+ (plataCofla-0.6))
}
else if(plataCofla>=1 &&plataCofla<1.6){
    alert("Cofla puede comprar el helado de crema")
    alert("y sobran "+ (plataCofla-1))
}
else if(plataCofla>1.6 && plataCofla<1.7){
    alert("Cofla puede comprar el helado marca heladix")
    alert("y sobran "+ (plataCofla-1.6))
}
else if(plataCofla>=1.7 && plataCofla<1.8){
    alert("Cofla puede comprar el helado marca heladovich")
    alert("y sobran "+ (plataCofla-1.7))
}
else if(plataCofla>=1.8 && plataCofla<2.9){
    alert("Cofla puede comprar el helado marca helardo")
    alert("y sobran "+ (plataCofla-1.8))
}
else if(plataCofla >= 2.9){
    alert("Cofla puede comprar el helado con confites o el pote de 1/4 kg de helado")
    alert("y sobran "+ (plataCofla-2.9))
}
else{
    alert("No alcanza para nada")
}

//CONDICIONES DE PEDRO
if(plataPedro>=0.6 && plataPedro <1){
    alert("Pedro puede comprar el helado de agua")
    alert("y sobran "+ (plataPedro-0.6))
}
else if(plataPedro>=1 && plataPedro<1.6){
    alert("Pedro puede comprar el helado de crema")
    alert("y sobran "+ (plataPedro-1))
}
else if(plataPedro>1.6 && plataPedro<1.7){
    alert("Pedro puede comprar el helado marca heladix")
    alert("y sobran "+ (plataPedro-1.6))
}
else if(plataPedro>=1.7 && plataPedro<1.8){
    alert("Pedro puede comprar el helado marca heladovich")
    alert("y sobran "+ (plataPedro-1.7))
}
else if(plataPedro>=1.8 && plataPedro<2.9){
    alert("Pedro puede comprar el helado marca helardo")
    alert("y sobran "+ (plataPedro-1.8))
}
else if(plataPedro >= 2.9){
    alert("Pedro puede comprar el helado con confites o el pote de 1/4 kg de helado")
    alert("y sobran "+ (plataPedro-2.9))
}
else{
    alert("No alcanza para nada")
}

//CONDICIONES DE ROBERTO
if(plataRober>=0.6 && plataRober <1){
    alert("Roberto puede comprar el helado de agua")
    alert("y sobran "+ (plataRober-0.6))
}
else if(plataRober>=1 && plataRober<1.6){
    alert("Roberto puede comprar el helado de crema")
    alert("y sobran "+ (plataRober-1))
}
else if(plataRober>1.6 && plataRober<1.7){
    alert("Roberto puede comprar el helado marca heladix")
    alert("y sobran "+ (plataRober-1.6))
}
else if(plataRober>=1.7 && plataRober<1.8){
    alert("Roberto puede comprar el helado marca heladovich")
    alert("y sobran "+ (plataRober-1.7))
}
else if(plataRober>=1.8 && plataRober<2.9){
    alert("Roberto puede comprar el helado marca helardo")
    alert("y sobran "+ (plataRober-1.8))
}
else if(plataRober >= 2.9){
    alert("Roberto puede comprar el helado con confites o el pote de 1/4 kg de helado")
    alert("y sobran "+ (plataRober-2.9))
}
else{
    alert("No alcanza para nada")
}

//SE PRESENTA A CONTINUACION UNA MANERA MAS CORTA DE RESOLVER EL PROBLEMA

"use strict";//SE DEFINE UNA CONSTANTE
const plataCompra = (n)=>{
    let pla = prompt(`Plata de ${n}`);
    if(pla >= 0.6 && pla <1) return (`${n}: helado de agua`)
    if(pla >= 1 && pla <1.6) return (`${n}: helado de crema`)
    if(pla >= 1.6 && pla <1.7) return (`${n}: helado de heladix`)
    if(pla >= 1.7 && pla <1.8) return (`${n}: helado de heladovich`)
    if(pla >= 1.8 && pla <2.9) return (`${n}: helado de helardo`)
    if(pla >= 0.6)return(`${n}: helado de confites o pote de 1/4 kg`)
    else return (`${n}: No alcanza para ningun helado`)
}

console.log(plataCompra("Cofla"));
console.log(plataCompra("Pedro"));
console.log(plataCompra("Roberto"));

//ESTA SERIA LA MANERA MAS FACIL DE SOLUCIONAR EL PROBLEMA DE COFLA