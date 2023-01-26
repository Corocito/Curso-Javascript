"use strict";

const zona = document.querySelector(".zonaArrastre");

zona.addEventListener("dragover",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#444");
})


zona.addEventListener("dragleave",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
})

zona.addEventListener("drop",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
    cargarArchivo(e.dataTransfer.files[0]);
})


const changeStyle= (obj,color)=>{
    obj.style.color=color;
    obj.style.border = `4px dashed ${color}`;

}

/*
//De esta manera se hace si se desea que se lea un texto
const cargarArchivo = ar =>{
    const reader = new FileReader();
    reader.readAsText(ar);
    reader.addEventListener("load",e=>{
        document.querySelector(".resultado").textContent = e.currentTarget.result;
    })
}
*/


/*
//Si se desea que se muestre una imagen se debe de hacer de la siguiente manera
const cargarArchivo = ar =>{
    const reader = new FileReader();
    reader.readAsDataURL(ar);
    reader.addEventListener("load",e=>{
        url= URL.createObjectURL(ar);
        let img =document.createElement("IMG");
        img.setAttribute("src",url);
        document.querySelector(".resultado").appendChild(img);
    })
}
*/

//Si se desea que se muestre un video se debe de hacer lo siguiente
const cargarArchivo = ar =>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    //Para poder crear una barra de progreso se hace de la siguiente manera
    reader.addEventListener("progress",e=>{
        let carga = (e.loaded/ar.size *100);
        
    })

    reader.addEventListener("load",e=>{
        let video = new Blob([new Uint8Array(e.currentTarget.result)],{type:'video/mp4'});
        let url = URL.createObjectURL(video);
        let img = document.createElement("VIDEO");
        img.setAttribute("src",url);
        document.querySelector(".resultado").appendChild(img);
        img.play();
    })
}





