document.querySelector('#siguiente-paso').onclick = function(event) {
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
  const cantidadIntegrantes = $cantidadIntegrantes.value;

  borrarIntegrantesAnteriores();
  crearIntegrantes(cantidadIntegrantes);

  event.preventDefault();
};

document.querySelector('#calcular').onclick = function(event) {
  const numeros = obtenerEdadesIntegrantes();
  mostrarEdad('mayor', obtenerMayorNumero(numeros));
  mostrarEdad('menor', obtenerMenorNumero(numeros));
  mostrarEdad('promedio', obtenerPromedio(numeros));
  mostrarResultados();

  event.preventDefault();
};

document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll('.integrante');
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function crearIntegrantes(cantidadIntegrantes) {

  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement('div');
  $div.className = 'integrante';

  const $label = document.createElement('label');
  $label.textContent = 'Edad del integrante #: ' + (indice + 1);
  const $input = document.createElement('input');
  $input.type = 'number';

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector('#integrantes');
  $integrantes.appendChild($div);
}

function resetear() {
  borrarIntegrantesAnteriores();
  ocultarBotonCalculo();
  ocultarResultados();
}

function ocultarBotonCalculo() {
  document.querySelector('#calcular').className = 'oculto';
}

function mostrarBotonCalculo() {
  document.querySelector('#calcular').className = '';
}

function ocultarResultados() {
  document.querySelector('#analisis').className = 'oculto';
}

function mostrarResultados() {
  document.querySelector('#analisis').className = '';
}

function mostrarEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll('.integrante input');
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}

function obtenerMayorNumero(numeros) {
  let mayorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayorNumero) {
      mayorNumero = numeros[i];
    }
  }

  return mayorNumero;
}

function obtenerMenorNumero(numeros) {
  let menorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
  }

  return menorNumero;
}

function obtenerPromedio(numeros) {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }

  return (acumulador / numeros.length).toFixed(2);
}

function ValidarCantidadIntegrantes(cantidadIntegrantes){
  if(cantidadIntegrantes === " "){
    return "Este campo no puede estar vacío";
  }

  if(!/^[0-9]+$/.test(cantidadIntegrantes)){
    return "Este campo debe tener solo números";
  }
  
  return "";
}

function validarEdadesIntegrantes(edades) {
  let errores = {};
  for (let i = 0; i < edades.length; i++) {
    errores[`$integrante${i + 1}`] = "";

    if (edades[i] == " ") {
      errores[`$integrante{i + 1}`] = `$integrante#{i + 1} no puede estar vacío`;
    }
    if (edades[i] < 0) {
      errores[`$integrante${i + 1}`] = `$integrante#${i + 1} no puede ser menor a cero`;
    }
  }
  return errores;
}

function validarFormularioCalculaEdades(event) {
  const edades = obtenerEdadesIntegrantes();
  const errorEdades = validarEdadesIntegrantes(edades);

  if (!manejarErroresEdades(errorEdades)) {
    const mayorNumero = obtenerMayorNumero(numeros);
    const menorNumero = obtenerMenorNumero(numeros);
    const promedioNumeros = obtenerPromedio(numeros);

    document.querySelector("#mayor-edad").value = `${mayorNumero}`;
    document.querySelector("#menor-edad").value = `${menorNumero}`;
    document.querySelector("#promedio-edad").value = `${promedioNumeros}`;

    mostrarResultados();
  }

  event.preventDefault();
}

function validarFormulario(event){
  event.preventDefault();

  const $form = document.querySelector('#calculador-edades');
  const cantidadIntegrantes = $form.cantidadIntegrantes.value;

  const errorCantidadIntegrantes = ValidarCantidadIntegrantes(cantidadIntegrantes);

  const errores = {
    cantidadIntegrantes: errorCantidadIntegrantes,
  };

  const esExito = manejarErrores(errores) === 0;

  if(esExito){
    crearIntegrantes(cantidadIntegrantes)
  }

  event.preventDefault();
}

function manejarErrores(errores){
  eliminarErrores()
  
  const keys = Object.keys(errores);
  const $errores = document.querySelector('#errores');
  let cantidadErrores = 0;

  keys.forEach(function(key){
      const error = errores[key];

      if(error){
          cantidadErrores++;
          $form[key].className = "error"

          const $error = document.createElement('li');
          $error.innerText = error;
          $errores.appendChild($error);
      }else{
          $form[key].className = ""
      }
 
  });

  return cantidadErrores;

  function eliminarErrores() {
    const errores = document.querySelector('#errores')

    while(errores.hasChildNodes()) {
        errores.removeChild(errores.firstChild)
    }
  }

}

const $form = document.querySelector("#calculador-edades");
$form.onsubmit = validarFormulario;