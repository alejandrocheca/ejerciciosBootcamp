/*
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir,
 si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
"La ruta nos aporto otro paso natural".
*/
function Palindromos(cadena){
    const arrValue = cadena.split ('-'); 
    const reveArrVal = arrValue.reverse();  
    const revString = reveArrVal.join('');  
    
    if (cadena == revString){  
        alert('El texto es palíndromo'); 
        }else{  
        alert ('El texto es palíndromo'); 
        }  
    }  