let lista = document.querySelectorAll('li');
let numeros = [];

for(let i = 0; i < lista.length; i++) {
        numeros.push(Number(lista[i].textContent));
}

function calcularPromedio(numeros){
    let suma = 0
    for(i=0; i<numeros.length; i++){
        suma += numeros[i];
    }
    return (suma/numeros.length).toFixed(2);
}

function calcularMasChico(numeros){
    let menor = numeros[0];
    for(i=0; i<numeros.length; i++){
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }
    return menor;
}

function calcularMasGRande(numeros){
    let mayor = 0;
    for(i=0; i<numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    return mayor;
}

function calcularMasRepetido(numeros){
    let masRepetido = 0;
    for(let i=0; i<numeros.length; i++){
        for(let j=i+1; j<numeros.length; j++){
            if(numeros[i]===numeros[j]){
                masRepetido = numeros[i]
            }
        }
    }
    return masRepetido;
}

document.querySelector('#calcular').onclick = function(){
document.querySelector('#promedio').textContent = `El promedio es ${calcularPromedio(numeros)};`
document.querySelector('#mas-chico').textContent = `El número más chico es ${calcularMasChico(numeros)};`
document.querySelector('#mas-grande').textContent = `El número más grande es ${calcularMasGRande(numeros)};`
document.querySelector('#mas-repetido').textContent = `El número más repetido es ${calcularMasRepetido(numeros)};`

return false;
}