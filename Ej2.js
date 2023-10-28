/*2. Completar la función getLargerInt la cual recibe dos números enteros. 
La función debe retornar el número mayor. */

function getLergerInt(number1, number2){ 
    if (number1 > number2){
        return number1;
    }
    else if (number1 < number2){
        return number2;
    }
    else if(number1 == number2){
        console.log("Los números que ingresó son iguales");
    }
} 

var number1 = 1000;
var number2 = 100;
var Res = getLergerInt(number1, number2);
console.log("El número mayor que ingresó es: " + Res);
