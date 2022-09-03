function probarCantidadIntegrantes(){
    console.assert(
        ValidarCantidadIntegrantes('') === "Este campo no debe estar vacío",
        "Validar cantidad integrantes no validó que cantidad de integrantes no esté vació"
    );

    console.assert(
        ValidarCantidadIntegrantes('a') === "Este campo no puede tener letras",
        "Validar cantidad integrantes no validó que cantidad de integrantes no tenga letras"
    );
}
probarCantidadIntegrantes();

function probarEdadesIntegrantes(){
    console.assert(
        validarEdadesIntegrantes('') === "Este campo no debe estar vacío",
        "Validar edades integrantes no validó que edades de integrantes no esté vació"
    );

    console.assert(
        validarEdadesIntegrantes('a') === "Este campo no puede tener letras",
        "Validar edades integrantes no validó que edades de integrantes no tenga letras"
    );

    console.assert(
        validarEdadesIntegrantes('.,.,.,.') === "Este campo no puede tener números decimales",
        "Validar edades integrantes no validó que edades de integrantes no sean números decimales"   
    );
}

probarEdadesIntegrantes();
