// Tarea 1: 
// Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

// Tarea 2: 
// Usando un bucle 'while', decile a tu computadora que registre los números de diez a uno.

// Tarea 3: 
// Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de 3, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1 (1 es el resto de la división)
// 16% 4 = 0 - en 16 tenemos 4 * 4 (el resto es 0, entónces es un múltiplo)
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3 , etc. (3 es el resto de la división)

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

// Tarea 1:

/*
for(let i = 3; i <= 22; i = i + 3){
    console.log(i);
}
*/

// Tarea 2:

/*
let numero = 10;

while (numero >= 1){
    numero = numero - 1;
    console.log(numero);
}
*/

// Tarea 3:

/*
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
*/

/*
Otra forma:

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        let texto = '';

        if(i % 3 === 0){
            texto = 'Fizz';
        }
        
        if(i % 5 ==== 0){
            texto += 'Buzz'; //También puede ser texto = texto + 'Buzz';
        }

        console.log(texto || i); //Si el número es múltiplo de 3 y/o 5 imprime el texto. Sino, el texto es
                                 //vacío, y como '' es más o menos falso, imprime i (el número).

    }
}
*/