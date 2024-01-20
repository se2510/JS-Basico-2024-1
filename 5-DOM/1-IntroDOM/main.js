/*  DOM
Sirve para que desde JS modifique el HTML
*/

// ============================= Selección de Elementos =============================

// ----------- ID -------------
// Con ID modifica el primero que encuentra.
// - Los IDs deben ser únicos en el documento HTML
let elementoporID = document.getElementById('p1');
elementoporID.innerHTML = "Hola desde el parrafito 1 modificado con IDs";

// ----------- Clase -------------
let elementoporClase = document.getElementsByClassName('pfs');
//console.log(elementoporClase);
elementoporClase[1].innerText = "Hola desde el parrafo dos a traves de la clase";

// ----------- Etiquetas -------------
let elementoporEtiqueta = document.getElementsByTagName('p');
//console.log(elementoporEtiqueta);
elementoporEtiqueta[2].innerText = "Hola desde el parrafo tres modificado a traves de etiquetas";

let textoDiv = document.getElementById('caja');
textoDiv.innerText = "Cambiando el texto del div";

// --------------- Ejercicio otro div -----------------
// Cambiar el texto del div 2 a traves de su etiqueta.
// Cambiar texto a ----> Este es un div a traves de JS
let miDiv = document.getElementsByTagName('div');
miDiv[1].innerText = "=========== Este es un div a traves de JS ===============";

let boton = document.getElementById('miBoton');

boton.addEventListener("click",function(){
    // addEventListener() : Sirve para registrar funciones que se ejecuntan cuando ocurre un evento en especifico en un elemento.
    if(miDiv[1].style.color == "blue"){
        miDiv[1].style.color = 'red';
        miDiv[1].style.fontSize = "30px";
        console.log("Has apretado el boton y se hizo color rojo la letra");
    }else{
        miDiv[1].style.color = 'blue';
        miDiv[1].style.fontSize = "40px";
    }
})

// ------------------ LINK --------------------

function funcionLink(){
    // QuerySelector
    // ID -> #nombreID
    // Clase -> .nombreClase
    // Etiqueta -> nombreEtiqueta
    document.querySelector('.miLink').style.backgroundColor = "cyan";
    document.querySelector('.miLink').style.border = "solid 2px red"; 
}

// ------------------ Evento Keydown --------------------

let textoKeydown = document.querySelector('#texto-teclas');
textoKeydown.addEventListener("keydown", funcionKeydown);

function funcionKeydown(tecla){
    //console.log( tecla.code ); // KeyA , KeyB , KeyC
    if( tecla.code == "KeyA" ||  tecla.code == "KeyE" ||  tecla.code == "KeyI" ||  tecla.code == "KeyO" ||  tecla.code == "KeyU"){
        document.getElementById('h1-keydown').innerText = tecla.code.charAt(3);
    }else{
        document.getElementById('h1-keydown').innerText = "Evento Keydown";
    }

}

// ------------------ Evento submit --------------------
let loginForm = document.getElementById('loginForm');

loginForm.addEventListener("submit", function(){
    let nombre = document.getElementById("nombre").value;
    //console.log(nombre);
    let contrasena = document.getElementById("password").value;
    //console.log(contrasena);
    alert("Formulario enviado, muchas gracias, "+nombre);
    alert("No le diremos a nadie que tu contraseña es: "+ contrasena);
})