const botonCalcular = document.querySelector('#calcular');

botonCalcular.onclick = function(){
    const horasVideo1 = Number(document.querySelector('#horas-video-1').value);
    const minutosVideo1 = Number(document.querySelector('#minutos-video-1').value);
    const segundosVideo1 = Number(document.querySelector('#segundos-video-1').value);

    const horasVideo2 = Number(document.querySelector('#horas-video-2').value);
    const minutosVideo2 = Number(document.querySelector('#minutos-video-2').value);
    const segundosVideo2 = Number(document.querySelector('#segundos-video-2').value);

    const horasVideo3 = Number(document.querySelector('#horas-video-3').value);
    const minutosVideo3 = Number(document.querySelector('#minutos-video-3').value);
    const segundosVideo3 = Number(document.querySelector('#segundos-video-3').value);

    const horasVideo4 = Number(document.querySelector('#horas-video-4').value);
    const minutosVideo4 = Number(document.querySelector('#minutos-video-4').value);
    const segundosVideo4 = Number(document.querySelector('#segundos-video-4').value);

    const horasVideo5 = Number(document.querySelector('#horas-video-5').value);
    const minutosVideo5 = Number(document.querySelector('#minutos-video-5').value);
    const segundosVideo5 = Number(document.querySelector('#segundos-video-5').value);

    let totalHoras = horasVideo1 + horasVideo2 + horasVideo3 + horasVideo4 + horasVideo5;
    let totalMinutos = minutosVideo1 + minutosVideo2 + minutosVideo3 + minutosVideo4 + minutosVideo5;
    let totalSegundos = segundosVideo1 + segundosVideo2 + segundosVideo3 + segundosVideo4 + segundosVideo5;
    
    while (totalSegundos >= 60){
        totalSegundos -= 60;
        totalMinutos += 1;       
    };
    
    while (totalMinutos >= 60){
        totalMinutos -= 60;
        totalHoras += 1;        
    };

    document.querySelector('#total-horas').value = totalHoras;
    document.querySelector('#total-minutos').value = totalMinutos;
    document.querySelector('#total-segundos').value = totalMinutos;

    return false;
}