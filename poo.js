/* 
---------------------------------------------
SE EMPIEZA CON LA EXPLICACIÓN DE LA POO
---------------------------------------------
*/

//SE DEFINE LA CLASE GALLINOTA, QUE TENDRA VARIOS ATRIBUTOS Y PARAMETROS
class gallinota{
    //LO QUE SE DEFINE DENTRO DEL CONSTRUCTOR ES UN PARAMETRO
    constructor( edad, peso, nombre){
        //SE DEBE DE IGUALAR CON EL THIS PARA CREAR LA PROPIEDAD
        
        this.edad=edad;
        this.peso=peso;
        this.nombre= nombre;
        this.info=`Es la gallina ${nombre}, tiene una edad de ${edad} años,
        y su peso es de ${peso}`;
    }

    //LAS FUNCIONES SE DEBEN DE CREAR ASI DENTRO DE LAS CLASES
    saludar(){
        document.write(this.info + "<br>");
    }
}

//LOS OBJETOS SE DEFINEN CON CONST
const grande = new gallinota(2, "1.7 Kg", "Grande");
const alas = new gallinota(2, "1.5 Kg", "Alas")
const perfecta = new gallinota(1, "1.4 Kg", "Perfecta")

grande.saludar();
alas.saludar();
perfecta.saludar();
//document.write(grande.info);
//document.write(alas.info);


//-----------------------------------------------------------------------------------
//DE ESTA MANERA SE HACE UNA HERENCIA EN LAS CLASES
class ponedora extends gallinota{
    constructor(nombre, peso, edad, raza){
        super(edad, peso, nombre);
        this.raza=raza;
    }
    ponerHuevo(){
        //alert(`La gallina ${this.nombre} puso un huevo`)
    }
}
//EN LA HERENCIA SE HEREDAN TAMBIEN LOS METODOS DE LA CLASE PADRE
const cafesota= new ponedora("Cafesota", "1.5 Kg", 2, "ponedora");
cafesota.saludar();
cafesota.ponerHuevo();
//SE TERMINA LA HERENCIA DE CLASES
//-----------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
//SE EMPIEZAN LOS METODOS ESTATICOS
class cubana extends gallinota{
    constructor(nombre, peso, edad, raza){
        super(edad, peso , nombre);
        this.raza=raza;
    }
    //DE ESTA MANERA SE DEFINEN LOS METODOS ESTATICOS, ESTOS METODOS   
    static empollar(){
        //alert("Empolla un huevo");
    }
}
//NO NECESITAN CREAR UN OBJETO PARA SER INSTANCIADOS, PUEDE LLAMARSE
//USANDO SOLO EL NOMBRE DE LA CLASE
cubana.empollar();
//SE TERMINAN LOS METODOS ESTATICOS
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
//SE EMPIEZAN LOS METODOS GET Y SET
//LOS METODOS GET SON PARA OBTENER LOS VALORES Y LOS SET PARA MODIFICARLO O DEFINIRLO

class copetona extends gallinota{
    constructor(nombre, peso, edad,raza){
        super(edad, peso, nombre);
        this.raza=raza;
    }
    //DE ESTA MANERA SE DEFINEN LOS SET
    set setEdad(newEdad){
        this.edad=newEdad;
    }
    //DE ESTA MANERA SE DEFINEN LOS GET
    get getEdad(){
        return `Tiene una edad de ${this.edad} años`
    }
}
const blanca= new copetona("Blanca", "1.5 Kg", 2, "Copetona");

blanca.setEdad = 4;
blanca.saludar();
document.write(blanca.getEdad);
//SE TERMINAN LOS METODOS GET Y SET
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
//SE EMPIEZA LA SOLUCION A LOS PROBLEMAS DE COFLA

//SE DEFINE UNA CLASE CELULAR COMO LA CLASE PADRE
class celular{
    //SE DEFINEN LAS CARACTERISTICAS BASICAS DEL CELULAR
    constructor( marca,color, peso, resPantalla, resCamara, memRam){
        this.marca= marca;
        this.color=color;
        this.peso= peso;
        this.resPantalla= resPantalla;
        this.resCamara=resCamara;
        this.memRam= memRam;
        this.encendido= false;
    }

    mostrarCaracte(){
        alert(`El celular es de marca ${this.marca}, es de color ${this.color}, tiene un peso de ${this.peso}, 
        la resolución de la pantalla es de ${this.resPantalla}, la resolución de la camara es de ${this.resCamara},
        y tiene una memoria RAM de ${this.memRam}`);
    }
    //TAMBIEN SE PUEDEN MOSTRAR LAS CARACTERISTICAS DEL CELULAR USANDO UN RETURN
    mobileCaract(){
        return `Marca: <br> ${this.marca}</br></br>
        Color: <br>${this.color}</br> </br> 
        Peso: <br>${this.peso}</br></br>
        Resolución de Pantalla: <br> ${this.resPantalla}</br></br>
        Resolución de Camara: <br> ${this.resCamara}</br></br>
        Memoria RAM: <br> ${this.memRam}</br></br>`;
    }

    //Función para encender
    prender(){
        if(this.encendido==false){
            alert("Celular encendido");
            this.encendido=true;
        }
        else{
            alert("El celular ya esta encendido")
            this.encendido=true;
        }
    }

    //Función para apagar
    apagar(){
        if(this.encendido==true){
            alert("Apagando el celular");
            this.encendido=false;
        }
        else{
            alert("El celular ya esta apagado")
            this.encendido=false;
        }
    }

    //Función para tomar foto
    tomarFoto(){
        alert(`Foto tomada en resolución de: ${this.resPantalla}`);
    }

    //Función para grabar un video
    grabarVideo(){
        alert(`Video grabado en resolución de: ${this.resCamara}`)
    }
}


//SE DEFINEN LOS 3 CELULARES DISPONIBLES
const celular1= new celular("Motorola","Negro", "150g", "1280 x 720 pixeles", "5 mp", "1 Gb Ram");
const celular2 = new celular("Samsung", "Azul", "120g", "1920 x 1080 pixeles", "12 mp", "2 Gb Ram");
const celular3 = new celular("Apple", "Blanco", "120g", "1920 x 1080 pixeles", "12 mp", "3 Gb Ram");

//SE LLAMAN LAS CARACTERISTICAS DE LOS CELULARES
celular1.mostrarCaracte();
celular1.prender();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.apagar();

document.write(`${celular1.mobileCaract()}<br>
${celular2.mobileCaract()}<br>
${celular3.mobileCaract()}<br>`)


//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

class celularAltaGama extends celular{
    constructor(marca,color, peso, resPantalla, resCamara, memRam, grabCamaLenta, recnoFacial, camExtra){
        super(marca,color, peso, resPantalla, resCamara, memRam);
        this.grabCamaLenta= grabCamaLenta;
        this.recnoFacial=recnoFacial;
        this.camExtra=camExtra;
    }

    mobileGamaAlCaract(){
        return `Marca: <br> ${this.marca}</br></br>
        Color: <br>${this.color}</br> </br> 
        Peso: <br>${this.peso}</br></br>
        Resolución de Pantalla: <br> ${this.resPantalla}</br></br>
        Resolución de Camara: <br> ${this.resCamara}</br></br>
        Memoria RAM: <br> ${this.memRam}</br></br>
        Cámara Super Lenta: <br> ${this.grabCamaLenta}</br></br>
        Reconocimiento facial: <br> ${this.recnoFacial}</br></br>
        Cámara Extra: <br> ${this.camExtra}</br></br>`;
    }


    usarCamSLenta(){
        alert(`Video grabado con la cámara super lenta a resolución de ${this.resCamara}`);
    }

    desbloqueFacial(){
        alert(`Teléfono desbloqueado con el reconocimiento facial`);
    }

    usarCamaraExtra(){
        alert(`Foto tomada con la camara extra a una resolución de ${this.camExtra}`);
    }
}

const celular4= new celularAltaGama("Apple", "Blanca", "120g", "4k", "20mp", "6Gb Ram", "30mp", "usuario", "20mp");
const celular5= new celularAltaGama("Samsung", "Negro", "110g", "4k", "30mp", "8gb", "20mp", "usuario", "30mp" );

document.write(`${celular4.mobileGamaAlCaract()}<br> <br>
${celular5.mobileGamaAlCaract()}<br>`)

















