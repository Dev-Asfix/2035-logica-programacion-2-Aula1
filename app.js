let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

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
    let listaNumero = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaDeNumerosSorteados)

    //Si no esta en la lista
    if(listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {

        if(listaDeNumerosSorteados.includes(listaNumero)){
            return generarNumeroSecreto();

        }else{
            listaDeNumerosSorteados.push(listaNumero);
            return listaNumero;
        }
    }
}

function limpiarCaja(){
    /* let caja = document.querySelector("#numeroDeUsuario");
    caja.value = ""; */
    document.querySelector("#valorUsuario").value = "";
}

function mensajeInicial(){
    asignarTextoElemento("h1","Juego del numero Secreto!");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}.`);
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