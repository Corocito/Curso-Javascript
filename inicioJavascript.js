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
//ESTA SERIA LA MANERA MAS FACIL DE SOLUCIONAR EL PROBLEMA DE COFLA
"use strict";
//SE DEFINE UNA CONSTANTE
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

//SE INICIA CON LA EXPLICACION DE LOS ARRAY
//LOS ARRAY SE DEFINEN CON LOS []
//ES MEJOR DEFINIR LAS VARIABLES CON let
let gallinas = ["Grande", "Alas", "Cafesota"]

//PARA MOSTRAR UNA VARIABLE ESPECIFICA SE DEBE DE BUSCAR POR EL INDICE
document.write(gallinas[0]);

//UN EJEMPLO DE ESTE BUCLE ES UNO QUE SUMA LOS NUMEROS HASTA ALCANZAR UNA CONDICION Y LOS IMPRIME
let num=0;
while(num <10){
    num++;
    document.write(num);
    if(num==10){
        break;
    }
}


//LA VARIANTE DEL WHILE ES EL DO WHILE QUE EJECUTA Y LUEGO PREGUNTA
do{
    num++;
    document.write(num+"<br>")
}
while(num <=6 )

//EL CICLO FOR FUNCIONA PARA CUANDO SE ASBE LA CONTIDAD DE VECES QUE SE DEBE DE REPETIR UNA ACCION
//ES UN EJEMPLO DE FOR
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
//SE ENCARGA DE MOSTRAR LA VARIABLE SUMANDOLA HASTA QUE ALCANCE EL VALOR DE LA CONDICIÓN
for(let i=0; i<6; i++){
    if(i==12){
        continue; //EL VALOR CONTINUE SIRVE PARA SALTAR LOS VALORES, EN ESTE CASO NO SE MOSTRARIA EL 12
    }
    
    document.write(i)
}
 
let numerosLista=[1,2,3,4,5,6,7,8,9,0];

for(n in numerosLista){ //EL FOR IN MUSTRA LOS INDICES DE LAS LISTAS
    document.write(n[numerosLista]);
}

for(n of numerosLista){//EL FOR OF MUESTRA LOS VALORES DE LAS LISTAS
    document.write(n);
}


//MUESTRA LOS VALORES DE AMBOS ARRAYS
let array1=["Grande", "Alas", "Cafe"];
let array2=["Blanca", "Mona", array1];
for(let array in array2){
    if(array ==2){
        for (let array of array1){
            document.write(array);
        }
    }
    else{
        document.write(array2[array]);
    }
}

//MUESTRA SI HAY VALORES IGUALES EN AMBOS ARRAY
function juntarArrays(arr1, arr2){

 arr1= [2,3,4,1,6,8,5];
 arr2= [0,4,7,9];
var c= []
for ( let i = 0; i<arr1.length; i++){
    for(let i =0; i< arr2.length; i++){
        if(arr2[i] === arr1[i]){
            c.push(arr2[i]);
        }
    }
}
return c;
}





