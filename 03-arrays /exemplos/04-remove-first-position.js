let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

/** 
* OBJETIVO: 
* Remover o primeiro elemento de um array por meio de um método personalizado 
* definido no `Array.prototype`.
*/

// Função auxiliar para remover qualquer posição do array com valor `undefined`.
Array.prototype.reIndex = function (array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i])
    }
  }

  return newArray;
}

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();

console.log('=> removeFirstPosition')
console.log('numbers ', numbers);
/** Resultado esperado:
 * [1, 2, 3, 4, 5, 6, 7, 8]
*/


/** 
* OBJETIVO: 
* Remover o primeiro elemento de um array por meio do método nativo `Array.shift()`.
*/

numbers = numbers.shift();

console.log('=> Array.shift()')
console.log('numbers ', numbers);
/** Resultado esperado:
 * [1, 2, 3, 4, 5, 6, 7]
*/