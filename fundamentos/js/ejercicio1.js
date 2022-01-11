/*
   Crear una funcion que devuelva un numero aleatorio (Math.random())
   dentro del rango dado
   */
  function ranInt(min, max){
      if(min>max) throw new RangeError("El valor minimo debe ser igua o menor que el valor maximo.");
      return min + Math.floor(Math.random() * (max - min + 1))
  }
  console.log(ranInt(1,10));