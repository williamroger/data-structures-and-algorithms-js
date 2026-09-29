/** 
* EXERCÍCIO 01: 
* Adicionar um novo elemento ao final de um array por meio de um método personalizado 
* definido no `Array.prototype`.
*/

let fruits = ['grape', 'mango', 'orange'];

Array.prototype.addToLastPosition = function (value) {
  this[this.length] = value;
}

fruits.addToLastPosition('strawberry');

console.log('=> addToLastPosition');
console.log('fruits ', fruits);
/** Resultado esperado:
 * ['grape', 'mango', 'orange', 'strawberry']
*/

/** 
* EXERCÍCIO  02: 
* Adicionar um novo elemento ao final de um array por meio do método nativo `Array.push()`.
*/

let fruits_02 = ['grape', 'mango', 'orange'];

fruits_02.push('strawberry');

console.log('=> Array.push');
console.log('fruits_02 ', fruits_02);
/** Resultado esperado:
 * ['grape', 'mango', 'orange', 'strawberry']
*/

/** 
* EXERCÍCIO 03: 
* Adicionar um novo elemento ao ínicio de um array por meio de um método personalizado 
* definido no `Array.prototype`.
*/

let movies = ['get out', 'us'];

Array.prototype.addToFirstPosition = function (value) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
}

movies.addToFirstPosition('nope');

console.log('movies ', movies);
/** Resultado esperado:
 * ['nope', 'get out', 'us']
*/


/** 
* EXERCÍCIO 04: 
* Adicionar um novo elemento ao ínicio de um array por meio do método nativo `Array.unshift()`.
*/

let movies_02 = ['get out', 'us'];

movies_02.unshift('nope');

console.log('movies_02 ', movies_02);
/** Resultado esperado:
 * ['nope', 'get out', 'us']
*/


/** 
* EXERCÍCIO 05: 
* Remover o último elemento de um array por meio de um método personalizado 
* definido no `Array.prototype`.
*/

let brands = ['apple', 'microsoft', 'meta'];

Array.prototype.removeLastPosition = function () {
  const newArray = [];
  for (let i = 0; i < this.length - 1; i++) {
    newArray[i] = this[i];
  }
  return newArray;
}

console.log('brands before ', brands);

brands = brands.removeLastPosition();

console.log('brands  after ', brands);
/** Resultado esperado:
 * ['apple', 'microsoft']
*/


/** 
* EXERCÍCIO 06: 
* Remover o último elemento de um array por meio do método nativo `Array.pop()`.
*/

let brands_02 = ['apple', 'microsoft', 'meta'];

console.log('brands_02 before pop ', brands_02)

brands_02.pop();

console.log('brands_02 after pop ', brands_02)

/** 
* EXERCÍCIO 07: 
* Remover o primeiro elemento de um array por meio de um método personalizado 
* definido no `Array.prototype`.
*/

let languages = ['english', 'spanish', 'japanese'];

Array.prototype.removeFirstPosition = function () {
  const newArray = []
  for (let i = 1; i < this.length; i++) {
    newArray[i - 1] = this[i];
  }
  return newArray;
}

console.log('languages before ', languages);

languages = languages.removeFirstPosition();

console.log('languages after ', languages);
/** Resultado esperado:
 * ['spanish', 'japanese']
*/

/** 
* EXERCÍCIO 08: 
* Remover o primeiro elemento de um array por meio do método nativo `Array.shift()`.
*/

let languages_02 = ['english', 'spanish', 'japanese'];

console.log('languages_02 before shift ', languages_02);

languages_02.shift();

console.log('languages_02 after shift ', languages_02);
/** Resultado esperado:
 * ['spanish', 'japanese']
*/