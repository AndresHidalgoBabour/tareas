const botonCalcular = document.querySelector('#calcular');

botonCalcular.onclick = function(){
    const horas = document.querySelectorAll(".hora")    
    let totalHoras = 0
    for(let i=0; i<horas.length; i++){
        totalHoras += Number(horas[i].value)
    }

    const minutos = document.querySelectorAll(".minuto")    
    let totalMinutos = 0
    for(let i=0; i<minutos.length; i++){
        totalMinutos += Number(minutos[i].value)
    }

    const segundos = document.querySelectorAll(".segundo")    
    let totalSegundos = 0
    for(let i=0; i<segundos.length; i++){
        totalSegundos += Number(segundos[i].value)
    }
    
    const minutosCompletos = Math.floor(totalSegundos / 60)
    const segundosRestantes = totalSegundos % 60
    totalMinutos += minutosCompletos

    const horasCompletas = Math.floor(totalMinutos / 60)
    const minutosRestantes = totalMinutos % 60
    totalHoras += horasCompletas



    document.querySelector('#total-horas').value = totalHoras;
    document.querySelector('#total-minutos').value = minutosRestantes;
    document.querySelector('#total-segundos').value = segundosRestantes;

    return false;
}
