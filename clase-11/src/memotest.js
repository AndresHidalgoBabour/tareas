let intentos = 0;
let $primerCuadro = null;
const $mesa = document.querySelector('#mesa');
const $cuadros = $mesa.querySelectorAll('.cuadro');
const $final = document.querySelector('#final');
const tiempoManejarCuadros = 300;

function prepararJuego(){
    const colores = ['rojo', 'verde', 'naranja', 'amarillo', 'violeta', 'negro', 'blanco', 'azul'];
    const coloresRepetidos = colores.concat(colores);
    prepararCuadros($cuadros, coloresRepetidos);
    manejarJuego($mesa);
    actualizarNumeroIntentos('-');
}

function manejarJuego($mesa){
    $mesa.onclick = function(evento){
        const $elemento = evento.target;
        if ($elemento.classList.contains('cuadro')){
          manejarCuadro($elemento);  
        }
    };   
}

function prepararCuadros($cuadros, colores) {
    const coloresAleatorios = colores.sort(function() {
      return 0.5 - Math.random();
    });
    
    coloresAleatorios.forEach(function(color, i) {
        $cuadros[i].classList.add(color);
    });
}

function manejarCuadro($cuadroClickeado){
    mostrarCuadro($cuadroClickeado);

    if($primerCuadro === null){
        $primerCuadro = $cuadroClickeado;
    } else {
        if($primerCuadro === $cuadroClickeado){
            return;
        }

        intentos++;
        actualizarNumeroIntentos(intentos);

        if(igualarCuadros($primerCuadro, $cuadroClickeado)){
            eliminarCuadro($primerCuadro);
            eliminarCuadro($cuadroClickeado);
        } else {
            ocultarCuadro($primerCuadro);
            ocultarCuadro($cuadroClickeado);
        }

        $primerCuadro = null;
    }
}

function actualizarNumeroIntentos(intentos) {
    document.querySelector('#intentos').textContent = intentos;
}

function igualarCuadros($cuadro1, $cuadro2) {
    return $cuadro1.className === $cuadro2.className;
}

function mostrarCuadro($cuadro) {
    $cuadro.style.opacity = '1';
}

function ocultarCuadro($cuadro) {
    setTimeout(function() {
        $cuadro.style.opacity = '0';
    }, tiempoManejarCuadros);
}

function eliminarCuadro($cuadro) {
    setTimeout(function() {
      $cuadro.parentElement.classList.add('completo');
      $cuadro.remove();
      manejarFinal();
    }, tiempoManejarCuadros);
}

function manejarFinal() {
    if (document.querySelectorAll('.cuadro').length === 0) {
      $mesa.style.display = 'none';
      $final.querySelector('strong').textContent = intentos.toString();
      $final.style.display = 'block';
    }
}

prepararJuego()
