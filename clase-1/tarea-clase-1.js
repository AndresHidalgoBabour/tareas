// Tarea 1:
// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

// Tarea 2:
// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora

// Tarea 1:

/* 
let anioActual;
let anioNacimiento;

anioActual = Number(prompt('Ingrese el año actual'));
anioNacimiento = Number(prompt('Ingrese el año de nacimiento'));

function edadUsuario(anioActual, anioNacimiento){
  return anioActual - anioNacimiento
};

console.log(
  'Su edad es ' + edadUsuario(anioActual, anioNacimiento) + ' años'
);
*/

// Tarea 2:

/*
function calculoSalarioAnual(salarioMensual) {
    const cantidadDeMesesDelAnio = 12;
    return salarioMensual * cantidadDeMesesDelAnio;
}

function calculoSalarioMensual(salarioAnual) {
    const cantidadDeMesesDelAnio = 12;
    return salarioAnual / cantidadDeMesesDelAnio;
}

function calculoSalarioSemanal(salarioAnual) {
    const cantidadDeSemanasDelAnio = 52;
    return salarioAnual / cantidadDeSemanasDelAnio;
}

function calculoSalarioDiario(salarioAnual) {
    const cantidadDeDiasDelAnio = 365;
    return salarioAnual / cantidadDeDiasDelAnio;
}

const salarioMensual = Number(prompt('Ingrese su salario mensual'));

console.log(
  'Su salario anual es ' + calculoSalarioAnual(salarioMensual) + ' pesos'
);

const salarioAnual = Number(prompt('Ingrese su salario anual'));

console.log(
    'Su salario mensual es ' + calculoSalarioMensual(salarioAnual) + ' pesos'
);

console.log(
    'Su salario semanal es ' + calculoSalarioSemanal(salarioAnual) + ' pesos'
);

console.log(
    'Su salario diario es ' + calculoSalarioDiario(salarioAnual) + ' pesos'
);
*/