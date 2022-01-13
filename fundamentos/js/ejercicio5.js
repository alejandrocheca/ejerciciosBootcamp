/*
Crear una función que valide un NIF
*/
function validarNIF(NIF) {
    var num
    var letr
    var letra
    var expresion_regular_NIF
    
    expresion_regular_NIF = /^\d{8}[a-zA-Z]$/;
    
    if(expresion_regular_NIF.test (NIF) == true){
        num = NIF.substr(0,NIF.length-1);
        letr = NIF.substr(NIF.length-1,1);
        num = num % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substring(num,num+1);
        if (letra!=letr.toUpperCase()) {
            alert('Error NIF, la letra del NIF no se corresponde');
        }else{
            alert('El NIF introducido es correcto');
        }
    }else{
        alert('Error NIF, formato no válido');
    }
}