/**
* EXERCÍCIO 01:
* Remover 3 elementos do array `fruits` a partir da posição 3 utilizando o método nativo `Array.splice()`
*/
let fruits = ['orange', 'grape', 'banana', 'apple', 'strawberry', 'lemon', 'watermelon']
fruits.splice(3, 3);
console.log('Remove with Array.splice =>')
console.log('fruits', fruits);
/** Resultado esperado:
 * ['orange', 'grape', 'banana', 'watermelon']
*/


/**
 * EXERCÍCIO 02:
 * Adicionar 3 novos elementos ao array `languages` a partir da posição 1 utilizando o método nativo `Array.splice()`
*/
let languages = ['english', 'spanish', 'german'];
languages.splice(1, 0, 'japanese', 'portuguese', 'french');
console.log('Insert with Array.splice =>');
console.log('languages ', languages);
/** Resultado esperado:
 * ['english', 'japanese', 'portuguese', 'french', 'spanish', 'german']
*/

/**
 * EXERCÍCIO 03:
 * Remover 2 elementos do array `cars` a partir da posição 2 e adicionar 2 novos elementos
 * a partir da posição 2 utilizando o método nativo `Array.splice()`
 */
let cars = ['bmw', 'ferrari', 'hunday', 'fiat', 'audi'];
cars.splice(2, 2, 'porshe', 'honda');
console.log('Remove and Insert with Array.splice =>')
console.log('cars ', cars);
/** Resultado esperado:
 * ['bmw', 'ferrari', 'porshe', 'honda', 'audi']
*/
