function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();


function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Seleccione una ciudad',
        'Validar ciudad no validó una ciudad sea seleccionada',
    );
}

probarValidarCiudad();

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar descipción regalo no validó que el nombre no sea vacío',    
    );

    console.assert(
        validarDescripcionRegalo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
        'Este campo debe tener menos de 100 caracteres',
        'Validar descripción regalo no validó que el campo tenga menos de 100 caracteres',
    );
 
}

probarValidarDescripcionRegalo();