const nombre = prompt('Ingrese su nombre:', ); // prompt > Cada vez que necesitamos ingresar un dato con esta función, aparece una ventana donde cargamos el valor.
 const edad = prompt('Ingrese su edad:', );
 const distancia= prompt ("Ingrese la distancia de su destino (en metros):",);
console.log(`Hola ${nombre}, asi que tienes ${edad} y su destino esta a ${distancia}`)//s una herramienta esencial para imprimir mensajes en la consola del navegador o del entorno de ejecución.  
 document.write(`Hola ${nombre}, asi que tienes  ${edad} años y su destino esta a ${distancia} metros.`) //es una función de JavaScript que es capaz de escribir contenido en el documento HTML directamente desde un script.
if (distancia<=1000){
document.write(" Puede llegar a su destino yendo a pie. ")
} else if (distancia>1000 && distancia <=10000) {
    document.write(" Puede llegar a su destino yendo en bicicleta. ")
} else if (distancia>10000 && distancia <=30000) {
    document.write(" Puede llegar a su destino yendo en colectivo. ")
} else if (distancia>30000&& distancia <=100000) {
    document.write(" Puede llegar a su destino yendo en auto. ")
} else if (distancia>100000) {
    document.write(" Puede llegar a su destino yendo en avion. ")
}