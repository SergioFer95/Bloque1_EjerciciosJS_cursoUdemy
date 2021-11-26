"use strict";

// EJERCICIO 1
// Enunciado: HACER UN CUADRO DE DIÁLOGO QUE NOS PIDA DOS NÚMEROS Y QUE NOS DIGA CUÁL ES EL MAYOR, EL MENOR Y SI SON IGUALES. 
// EJERIRICIO 1 - PLUS: Una vez hecho esto, consigue que si la respuesta no es la deseada, se vuelva a realizar la pregunta.

while(respuestaUsuario != 20 || respuestaUsuario != 30){
    var respuestaUsuario = parseInt (prompt("¿Qué número dirías que es mayor: el 20 o el 30?","Escribe tu respuesta solo con números"));

    if(respuestaUsuario === 20){
        alert("Oohh, lo siento. Has elegido el número " + respuestaUsuario + " y no es correcto");
    }else if(respuestaUsuario === 30){
        alert("¡Genial, has elegido el número " + respuestaUsuario + " y es correcto!");
        break;
        
    }else{
        alert("Por favor, responde correctamente");
    }
    
}


// EJERCICIO 2
// Enunciado: utilizando un bucle, muestra la suma y la media de los números introducidos hasta introducir un número negativo y encontonces, mostrar el resultado.

var suma = 0;
var contador = 0;

do{
    var numero = parseInt (prompt("Intoduce los números que quieras hasta que introduzcas un número negativo", 0));

    if(numero == isNaN){
        numero = 0;

    }else if(numero >= 0){
        suma += numero;
        contador++;

        console.log(suma);
        console.log(contador);
    }

}while(numero >= 0);

alert("La suma de todos tus números es " + suma);
alert("Y la media de todos tus números es " + (suma / contador));






// let suma = 0;
// let contador = 0;

// do{
//     let numerosDelUsuario = parseInt (prompt("Intoduce los números que quieras hasta que introduzcas un número negativo", 0));

//     if(isNaN(numerosDelUsuario)){
//         numerosDelUsuario = 0;

//     }else if(numerosDelUsuario >= 0){
//         suma = suma + numerosDelUsuario;
//         // suma += numerosDelUsuario;

//         contador++;

//         console.log(suma);
//         console.log(contador);

//     }


// }while(numerosDelUsuario >= 0)

// alert("La suma de todos tus números es " + suma);
// alert("Y la media de todos tus números es " + (suma / contador));