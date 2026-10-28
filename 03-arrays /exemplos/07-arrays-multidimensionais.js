/**
* OBJETIVO:
* Criar uma Matriz 3x3
* Inicialize um array multidimensional com 3 dimensões representando os eixos x, y e z
* cada dimensão deve armazenar um array com até 3 índices, no final deve existir
* uma matriz com estrutura semelhante ao exemplo abaixo.
* [[[]], [[]], [[]]]
*/
const matrix3x3x3 = [];

for (let x = 0; x < 3; x++) {
  matrix3x3x3[x] = [];
  for (let y = 0; y < 3; y++) {
    matrix3x3x3[x][y] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[x][y][z] = x + y + z;
    }
  }
}

console.log('matrix3x3x3 ', matrix3x3x3);

/**
* OBJETIVO:
* Crie uma função que receba como argumento uma matrix multidimensional de 3 dimensões e
* exiba no console seus valores.
*/

function printMatrix(matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      for (let z = 0; z < matrix[x][y].length; z++) {
        console.log(matrix[x][y][z])
      }
    }
  }
}

printMatrix(matrix3x3x3);
