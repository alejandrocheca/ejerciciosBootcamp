
//Declaramos variables
var operandoa;
var operandob;
var operacion;
function init(){
  //variables
    //numeros
  var numUno = document.getElementById('btnNum1');
  var numDos = document.getElementById('btnNum2');
  var numTres = document.getElementById('btnNum3');
  var numCuatro = document.getElementById('btnNum4');
  var numCinco = document.getElementById('btnNum5');
  var numSeis = document.getElementById('btnNum6');
  var numSiete = document.getElementById('btnNum7');
  var numOcho = document.getElementById('btnNum8');
  var numNueve = document.getElementById('btnNum9');
  var numCero = document.getElementById('btnNum0');
  var punto = document.getElementById('btnPoint')
    //simbolos
  var result = document.getElementById('btnResult');
  var reset = document.getElementById('reset');
  var suma = document.getElementById('btnCalcPlus');
  var resta = document.getElementById('btnCalcMinus');
  var multiplicacion = document.getElementById('btnCalcMult');
  var division = document.getElementById('btnCalcDiv');
  var fraccion = document.getElementById('btnCalcFraction');
  var exponencial = document.getElementById('btnCalcbtnCalcSquaring');
  var raiz = document.getElementById('btnCalcSquare');

  
    //Eventos de click
  numUno.onclick = function(e){
      resultado.textContent = resultado.textContent  + "1";
  }
  numDos.onclick = function(e){
      resultado.textContent = resultado.textContent  + "2";
  }
  numTres.onclick = function(e){
      resultado.textContent = resultado.textContent  + "3";
  }
  numCuatro.onclick = function(e){
      resultado.textContent = resultado.textContent  + "4";
  }
  numCinco.onclick = function(e){
      resultado.textContent = resultado.textContent  + "5";
  }
  numSeis.onclick = function(e){
      resultado.textContent = resultado.textContent  + "6";
  }
  numSiete.onclick = function(e){
      resultado.textContent = resultado.textContent  + "7";
  }
  numOcho.onclick = function(e){
      resultado.textContent = resultado.textContent  + "8";
  }
  numNueve.onclick = function(e){
      resultado.textContent = resultado.textContent  + "9";
  }
  numCero.onclick = function(e){
      resultado.textContent = resultado.textContent  + "0";
  }
  punto.onclick = function(e){
      resultado.textContent = resultado.textContent  + ".";
  }
  
  reset.onclick = function(e){
      resetear();
  }
  suma.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
  }

   fraccion.onclick = function(e){
      operandoa = resultado.textContent;
      limpiar();
  }
    
    exponencial.onclick = function(e){
      operandoa = resultado.textContent;
      limpiar();
  }
  result.onclick = function(e){
      operandob = resultado.textContent;
      resolver();
  }
  function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
    function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;

    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;

    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
    case "1/x":
      res = ((1 * parseFloat(operandoa)) / 100);
      break;
    case "x²":
      res = parseFloat(operandoa) / parseFloat(operandoa);
      break;
    case "√x":
      res = Math.Sqrt(parseFloat(operandoa));
      break;
          
  }
  resetear();
  resultado.textContent = res;
}
}