
(function (){
    console.log("Hola desde la funcion que se autoinvoca");
})();


(function (a,b){
    console.log("La suma es: ",a+b);
})(3,3);

let edad = 10;

// =========== Ventaja de la funcion self invoking =====================

(function(){
    let edad=12;
})

var modulo = (function() {
    var variablePrivada = "Buajaja soy una variable privada";

    function funcionPrivada(){
        console.log("Hola desde la funcion privada");
    }
    return {
        mostarMensaje: function() {
            console.log(variablePrivada);
        }
    }
})();
modulo.mostarMensaje();
//console.log(variablePrivada);