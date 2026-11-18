/*
Esta função verifica se um número é múltiplo de 2, retorna true se o resto da divisão
do número enviado como argumento for igual a 0 ou retorna false caso conrtário.
*/
const isEven = (x) => x % 2 === 0;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/*
- Every
O método every() testa se todos os elementos do array passam pelo
teste implementado pela função fornecida. Este método retorna um valor booleano.
*/

console.log('every(): ', numbers.every(isEven)); // false


/*
- Some
O método some() testa se ao menos um dos elementos no array passa no
teste implementado pela função atribuída e retorna um valor true ou false.
*/

console.log('some(): ', numbers.some(isEven)); // true


/*
- ForEach
O método forEach() percorre e executa uma dada função
em cada elemento de um array.
*/

console.log('forEach(): ', numbers.forEach(isEven));

/*
- Map
O método map() invoca a função callback passada por argumento para
cada elemento do Array e devolve um novo Array como resultado.
*/
const newMap = numbers.map(isEven);
console.log('map(): ', newMap);


/*
- Filter
O método filter() cria um novo array com todos os elementos que
passaram no teste implementado pela função fornecida.
*/

const evenNumbers = numbers.filter(isEven);
console.log('filter(): ', evenNumbers);

/*
- Reduce
O método executa uma função de callback chamada "reducer" para cada elemento do array
e após o último elemento do array retorna um único valor.
A função reducer recebe 2 parâmetros obrigatórios "accumulator" e "currentValue" e 2
parâmetros opcionais "currentIndex" e "array".
Além da função "reducer" o método reduce recebe também outro parâmetro opcional "initialValue"
Se fornecido, um valor inicial poderá ser usado em seu lugar. Caso contrário, o elemento
do array no índice 0 será usado como valor inicial e a iteração começará a partir do
próximo elemento (índice 1 em vez do índice 0).
*/
const notes = [8, 5, 9, 10];
const totalNotesOne = notes.reduce((accumulator, currentValue) => accumulator += currentValue);
const totalNotesTwo = notes.reduce((accumulator, currentValue) => accumulator += currentValue, 5);
console.log('reduce() totalNotesOne: ', totalNotesOne); // => 32
console.log('reduce() totalNotesTwo: ', totalNotesTwo); // => 37
