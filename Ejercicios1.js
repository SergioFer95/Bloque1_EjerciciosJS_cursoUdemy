"use strict";

// // EJERCICIO 1
// // Enunciado: HACER UN CUADRO DE DIÁLOGO QUE NOS PIDA DOS NÚMEROS Y QUE NOS DIGA CUÁL ES EL MAYOR, EL MENOR Y SI SON IGUALES. 
// // EJERIRICIO 1 - PLUS: Una vez hecho esto, consigue que si la respuesta no es la deseada, se vuelva a realizar la pregunta.

// while (respuestaUsuario != 20 || respuestaUsuario != 30) {
//     var respuestaUsuario = parseInt(prompt("EJERCICIO 1 - ¿Qué número dirías que es mayor: el 20 o el 30?", "Escribe tu respuesta solo con números"));

//     if (respuestaUsuario === 20) {
//         alert("EJERCICIO 1 - Oohh, lo siento. Has elegido el número " + respuestaUsuario + " y no es correcto");
//     } else if (respuestaUsuario === 30) {
//         alert("EJERCICIO 1 - ¡Genial, has elegido el número " + respuestaUsuario + " y es correcto!");
//         break;

//     } else {
//         alert("EJERCICIO 1 - Por favor, responde correctamente");
//     }

// }


// // EJERCICIO 2 
// // Enunciado: utilizando un bucle, muestra la suma y la media de los números introducidos hasta introducir un número negativo y encontonces, mostrar el resultado.

// var suma = 0;
// var contador = 0;

// do {
//     var numero = parseInt(prompt("EJERCICIO 2 - Intoduce los números que quieras hasta que introduzcas un número negativo", 0));

//     if (numero == isNaN) {
//         numero = 0;

//     } else if (numero >= 0) {
//         suma += numero;
//         contador++;

//         console.log(suma);
//         console.log(contador);
//     }

// } while (numero >= 0);

// alert("EJERCICIO 2 - La suma de todos tus números es " + suma);
// alert("EJERCICIO 2 - Y la media de todos tus números es " + (suma / contador));



// // EJERCICIO 3
// // Enunciado: Hacer un programa que muestre todos los números entre dos números introducidos por el usuario.


// var numeroDeInicio = parseInt(prompt("EJERCICIO 3 - Introduce un número", 0));
// var numeroFin = parseInt(prompt("EJERCICIO 3 - Introduce un número mayor al anterior", 0));
// var i = 0;

// document.write("<h1>EJERCICIO 3 - Entre " + numeroDeInicio + " y " + numeroFin + " se encuentran estos números:</h1>");

// for(i = numeroDeInicio; i < numeroFin; i++){
//     document.write(i + "</br>");
// }


// // EJERCICIO 4
// // Enunciado: muestra todos los números impares que hay entre dos números introducidos por el usuario.

// var numberStart = parseInt(prompt("EJERCICIO 4 - Vuelve a introducir un número", 0));
// var numberEnd = parseInt(prompt("EJERCICIO 4 - Y ahora, vuelve a introduce un número mayor al anterior", 0));

// while(numberStart < numberEnd){
//     numberStart++;

//     if(numberStart%2 != 0){
//         console.log("EJERCICIO 4 - El número " + numberStart + " es impar.");
//         alert("EJERCICIO 4 - Abre la consola y comprueba el resultado");
//         break;
//     }
// }



// EJERCICIO 5
// Enunciado: programa que muestre todos los números divisores de un número introducido en un prompt.

// var numero = parseInt (prompt("Introduce un número y te diremos sus divisores", 1));

// for(var i = 1; i <= numero; i++){

//     if(numero%i == 0){
//         console.log("El divisor de " + numero + " es " + i);
//     }
// }


// EJERCICIO 6
// Enunciado: hacer un programa que nos diga si un número es par o impar. Tiene que tener ventaba prompt, tiene que comprobar si un número no es válido, que vuelva apedir el número.

var userNumber = parseInt (prompt("Introduce un número y te diremos si es par o impar", 0));

while(userNumber != isNaN){

    if(userNumber%2 == 0){
        console.log("El número que has elegido es par");
        break;

    }else if(userNumber%2 == 1){
        console.log("El número que has elegido es impar");
        break;

    }else {
        console.log("Por favor, introduce bien los carcateres que te solicitamos");
    }
    userNumber = parseInt (prompt("Introduce un número y te diremos si es par o impar", 0));
}