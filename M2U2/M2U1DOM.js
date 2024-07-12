
document.addEventListener('DOMContentLoaded', function() { // esta funcion es para que la funcion no se ejecute antes que la carga del navegador
let Pulsador = document.querySelector(".C1");//creo una variable y para su valor llamo al div class C1
    Pulsador.addEventListener('click',() =>  { //es una función de flecha que se ejecutará cuando ocurra el evento click en el elemento Pulsador.
 let fondo=document.querySelector("body")
 this.body.style.backgroundColor="aqua";
 console.log('Pulsador')});
let Pulsador2 = document.querySelector(".C2");//creo una variable y para su valor llamo al div class C2
    Pulsador2.addEventListener('click',() =>  { //es una función de flecha que se ejecutará cuando ocurra el evento click en el elemento Pulsador.
console.log('Pulsador2')
let fondo2=document.querySelector("body")
this.body.style.backgroundColor="red";
})

let Pulsador3 = document.querySelector(".C3");//creo una variable y para su valor llamo al div class C3
    Pulsador3.addEventListener('click',() =>  { //es una función de flecha que se ejecutará cuando ocurra el evento click en el elemento Pulsador.
console.log('Pulsador3') 
let fondo3=document.querySelector("body")
this.body.style.backgroundColor="green";
})
});
