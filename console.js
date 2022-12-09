//-------------------------------------------------------------------------------------------------


//assert(): Aparece un mensaje de error en la consola si la afirmacion es falsa.
//si la afirmacion es verdadera, no aparecerá nada (NO ESTANDAR)

console.assert();

//clear(): Limpia la consola

//error(): Muestra un mensaje de error en la consola web

console.error("Malisimo");

//info(): Emite un mensaje informativo a la consola web, 

//log(): Funciona igual que el info, solo que este se una mas


console.log("Lasa gallinas son hermosas");

//table(): Esta funcion toma un argumento obligatorio: data, que debe ser un array
//o un objeto y un parametro adicional:  nos muestra una tabla en la consola


//warn(): Imprime un mensaje de advertencia en la consola web

//dir(): Despliega una lista interactiva de las propiedades del objeto javascript especificado

//-------------------Funciones de conteo


//count(): Registra el numero de veces que se llama el count()

//Esta funcion se usa principalmente para saber las veces que se repite un codigo o una funcion

//countReset(): Se resetea el conteo del count



//------------------------------Funciones de agrupación



//group(): Crea un nuevo grupo en linea en el registro de la consola web


//groupEnd(): Finaliza el grupo creado


//groupCollapse(): Tambien crea un grupo, solon que la visualizacion del grupo es cerrada


//------------------------------------Funciones de temporizacion


//time(): Inicia un temporizador, se puede usar principalmente para timar registros del usuario

//timeEnd(): Finaliza el contador

//timeLog(): Muestra la cantidad de tiempo desde el inicio del contador

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

//SE INICIA CON LA EXPLICACIÓN DEL DOM (Document Object Model)



//Nodo: En el DOM es el nodo raiz, a partir del cual se derivan el resto de nodos

//Element: Nodos definidos por etiquedas html

//Text: El texto dentro de un nodo element se considera un nuevo nodo hijo del tipo text 

//Attribute: Los atributos de las etiquetas definen nodos ( En javascript no se ven como nodos, sino como informacion asociada al nodo de tipo element)

//Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos html generan nodos




/*Document: Metodos de Selección de Elementos*/

//getElementById(): Selecciona un elemento por ID

//getElementsByTagName: Selecciona todos los elementos que coincidan con el nombre
//de la etiqueta especificada




//querySelector(): Devuelve el primer elemento que coincida con el grupo especificado de selectores

document.querySelector(".parrafo")

//Se seleccionan todos los elementos que coincidan con .parrafo


//querySelectorAll(): Devuelve todos los elementos que coincidan
//con el grupo especificado de selectores



/*Document:  Metodos para definir, obtener y eliminar valores de atributos*/

//setAttribute(): Modifica el valor de un atributo

//getAttribute(): Obtiene el valor de un atributo

//removeAttribute(): Remueve el valor de un atributo




/*------------------------------------Atributos Globales*/

//class: Lista de clases de elementos separadas por espacios

//contenteditable: Indica si el elemento puede ser modificable por el usuario (bool)

//dir: Indica la direccionalidad del texto

//hidden: Indica si el elemento aun no es, o ya no es relevante

//id: Define un identificador unico

//style: Contiene declaraciones de estilo CSS para ser aplicadas al elemento

//tabindex: indica si el elemento puede obtener un focus o input

//title: Contiene un texto con informacion relacionada al elemento al que pertenece


/*--------- ATRIBUTOS DE INPUTS */

//Se puede trabajar con ellos directamente con el objeto

//classname
//value
//type
//accept: Trabaja con el file, para poder decidir que tipos de archivos acepta recibir
//form
//minlenght: La minima cantidad de caracteres con las que trabaja un input
//placeholder: Deja un texto definido en los inputs
//required: Define un campo como requerido para enviar los formularios




