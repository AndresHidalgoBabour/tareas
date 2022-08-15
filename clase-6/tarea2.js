const $botonAgregar = document.querySelector('#boton-agregar');


$botonAgregar.onclick = function(){
    ocultarNodo('#resultados');
    agregarIntegrante();
    const $integrantes = document.querySelectorAll('#integrante');
    if ($integrantes.length === 1){
        mostrarNodo('#boton-calcular');
    }
}

const $botonQuitar = document.querySelector('#boton-quitar');

$botonQuitar.onclick = function(){
    ocultarNodo('#resultados');
    const $integrantes = document.querySelectorAll('#integrante');
    let cantidadIntegrantes = $integrantes.length;

    if ($integrantes.length > 0){
        quitartIntegrante();
        cantidadIntegrantes -= 1;
    }

    if (cantidadIntegrantes < 1 ){
        ocultarNodo('#boton-calcular');
    }

}

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(){
    $salariosIntegrantes = document.querySelectorAll('#integrante input');
    salarios = [];


    for (let i=0; i<$salariosIntegrantes.length; i++){
        if($salariosIntegrantes[i].value !== '' && $salariosIntegrantes[i].value > 0){
            salarios.push(Number($salariosIntegrantes[i].value));
        }
    }

    if(salarios.length > 0){
        mostrarResultados('mayor-salario-anual', devolverMayorSalarioAnual(salarios));
        mostrarResultados('menor-salario-anual', devolverMenorSalarioAnual(salarios));
        mostrarResultados('promedio-salario-anual', devolverPromedioSalarioAnual(salarios));
        mostrarResultados('promedio-salario-mensual', devolverPromedioSalarioMensual(salarios));

        mostrarNodo('#resultados');
    }
} 

function agregarIntegrante(){
    const $div = document.createElement('div');
    const cantidadIntegrantes = document.querySelectorAll('#integrante').length;
    const $label = document.createElement('label');
    const textoLabel = document.createTextNode(`Salario anual del integrante ${cantidadIntegrantes + 1}`);
    const $input = document.createElement('input');
    const $integrantes = document.querySelector('#integrantes');
    $div.id = 'integrante';
    $input.type = 'number';
    $label.appendChild(textoLabel);
    $div.appendChild($label);
    $div.appendChild($input);
    $integrantes.appendChild($div);  
}

function quitartIntegrante(){
    const $integrantes = document.querySelectorAll('#integrante');
    if($integrantes.length > 0){
        $integrantes[$integrantes.length - 1].remove();
    }
}

function mostrarNodo(nodo){
    document.querySelector(`${nodo}`).className = '';
}

function ocultarNodo(nodo){
    document.querySelector(`${nodo}`).className = 'oculto';
}


function devolverMayorSalarioAnual(salarios){
    return Math.max(...salarios);
}

function devolverMenorSalarioAnual(salarios){
    return Math.min(...salarios);
}

function devolverPromedioSalarioAnual(salarios){
    let suma = 0;

    for(let i=0; i<salarios.length;i++){
        suma += salarios[i];
    }

    return suma / salarios.length;
}

function devolverPromedioSalarioMensual(salarios){
    let suma = 0;

    for(let i=0; i<salarios.length; i++){
        suma += salarios[i] / 12;
    }

    return suma / salarios.length;
}

function mostrarResultados(identificador, resultado){
    document.querySelector(`#${identificador}`).textContent = resultado;
} 
