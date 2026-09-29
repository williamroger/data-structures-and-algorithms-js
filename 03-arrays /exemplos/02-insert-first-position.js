let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/** 
* OBJETIVO: 
* Adicionar um novo elemento ao ínicio de um array por meio de um método personalizado 
* definido no `Array.prototype`.
*/

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(0);

console.log('=> insertFirstPosition')
console.log('numbers ', numbers)
/** Resultado esperado:
 * [0, 1, 2, 3, 4, 5, 6, 7, 8]
*/


/** 
* OBJETIVO: 
* Adicionar um novo elemento ao ínicio de um array por meio do método nativo `Array.unshift()`.
*/

numbers.unshift(-1);

console.log('=> Array.unshift()')
console.log('numbers ', numbers)
/** Resultado esperado:
 * [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
*/ 