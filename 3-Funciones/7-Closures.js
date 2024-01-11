//? ============================ CLOSURES ============================
/* 
?    Los closures son funciones que tienen acceso a las variables de su ambito externo (como su funcion ambito)
*/
//? ===================================================================


function funcionPadre(){
    var variableExterna = "Soy una variable externa :)";

    function funcionHija(){
        console.log(variableExterna);
    }
    return funcionHija;
}

var miFuncion = funcionPadre(); // Funcion de tipo expresion/anonima
miFuncion();