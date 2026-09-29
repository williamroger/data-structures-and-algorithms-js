let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/** 
* OBJETIVO: 
* Adicionar um novo elemento ao final de um array por meio de um método personalizado 
* definido no `Array.prototype`.
*/

Array.prototype.insertLastPosition = function (value) {
  this[this.length] = value;
}

numbers.insertLastPosition(9);

console.log('=> insertLastPosition')
console.log('numbers ', numbers);
/** Resultado esperado:
 * [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
*/


/** 
* OBJETIVO: 
* Adicionar um novo elemento ao final de um array por meio do método nativo `Array.push()`.
*/

numbers.push(10);

console.log('=> Array.push()')
console.log('numbers ', numbers);
/** Resultado esperado:
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/