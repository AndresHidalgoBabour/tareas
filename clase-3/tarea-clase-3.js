// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que el de ustedes, imprimir "Hola, Tocayo! 
// Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron, imprimir "Hola " y el nombre, 
// " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

// Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

// Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no. 

// Tarea 1:

/*
const MI_NOMBRE = 'andrés';
const NOMBRE_NOVIA = 'tatiana';
let nombreUsuario = prompt('Esriba su nombre').toLowerCase();

if(MI_NOMBRE === nombreUsuario){
    console.log(`Hola, Tocayo!, Yo también me llamo ${MI_NOMBRE}`);
} else if(NOMBRE_NOVIA === nombreUsuario){
    console.log(`Hola ${nombreUsuario}, te llamas igual que mi novia`);
} else {
    console.log(`Hola ${nombreUsuario}!`);
}
*/

// Tarea 2:

/*
const MI_EDAD = 40;
const edadUsuario = Number(prompt('Escriba su edad'));

if (edadUsuario > MI_EDAD ){
    console.log(`Tu edad es ${edadUsuario} años, es mayor a la mía, yo tengo ${MI_EDAD } años`);
} else if (edadUsuario < MI_EDAD ){
    console.log(`Tu edad es ${edadUsuario} años, es menor a la mía, yo tengo ${MI_EDAD } años`);
} else if (edadUsuario === MI_EDAD{
    console.log(`Tenemos la misma edad, ${MI_EDAD } años`);
} else {
    console.log('No te entendí la respuesta');
}
*/


// Tarea 3:

/*
const EDAD_MINIMA_PARA_ENTRAR = 18;
const RESPUESTA_SI = "si";
const RESPUESTA_NO = "no";

const usuarioTieneDocumento = (prompt("¿Tenes documento?") || '').toLowerCase();

if (usuarioTieneDocumento === RESPUESTA_SI) {
    const edadUsuario = Number(prompt("¿Cuántos años tenés?"));
    
    if (edadUsuario >= EDAD_MINIMA_PARA_ENTRAR) {
        console.log('Bienvenido al bar.');
    } else if (edadUsuario < EDAD_MINIMA_PARA_ENTRAR) {
        console.log('No podés entrar al bar.');
    } else {
        console.log('No entendí la respuesta.');
    }
} else if (usuarioTieneDocumento === RESPUESTA_NO) {
    console.log("Se necesita documento para entrar al bar.")
} else {
    console.log('No entendí tu respuesta.');
}
*/