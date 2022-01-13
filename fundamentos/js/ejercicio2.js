/*
Adivina el Número, generar un número entre el 0 y el 100,
introducir un número e informar si es igual, mayor o menor.
Hay un máximo de 10 intentos para encontrar el número que sea igual.
*/
function ejercicio2(num){
    if(!num){
        throw new RangeError("El valor tiene que ser numerico.");
    }else{
        if(respuesta<numeroAleatorio){
            respuesta = prompt('El número es menor que el introducido. Inténtalo otra vez');
        }else if(respuesta>numeroAleatorio){
            respuesta = prompt('El número es mayor que el introducido. Inténtalo otra vez');
        }else{
            respuesta = prompt('Enhorabuena. Has acertado');

        }
    }

    return min + Math.floor(Math.random() * (max - min + 1))
}
console.log(ejercicio2(1,10));