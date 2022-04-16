// Ejemplo 4: Uso de map para reccorrer los elemento de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/

const numbers=[1,2,3,4,5]

// const numbersSquare = numbers.map(function(num){return num*num})
const numbersSquare = numbers.map(num => num*num)
console.log('Ejemplo 4: Imprimiendo la lista de los elementos al cuadrado')
console.log(numbersSquare)