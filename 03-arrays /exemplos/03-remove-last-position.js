let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/** 
* OBJETIVO: 
* Remover o último elemento de um array por meio de um método personalizado 
* definido no `Array.prototype`.
*/

Array.prototype.removeLastPostion = function () {
  const newArray = []
  for (let i = 0; i < this.length - 1; i++) {
    newArray[i] = this[i];
  }
  return newArray;
}

numbers = numbers.removeLastPostion();

console.log('=> removeLastPostion ');
console.log('numbers ', numbers);
/** Resultado esperado:
 * [1, 2, 3, 4, 5, 6, 7, 8]
*/



/** 
* OBJETIVO: 
* Remover o último elemento de um array por meio do método nativo `Array.pop()`.
*/

numbers.pop();

console.log('=> Array.pop()');
console.log('numbers', numbers);
/** Resultado esperado:
 * [1, 2, 3, 4, 5, 6, 7]
*/