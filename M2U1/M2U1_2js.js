document.addEventListener('DOMContentLoaded', function() { // esta funcion es para que la funcion no se ejecute antes que la carga del navegador
const btonAumentar = document.querySelector('.Aumento')
const btonDisminuir= document.querySelector('.Disminuir')
const valor = document.getElementById('Valor')
let contador=0;
btonAumentar.addEventListener('click',()=> {
    contador++ //contador va a aumentar con cada click
valor.textContent=contador  //muestra en pantalla el contador
})
btonDisminuir.addEventListener('click',()=> {
contador --
valor.textContent=contador 
})
});