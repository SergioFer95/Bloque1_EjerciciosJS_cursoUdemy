"use strict";

// EJERCICIO 1
// Enunciado: HACER UN CUADRO DE DIÁLOGO QUE NOS PIDA DOS NÚMEROS Y QUE NOS DIGA CUÁL ES EL MAYOR, EL MENOR Y SI SON IGUALES

var respuestaUsuario = parseInt (prompt("¿Qué número dirías que es mayor: el 20 o el 30?","Escribe tu respuesta solo con números"));

if(respuestaUsuario === 20){
    alert("Oohh, lo siento. Has elegido el número " + respuestaUsuario + " y no es correcto");
}else if(respuestaUsuario === 30){
    alert("¡Genial, has elegido el número " + respuestaUsuario + " y es correcto!");
}else{
    alert("Por favor, responde correctamente");
}