"use strict";
//--------------SE EMPIEZA CON LA EXPLICACIÓN DE LA GEOLOCALIZACIÓN

/*
--getCurrentPosition(): Obtiene todos los datos de la posición actual

-parametros (position, error, options)
-propiedades de option (enableHighAccuracy, timeout, maximumAge)

--watchPosition():Vigila los cambios en la posición y los muestra
*/

//El geolocalitation es un objeto que se usa para poder saber la posicion actual
//de el usuario
const geo= navigator.geolocation;

const posicion = (pos)=>{
    console.log(pos);
}

geo.getCurrentPosition(posicion);
