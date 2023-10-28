/*3.Completar la función fibonacciSequence la cuál recibe limit, un entero positivo 
que representa la cantidad de elementos de la serie que queremos.  */
function fibonacciSequence(limit) {
    if (limit <= 0) {
      return [];
    } else if (limit === 1) {
      return [1];
    } else if (limit === 2) {
      return [1, 1];
    }
  
    var arreglo = [1, 1];
    for (let i = 2; i < limit; i++) {
      var nextValue = arreglo[i - 1] + arreglo[i - 2];
      arreglo.push(nextValue);
    }
  
    return arreglo;
  }
  
  var limit = 20; 
  var Res = fibonacciSequence(limit);
  console.log(Res); 