let numeroSecreto = 0;
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    //let numeroUsuario = document.querySelector("input");
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
   
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en  ${intentos} ${(intentos == 1) ? "vez":"veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
        

    } else {

        //Si no acierta
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El numero Secreto es Menor");
        } else {
            asignarTextoElemento("p", "El numero Secreto es Mayor");
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function limpiarCaja(){
    /* let caja = document.querySelector("#numeroDeUsuario");
    caja.value = ""; */
    document.querySelector("#valorUsuario").value = "";
}

function mensajeInicial(){
    asignarTextoElemento("h1","Juego del numero Secreto!");
    asignarTextoElemento("p","Escoge un número del 1 al 10");
    intentos = 1;
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
}
mensajeInicial();
function nuevoJuego(){
    //Reinicia el Texto
    //Reinicia el Parrafo
    //Reinicia los intentos
    //Limpia la caja
    //Genera nuevo numero
    mensajeInicial();
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}

//Calcular Factorial
function calcularFactorial(numero){
    if(numero == 0 || numero == 1){
        return 1;

    } else {
        return numero * calcularFactorial(numero -1);
    }

}

let resultado = calcularFactorial(5);
console.log(resultado)

//Calcular Area
function calcularArea(alto,ancho){
    let area = alto * ancho;
    let perimetro = (alto*2)+(ancho*2);
    console.log(`El area es ${area} y el permitro es : ${perimetro}`)
    return;
}

calcularArea(10,4);

function calcularCircunferencia(radio){
    let pi = 3.14;
    let areaCircular = pi*(radio*radio);
    let circunferencia = 2* pi * radio;
    console.log(`El area es ${areaCircular} y la circunferencia es ${circunferencia}`);
    return;
}

calcularCircunferencia(2);

function pantalla(numero){
    let intentos = 1 ;
    while(intentos <= 12){
        console.log(`${numero} * ${intentos} = ${numero*intentos}`)
        intentos++;
    }

}
pantalla(4);
