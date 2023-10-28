/*4.Completar la función calculateAverage la cual recibe numbers, un arreglo de n cantidad de enteros. 
La función debe retornar el promedio de todos los enteros que tenga numbers.*/


 var numbers = [4, 8, 6, 2, 18, 24, 35, 70, 1];
 function calculateAverage(numbers) { 
    var sum = 0;

    if (numbers === 0){
        return 0;
    }
    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    var promres = sum / numbers.length;
    return promres;
  } 

  console.log("Promedio: " + calculateAverage(numbers) );