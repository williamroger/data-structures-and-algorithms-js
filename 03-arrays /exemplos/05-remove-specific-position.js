
/** 
 * OBJETIVO: 
 * Remover 3 elementos do array `numbers` a partir da posição 3 utilizando o método nativo `Array.splice()` 
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.splice(3, 3);

console.log('=> splice ');
console.log('numbers ', numbers);
/** Resultado esperado:
 * [1, 2, 3, 7, 8, 9]
*/

/** 
 * OBJETIVO: 
 * Adicionar 3 novos elementos ao array `brands` a partir da posição 3 utilizando o método nativo `Array.splice()` 
*/

let brands = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Vans'];

brands.splice(3, 0, 'New Balance', 'Converse', 'Under Armour');

console.log('=> splice ');
console.log('brands ', brands);
/** Resultado esperado:
 * ['Nike', 'Adidas', 'Puma', 'New Balance', 'Converse', 'Under Armour', 'Reebok', 'Vans']
*/

/** 
 * OBJETIVO: 
 * Remover 2 elementos do array `names` a partir da posição 3 e adicionar 2 novos elementos 
 * a partir da posição 3 utilizando o método nativo `Array.splice()` 
*/

let names = ['Michael', 'Pam', 'Jim', 'Oscar', 'Creed', 'Dwhite', 'Angela'];

names.splice(3, 2, 'Kelly', 'Ryan');

console.log('=> splice ');
console.log('names ', names);
/** Resultado esperado:
 * ['Michael', 'Pam', 'Jim', 'Kelly', 'Ryan', 'Dwhite', 'Angela']
*/
