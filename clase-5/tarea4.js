const listaDeNumeros = [];

function convertirArray() {
    for(let i = 0; i < (document.querySelectorAll('li').length); i++) {
        listaDeNumeros.push(Number(document.querySelectorAll('li')[i].innerText));
    }
}

convertirArray();

function calcularPromedio(){
    let sumaNumeros = 0;
    for(let i=0; i<listaDeNumeros.length; i++){
        sumaNumeros = sumaNumeros + listaDeNumeros[i];
    }

    return sumaNumeros / listaDeNumeros.length;
}

function calcularNumeroMasPequeno(){
    let numeroMasPequeno = listaDeNumeros[0];
    for(let i=0; i<listaDeNumeros.length; i++){
        if(listaDeNumeros[i] < numeroMasPequeno){
            numeroMasPequeno = listaDeNumeros[i];
        }
    }
    
    return numeroMasPequeno
}

function calcularNumeroMasGrande(){
    let numeroMasGrande = listaDeNumeros[0];
    for(let i=0; i<listaDeNumeros.length; i++){
        if(listaDeNumeros[i] > numeroMasGrande){
            numeroMasGrande = listaDeNumeros[i];
        }
    }

    return numeroMasGrande
}

function calacularNumeroMasFrecuente(){
    let numeroMasFrecuente = 0;
    for(let i=0; i<listaDeNumeros.length; i++){
        for(let j = i +1; j < listaDeNumeros.length; j++){
            if(listaDeNumeros[i]===listaDeNumeros[j]){
                numeroMasFrecuente = listaDeNumeros[i]
            }
        }
    }

    return numeroMasFrecuente
}

document.querySelector('#promedio').innerText = `El promedio es ${calcularPromedio()}`;
document.querySelector('#mas-chico').innerText = `El número más pequeño es ${calcularNumeroMasPequeno()}`;
document.querySelector('#mas-grande').innerText = `El número más grande es ${calcularNumeroMasGrande()}`;
document.querySelector('#mas-repetido').innerText = `El número más frecuente es ${calacularNumeroMasFrecuente()}`;