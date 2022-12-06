/* 
---------------------------------------------
SE EMPIEZA CON LA EXPLICACIÓN DE LA POO
---------------------------------------------
*/

//SE DEFINE LA CLASE GALLINOTA, QUE TENDRA VARIOS ATRIBUTOS Y PARAMETROS
class gallinota{
    //LO QUE SE DEFINE DENTRO DEL CONSTRUCTOR ES UN PARAMETRO
    constructor(raza, edad, peso, nombre){
        //SE DEBE DE IGUALAR CON EL THIS PARA CREAR LA PROPIEDAD
        this.raza=raza;
        this.edad=edad;
        this.peso=peso;
        this.nombre= nombre;
        this.info=`Es la gallina ${nombre}, es de raza ${raza}, tiene una edad de ${edad} años,
        y su peso es de ${peso}`;
    }

    //LAS FUNCIONES SE DEBEN DE CREAR ASI DENTRO DE LAS CLASES
    saludar(){
        document.write(this.info + "<br>");
    }
}

let grande = new gallinota("Ponedora", 2, "1.7 Kg", "Grande");
let alas = new gallinota("Ponedora", 2, "1.5 Kg", "Alas")
let perfecta = new gallinota("Ponedora", 1, "1.4 Kg", "Perfecta")

grande.saludar();
alas.saludar();
perfecta.saludar();
//document.write(grande.info);
//document.write(alas.info);
  

