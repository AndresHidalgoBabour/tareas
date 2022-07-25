const $botonRegistrar = document.querySelector('#mostrar-informacion-usuario');

$botonRegistrar.onclick = function(){
    const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);

    document.querySelector('#mostrar-informacion-usuario').innerText = `Nombre completo: ${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} Edad: ${edadUsuario} años`;
    document.querySelector('#bienvenida').textContent = `Bienvenido, ${primerNombreUsuario}!;`
    
    return false;
}