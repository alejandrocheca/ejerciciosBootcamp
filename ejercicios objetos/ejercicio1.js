// Crear la función constructora del juego Adivina el Número.
function adivinaAleatorio(){
    var numeroAleatorio = Math.floor((Math.random()*(101-1))+1);
    document.getElementById('resultado').innerHTML = 'Número aleatorio = ' + numeroAleatorio;
    var contador = 1;
    var respuesta = prompt('Introduce un numero del 1 al 100');
    while(Number(respuesta)!==numeroAleatorio && contador<10){
        if(respuesta<numeroAleatorio){
            respuesta = prompt('El número es mayor que el introducido. Inténtalo otra vez');
        }else{
            respuesta = prompt('El número es menor que el introducido. Inténtalo otra vez');
        }
        contador++;
        document.getElementById('contador').innerHTML = 'Intentos = ' + contador;
    }
    if(contador==10){
        alert('Has superado el número máximo de intentos. Se acabó');
    }else{
        alert('Enhorabuena. Has acertado');
    }
    
}