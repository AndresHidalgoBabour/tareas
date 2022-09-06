function probarValidarSalarios(){
    console.assert(
        validarSalarios('') === "Este campo no debe estar vacío",
        "Validar salarios no validó que salarios no este vacío"
    );

    console.assert(
        validarSalarios('0') === "Este campo no debe ser 0",
        "Validar salarios no validó que slarios no sea 0"
    );

    console.assert(
        validarSalarios('a') === "Este campo no debe tener letras",
        "Validar salarios no validó que salarios no tenga letras"
    );
}

